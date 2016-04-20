using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNet.Identity;
using MyLiverpool.Business.DTO;
using MyLiverpool.Business.Resources;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Business.ViewModels.Users;
using MyLiverpoolSite.Common.Utilities;
using MyLiverpoolSite.Data.DataAccessLayer;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Business.Services.Services
{
    public class UserService : IUserService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public UserService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        #region vm
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
            var usersVM = _mapper.Map<IEnumerable<UserViewModel>>(users);
            var allUsersCount = await _unitOfWork.UserRepository.GetCountAsync();
            var result = new PageableData<UserViewModel>(usersVM, page, allUsersCount);
            return result;
        }

        public async Task<UserViewModel> GetUserProfile(int id)
        {
            var user = await _unitOfWork.UserRepository.GetByIdAsync(id);
            var result = _mapper.Map<UserViewModel>(user);
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
            return _mapper.Map<PrivateMessageVM>(message);
        }

        public async Task<int> SavePrivateMessageVMAsync(PrivateMessageVM model, int userId)
        {
            var message = _mapper.Map<PrivateMessage>(model);
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
            var allMessagesVm = _mapper.Map<IEnumerable<PrivateMessageVM>>(allMessages);
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

        public async Task<bool> UnbanUser(int userId)
        {
            var result = await _unitOfWork.UserManager.SetLockoutEndDateAsync(userId, DateTimeOffset.MinValue);
            return result == IdentityResult.Success;
        }

        #endregion

        #region Dto
        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(User user, string authenticationType)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await _unitOfWork.UserManager.CreateIdentityAsync(user, authenticationType);
            // Add custom user claims here
            return userIdentity;
        }
        
        public async Task<UserDto> GetUserProfileDtoAsync(int id)
        {
            var user = await _unitOfWork.UserRepository.GetByIdAsync(id);
            var dto = _mapper.Map<UserDto>(user);
            return dto;
        }

        public async Task<PrivateMessagesDto> GetPrivateMessagesDtoAsync(int id)
        {
            var messages = await _unitOfWork.PrivateMessageRepository.GetAsync(x => x.ReceiverId == id || x.SenderId == id);
            var dto = new PrivateMessagesDto()
            {
                Received = _mapper.Map<ICollection<PrivateMessageMiniDto>>(messages.Where(x => x.ReceiverId == id)),
                Sent = _mapper.Map<ICollection<PrivateMessageMiniDto>>(messages.Where(x => x.SenderId == id))
            };
            return dto;
        }

        public async Task<PageableData<UserMiniDto>> GetUsersDtoAsync(UserFiltersDto dto)
        {
            Expression<Func<User, bool>> filter = x => true;
            if (dto.RoleGroupId.HasValue)
            {
                Expression<Func<User, bool>> roleFilter = x => x.RoleGroupId == dto.RoleGroupId.Value;
                filter =
                    Expression.Lambda<Func<User, bool>>(
                        Expression.AndAlso(
                            new SwapVisitor(filter.Parameters[0], roleFilter.Parameters[0]).Visit(filter.Body),
                            roleFilter.Body), roleFilter.Parameters);
            }
            if (!string.IsNullOrWhiteSpace(dto.UserName))
            {
                Expression<Func<User, bool>> userNameFilter = x => x.UserName.Contains(dto.UserName);
                filter = Expression.Lambda<Func<User, bool>>(
                        Expression.AndAlso(
                            new SwapVisitor(filter.Parameters[0], userNameFilter.Parameters[0]).Visit(filter.Body),
                            userNameFilter.Body), userNameFilter.Parameters);
            }

            var users = await _unitOfWork.UserRepository.GetAsync(dto.Page, filter: filter);
            var usersDto = _mapper.Map<IEnumerable<UserMiniDto>>(users);
            var allUsersCount = await _unitOfWork.UserRepository.GetCountAsync(filter);
            var result = new PageableData<UserMiniDto>(usersDto, dto.Page, allUsersCount);
            return result;
        }

        public async Task<PrivateMessageDto> GetPrivateMessageDtoAsync(int messageId, int userId)
        {
            var message = await _unitOfWork.PrivateMessageRepository.GetByIdAsync(messageId);
            if (message.ReceiverId != userId && message.SenderId != userId)
            {
                throw new AccessViolationException();
            }
            if (!message.IsRead && message.ReceiverId == userId)
            {
                message.IsRead = true;
                _unitOfWork.PrivateMessageRepository.Update(message);
                await _unitOfWork.SaveAsync();
            }
            return _mapper.Map<PrivateMessageDto>(message);
        }

        public async Task<bool> SavePrivateMessageDtoAsync(PrivateMessageDto model)
        {
            await RemoveOldMessages(model.SenderId);
            await RemoveOldMessages(model.ReceiverId);

            var message = _mapper.Map<PrivateMessage>(model);
            message.SentTime = DateTime.Now;
            var receiver = await _unitOfWork.UserManager.FindByNameAsync(model.ReceiverUserName);
            message.ReceiverId = receiver.Id;
            try
            {
                _unitOfWork.PrivateMessageRepository.Add(message);
                await _unitOfWork.SaveAsync();
            }
            catch (Exception)
            {
                return false;
            }
            return true;
        }

        public async Task<bool> EditRoleGroupAsync(int userId, int roleGroupId)
        {
            var user = await _unitOfWork.UserManager.FindByIdAsync(userId);
            var oldRoleGroup = await _unitOfWork.RoleGroupRepository.GetByIdAsync(user.RoleGroupId);
            var newRoleGroup = await _unitOfWork.RoleGroupRepository.GetByIdAsync(roleGroupId);
            var rolesToDelete = GetRolesToDelete(oldRoleGroup.Roles, newRoleGroup.Roles);
            var rolesToAdd = GetRolesToAdd(oldRoleGroup.Roles, newRoleGroup.Roles);
            user.RoleGroupId = roleGroupId;
            try
            {
                var toDel = string.Join(",", rolesToDelete);
                var toAdd = string.Join(",", rolesToAdd);
                if (!string.IsNullOrEmpty(toDel))
                {
                    await _unitOfWork.UserManager.RemoveFromRolesAsync(userId, toDel);
                }
                if (!string.IsNullOrEmpty(toAdd))
                {
                    await _unitOfWork.UserManager.AddToRolesAsync(userId, toAdd);
                }
            }
            catch (Exception)
            {
                
            }
            var result = await _unitOfWork.UserManager.UpdateAsync(user);
            return result.Succeeded; //todo return identityResult?
        }

        public async Task<int> GetUnreadPmCountAsync(int userId)
        {
            return await _unitOfWork.PrivateMessageRepository.GetCountAsync(x => !x.IsRead && x.ReceiverId == userId);
        }

        public async Task<IEnumerable<string>> GetUserNamesAsync(string typed)
        {
            IEnumerable<string> userNames = new List<string>();
            if (string.IsNullOrEmpty(typed))
            {
                typed = "";
            }
            var users = await _unitOfWork.UserRepository.GetAsync(x => x.UserName.Contains(typed));
            return users.Select(x => x.UserName).Take(GlobalConstants.CountLoginsForAutocomlete);
        }

        public async Task<string> GetPhotoPathAsync(int userId)
        {
            var user = await _unitOfWork.UserManager.FindByIdAsync(userId);
            return user.Photo;
        }

        public async Task<bool> UpdatePhotoPathAsync(int userId, string photo)
        {
            var user = await _unitOfWork.UserManager.FindByIdAsync(userId);
            user.Photo = photo;
            var result = await _unitOfWork.UserManager.UpdateAsync(user);
            return result.Succeeded;
        }
        #endregion

        #region helpers

        private IEnumerable<string> GetRolesToDelete(IEnumerable<Role> oldRoles, IEnumerable<Role> newRoles)
        {
            return oldRoles.Where(x => newRoles.All(n => n.Id != x.Id)).Select(x => x.Name);
        }
        private IEnumerable<string> GetRolesToAdd(IEnumerable<Role> oldRoles, IEnumerable<Role> newRoles)
        {
            return newRoles.Where(x => oldRoles.All(n => n.Id != x.Id)).Select(x => x.Name);
        }
        private async Task RemoveOldMessages(int userId)
        {
            var countUserMessages =
                await
                    _unitOfWork.PrivateMessageRepository.GetCountAsync(
                        x => x.ReceiverId == userId || x.SenderId == userId);
            if (countUserMessages > GlobalConstants.PmsPerUser)
            {
                var messages =
                    await
                        _unitOfWork.PrivateMessageRepository.GetAsync(
                            x => x.ReceiverId == userId || x.SenderId == userId);
                var messages2 = messages.Take(GlobalConstants.PmsPerUser / 2).ToList();
                messages2.ForEach(x => _unitOfWork.PrivateMessageRepository.DeleteAsync(x));
                await _unitOfWork.SaveAsync();
            }
        }

        #endregion
    }
}
