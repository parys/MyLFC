using System.Threading.Tasks;
using MyLiverpool.Business.DtoNext;

namespace MyLiverpool.Business.Contracts
{
    public interface IForumThemeService
    {
        Task<ForumThemeDto> GetAsync(int id, int page);

        Task<ForumThemeDto> GetAsync(int id);

        Task<ForumThemeDto> CreateAsync(ForumThemeDto dto);

        Task<ForumThemeDto> UpdateAsync(ForumThemeDto dto);
    }
}
