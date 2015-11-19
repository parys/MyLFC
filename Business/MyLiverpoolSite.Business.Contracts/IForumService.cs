using System.Threading.Tasks;
using MyLiverpoolSite.Business.ViewModels.Forum;

namespace MyLiverpoolSite.Business.Contracts
{
    public interface IForumService
    {
        Task<ForumVM> Get();
    }
}
