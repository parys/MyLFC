using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.DtoNext;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <summary>
    /// Manages images.
    /// </summary>
    [Authorize(Roles = nameof(RolesEnum.NewsStart) +"," + nameof(RolesEnum.BlogStart)), Route("api/v1/[controller]")]
    public class ImageController : Controller
    {
        private const string PathContent = "\\content";
        private const string PathImages = "\\images";
        private const string PathFull = "\\content\\images";
        private readonly IHostingEnvironment _env;

        private readonly int _pathLength = PathFull.Length + 1;

        /// <summary>
        /// Constructor.
        /// </summary>
        public ImageController(IHostingEnvironment environment)
        {
            _env = environment;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="path"></param>
        /// <returns></returns>
        [HttpGet, Route("")]
        public async Task<IActionResult> Get([FromQuery]string path)
        {
            List<ImageDto> files = new List<ImageDto>();
            if (string.IsNullOrWhiteSpace(path) || path == "undefined")
            {
                path = PathFull;
            }
            if (!path.Contains(PathContent))
            {
                path = Path.Combine(PathFull, path);
            }
            //CHECK ONLY ALLOWED PATHES
            IEnumerable<string> subdirectoryFolders;
            IEnumerable<string> subdirectoryFiles;
            var fullPath = _env.WebRootPath + path;
            try
            {
                subdirectoryFolders = Directory.EnumerateDirectories(fullPath);
                subdirectoryFiles = Directory.EnumerateFiles(fullPath); //, "*.jpeg,*.jpg,*.png");
            }
            catch (DirectoryNotFoundException)
            {
                fullPath = _env.ContentRootPath + PathFull;
                subdirectoryFolders = Directory.EnumerateDirectories(fullPath);
                subdirectoryFiles = Directory.EnumerateFiles(fullPath);
            }

            foreach (var entry in subdirectoryFolders)
            {
                files.Add(new ImageDto()
                {
                    Name = entry.Substring(entry.LastIndexOf('\\') + 1),
                    Path = entry.Substring(entry.LastIndexOf(PathFull, StringComparison.OrdinalIgnoreCase)),
                    IsFolder = true
                });
            }
            foreach (var entry in subdirectoryFiles)
            {
                files.Add(new ImageDto()
                {
                    Name = entry.Substring(entry.LastIndexOf('\\') + 1),
                    Path = entry.Substring(entry.LastIndexOf(PathFull, StringComparison.OrdinalIgnoreCase)),
                    IsFolder = false
                });
            }
            return await Task.FromResult(Ok(files));
        }
    }
}
