using System.Threading.Tasks;
using MyLiverpool.Business.DTO;

namespace MyLiverpoolSite.Business.Contracts
{
    public interface IForumThemeService
    {
        Task<ForumThemeDto> GetAsync(int id, int page);
    }
}
