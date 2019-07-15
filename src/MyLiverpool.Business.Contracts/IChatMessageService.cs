using System.Threading.Tasks;
using MyLiverpool.Business.Dto;

namespace MyLiverpool.Business.Contracts
{
    public interface IChatMessageService : IEntityService<ChatMessageDto>
    {
        Task<ChatMessageDto> UpdateAsync(ChatMessageDto entity, int? userId);
    }
}
