using System.IO;
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

        private string _path = "content";
        [Route("")]
        [HttpGet]
  //      [ResponseType(typeof(ForumDto))]
        public async Task<IHttpActionResult> Get(string path)
        {
            if (path.IsNullOrWhiteSpace() || path == "undefined")
            {
                path = "content";
            }
            //CHECK ONLY ALLOWED PATHES
            _path = HttpContext.Current.Server.MapPath("~") + path;
            string[] subdirectoryEntries = Directory.GetDirectories(_path);
            return Ok(subdirectoryEntries);
        }
    }
}
