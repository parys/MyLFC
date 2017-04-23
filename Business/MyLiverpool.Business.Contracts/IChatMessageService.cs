using System.Collections.Generic;
using System.Threading.Tasks;
using MyLiverpool.Business.Dto;

namespace MyLiverpool.Business.Contracts
{
    public interface IChatMessageService : IEntityService<ChatMessageDto>
    {
        Task<IEnumerable<ChatMessageDto>> GetListAsync();
    }
}
