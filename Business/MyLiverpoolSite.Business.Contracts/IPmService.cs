using System.Threading.Tasks;
using MyLiverpool.Business.DTO;

namespace MyLiverpoolSite.Business.Contracts
{
    public interface IPmService
    {
        Task<PrivateMessagesDto> GetListAsync(int id);

        Task<PrivateMessageDto> GetAsync(int messageId, int userId);

        Task<bool> SaveAsync(PrivateMessageDto model);
    }
}
