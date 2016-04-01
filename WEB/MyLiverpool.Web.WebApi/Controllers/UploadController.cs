using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using Microsoft.AspNet.Identity;
using MyLiverpoolSite.Business.Contracts;

namespace MyLiverpool.Web.WebApi.Controllers
{
    [Authorize]
    [RoutePrefix("api/upload")]
    public class UploadController : ApiController
    {
        private readonly IUploadService _uploadService;

        public UploadController(IUploadService uploadService)
        {
            _uploadService = uploadService;
        }

        [Authorize]
        [Route("avatar")]
        [HttpPost]
        public async Task<IHttpActionResult> UploadAvatar(int userId)
        {
            if (!User.IsInRole("UsersStart") && User.Identity.GetUserId<int>() != userId)
            {
                return StatusCode(HttpStatusCode.Forbidden);
            }
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
