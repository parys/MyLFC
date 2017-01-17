using System.Threading.Tasks;
using MyLiverpool.Business.DtoNext;

namespace MyLiverpool.Business.Contracts
{
    public interface IForumMessageService
    {
        Task<ForumMessageDto> CreateAsync(ForumMessageDto dto);

        Task<ForumMessageDto> UpdateAsync(ForumMessageDto dto);

        Task<bool> DeleteAsync(int id);
    }
}