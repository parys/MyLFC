using System.Threading.Tasks;
using System.Web;

namespace MyLiverpoolSite.Business.Contracts
{
    public interface IUploadService
    {
        Task<bool> UpdateAvatarAsync(int userId, HttpPostedFile file);
    }
}
