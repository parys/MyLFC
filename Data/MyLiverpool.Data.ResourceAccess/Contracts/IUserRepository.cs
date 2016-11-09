using System.Threading.Tasks;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Data.ResourceAccess.Contracts
{
    public interface IUserRepository : ICrudRepository<User>
    {
        Task<User> GetUserAsync(int id);

        Task<string> GetUsername(int id);
    }
}