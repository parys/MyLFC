using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using AutoMapper;

namespace MyLiverpool.Web.WebApi.Controllers
{
    [RoutePrefix("api/images")]
    [Authorize(Roles = "NewsStart,BlogsStart")]
    public class ImageController : ApiController
    {
        private readonly IMapper _mapper;
        private const string PathContent = "\\content";
        private const string PathImages = "\\images";
        private const string PathFull = "\\content\\images";

        private readonly int _pathLength = PathFull.Length + 1;

        public ImageController(IMapper mapper)
        {
            _mapper = mapper;
        }


        [Route("")]
        [HttpGet]
        public async Task<IHttpActionResult> Get(string path)
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
            var fullPath = HttpContext.Current.Server.MapPath("~") + path;
            try
            {
                subdirectoryFolders = Directory.EnumerateDirectories(fullPath);
                subdirectoryFiles = Directory.EnumerateFiles(fullPath); //, "*.jpeg,*.jpg,*.png");
            }
            catch (DirectoryNotFoundException)
            {
                fullPath = HttpContext.Current.Server.MapPath("~") + PathFull;
                subdirectoryFolders = Directory.EnumerateDirectories(fullPath);
                subdirectoryFiles = Directory.EnumerateFiles(fullPath);
            }

            foreach (var entry in subdirectoryFolders)
            {
                files.Add(new ImageDto()
                {
                    Name = entry.Substring(entry.LastIndexOf('\\')+1),
                    Path = entry.Substring(entry.LastIndexOf(PathFull, StringComparison.InvariantCultureIgnoreCase)),
                    IsFolder = true
                });
            }
            foreach (var entry in subdirectoryFiles)
            {
                files.Add(new ImageDto()
                {
                    Name = entry.Substring(entry.LastIndexOf('\\')+1),
                    Path = entry.Substring(entry.LastIndexOf(PathFull, StringComparison.InvariantCultureIgnoreCase)),
                    IsFolder = false
                });
            }
            return await Task.FromResult(Ok(files));
        }
    }

    public class ImageDto
    {
        public string Path { get; set; }
        public string Name { get; set; }
        public bool IsFolder { get; set; }
    }
}
