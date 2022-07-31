using System.Collections.Generic;
using System.Threading.Tasks;
using MyLfc.Business.Dto.Forums;

namespace MyLfc.Business.Contracts;

public interface IForumSectionService
{
    Task<ForumSectionDto> CreateAsync(string name);

    Task<bool> DeleteAsync(int id);

 //   Task<ForumDto> GetValueAsync();

    Task<ForumSectionDto> GetAsync(int id);

    Task<IEnumerable<ForumSectionDto>> GetListAsync(bool isAdmin);
}
