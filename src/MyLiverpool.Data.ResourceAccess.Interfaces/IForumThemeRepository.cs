using System.Collections.Generic;
using System.Threading.Tasks;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Data.ResourceAccess.Interfaces
{
    public interface IForumThemeRepository : ICrudRepository<ForumTheme>
    {
        Task<ForumTheme> GetByIdWithMessagesAsync(int id, int page, int itemPerPage = 15);

        Task<IEnumerable<ForumTheme>> GetListAsync();
    }
}
