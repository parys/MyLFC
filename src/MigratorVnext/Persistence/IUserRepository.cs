using System.Threading.Tasks;
using MyLfc.Domain;
using MyLiverpool.Data.ResourceAccess.Interfaces;

namespace MigratorVnext.Persistence
{
    public interface IUserRepository : ICrudRepository<User>
    {
        Task<User> FindByNameAsync(string username);
    }
}