using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace MyLiverpoolSite.Business.Contracts
{
    public interface IUploadService
    {
        Task<string> UpdateAvatarAsync(int userId, HttpPostedFile file);

        Task<IEnumerable<string>> UploadAsync(HttpFileCollection files);
    }
}
