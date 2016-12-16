using System.Collections.Generic;
using System.Threading.Tasks;
using MyLiverpool.Business.DtoNext;

namespace MyLiverpool.Business.Contracts
{
    public interface IChatMessageService : IEntityService<ChatMessageDto>
    {
        Task<IEnumerable<ChatMessageDto>> GetListAsync();
    }
}
