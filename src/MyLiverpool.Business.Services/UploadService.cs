﻿using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Common.Utilities;

namespace MyLiverpool.Business.Services
{
    public class UploadService : IUploadService
    {
        public const string ContentPath = "content";
        public readonly string ImagesPath = Path.Combine(ContentPath, "images");
        private readonly IWebHostEnvironment _appEnvironment;
        private readonly ILogger _logger;

        public UploadService(IWebHostEnvironment appEnvironment, ILogger<UploadService> logger)
        {
            _appEnvironment = appEnvironment;
            _logger = logger;
        }
        
        public async Task<IEnumerable<string>> UploadAsync(IFormFileCollection files)
        {
            var result = new List<string>();
            foreach (var file in files)
            {
                var newName = PathHelpers.GenerateNewName() + "." + file.FileName.Split('.').Last();
                var newPath = PathHelpers.GenerateNewPath(ImagesPath, _appEnvironment.WebRootPath, _logger);
                var relativePath = Path.Combine(newPath, newName);
                var path = Path.Combine(_appEnvironment.WebRootPath, relativePath);
                relativePath = Regex.Replace(relativePath, "\\\\", "/");

                await using (var fileStream = new FileStream(path, FileMode.Create))
                {
                    await file.CopyToAsync(fileStream);
                }
                result.Add("/" + relativePath);
            }
            return result;
        }

        public async Task<string> UploadAsync(string base64File)
        {
            return await FileHelper.SaveMaterialPhotoAsync(base64File, ImagesPath, _appEnvironment.WebRootPath);
        }
    }
}
