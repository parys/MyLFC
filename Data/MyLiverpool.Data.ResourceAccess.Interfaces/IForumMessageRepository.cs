using System.Collections.Generic;
using System.Threading.Tasks;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Data.ResourceAccess.Interfaces
{
    public interface IForumMessageRepository : ICrudRepository<ForumMessage>
    {
        Task<IEnumerable<ForumMessage>> GetListAsync();
    }
}
