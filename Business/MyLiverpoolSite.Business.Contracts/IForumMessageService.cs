using System.Threading.Tasks;
using MyLiverpool.Business.DTO;

namespace MyLiverpoolSite.Business.Contracts
{
    public interface IForumMessageService
    {
        Task<ForumMessageDto> CreateAsync(ForumMessageDto dto);
    }
}
