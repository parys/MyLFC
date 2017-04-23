using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Business.Dto.Filters;
using MyLiverpool.Common.Utilities;
using MyLiverpool.Common.Utilities.Extensions;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Business.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly IRoleGroupRepository _roleGroupRepository;
        private readonly IMapper _mapper;
        private const string DefaultPhotoPath = "/content/avatars/default.png";

        public UserService(IMapper mapper, IUserRepository userRepository, IRoleGroupRepository roleGroupRepository)
        {
            _mapper = mapper;
            _userRepository = userRepository;
            _roleGroupRepository = roleGroupRepository;
        }

        public async Task<bool> BanUser(int userId, int banDayCount)
        {
            var user = await _userRepository.GetByIdAsync(userId);
            var result = await _userRepository.SetLockoutEndDateAsync(user, new DateTimeOffset(DateTime.Now.AddDays(banDayCount)));
            return result == IdentityResult.Success;
        }

        public async Task<bool> UnbanUser(int userId)
        {
            var user = await _userRepository.GetByIdAsync(userId);
            var result = await _userRepository.SetLockoutEndDateAsync(user, new DateTimeOffset?());
            return result == IdentityResult.Success;
        }
        
        public async Task<UserDto> GetUserProfileDtoAsync(int id)
        {
            var user = await _userRepository.GetByIdAsync(id);
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

            var users = await _userRepository.GetListAsync(dto.Page, filter: filter);
            var usersDto = _mapper.Map<IEnumerable<UserMiniDto>>(users);
            var allUsersCount = await _userRepository.GetCountAsync(filter);
            var result = new PageableData<UserMiniDto>(usersDto, dto.Page, allUsersCount);
            return result;
        }

        public async Task<bool> EditRoleGroupAsync(int userId, int roleGroupId)
        {
            var user = await _userRepository.GetByIdFromManagerAsync(userId);
            var oldRoleGroup = await _roleGroupRepository.GetByIdAsync(user.RoleGroupId);
            var newRoleGroup = await _roleGroupRepository.GetByIdAsync(roleGroupId);
            var rolesToDelete = GetRolesToDelete(oldRoleGroup.RoleGroups.Select(x => x.Role), newRoleGroup.RoleGroups.Select(x => x.Role));
            var rolesToAdd = GetRolesToAdd(oldRoleGroup.RoleGroups.Select(x => x.Role), newRoleGroup.RoleGroups.Select(x => x.Role));
            user.RoleGroupId = roleGroupId;
            try
            {
                if (rolesToDelete.Any())
                {
                    await _userRepository.RemoveFromRolesAsync(user, rolesToDelete);
                }
                if (rolesToAdd.Any())
                {
                    await _userRepository.AddToRolesAsync(user, rolesToAdd);
                }
            }
            catch (Exception)
            {
                
            }
            var result = await _userRepository.UpdateAsync(user);
            return true;
        }

        public async Task<IEnumerable<UsernameDto>> GetUserNamesAsync(string typed)
        {
            if (string.IsNullOrEmpty(typed))
            {
                typed = "";
            }
            var users = await _userRepository.GetListAsync(1, GlobalConstants.CountLoginsForAutocomlete, x => x.UserName.Contains(typed));
            return users.Select(x => new UsernameDto() { Id = x.Id, Username = x.UserName} );
        }

        public async Task<string> GetPhotoPathAsync(int userId)
        {
            var user = await _userRepository.GetByIdFromManagerAsync(userId);
            return user.Photo;
        }

        public async Task<bool> UpdatePhotoPathAsync(int userId, string photo)
        {
            var user = await _userRepository.GetByIdFromManagerAsync(userId);
            user.Photo = photo;
            var result = await _userRepository.UpdateAsync(user);
            return true;
        }

        public async Task<User> FindAsync(string userName, string password)
        {
            var user = await _userRepository.FindByNameAsync(userName);
            if (await _userRepository.CheckPasswordAsync(user, password))
            {
                return user;
            }
            return null;
        }

        public async Task<User> UpdateAsync(User user)
        {
            var result = await _userRepository.UpdateAsync(user);
            return result;
        }

        public async Task<IList<string>> GetRolesAsync(int id)
        {
            var result = await _userRepository.GetRolesAsync(id);
            return result;
        }

        public async Task<UserDto> GetUserAsync(int id)
        {
            var user = await _userRepository.GetByIdAsync(id);
            return _mapper.Map<UserDto>(user);
        }

        public async Task<string> GetUsernameAsync(int id)
        {
            return await _userRepository.GetUsername(id);
        }

        public async Task<string> ResetAvatarAsync(int userId)
        {
            var user = await _userRepository.GetByIdFromManagerAsync(userId);
            if (user == null)
            {
                throw new NullReferenceException("User can't be null");
            }
            if (FileHelper.Delete(user.Photo))
            {
                user.Photo = DefaultPhotoPath;
                user = await _userRepository.UpdateAsync(user);
            }
            return user.Photo;
        }

        public async Task UpdateUserIpAddress(string ipAddress, int userId)
        {
            var user = await _userRepository.GetByIdFromManagerAsync(userId);
            if (user != null)
            {
                user.LastModified = DateTime.Now;
                user.Ip = ipAddress;
                await _userRepository.UpdateAsync(user);
            }
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
