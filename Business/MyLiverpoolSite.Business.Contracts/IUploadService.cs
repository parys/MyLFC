using System.Threading.Tasks;
using System.Web;

namespace MyLiverpoolSite.Business.Contracts
{
    public interface IUploadService
    {
        Task<bool> UpdateAvatar(int userId, HttpPostedFile file);
    }
}
