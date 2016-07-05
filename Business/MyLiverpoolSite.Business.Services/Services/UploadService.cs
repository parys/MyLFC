using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Web;
using MyLiverpoolSite.Business.Contracts;

namespace MyLiverpoolSite.Business.Services.Services
{
    public class UploadService : IUploadService
    {
        public const string AvatarPath = "Content\\avatars\\";
        public const string ImagesPath = "Content\\images\\";
        public const int FilesPerFolder = 200;
        private readonly IUserService _userService;

        public UploadService(IUserService userService)
        {
            _userService = userService;
        }

        public async Task<string> UpdateAvatarAsync(int userId, HttpPostedFile file)
        {
            var path = await _userService.GetPhotoPathAsync(userId);
            var relativePath = path;
            if (string.IsNullOrEmpty(path))
            {
                var newName = GenerateNewName() + "." + file.FileName.Split('.').Last();
                var newPath = GenerateNewPath(AvatarPath);
                relativePath = Path.Combine(newPath, newName);
                path = GetFullPath(relativePath);
            }
            else
            {
                path = GetFullPath(path);
            }

            file.SaveAs(path);
            relativePath = Regex.Replace(relativePath, "\\\\", "/");
            await _userService.UpdatePhotoPathAsync(userId, relativePath);
            return relativePath;
        }

        public async Task<IEnumerable<string>> UploadAsync(HttpFileCollection files)
        {
            var result = new List<string>();
            foreach (var fileName in files.AllKeys)
            {
                var file = files[fileName];
                var newName = GenerateNewName() + "." + file.FileName.Split('.').Last();
                var newPath = GenerateNewPath(ImagesPath);
                var relativePath = Path.Combine(newPath, newName);
                var path = GetFullPath(relativePath);
                
                file.SaveAs(path);
                result.Add(relativePath);
            }
            return result;
        }

        #region private helpers 
        private string GenerateNewPath(string path)
        {
            var fullPath = GetFullPath(path);
            string directoryName = String.Empty;
            try
            {
                var directoryInfo = Directory.EnumerateDirectories(fullPath).Last();
                var lastFolderName = int.Parse(directoryInfo.Split('\\').Last());
                directoryName = lastFolderName.ToString();
                if (Directory.GetFiles(directoryInfo).Count() >= FilesPerFolder)
                {
                    directoryName = (lastFolderName + 1) + "\\";
                    directoryInfo = Path.Combine(fullPath + directoryName);
                    Directory.CreateDirectory(directoryInfo);
                }
            }
            catch (Exception)
            {
                throw;
            }
            return Path.Combine(path, directoryName);
        }

        private string GenerateNewName()
        {
            var random = new Random((int)DateTime.Now.ToFileTimeUtc());
            string newName;
            do
            {
                newName = random.Next(100000, 999999).ToString();
            } while (File.Exists(newName));
            return newName;
        }

        private string GetFullPath(string prefix)
        {
            var path = HttpContext.Current.Server.MapPath("~");
            return Path.Combine(path, prefix);
        }
        #endregion
    }
}
