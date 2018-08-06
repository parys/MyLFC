using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Common.Utilities;

namespace MyLiverpool.Business.Services
{
    public class UploadService : IUploadService
    {
        public const string ContentPath = "content";
        public readonly string AvatarPath = Path.Combine(ContentPath, "avatars");
        public readonly string LogoPath = Path.Combine(ContentPath, "logos");
        public readonly string ImagesPath = Path.Combine(ContentPath, "images");
        public readonly string PersonPath = Path.Combine(ContentPath, "persons");
        public const int FilesPerFolder = 200;
        private readonly IUserService _userService;
        private readonly IClubService _clubService;
        private readonly IHostingEnvironment _appEnvironment;

        public UploadService(IUserService userService, IClubService clubService, IHostingEnvironment appEnvironment)
        {
            _userService = userService;
            _clubService = clubService;
            _appEnvironment = appEnvironment;
        }

        public async Task<string> UpdateAvatarAsync(int userId, IFormFile file)
        {
            var path = await _userService.GetPhotoPathAsync(userId);

            var relativePath = path.Contains(GlobalConstants.DefaultPhotoPath)
                ? GenerateNewName()
                : path.Split('.')
                    .First()
                    .Split(Path.DirectorySeparatorChar, Path.AltDirectorySeparatorChar)
                    .Last();
            relativePath = relativePath + "." + file.FileName.Split('.').Last();

            var newPath = GenerateNewPath(AvatarPath);
            if (!path.Contains(GlobalConstants.DefaultPhotoPath))
            {
                FileHelper.Delete(path);
            }

            path = GetFullPath(newPath, relativePath);
            relativePath = Path.Combine(newPath, relativePath);
            using (var fileStream = new FileStream(path, FileMode.Create))
            {
                await file.CopyToAsync(fileStream);
            }

            relativePath = Regex.Replace(relativePath, "\\\\", "/");
            await _userService.UpdatePhotoPathAsync(userId, relativePath);

            return relativePath;
        }

        public async Task<string> UpdateLogoAsync(int? clubId, IFormFile file)
        {
            string path = string.Empty;
            if (clubId.HasValue)
            {
                path = await _clubService.GetNameAsync(clubId.Value);
            }
            var relativePath = path;
            if (string.IsNullOrEmpty(path) || !path.Contains(LogoPath))
            {
                var newName = (string.IsNullOrWhiteSpace(path) ? GenerateNewName() : path) + "." + file.FileName.Split('.').Last();
                var newPath = GenerateNewPath(LogoPath);
                relativePath = Path.Combine(newPath, newName);
                path = GetFullPath(relativePath);
            }
            else
            {
                path = GetFullPath(path);
            }
            
            file.CopyTo(new FileStream(path, FileMode.Create));
            relativePath = Regex.Replace(relativePath, "\\\\", "/");
            if (clubId.HasValue)
            {
                await _clubService.UpdateLogoAsync(clubId.Value, relativePath);
            }
            return relativePath;
        }

        public async Task<string> UpdateLogoAsync(string clubName, IFormFile file)
        {
            string path = clubName;

            var relativePath = path;
            if (string.IsNullOrEmpty(path) || !path.Contains(LogoPath))
            {
                var newName = (string.IsNullOrWhiteSpace(path)
                                  ? GenerateNewName()
                                  : path) + "." + file.FileName.Split('.').Last();
                var newPath = GenerateNewPath(LogoPath);
                relativePath = Path.Combine(newPath, newName);
                path = GetFullPath(relativePath);
            }
            else
            {
                path = GetFullPath(path);
            }

            var fileStream = File.Create(path);
            await file.CopyToAsync(fileStream);
            fileStream.Dispose();
            relativePath = Regex.Replace(relativePath, "\\\\", "/");

         //   await _clubService.UpdateLogoAsync(clubName, relativePath);
            
            return "/" + relativePath;
        }

        public async Task<IEnumerable<string>> UploadAsync(IFormFileCollection files)
        {
            var result = new List<string>();
            foreach (var file in files)
            {
                var newName = GenerateNewName() + "." + file.FileName.Split('.').Last();
                var newPath = GenerateNewPath(ImagesPath);
                var relativePath = Path.Combine(newPath, newName);
                var path = GetFullPath(relativePath);
                relativePath = Regex.Replace(relativePath, "\\\\", "/");

                using (var fileStream = new FileStream(path, FileMode.Create))
                {
                    await file.CopyToAsync(fileStream);
                }
                result.Add("/" + relativePath);
            }
            return result;
        }

        public async Task<string> UploadAsync(string base64File)
        {
           // base64File = base64File.Replace("data:image/webp;base64,", "");
            base64File = base64File.Replace("data:image/jpeg;base64,", "");
         //   string newName = GenerateNewName() + ".webp";
            string newName = GenerateNewName() + ".jpeg";
            var newPath = GenerateNewPath(ImagesPath);
            var relativePath = Path.Combine(newPath, newName);
            var path = GetFullPath(relativePath);
            relativePath = Regex.Replace(relativePath, "\\\\", "/");
            await File.WriteAllBytesAsync(path, Convert.FromBase64String(base64File));
            return "/" + relativePath;
        }

        public async Task<string> UpdatePersonPhotoAsync(string name, IFormFile file)
        {
            if (string.IsNullOrWhiteSpace(name))
            {
                return string.Empty;
            }
            var extension = file.FileName.Split('.').Last();
            var fileName = name.Replace(" ", "") + "." + extension;
            string path = PersonPath + fileName;

            var relativePath = path;
            path = GetFullPath(path);
            if (!Directory.Exists(PersonPath))
            {
                Directory.CreateDirectory(PersonPath);
            }

            using (var stream = new FileStream(path, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }
            relativePath = Regex.Replace(relativePath, "\\\\", "/");

            return relativePath;
        }


        #region private helpers 
        private string GenerateNewPath(string path)
        {
            var fullPath = GetFullPath(path);
            string directoryName;
            try
            {
                if (!Directory.Exists(fullPath))
                {
                    Directory.CreateDirectory(fullPath);
                }
                //workaround for folders _nw and _bl to skip them
                var directoryInfo = Directory.EnumerateDirectories(fullPath).LastOrDefault(x => !x.Contains("_"));
                if (directoryInfo == null)
                {
                    directoryInfo = "0";
                    Directory.CreateDirectory(Path.Combine(fullPath, directoryInfo));
                }
                var lastFolderName = int.Parse(directoryInfo.Split(Path.DirectorySeparatorChar).Last());
                directoryName = lastFolderName.ToString();
                if (Directory.GetFiles(directoryInfo).Length >= FilesPerFolder)
                {
                    directoryName = (lastFolderName + 1).ToString() + Path.DirectorySeparatorChar;
                    directoryInfo = Path.Combine(fullPath, directoryName);
                    Directory.CreateDirectory(directoryInfo);
                }
            }
            catch (Exception)
            {
                throw;
            }
            return Path.Combine(path, directoryName);
        }

        private static string GenerateNewName()
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
            var path = _appEnvironment.WebRootPath;
            return Path.Combine(path, prefix);
        }

        private string GetFullPath(string path1, string path2)
        {
            return GetFullPath(Path.Combine(path1, path2));
        }
        #endregion
    }
}
