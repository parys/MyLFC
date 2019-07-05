using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.Clubs;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <summary>
    /// Manages club entity.
    /// </summary>
    public class ClubsController : BaseController
    {
        private readonly IUploadService _uploadService;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="uploadService"></param>
        public ClubsController(IUploadService uploadService)
        {
            _uploadService = uploadService;
        }

        /// <summary>
        /// Creates new club item.
        /// </summary>
        /// <param name="request">New club model.</param>
        /// <returns></returns>
        [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpPost("")]
        public async Task<IActionResult> CreateAsync([FromBody]CreateClubCommand.Request request)
        {
            return Ok(await Mediator.Send(request));
        }

        /// <summary>
        /// Returns pageable club list.
        /// </summary>
        /// <param name="request"></param>
        /// <returns>Clubs list.</returns>
        [AllowAnonymous, HttpGet("")]
        public async Task<IActionResult> GetListAsync([FromQuery] GetClubListQuery.Request request)
        {
            return Ok(await Mediator.Send(request));
        }

        /// <summary>
        /// Returns club by id.
        /// </summary>
        /// <param name="request">The identifier of club.</param>
        /// <returns>Club.</returns>
        [AllowAnonymous, HttpGet("{id:int}")]
        public async Task<IActionResult> GetAsync([FromRoute] GetClubDetailQuery.Request request)
        {
            return Ok(await Mediator.Send(request));
        }

        /// <summary>
        /// Updates club.
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <param name="request">Modified club entity.</param>
        /// <returns>Returns of editing.</returns>
        [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpPut("{id:int}")]
        public async Task<IActionResult> EditAsync(int id, [FromBody]UpdateClubCommand.Request request)
        {
            if (id != request.Id)
            {
                return BadRequest();
            }
            return Ok(await Mediator.Send(request));
        }

        /// <summary>
        /// Deletes club.
        /// </summary>
        /// <param name="request">The identifier of deleting club.</param>
        /// <returns>Result of deleting.</returns>
        [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteAsync([FromRoute]DeleteClubCommand.Request request)
        {
            return Ok(await Mediator.Send(request));
        }

        /// <summary>
        /// Uploads logo for club with given name.
        /// </summary>
        /// <param name="clubEnglishName">Club english name.</param>
        /// <returns>Result of uploading.</returns>
        [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpPost("logo/{clubEnglishName}")]
        public async Task<IActionResult> ClubLogo(string clubEnglishName)
        {
            //if (!Request.Content.IsMimeMultipartContent())
            //{
            //    return BadRequest();
            //}

            if (Request.Form.Files?.Count > 0)
            {
                var file = Request.Form.Files[0];
                var result = await _uploadService.UpdateLogoAsync(clubEnglishName.ToLower().Replace(" ", ""), file);

                return Ok(new { path = result });
            }
            return BadRequest();
        }
    }
}
