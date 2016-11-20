using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.DTO;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <summary>
    /// Manages club entity.
    /// </summary>
    [Route("api/v1/[controller]")]
    [Authorize(Roles = nameof(RolesEnum.AdminStart))]
    public class ClubController : Controller
    {
        private readonly IClubService _clubService;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="clubService"></param>
        public ClubController(IClubService clubService)
        {
            _clubService = clubService;
        }

        /// <summary>
        /// Creates new club item.
        /// </summary>
        /// <param name="dto">New club model.</param>
        /// <returns></returns>
        [Authorize, HttpPost("")]
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
        [Authorize, HttpGet("list/{page}")]
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
        [Authorize, HttpGet("{id:int}")]
        public async Task<IActionResult> GetAsync(int id)
        {
            var result = await _clubService.GetAsync(id);
            return Ok(result);
        }

        /// <summary>
        /// Updates club.
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <param name="dto">Modified club entity.</param>
        /// <returns>Returns of editing.</returns>
        [Authorize, HttpPut("{id:int}")]
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
        [Authorize, HttpDelete("{id:int}")]
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
        [Authorize, HttpGet("getClubsByName/{typed?}")]
        public async Task<IActionResult> GetClubsByNameAsync(string typed)
        {
            var result = await _clubService.GetClubsByNameAsync(typed);
            return Ok(result);
        }
    }
}
