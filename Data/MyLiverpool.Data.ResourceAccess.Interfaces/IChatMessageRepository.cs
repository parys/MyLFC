using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Data.ResourceAccess.Interfaces
{
    public interface IChatMessageRepository : ICrudRepository<ChatMessage>
    {
        Task<IEnumerable<ChatMessage>> GetListAsync(Expression<Func<ChatMessage, bool>> filter = null);

        Task UpdateAsync(ChatMessage entity); //todo can be moved to IcrudRepo
    }
}
