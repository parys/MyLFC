using System.Collections.Generic;
using System.Threading.Tasks;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Data.ResourceAccess.Interfaces
{
    public interface IForumThemeRepository : ICrudRepository<ForumTheme>
    {
        Task<IEnumerable<ForumTheme>> GetListAsync();
    }
}
