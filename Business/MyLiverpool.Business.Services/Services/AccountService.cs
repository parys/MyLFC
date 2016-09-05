using System;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.DtoNext;
using MyLiverpool.Business.DTO;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Contracts;
using MyLiverpool.Common.Utilities;

namespace MyLiverpool.Business.Services.Services
{
    public class AccountService : IAccountService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
      //  private readonly IIdentityMessageService _messageService;

        public AccountService(IUnitOfWork unitOfWork, IMapper mapper)//, IIdentityMessageService messageService)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
         //   _messageService = messageService;
        }

        public async Task<bool> ChangePasswordAsync(int userId, ChangePasswordDto dto)
        {
            var user = await _unitOfWork.UserManager.FindByIdAsync(userId);
            var result = await _unitOfWork.UserManager.ChangePasswordAsync(user, dto.OldPassword, dto.NewPassword);
            return result.Succeeded;
        }

        public async Task<bool> ConfirmEmailAsync(int userId, string code)
        {
            code = code.Base64ForUrlDecode();
            var user = await _unitOfWork.UserManager.FindByIdAsync(userId); //todo WHY
            var result = await _unitOfWork.UserManager.ConfirmEmailAsync(user, code);
            user.EmailConfirmed = true;
            _unitOfWork.UserRepository.Update(user);
            await _unitOfWork.SaveAsync();
            return result.Succeeded;
        }

        public async Task<bool> ForgotPasswordAsync(string email)
        {
            var user = await _unitOfWork.UserManager.FindByEmailAsync(email);
            if (user == null || !user.EmailConfirmed)
            {
                return true;
            }
            await SendForgotPasswordEmailAsync(user.Email, user.Id);
            return true;
        }

        public async Task<bool> IsUserNameUniqueAsync(string userName)
        {
            var foundUser = await _unitOfWork.UserManager.FindByNameAsync(userName);
            return foundUser == null;
        }

        public async Task<bool> IsEmailUniqueAsync(string email)
        {
            var foundUser = await _unitOfWork.UserManager.FindByEmailAsync(email);
            return foundUser == null;
        }

        public async Task<DateTime> GetLockOutEndDateAsync(int userId)
        {
            var user = await _unitOfWork.UserManager.FindByIdAsync(userId);
            var dateTime = await _unitOfWork.UserManager.GetLockoutEndDateAsync(user);
            return dateTime.DateTime;
        }

        public async Task<IdentityResult> RegisterUserAsync(RegisterUserDto model)
        {
            var user = _mapper.Map<User>(model);
            user.RegistrationDate = DateTime.Now;
            user.LastModified = DateTime.Now;
            user.LockoutEnabled = true;
            user.RoleGroupId = (int)RoleGroupsEnum.Simple;

            IdentityResult result = await _unitOfWork.UserManager.CreateAsync(user, model.Password);
            if (result.Succeeded)
            {
                await _unitOfWork.UserManager.AddToRoleAsync(user, RolesEnum.Simple.ToString());

                await SendConfirmEmailAsync(user.Email, user.Id);
            }
            return result;
        }

        public async Task<bool> ResendConfirmEmail(string email)
        {
            var user = await _unitOfWork.UserManager.FindByEmailAsync(email);
            if (user == null || user.EmailConfirmed)
            {
                return false;
            }
            await SendConfirmEmailAsync(user.Email, user.Id);
            return true;
        }

        public async Task<bool> ResetPasswordAsync(ResetPasswordDto dto)
        {
            var user = await _unitOfWork.UserManager.FindByEmailAsync(dto.Email);
            if (user == null)
            {
                return false;
            }
            var result = await _unitOfWork.UserManager.ResetPasswordAsync(user, dto.Code.Base64ForUrlDecode(), dto.Password);
            return result.Succeeded;
        }

        public async Task<IdentityResult> UpdateLastModifiedAsync(int userId)
        {
            var user = await _unitOfWork.UserManager.FindByIdAsync(userId);
            user.LastModified = DateTime.Now;
            var result = await _unitOfWork.UserManager.UpdateAsync(user);
            if (result.Succeeded)
            {
                await _unitOfWork.SaveAsync();
            }
            return result;
        }

        #region private
        private async Task<string> GetConfirmEmailBody(int userId)
        {
           // var host = HttpContext.Current.Request.Url.Authority;
           // string code = await _unitOfWork.UserManager.GenerateEmailConfirmationTokenAsync(userId);
           // code = code.Base64ForUrlEncode();
            
          //  var callbackUrl = $"http://{host}/api/account/confirmEmail?userId={userId}&code={code}";
            return "";//string.Format(EmailMessages.EmailConfirmationMessage, callbackUrl);
        }

        private async Task<string> GetForgotPasswordBody(int userId)
        {
           // var host = HttpContext.Current.Request.Url.Authority;
         //   string code = await _unitOfWork.UserManager.GeneratePasswordResetTokenAsync(userId);
         //   code = code.Base64ForUrlEncode();

         //   var callbackUrl = $"http://{host}/api/account/resetPassword?userId={userId}&code={code}";
            return "";//string.Format(EmailMessages.ForgotPasswordMessage, callbackUrl);
        }

        private async Task SendConfirmEmailAsync(string email, int userId)
        {
            //var message = new IdentityMessage()
            //{
            //    Destination = email,
            //    Subject = EmailMessages.RegistrationFinished,
            //    Body = await GetConfirmEmailBody(userId)
            //};
            //await _messageService.SendAsync(message);
        }

        private async Task SendForgotPasswordEmailAsync(string email, int userId)
        {
            //var message = new IdentityMessage()
            //{
            //    Destination = email,
            //    Subject = EmailMessages.ForgotPassword,
            //    Body = await GetForgotPasswordBody(userId)
            //};
            //await _messageService.SendAsync(message);
        }
        #endregion
    }
}
