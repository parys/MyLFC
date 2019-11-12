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
        public readonly string ImagesPath = Path.Combine(ContentPath, "images");
        private readonly IHostingEnvironment _appEnvironment;

        public UploadService(IHostingEnvironment appEnvironment)
        {
            _appEnvironment = appEnvironment;
        }
        
        public async Task<IEnumerable<string>> UploadAsync(IFormFileCollection files)
        {
            var result = new List<string>();
            foreach (var file in files)
            {
                var newName = PathHelpers.GenerateNewName() + "." + file.FileName.Split('.').Last();
                var newPath = PathHelpers.GenerateNewPath(ImagesPath, _appEnvironment.WebRootPath);
                var relativePath = Path.Combine(newPath, newName);
                var path = Path.Combine(_appEnvironment.WebRootPath, relativePath);
                relativePath = Regex.Replace(relativePath, "\\\\", "/");

                using (var fileStream = new FileStream(path, FileMode.Create))
                {
                    await file.CopyToAsync(fileStream);
                }
                result.Add("/" + relativePath);
            }
            return result;
        }

        private const string jpegBase64 = "data:image/jpeg;base64,";
        private const string webpBase64 = "data:image/webp;base64,";
        public async Task<string> UploadAsync(string base64File)
        {
            string extension = "jpeg";
            if (base64File.Contains(jpegBase64))
            {
                extension = "jpeg";
                base64File = base64File.Replace(jpegBase64, "");
            } 
            else if (base64File.Contains(webpBase64))
            {
                extension = "webp";
                base64File = base64File.Replace(webpBase64, "");
            }
            base64File = base64File.Replace(",", "");
            string newName = PathHelpers.GenerateNewName() + "." + extension;
            var newPath = PathHelpers.GenerateNewPath(ImagesPath, _appEnvironment.WebRootPath);
            var relativePath = Path.Combine(newPath, newName);
            var path = Path.Combine(_appEnvironment.WebRootPath, relativePath);
            relativePath = Regex.Replace(relativePath, "\\\\", "/");
            await File.WriteAllBytesAsync(path, Convert.FromBase64String(base64File));
            return "/" + relativePath;
        }
    }
}
