using System;
using System.IO;
using System.Threading.Tasks;
using System.Web;
using MyLiverpoolSite.Business.Contracts;

namespace MyLiverpoolSite.Business.Services.Services
{
    public class UploadService : IUploadService
    {
        public const string AvatarPath = "~/Content/avatars/00";

        public async Task<bool> UpdateAvatar(int userId, HttpPostedFile file)
        {

            //todo 
            //1 get folder for usver
            //2 get usver
            //3 delete old photo
            //4 if have old file get this name
            //4.1 if no, generate new name
            //4.2 save new photo
            var fileSavePath = Path.Combine(HttpContext.Current.Server.MapPath(AvatarPath), file.FileName);

            file.SaveAs(fileSavePath);
            return true;
        }
    }
}
