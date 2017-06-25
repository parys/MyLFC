using System.Collections.Generic;
using System.Threading.Tasks;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Data.ResourceAccess.Interfaces
{
    public interface IChatMessageRepository : ICrudRepository<ChatMessage>
    {
        Task<IEnumerable<ChatMessage>> GetListAsync(int lastMessageId);

        Task UpdateAsync(ChatMessage entity); //todo can be moved to IcrudRepo
    }
}
