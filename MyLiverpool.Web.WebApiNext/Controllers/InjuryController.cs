using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <summary>
    /// Manages injuries.
    /// </summary>
    [Authorize(Roles = nameof(RolesEnum.InfoStart)), Route("api/v1/[controller]")]
    public class InjuryController : Controller
    {
        private readonly IInjuryService _injuryService;
        
        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="injuryService"></param>
        public InjuryController(IInjuryService injuryService)
        {
            _injuryService = injuryService;
        }

        /// <summary>
        /// Creates new injury item.
        /// </summary>
        /// <param name="dto">New injury model.</param>
        /// <returns></returns>
        [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpPost("")]
        public async Task<IActionResult> CreateAsync([FromBody]InjuryDto dto)
        {
            if (dto == null || !ModelState.IsValid)
            {
                return BadRequest();
            }
            var result = await _injuryService.CreateAsync(dto);
            return Ok(result);
        }

        /// <summary>
        /// Returns pageable injury list.
        /// </summary>
        /// <param name="page">Current page.</param>
        /// <returns>Injuries list.</returns>
        [AllowAnonymous, HttpGet("list/{page}")]
        public async Task<IActionResult> GetListAsync(int page = 1)
        {
            if (page < 1)
            {
                page = 1;
            }
            var result = await _injuryService.GetListAsync(page);
            return Ok(result);
        }

        /// <summary>
        /// Returns injury by id.
        /// </summary>
        /// <param name="id">The identifier of injury.</param>
        /// <returns>Injury model.</returns>
        [AllowAnonymous, HttpGet("{id:int}")]
        public async Task<IActionResult> GetAsync(int id)
        {
            var result = await _injuryService.GetByIdAsync(id);
            return Ok(result);
        }

        /// <summary>
        /// Updates injury.
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <param name="dto">Modified injury entity.</param>
        /// <returns>Returns of editing.</returns>
        [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpPut("{id:int}")]
        public async Task<IActionResult> EditAsync(int id, [FromBody]InjuryDto dto)
        {
            if (id != dto.Id || !ModelState.IsValid)
            {
                return BadRequest();
            }
            var result = await _injuryService.UpdateAsync(dto);
            return Ok(result);
        }

        /// <summary>
        /// Deletes injury.
        /// </summary>
        /// <param name="id">The identifier of deleting injury.</param>
        /// <returns>Result of deleting.</returns>
        [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteAsync(int id)
        {
            var result = await _injuryService.DeleteAsync(id);
            return Ok(result);
        }

        /// <summary>
        /// Returns transfers list for current moment.
        /// </summary>
        /// <returns>List with transfers.</returns>
        [AllowAnonymous, HttpGet("current")]
        public async Task<IActionResult> GetCurrentListAsync()
        {
            var result = await _injuryService.GetCurrentListAsync();
            return Json(result);
        }
    }
}
