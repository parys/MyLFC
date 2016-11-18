using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using MyLiverpool.Business.Contracts;

namespace MyLiverpool.Business.Services.Services
{
    public class UploadService : IUploadService
    {
        public const string AvatarPath = "Content\\avatars\\";
        public const string LogoPath = "Content\\logos\\";
        public const string ImagesPath = "Content\\images\\";
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

            file.CopyTo(new FileStream(path, FileMode.Create));
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

         //   await _clubService.UpdateLogoAsync(clubName, relativePath);
            
            return relativePath;
        }

        public async Task<IEnumerable<string>> UploadAsync(IFormFileCollection files)
        {
            var result = new List<string>();
            foreach (var file in files)
            {
               //bug !!!not checked!!! var file = files[fileName];
                var newName = GenerateNewName() + "." + file.FileName.Split('.').Last();
                var newPath = GenerateNewPath(ImagesPath);
                var relativePath = Path.Combine(newPath, newName);
                var path = GetFullPath(relativePath);

                using (var fileStream = new FileStream(path, FileMode.Create))
                {
                    await file.CopyToAsync(fileStream);
                }
                result.Add(relativePath);
            }
            return result;
        }

        #region private helpers 
        private string GenerateNewPath(string path)
        {
            var fullPath = GetFullPath(path);
            string directoryName;
            try
            {
                var directoryInfo = Directory.EnumerateDirectories(fullPath).LastOrDefault();
                if (directoryInfo == null)
                {
                    directoryInfo = "0";
                    Directory.CreateDirectory(fullPath + "\\0\\");
                }
                var lastFolderName = int.Parse(directoryInfo.Split('\\').Last());
                directoryName = lastFolderName.ToString();
                if (Directory.GetFiles(directoryInfo).Length >= FilesPerFolder)
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
            var path = _appEnvironment.WebRootPath;
            return Path.Combine(path, prefix);
        }
        #endregion
    }
}
