using System.Threading.Tasks;
using MyLiverpool.Business.DTO;

namespace MyLiverpoolSite.Business.Contracts
{
    public interface IForumSubsectionService
    {
        Task<bool> CreateAsync(ForumSubsectionDto dto);

        Task<bool> DeleteAsync(int id);

        Task<ForumSubsectionDto> GetAsync(int subsectionId, int page);
    }
}
