using System.Collections.Generic;
using System.Threading.Tasks;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Data.ResourceAccess.Interfaces
{
    public interface IForumSectionRepository: ICrudRepository<ForumSection>
    {
        Task<IEnumerable<ForumSection>> GetListAsync();
    }
}
