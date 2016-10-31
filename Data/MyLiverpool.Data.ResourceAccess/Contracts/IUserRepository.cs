using System.Threading.Tasks;
using MyLiverpool.Business.DTO;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Data.ResourceAccess.Contracts
{
    public interface IUserRepository : ICrudRepository<User>
    {
        Task<UserDto> GetUserAsync(int id);

        Task<string> GetUsername(int id);
    }
}