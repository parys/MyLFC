using System.Threading.Tasks;
using System.Web;

namespace MyLiverpoolSite.Business.Contracts
{
    public interface IUploadService
    {
        Task<string> UpdateAvatarAsync(int userId, HttpPostedFile file);
    }
}
