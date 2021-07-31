using System.Threading.Tasks;
using MyLfc.Domain;

namespace MyLiverpool.Data.ResourceAccess.Interfaces
{
    public interface IUserRepository : ICrudRepository<User>
    {
        Task<User> FindByNameAsync(string username);
    }
}