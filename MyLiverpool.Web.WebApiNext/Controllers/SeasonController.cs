using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <summary>
    /// Manages seasons.
    /// </summary>
    [AllowAnonymous, Route("api/v1/[controller]")]
    public class SeasonController : Controller
    {
        private readonly ISeasonService _seasonService;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="seasonService"></param>
        public SeasonController(ISeasonService seasonService)
        {
            _seasonService = seasonService;
        }

        /// <summary>
        /// Returns seasons list.
        /// </summary>
        /// <returns>List with seasons.</returns>
        [AllowAnonymous, Route("list")]
        public async Task<IActionResult> GetListAsync()
        {
            var result = await _seasonService.GetListAsync();
            return Json(result);
        }

        /// <summary>
        /// Returns season by id.
        /// </summary>
        /// <param name="id">The identifier of season.</param>
        /// <returns>Found season by id.</returns>
        [AllowAnonymous, HttpGet("{id:int}")]
        public async Task<IActionResult> GetAsync(int id)
        {
            var result = await _seasonService.GetByIdAsync(id);
            return Json(result);
        }

        /// <summary>
        /// Returns season by id with matches.
        /// </summary>
        /// <param name="id">The identifier of season.</param>
        /// <returns>Found season by id with matches.</returns>
        [AllowAnonymous, HttpGet("getWithMatches/{id:int}")]
        public async Task<IActionResult> GetWithMatchesAsync(int id)
        {
            var result = await _seasonService.GetByIdWithMatchesAsync(id);
            return Json(result);
        }

        /// <summary>
        /// Creates new season.
        /// </summary>
        /// <param name="dto">Filled dto for new season.</param>
        /// <returns>Created season objec.t</returns>
        [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpPost("")]
        public async Task<IActionResult> CreateAsync([FromBody] SeasonDto dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(dto);
            }
            var result = await _seasonService.CreateAsync(dto);
            return Json(result);
        }

        /// <summary>
        /// Updates season.
        /// </summary>
        /// <param name="id">The identifier of updatable object.</param>
        /// <param name="dto">Filled dto contains new values.</param>
        /// <returns>Updated season object.</returns>
        [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpPut("{id:int}")]
        public async Task<IActionResult> UpdateAsync(int id, [FromBody] SeasonDto dto)
        {
            if (!ModelState.IsValid || id != dto.Id)
            {
                return BadRequest();
            }
            var result = await _seasonService.UpdateAsync(dto);
            return Json(result);
        }

        /// <summary>
        /// Deletes season.
        /// </summary>
        /// <param name="id">The identifier of removing object.</param>
        /// <returns>Result of deleting season.</returns>
        [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteAsync(int id)
        {
            var result = await _seasonService.DeleteAsync(id);
            return Ok(result);
        }
    }
}
