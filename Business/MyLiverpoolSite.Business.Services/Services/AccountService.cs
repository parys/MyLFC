using System;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNet.Identity;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Data.DataAccessLayer;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Business.Services.Services
{
    public class AccountService : IAccountService
    {
    //    private readonly IUserService _userService;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly IIdentityMessageService _messageService;

        public AccountService(IUnitOfWork unitOfWork, IMapper mapper, IIdentityMessageService messageService)
        {
            //   _userService = userService;
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _messageService = messageService;
        }

        public Task<int> GetUserIdByLoginAndPassword(string login, string password)
        {
            throw new NotImplementedException();
            //var users = await _unitOfWork.UserRepository.Get();
            //var user = users.FirstOrDefault(u => u.UserName == login && u.Password == password);
          //  return user?.Id ?? 0;
        }

        public async Task<bool> IsUserNameUniqueAsync(string userName)
        {
            var foundUser = await _unitOfWork.UserRepository.GetAsync(x => x.UserName == userName);
            return !foundUser.Any();
        }

        public async Task<bool> IsEmailUniqueAsync(string email)
        {
            var foundUser = await _unitOfWork.UserRepository.GetAsync(x => x.Email == email);
            return !foundUser.Any();
        }

        public async Task<DateTime> GetLockOutEndDateAsync(string userName)
        {
            var user = (await _unitOfWork.UserRepository.GetAsync(x => x.UserName == userName)).First();
            return user.LockoutEndDateUtc ?? DateTime.Now;
        }

        public async Task<IdentityResult> RegisterUserAsync(RegisterUserDto model)
        {
            var user = _mapper.Map<User>(model);
            user.RegistrationDate = DateTime.Now;
            user.LastModified = DateTime.Now;
            user.LockoutEnabled = true;
            user.RoleGroupId = (int)RoleGroupsEnum.Simple;

            IdentityResult result = await _unitOfWork.UserManager.CreateAsync(user, model.Password);
            await _unitOfWork.UserManager.AddToRoleAsync(user.Id, RolesEnum.Simple.ToString());
            var message = new IdentityMessage()
            {
                Destination = user.Email,
                Body = "test",
                Subject = "test"
            };
            await _messageService.SendAsync(message);
            return result;
        }

        public async Task<IdentityResult> UpdateLastModified(int userId)
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
    }
}
