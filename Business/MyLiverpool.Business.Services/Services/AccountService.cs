﻿using System;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
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
        private readonly IEmailSender _messageService;
        private readonly IHttpContextAccessor _accessor;

        public AccountService(IUnitOfWork unitOfWork, IMapper mapper, IEmailSender messageService, IHttpContextAccessor accessor)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _messageService = messageService;
            _accessor = accessor;
        }

        public async Task<bool> ChangePasswordAsync(int userId, ChangePasswordDto dto)
        {
            var user = await _unitOfWork.UserManager.FindByIdAsync(userId.ToString());
            var result = await _unitOfWork.UserManager.ChangePasswordAsync(user, dto.OldPassword, dto.NewPassword);
            return result.Succeeded;
        }

        public async Task<bool> ConfirmEmailAsync(int userId, string code)
        {
            code = code.Base64ForUrlDecode();
            var user = await _unitOfWork.UserManager.FindByIdAsync(userId.ToString()); //todo WHY
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
            var user = await _unitOfWork.UserManager.FindByIdAsync(userId.ToString());
            var dateTime = await _unitOfWork.UserManager.GetLockoutEndDateAsync(user);
            return dateTime.Value.DateTime;
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
            var user = await _unitOfWork.UserManager.FindByIdAsync(userId.ToString());
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
            var host = _accessor.HttpContext.Request.Host;
            var user = await _unitOfWork.UserManager.FindByIdAsync(userId.ToString());
            string code = await _unitOfWork.UserManager.GenerateEmailConfirmationTokenAsync(user);
            code = code.Base64ForUrlEncode();
            
            var callbackUrl = $"http://{host}/api/account/confirmEmail?userId={userId}&code={code}";
            return $"Пожалуйста, подтвердите ваш аккаунт, кликнув <a href=\"{callbackUrl}\">здесь</a>.";
        }

        private async Task<string> GetForgotPasswordBody(int userId)
        {
            var host = _accessor.HttpContext.Request.Host;
            var user = await _unitOfWork.UserManager.FindByIdAsync(userId.ToString());
            string code = await _unitOfWork.UserManager.GeneratePasswordResetTokenAsync(user);
            code = code.Base64ForUrlEncode();

            var callbackUrl = $"http://{host}/api/account/resetPassword?userId={userId}&code={code}";
            return $"Пожалуйста, сбросьте ваш пароль, кликнув <a href = \"{callbackUrl}\"> здесь </a>.";
        }

        private async Task SendConfirmEmailAsync(string email, int userId)
        {
            const string registerFinished = "Завершение регистрации";
            await _messageService.SendEmailAsync(email, registerFinished, await GetConfirmEmailBody(userId));
        }

        private async Task SendForgotPasswordEmailAsync(string email, int userId)
        {
            const string forgotPassword = "Восстановление забытого пароля";
            await _messageService.SendEmailAsync(email, forgotPassword, await GetForgotPasswordBody(userId));
        }
        #endregion
    }
}
