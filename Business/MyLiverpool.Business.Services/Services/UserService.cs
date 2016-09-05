using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.DTO;
using MyLiverpool.Common.Utilities;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Contracts;
using MyLiverpool.Common.Utilities.Extensions;

namespace MyLiverpool.Business.Services.Services
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

        public async Task<bool> BanUser(int userId, int banDayCount)
        {
            var user = await _unitOfWork.UserManager.FindByIdAsync(userId.ToString());
            var result = await _unitOfWork.UserManager.SetLockoutEndDateAsync(user, new DateTimeOffset(DateTime.Now.AddDays(banDayCount)));
            return result == IdentityResult.Success;
        }

        public async Task<bool> UnbanUser(int userId)
        {
            var user = await _unitOfWork.UserManager.FindByIdAsync(userId.ToString());
            var result = await _unitOfWork.UserManager.SetLockoutEndDateAsync(user, DateTimeOffset.MinValue);
            return result == IdentityResult.Success;
        }

        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(User user, string authenticationType)
        {
            throw new NotImplementedException();
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            // var userIdentity = await _unitOfWork.UserManager.Ge(user, authenticationType);
            // Add custom user claims here
            //   return userIdentity;
        }
        
        public async Task<UserDto> GetUserProfileDtoAsync(int id)
        {
            var user = await _unitOfWork.UserRepository.GetByIdAsync(id);
            var dto = _mapper.Map<UserDto>(user);
            return dto;
        }

        public async Task<PageableData<UserMiniDto>> GetUsersDtoAsync(UserFiltersDto dto)
        {
            Expression<Func<User, bool>> filter = x => true;
            if (dto.RoleGroupId.HasValue)
            {
                filter = filter.And(x => x.RoleGroupId == dto.RoleGroupId.Value);
            }
            if (!string.IsNullOrWhiteSpace(dto.UserName))
            {
                filter = filter.And(x => x.UserName.Contains(dto.UserName));
            }

            var users = await _unitOfWork.UserRepository.GetAsync(dto.Page, filter: filter);
            var usersDto = _mapper.Map<IEnumerable<UserMiniDto>>(users);
            var allUsersCount = await _unitOfWork.UserRepository.GetCountAsync(filter);
            var result = new PageableData<UserMiniDto>(usersDto, dto.Page, allUsersCount);
            return result;
        }

      

        public async Task<bool> EditRoleGroupAsync(int userId, int roleGroupId)
        {
            var user = await _unitOfWork.UserManager.FindByIdAsync(userId.ToString());
            var oldRoleGroup = await _unitOfWork.RoleGroupRepository.GetByIdAsync(user.RoleGroupId);
            var newRoleGroup = await _unitOfWork.RoleGroupRepository.GetByIdAsync(roleGroupId);
            var rolesToDelete = GetRolesToDelete(oldRoleGroup.Roles, newRoleGroup.Roles);
            var rolesToAdd = GetRolesToAdd(oldRoleGroup.Roles, newRoleGroup.Roles);
            user.RoleGroupId = roleGroupId;
            try
            {
                if (rolesToDelete.Any())
                {
                    await _unitOfWork.UserManager.RemoveFromRolesAsync(user, rolesToDelete);
                }
                if (rolesToAdd.Any())
                {
                    await _unitOfWork.UserManager.AddToRolesAsync(user, rolesToAdd);
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
            var user = await _unitOfWork.UserManager.FindByIdAsync(userId.ToString());
            return user.Photo;
        }

        public async Task<bool> UpdatePhotoPathAsync(int userId, string photo)
        {
            var user = await _unitOfWork.UserManager.FindByIdAsync(userId.ToString());
            user.Photo = photo;
            var result = await _unitOfWork.UserManager.UpdateAsync(user);
            return result.Succeeded;
        }

        public async Task<User> FindAsync(string userName, string password)
        {
            var user = await _unitOfWork.UserManager.FindByNameAsync(userName);
            if (await _unitOfWork.UserManager.CheckPasswordAsync(user, password))
            {
                return user;
            };
            return null;
        }

        public async Task<IdentityResult> UpdateAsync(User user)
        {
            var result = await _unitOfWork.UserManager.UpdateAsync(user);
            await _unitOfWork.SaveAsync();
            return result;
        }

        public async Task<IList<string>> GetRolesAsync(int id)
        {
            var user = await _unitOfWork.UserManager.FindByIdAsync(id.ToString());
            var result = await _unitOfWork.UserManager.GetRolesAsync(user);
            return result;
        }

        #region private

        private IEnumerable<string> GetRolesToDelete(IEnumerable<Role> oldRoles, IEnumerable<Role> newRoles)
        {
            return oldRoles.Where(x => newRoles.All(n => n.Id != x.Id)).Select(x => x.Name);
        }
        private IEnumerable<string> GetRolesToAdd(IEnumerable<Role> oldRoles, IEnumerable<Role> newRoles)
        {
            return newRoles.Where(x => oldRoles.All(n => n.Id != x.Id)).Select(x => x.Name);
        }

        #endregion
    }
}
