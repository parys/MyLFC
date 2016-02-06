using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using Microsoft.Ajax.Utilities;

namespace MyLiverpool.Web.WebApi.Controllers
{
    [RoutePrefix("api/images")]
   // [Authorize(Roles = "NewsStart,BlogsStart")]
    public class ApiImageController : ApiController
    {
        private const string Path = "\\content\\images";
        private readonly int _pathLength = Path.Length + 1;

        [Route("")]
        [HttpGet]
  //      [ResponseType(typeof(ForumDto))]
        public async Task<IHttpActionResult> Get(string path)
        {
            List<ImageDto> files = new List<ImageDto>();
            if (path == "undefined")
            {
                path = Path;
            }
            if (!path.Contains(Path))
            {
                path = System.IO.Path.Combine(Path, path);
            }
            //CHECK ONLY ALLOWED PATHES
            var fullPath = HttpContext.Current.Server.MapPath("~") + path;
            var subdirectoryFolders = Directory.EnumerateDirectories(fullPath);
            var subdirectoryFiles = Directory.EnumerateFiles(fullPath);//, "*.jpeg,*.jpg,*.png");
            foreach (var entry in subdirectoryFolders)
            {
                files.Add(new ImageDto()
                {
                    Name = entry.Substring(entry.LastIndexOf('\\')+1),
                    Path = entry.Substring(entry.LastIndexOf(Path, StringComparison.InvariantCultureIgnoreCase)),
                    IsFolder = true
                });
            }
            foreach (var entry in subdirectoryFiles)
            {
                files.Add(new ImageDto()
                {
                    Name = entry.Substring(entry.LastIndexOf('\\')+1),
                    Path = entry.Substring(entry.LastIndexOf(Path, StringComparison.InvariantCultureIgnoreCase)),
                    IsFolder = false
                });
            }
            return Ok(files);
        }
    }

    public class ImageDto
    {
        public string Path { get; set; }
        public string Name { get; set; }
        public bool IsFolder { get; set; }
    }
}
