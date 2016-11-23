using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using MyLiverpool.Business.DtoNext;
using MyLiverpool.Business.DTO;
using MyLiverpool.Common.Utilities;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Business.Contracts
{
    public interface IUserService
    {
        Task<bool> BanUser(int userId, int banDayCount);

        Task<bool> UnbanUser(int userId);
        
        Task<UserDto> GetUserProfileDtoAsync(int id);

        Task<PageableData<UserMiniDto>> GetUsersDtoAsync(UserFiltersDto dto);

        Task<bool> EditRoleGroupAsync(int userId, int roleGroupId);
        
        Task<IEnumerable<UsernameDto>> GetUserNamesAsync(string typed);

        Task<string> GetPhotoPathAsync(int userId);

        Task<bool> UpdatePhotoPathAsync(int userId, string photo);

        Task<User> FindAsync(string userName, string password);

        Task<IdentityResult> UpdateAsync(User user);

        Task<IList<string>> GetRolesAsync(int id);

        Task<UserDto> GetUserAsync(int id);

        Task<string> GetUsernameAsync(int id);
    }
}
