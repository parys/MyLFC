using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using MyLiverpoolSite.Business.Contracts;

namespace MyLiverpoolSite.Business.Services.Services
{
    public class UploadService : IUploadService
    {
        public const string AvatarPath = "~/Content/avatars";
        private readonly IUserService _userService;

        public UploadService(IUserService userService)
        {
            _userService = userService;
        }

        public async Task<bool> UpdateAvatarAsync(int userId, HttpPostedFile file)
        {
            var oldPath = await _userService.GetPhotoPathAsync(userId);
            if (string.IsNullOrEmpty(oldPath))
            {
                oldPath = GetFullPath(GenerateNewPath(AvatarPath), file.FileName);
            }
            else
            {
                oldPath = GetFullPath(oldPath);
            }

            file.SaveAs(oldPath);
            return true;
        }

        private string GenerateNewPath(string path)
        {
            //working with folders
            var directoryInfos = Directory.EnumerateDirectories(path);
            var lastFolderName = directoryInfos.Select(int.Parse).Max();
            return "0";
        }

        private string GenerateNewName()
        {
            var random = new Random((int)DateTime.Now.ToFileTimeUtc());
            string newName;
            do
            {
                newName = random.Next(100000, 999999).ToString();
            } while (!File.Exists(newName));
            return newName;
        }

        private string GetFullPath(string prefix, string fileName)
        {
            return HttpContext.Current.Server.MapPath("~") + prefix + fileName;
        }

        private string GetFullPath(string prefix)
        {
            return GetFullPath(prefix, string.Empty);
        }
    }
}
