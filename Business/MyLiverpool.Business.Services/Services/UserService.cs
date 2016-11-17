using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.DtoNext;
using MyLiverpool.Business.DTO;
using MyLiverpool.Common.Utilities;
using MyLiverpool.Data.Entities;
using MyLiverpool.Common.Utilities.Extensions;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MyLiverpool.Business.Services.Services
{
    public class UserService : IUserService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;

        public UserService(IUnitOfWork unitOfWork, IMapper mapper, IUserRepository userRepository)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _userRepository = userRepository;
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
            var rolesToDelete = GetRolesToDelete(oldRoleGroup.RoleGroups.Select(x => x.Role), newRoleGroup.RoleGroups.Select(x => x.Role));
            var rolesToAdd = GetRolesToAdd(oldRoleGroup.RoleGroups.Select(x => x.Role), newRoleGroup.RoleGroups.Select(x => x.Role));
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

        public async Task<IEnumerable<string>> GetUserNamesAsync(string typed)
        {
            if (string.IsNullOrEmpty(typed))
            {
                typed = "";
            }
            var users = await _unitOfWork.UserRepository.GetAsync(x => x.UserName.Contains(typed));
            return users.Select(x => x.UserName).Take(GlobalConstants.CountLoginsForAutocomlete);
        }
        public async Task<IEnumerable<UsernameDto>> GetUserNamesAsync1(string typed)
        {
            if (string.IsNullOrEmpty(typed))
            {
                typed = "";
            }
            var users = await _unitOfWork.UserRepository.GetAsync(x => x.UserName.Contains(typed));
            return users.Select(x => new UsernameDto() { Id = x.Id, Username = x.UserName} ).Take(GlobalConstants.CountLoginsForAutocomlete);
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

        public async Task<UserDto> GetUserAsync(int id)
        {
            var user = await _userRepository.GetUserAsync(id);
            return _mapper.Map<UserDto>(user);
        }

        public async Task<string> GetUsernameAsync(int id)
        {
            return await _userRepository.GetUsername(id);
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
