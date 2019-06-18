using System.Collections.Generic;
using System.Threading.Tasks;
using MyLfc.Domain;

namespace MyLiverpool.Data.ResourceAccess.Interfaces
{
    public interface IForumSubsectionRepository: ICrudRepository<ForumSubsection>
    {
        Task<ForumSubsection> GetByIdWithThemesAsync(int subsectionId, int page, int itemPerPage = 15);

        Task<IEnumerable<ForumSubsection>> GetListAsync();
    }
}
