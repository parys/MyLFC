using System.Security.Claims;
using System.Threading.Tasks;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Data.DataAccessLayer;
using MyLiverpoolSite.Data.Entities;
using System.Collections.Generic;
using Microsoft.AspNet.Identity;

namespace MyLiverpoolSite.Business.Contracts
{
    public interface IUserService
    {
        Task<bool> BanUser(int userId, int banDayCount);

        Task<bool> UnbanUser(int userId);

        Task<ClaimsIdentity> GenerateUserIdentityAsync(User user, string authenticationType);
        
        Task<UserDto> GetUserProfileDtoAsync(int id);

        Task<PageableData<UserMiniDto>> GetUsersDtoAsync(UserFiltersDto dto);

        Task<bool> EditRoleGroupAsync(int userId, int roleGroupId);

        Task<int> GetUnreadPmCountAsync(int userId);

        Task<IEnumerable<string>> GetUserNamesAsync(string typed);

        Task<string> GetPhotoPathAsync(int userId);

        Task<bool> UpdatePhotoPathAsync(int userId, string photo);

        Task<User> FindAsync(string userName, string password);

        Task<IdentityResult> UpdateAsync(User user);

        Task<IList<string>> GetRolesAsync(int id);
    }
}
