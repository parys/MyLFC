using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNet.Identity;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpool.Business.Resources;
using MyLiverpoolSite.Business.ViewModels.Users;
using MyLiverpoolSite.Data.DataAccessLayer;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Business.Services.Services
{
    public class UserService : IUserService
    {
        private readonly IUnitOfWork _unitOfWork;

        public UserService(IUnitOfWork unitOfWork)
        {
            this._unitOfWork = unitOfWork;
        }

        public CreateUserViewModel GetCreateViewModel()
        {
            return new CreateUserViewModel();
        }

        public bool IsModelValid(CreateUserViewModel model)
        {
            //todo make this checking model
            return true;
        }

        public void Create(CreateUserViewModel model)
        {
            //todo
           // var user = Mapper.Map<CreateUserViewModel, User>(model);
           // _unitOfWork.UserRepository.Add(user);
           // _unitOfWork.Save();
        }

        public async Task<PageableData<UserViewModel>> GetAll(int page)
        {
            var users = await _unitOfWork.UserRepository.GetAsync(page);
            var usersVM = Mapper.Map<IEnumerable<UserViewModel>>(users);
            var allUsersCount = await _unitOfWork.UserRepository.GetCountAsync();
            var result = new PageableData<UserViewModel>(usersVM, page, allUsersCount);
            return result;
        }

        public async Task<UserViewModel> GetUserProfile(int id)
        {
            var user = await _unitOfWork.UserRepository.GetByIdAsync(id);
            var result = Mapper.Map<UserViewModel>(user);
            result.RoleGroups = await _unitOfWork.RoleGroupRepository.GetAsync();
            return result;
        }

        public async Task<PrivateMessageVM> GetPrivateMessageVMAsync(int receiverId, string answerTitle = null)
        {
            var receiver = await _unitOfWork.UserRepository.GetByIdAsync(receiverId);
            string title = string.Empty;
            if (!string.IsNullOrWhiteSpace(answerTitle))
            {
                const int answerNumber = 1;
                title = string.Format(UsersMessages.Annex, answerNumber) + answerTitle; //todo and add counter
            }
            return new PrivateMessageVM()
            {
                Receiver = receiver,
                ReceiverId = receiverId,
                Title = title
            };
        }

        public async Task<PrivateMessageVM> GetPrivateMessageForReadVMAsync(int messageId, int receiverId)
        {
            var message = await _unitOfWork.PrivateMessageRepository.GetByIdAsync(messageId);
            if (message.ReceiverId != receiverId && message.SenderId != receiverId)
            {
                throw new AccessViolationException(); //todo think about it
            }
            if (!message.IsRead && message.ReceiverId == receiverId)
            {
                message.IsRead = true;
                _unitOfWork.PrivateMessageRepository.Update(message);
                await _unitOfWork.SaveAsync();
            }
            return Mapper.Map<PrivateMessageVM>(message);
        }

        public async Task<int> SavePrivateMessageVMAsync(PrivateMessageVM model, int userId)
        {
            var message = Mapper.Map<PrivateMessage>(model);
            message.SenderId = userId;
            message.SentTime = DateTime.Now;
            _unitOfWork.PrivateMessageRepository.Add(message);
            await _unitOfWork.SaveAsync();
            return message.Id;
        }

        public async Task<AllPrivateMessagesVM> GetPrivateMessagesForUser(int userId)
        {
            var allMessages = await 
                _unitOfWork.PrivateMessageRepository.GetAsync(x => x.ReceiverId == userId || x.SenderId == userId, x => x.Sender);
            var allMessagesVm = Mapper.Map<IEnumerable<PrivateMessageVM>>(allMessages);
            var model = new AllPrivateMessagesVM()
            {
                ReceivedMessages = allMessagesVm.Where(x => x.ReceiverId == userId).ToList(),
                SentMessages = allMessagesVm.Where(x => x.SenderId == userId).ToList()
            };
            return model;
        }

        public async Task<bool> BanUser(int userId, int banDayCount)
        {
            var result = await _unitOfWork.UserManager.SetLockoutEndDateAsync(userId, new DateTimeOffset(DateTime.Now.AddDays(banDayCount)));
            return result == IdentityResult.Success;
        }

        // lalalalala
        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(User user, string authenticationType)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await _unitOfWork.UserManager.CreateIdentityAsync(user, authenticationType);
            // Add custom user claims here
            return userIdentity;
        }

        #region Dto
        public async Task<UserDto> GetUserProfileDto(int id)
        {
            var user = await _unitOfWork.UserRepository.GetByIdAsync(id);
            var dto = Mapper.Map<UserDto>(user);
            return dto;
        }

        public async Task<PrivateMessagesDto> GetPrivateMessagesDtoAsync(int id)
        {
            var messages = await _unitOfWork.PrivateMessageRepository.GetAsync(x => x.ReceiverId == id || x.SenderId == id);
            var dto = new PrivateMessagesDto()
            {
                Received = Mapper.Map<ICollection<PrivateMessageMiniDto>>(messages.Where(x => x.ReceiverId == id)),
                Sent = Mapper.Map<ICollection<PrivateMessageMiniDto>>(messages.Where(x => x.SenderId == id))
            };
            return dto;
        }

        public async Task<PageableData<UserMiniDto>> GetUsersDtoAsync(int page)
        {
            var users = await _unitOfWork.UserRepository.GetAsync(page);
            var usersDto = Mapper.Map<IEnumerable<UserMiniDto>>(users);
            var allUsersCount = await _unitOfWork.UserRepository.GetCountAsync();
            var result = new PageableData<UserMiniDto>(usersDto, page, allUsersCount);
            return result;
        }

        #endregion
    }
}
