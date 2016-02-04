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

        private string _path = "content\\images";
        [Route("")]
        [HttpGet]
  //      [ResponseType(typeof(ForumDto))]
        public async Task<IHttpActionResult> Get(string path)
        {
            if (path == "undefined")
            {
                path = _path;
            }
            if (!path.Contains(_path))
            {
                path = Path.Combine(_path, path);
            }
            //CHECK ONLY ALLOWED PATHES
            _path = HttpContext.Current.Server.MapPath("~") + path;
            var subdirectoryEntries = Directory.EnumerateFileSystemEntries(_path);

            return Ok(subdirectoryEntries);
        }
    }

   // public class ImageDto
}
