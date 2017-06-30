using System.Collections.Generic;
using System.Threading.Tasks;
using MyLiverpool.Business.Dto;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Business.Contracts
{
    public interface IChatMessageService : IEntityService<ChatMessageDto>
    {
        Task<IEnumerable<ChatMessageDto>> GetListAsync(int lastMessageId, ChatMessageTypeEnum type);

        Task<ChatMessageDto> UpdateAsync(ChatMessageDto entity, int? userId);
    }
}
