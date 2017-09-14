using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using AspNet.Security.OAuth.Validation;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Common.Utilities.Extensions;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <summary>
    /// Manages matches.
    /// </summary>
    [Authorize(AuthenticationSchemes = OAuthValidationDefaults.AuthenticationScheme), Route("api/v1/[controller]")]
    public class MatchController : Controller
    {
        private readonly IMatchService _matchService;
        private readonly IMemoryCache _cache;
        private readonly string calendarCacheConst = "calendarMatch";

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="matchService">Injected value.</param>
        /// <param name="cache"></param>
        public MatchController(IMatchService matchService, IMemoryCache cache)
        {
            _matchService = matchService;
            _cache = cache;
        }

        /// <summary>
        /// Creates new match.
        /// </summary>
        /// <param name="dto">Filled match model.</param>
        /// <returns>Created entity.</returns>
        [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpPost("")]
        public async Task<IActionResult> CreateAsync([FromBody]MatchDto dto)
        {
            if (dto == null || !ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var result = await _matchService.CreateAsync(dto);
            RemoveCalendarFromCache();
            return Ok(result);
        }

        /// <summary>
        /// Updates match.
        /// </summary>
        /// <param name="id">The identifier of entity.</param>
        /// <param name="dto">Updated match dto.</param>
        /// <returns>Updated entity.</returns>
        [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpPut("{id:int}")]
        public async Task<IActionResult> UpdateAsync(int id, [FromBody]MatchDto dto)
        {
            if (!ModelState.IsValid || id != dto.Id)
            {
                return BadRequest();
            }
            var result = await _matchService.UpdateAsync(dto);
            RemoveCalendarFromCache();
            return Ok(result);
        }      
        
        /// <summary>
        /// Returns match by id.
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <returns>Found match entity.</returns>
        [Authorize, HttpGet("{id:int}")]
        public async Task<IActionResult> GetAsync(int id)
        {
            if (id < 1)
            {
                id = 1;
            }
            var result = await _matchService.GetByIdAsync(id);
            return Ok(result);
        }

        /// <summary>
        /// Returns matches for calendar.
        /// </summary>
        /// <returns>Two matches for calendar.</returns>
        [AllowAnonymous, HttpGet("getForCalendar")]
        public async Task<IActionResult> GetForCalendarAsync()
        {
            var result = await _cache.GetOrCreateAsync(calendarCacheConst,
                async x => await _matchService.GetForCalendarAsync());
            return Ok(result);
        }

        /// <summary>
        /// Returns match list.
        /// </summary>
        /// <param name="page">The page of match list.</param>
        /// <returns>Selected page match list.</returns>
        [AllowAnonymous, HttpGet("list")]
        public async Task<IActionResult> GetListAsync([FromQuery]int page = 1)
        {
            if (page < 1)
            {
                page = 1;
            }
            var result = await _matchService.GetListAsync(page);
            return Ok(result);
        }

        /// <summary>
        /// Returns all types of matches.
        /// </summary>
        /// <returns>List of types.</returns>
        [Authorize, HttpGet("getTypes")]
        public async Task<IActionResult> GetTypes()
        {
            var list = new List<object>();
            foreach (MatchTypeEnum type in Enum.GetValues(typeof(MatchTypeEnum)))
            {
                list.Add(new { id = type, name = type.GetNameAttribute() });
            }
            return Ok(await Task.FromResult(list));
        }

        /// <summary>
        /// Delete match.
        /// </summary>
        /// <returns>List of types.</returns>
        [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteAsync(int id)
        {
            RemoveCalendarFromCache();
            var result = await _matchService.DeleteAsync(id);
            return Ok(result);
        }

        private void RemoveCalendarFromCache()
        {
            _cache.Remove(calendarCacheConst);
        }
    }
}
