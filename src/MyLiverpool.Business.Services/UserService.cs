using AutoMapper;
using Microsoft.AspNetCore.Identity;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Data.ResourceAccess.Interfaces;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using MyLfc.Domain;

namespace MyLiverpool.Business.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;
        private readonly string _defaultPhotoPath = Path.Combine("content", "avatars", "default.png");

        public UserService(IMapper mapper, IUserRepository userRepository)
        {
            _mapper = mapper;
            _userRepository = userRepository;
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

        public async Task<string> GetPhotoPathAsync(int userId)
        {
            var user = await _userRepository.GetByIdFromManagerAsync(userId);
            return user.Photo;
        }

        public async Task<bool> UpdatePhotoPathAsync(int userId, string photo)
        {
            var user = await _userRepository.GetByIdFromManagerAsync(userId);
            user.Photo = photo;
            await _userRepository.UpdateAsync(user);
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

        public async Task<UserDto> UpdateAsync(UserDto user)
        {
            var model = await _userRepository.GetByIdForUpdateAsync(user.Id);
            if (model != null)
            {
                model.Birthday = user.Birthday;
                model.FullName = user.FullName;
                model.Gender = user.Gender;
                await _userRepository.UpdateAsync(model);
            }
            return _mapper.Map<UserDto>(model);
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
            return await _userRepository.GetUsernameAsync(id);
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
                user.Photo = _defaultPhotoPath;
                await _userRepository.UpdateAsync(user);
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

        public async Task<UserConfigDto> GetUserConfigAsync(int userId)
        {
            var model = await _userRepository.GetUserConfigAsync(userId) ?? new UserConfig();
            return _mapper.Map<UserConfigDto>(model);
        }

        public async Task<UserConfigDto> UpdateUserConfigAsync(UserConfigDto config, int currentUserId)
        {
            var model = _mapper.Map<UserConfig>(config);
            model.UserId = currentUserId;
            var result = await _userRepository.CreateOrUpdateUserConfigAsync(model);
            return _mapper.Map<UserConfigDto>(result);
        }
    }
}
