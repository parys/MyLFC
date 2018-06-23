using System.Threading.Tasks;
using MyLiverpool.Business.Dto;

namespace MyLiverpool.Business.Contracts
{
    public interface IPmService
    {
        Task<PrivateMessagesDto> GetListAsync(int id);

        Task<PrivateMessageDto> GetAsync(int messageId, int userId);

        Task<PrivateMessageDto> SaveAsync(PrivateMessageDto model);

        Task<int> GetUnreadPmCountAsync(int userId);
    }
}
