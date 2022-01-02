using System.Threading.Tasks;
using MyLfc.Business.Dto;
using MyLfc.Business.Dto.Forums;

namespace MyLfc.Business.Contracts
{
    public interface IForumMessageService
    {
        Task<ForumMessageDto> CreateAsync(ForumMessageDto dto);

        Task<ForumMessageDto> UpdateAsync(ForumMessageDto dto);

        Task<bool> DeleteAsync(int id);
    }
}