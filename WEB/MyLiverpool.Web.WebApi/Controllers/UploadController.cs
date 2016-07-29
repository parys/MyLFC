using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using Microsoft.AspNet.Identity;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpool.Web.WebApi.Controllers
{
    [RoutePrefix("api/upload")]
    [Authorize]
    public class UploadController : ApiController
    {
        private readonly IUploadService _uploadService;

        public UploadController(IUploadService uploadService)
        {
            _uploadService = uploadService;
        }


        [Route("avatar")]
        [HttpPost]
        [Authorize]
        public async Task<IHttpActionResult> UploadAvatar(int userId)
        {
            if (!User.IsInRole(nameof(RolesEnum.UserStart)) && User.Identity.GetUserId<int>() != userId)
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

        [Route("clubLogo")]
        [HttpPost]
        [Authorize(Roles = "AdminStart")]
        public async Task<IHttpActionResult> ClubLogo(int? clubId)
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
                    var result = await _uploadService.UpdateLogoAsync(clubId, file);
                  
                    return Ok(result);
                }
            }
            return BadRequest();
        }

        [Authorize(Roles="NewsStart,BlogStart")]
        [Route("Images")]
        [HttpPost]
        public async Task<IHttpActionResult> UploadImages()
        {
            if (!Request.Content.IsMimeMultipartContent())
            {
                return BadRequest();
            }

            if (HttpContext.Current.Request.Files.AllKeys.Any())
            {
                if (HttpContext.Current.Request.Files.Count > 0)
                {
                    var files = HttpContext.Current.Request.Files;
                    var result = await _uploadService.UploadAsync(files);

                    return Ok(result);
                }
            }
            return BadRequest();
        }
    }
}
