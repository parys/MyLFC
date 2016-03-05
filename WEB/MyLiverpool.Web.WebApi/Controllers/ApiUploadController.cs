using System.IO;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using MyLiverpoolSite.Business.Contracts;

namespace MyLiverpool.Web.WebApi.Controllers
{
    [Authorize]
    [RoutePrefix("api/upload")]
    public class ApiUploadController : ApiController
    {
        private readonly IUploadService _uploadService;

        public ApiUploadController(IUploadService uploadService)
        {
            _uploadService = uploadService;
        }

        [Authorize]
        [Route("avatar")]
        [HttpPost]
        public async Task<IHttpActionResult> UploadAvatar(int userId)
        {
            if (!Request.Content.IsMimeMultipartContent())
            {
                return BadRequest();
            }

            if (HttpContext.Current.Request.Files.AllKeys.Any())
            {
                if (HttpContext.Current.Request.Files.Count > 0)
                {
                    var file = HttpContext.Current.Request.Files[0];
                    var result = await _uploadService.UpdateAvatarAsync(userId, file);
                  
                    return Ok(result);
                }
            }
            return BadRequest();
        }
    }
}
