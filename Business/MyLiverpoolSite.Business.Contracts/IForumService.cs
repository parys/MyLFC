using System.Threading.Tasks;
using MyLiverpoolSite.Business.ViewModels.Forum;

namespace MyLiverpoolSite.Business.Contracts
{
    public interface IForumService
    {
        Task<ForumVM> Get();

        Task<ForumSubsectionVM> GetSubsection(int subsectionId, int page = 1);

        Task<ForumThemeVM> GetTheme(int themeId, int page = 1);
    }
}
