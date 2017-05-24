using System.Collections.Generic;
using System.Threading.Tasks;
using MyLiverpool.Business.Dto;

namespace MyLiverpool.Business.Contracts
{
    public interface IForumSectionService
    {
        Task<ForumSectionDto> CreateAsync(string name);

        Task<bool> DeleteAsync(int id);

     //   Task<ForumDto> GetAsync();

        Task<ForumSectionDto> GetAsync(int id);

        Task<IEnumerable<ForumSectionDto>> GetListAsync(bool isAdmin);
    }
}
