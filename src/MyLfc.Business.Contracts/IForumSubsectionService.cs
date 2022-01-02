using System.Collections.Generic;
using System.Threading.Tasks;
using MyLfc.Business.Dto;
using MyLfc.Business.Dto.Forums;

namespace MyLfc.Business.Contracts
{
    public interface IForumSubsectionService
    {
        Task<ForumSubsectionDto> CreateAsync(ForumSubsectionDto dto);

        Task<ForumSubsectionDto> UpdateAsync(ForumSubsectionDto dto);

        Task<bool> DeleteAsync(int id);

        Task<ForumSubsectionDto> GetAsync(int subsectionId, int page);

        Task<ForumSubsectionDto> GetAsync(int subsectionId);

        Task<IEnumerable<ForumSubsectionMiniDto>> GetListAsync();
    }
}
