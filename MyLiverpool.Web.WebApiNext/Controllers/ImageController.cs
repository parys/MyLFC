using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.DtoNext;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    [Route("api/[controller]")]
    [Authorize(Roles = "NewsStart,BlogsStart")]
    public class ImageController : Controller
    {
        private const string PathContent = "\\content";
        private const string PathImages = "\\images";
        private const string PathFull = "\\content\\images";

        private readonly int _pathLength = PathFull.Length + 1;

        public ImageController()
        {
        }

        [Route("")]
        [HttpGet]
        public async Task<IActionResult> Get(string path)
        {
            List<ImageDto> files = new List<ImageDto>();
            if (path == "undefined")
            {
                path = PathFull;
            }
            if (!path.Contains(PathContent))
            {
                path = System.IO.Path.Combine(PathFull, path);
            }
            //CHECK ONLY ALLOWED PATHES
            IEnumerable<string> subdirectoryFolders;
            IEnumerable<string> subdirectoryFiles;
            var fullPath = "";//todo HttpContext.Current.Server.MapPath("~") + path;
            try
            {
                subdirectoryFolders = Directory.EnumerateDirectories(fullPath);
                subdirectoryFiles = Directory.EnumerateFiles(fullPath); //, "*.jpeg,*.jpg,*.png");
            }
            catch (DirectoryNotFoundException)
            {
                fullPath = "";//todo HttpContext.Current.Server.MapPath("~") + PathFull;
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
