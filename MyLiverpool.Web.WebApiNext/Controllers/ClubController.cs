using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <summary>
    /// Manages club entity.
    /// </summary>
    [Authorize(Roles = nameof(RolesEnum.InfoStart)), Route("api/v1/[controller]")]
    public class ClubController : Controller
    {
        private readonly IClubService _clubService;
        private readonly IUploadService _uploadService;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="clubService"></param>
        /// <param name="uploadService"></param>
        public ClubController(IClubService clubService, IUploadService uploadService)
        {
            _clubService = clubService;
            _uploadService = uploadService;
        }

        /// <summary>
        /// Creates new club item.
        /// </summary>
        /// <param name="dto">New club model.</param>
        /// <returns></returns>
        [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpPost("")]
        public async Task<IActionResult> CreateAsync([FromBody]ClubDto dto)
        {
            if (dto == null || !ModelState.IsValid)
            {
                return BadRequest();
            }
            var result = await _clubService.CreateAsync(dto);
            return Ok(result);
        }

        /// <summary>
        /// Returns pageable club list.
        /// </summary>
        /// <param name="page">Current page.</param>
        /// <returns>Clubs list.</returns>
        [AllowAnonymous, HttpGet("list/{page}")]
        public async Task<IActionResult> GetListAsync(int page = 1)
        {
            if (page < 1)
            {
                page = 1;
            }
            var result = await _clubService.GetListAsync(page);
            return Ok(result);
        }

        /// <summary>
        /// Returns club by id.
        /// </summary>
        /// <param name="id">The identifier of club.</param>
        /// <returns>Club.</returns>
        [AllowAnonymous, HttpGet("{id:int}")]
        public async Task<IActionResult> GetAsync(int id)
        {
            var result = await _clubService.GetByIdAsync(id);
            return Ok(result);
        }

        /// <summary>
        /// Updates club.
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <param name="dto">Modified club entity.</param>
        /// <returns>Returns of editing.</returns>
        [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpPut("{id:int}")]
        public async Task<IActionResult> EditAsync(int id, [FromBody]ClubDto dto)
        {
            if ( id != dto.Id || !ModelState.IsValid)
            {
                return BadRequest();
            }
            var result = await _clubService.UpdateAsync(dto);
            return Ok(result);
        }

        /// <summary>
        /// Deletes club.
        /// </summary>
        /// <param name="id">The identifier of deleting club.</param>
        /// <returns>Result of deleting.</returns>
        [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteAsync(int id)
        {
            var result = await _clubService.DeleteAsync(id);
            return Ok(result);
        }

        /// <summary>
        /// Returns clubs which names contain types string.
        /// </summary>
        /// <param name="typed">Part of club name for search.</param>
        /// <returns>List of keyValuePair of club with identifiers.</returns>
        [AllowAnonymous, HttpGet("getClubsByName")]
        public async Task<IActionResult> GetClubsByNameAsync([FromQuery]string typed)
        {
            var result = await _clubService.GetClubsByNameWithoutLiverpoolAsync(typed);
            return Ok(result);
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

                return Ok(result);
            }
            return BadRequest();
        }
    }
}
