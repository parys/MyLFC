using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    public class UploadController : Controller
    {
        private readonly IUploadService _uploadService;

        public UploadController(IUploadService uploadService)
        {
            _uploadService = uploadService;
        }


        [Route("avatar")]
        [HttpPost]
        [Authorize]
        public async Task<ActionResult> UploadAvatar(int userId)
        {
            if (!User.IsInRole(nameof(RolesEnum.UserStart)) && int.Parse(User.Identity.Name) != userId)
            {
                return StatusCode((int) HttpStatusCode.Forbidden);
            }
          //  if (!Request.Form.IsMimeMultipartContent())
          //  {
         //       return BadRequest();
          //  }

            if (Request.Form.Files != null && Request.Form.Files.Count > 0)
            {
              //  if (HttpContext.Current.Request.Files !=.Count > 0)
                {
                    var file = Request.Form.Files[0];
                    var result = await _uploadService.UpdateAvatarAsync(userId, file);

                    return Ok(result);
                }
            }
            return BadRequest();
        }

        [Route("clubLogo")]
        [HttpPost]
        [Authorize(Roles = "AdminStart")]
        public async Task<IActionResult> ClubLogo(int? clubId)
        {
            //if (!Request.Content.IsMimeMultipartContent())
            //{
            //    return BadRequest();
            //}

            if (Request.Form.Files != null && Request.Form.Files.Count > 0)
            {
            //    if (HttpContext.Current.Request.Files.Count > 0)
                {
                    var file = Request.Form.Files[0];
                    var result = await _uploadService.UpdateLogoAsync(clubId, file);

                    return Ok(result);
                }
            }
            return BadRequest();
        }

        [Authorize(Roles = "NewsStart,BlogStart")]
        [Route("Images")]
        [HttpPost]
        public async Task<IActionResult> UploadImages()
        {
            //if (!Request.Content.IsMimeMultipartContent())
            //{
            //    return BadRequest();
            //}

            if (Request.Form.Files != null && Request.Form.Files.Count > 0)
            {
               // if (HttpContext.Current.Request.Files.Count > 0)
                {
                    var files = Request.Form.Files;
                    var result = await _uploadService.UploadAsync(files);

                    return Ok(result);
                }
            }
            return BadRequest();
        }
    }
}
