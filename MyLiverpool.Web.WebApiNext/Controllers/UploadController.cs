using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Data.Common;
namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <summary>
    /// Manages for uploads.
    /// </summary>
    [Route("api/v1/[controller]")]
    [Authorize]
    public class UploadController : Controller
    {
        private readonly IUploadService _uploadService;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="uploadService"></param>
        public UploadController(IUploadService uploadService)
        {
            _uploadService = uploadService;
        }

        /// <summary>
        /// Uploads logo for club with given name.
        /// </summary>
        /// <param name="clubEnglishName">Club english name.</param>
        /// <returns>Result of uploading.</returns>
        [Authorize(Roles = nameof(RolesEnum.AdminStart)), HttpPost("clubLogo/{clubEnglishName}")]
        public async Task<IActionResult> ClubLogo(string clubEnglishName)
        {
            //if (!Request.Content.IsMimeMultipartContent())
            //{
            //    return BadRequest();
            //}

            if (Request.Form.Files != null && Request.Form.Files.Count > 0)
            {
                var file = Request.Form.Files[0];
                var result = await _uploadService.UpdateLogoAsync(clubEnglishName, file);

                return Ok(result);
            }
            return BadRequest();
        }
    }
}
