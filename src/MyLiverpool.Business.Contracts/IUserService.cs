using System.Threading.Tasks;
using MyLfc.Domain;
using MyLiverpool.Business.Dto;

namespace MyLiverpool.Business.Contracts
{
    public interface IUserService
    {
        Task<string> GetPhotoPathAsync(int userId);

        Task<bool> UpdatePhotoPathAsync(int userId, string photo);

        Task<User> FindAsync(string userName, string password);

        Task<UserDto> UpdateAsync(UserDto user);
        
        Task<UserDto> GetUserAsync(int id);

        Task<string> GetUsernameAsync(int id);

        Task<string> ResetAvatarAsync(int userId);

        Task UpdateUserIpAddress(string ipAddress, int userId);
    }
}
