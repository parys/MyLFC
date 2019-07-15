using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.Comments;
using MyLfc.Application.HelpEntities;
using MyLfc.Application.Matches;
using MyLfc.Common.Web;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Common.Utilities.Extensions;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <inheritdoc />
    /// <summary>
    /// Manages matches.
    /// </summary>
    public class MatchesController : BaseController
    {
        private readonly IMatchService _matchService;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="matchService">Injected value.</param>
        public MatchesController(IMatchService matchService)
        {
            _matchService = matchService;
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
            CacheManager.Remove(CacheKeysConstants.MatchCalendarCacheConst);
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
            CacheManager.Remove(CacheKeysConstants.MatchCalendarCacheConst);
            return Ok(result);
        }      
        
        /// <summary>
        /// Returns match by id.
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <returns>Found match entity.</returns>
        [AllowAnonymous, HttpGet("{id:int}")]
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
        /// Returns match comments.
        /// </summary>
        /// <param name="request">The identifier.</param>
        /// <returns>Found match entity.</returns>
        [AllowAnonymous, HttpGet("{matchId:int}/comments")]
        public async Task<IActionResult> GetComments([FromRoute]GetCommentListByEntityIdQuery.Request request)
        {
            return Ok(await Mediator.Send(request));
        }

        /// <summary>
        /// Returns header match.
        /// </summary>
        /// <returns>Found match entity.</returns>
        [AllowAnonymous, HttpGet("header")]
        public async Task<IActionResult> GetForHeaderAsync()
        {
            var helpEntity = await CacheManager.GetOrCreateAsync(CacheKeysConstants.HeaderMatchId,
                async () => (await Mediator.Send(new GetEntityQuery.Request
                {
                    Type = HelperEntityType.HeaderMatch
                })).Value);
            if (!string.IsNullOrWhiteSpace(helpEntity))
            {
                var result = await _matchService.GetByIdAsync(int.Parse(helpEntity));//todo add cache?
                result.Events = new List<MatchEventDto>(); //not need events on UI for header
                return Ok(result);
            }
            return Ok(null);
        }

        /// <summary>
        /// Set new match id value as header match id.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpPut("{id:int}/setAsHeader")]
        public async Task<IActionResult> SetAsHeader(int id)
        {
            await Mediator.Send(new CreateOrUpdateEntityCommand.Request
            {
                Type = HelperEntityType.HeaderMatch,
                Value = id > 0 ? id.ToString() : null
            });
            CacheManager.Remove(CacheKeysConstants.HeaderMatchId);
            return Ok(true);
        }

        /// <summary>
        /// Returns matches for calendar.
        /// </summary>
        /// <returns>Two matches for calendar.</returns>
        [AllowAnonymous, HttpGet("getForCalendar")]
        public async Task<IActionResult> GetForCalendarAsync()
        {
            var result = await CacheManager.GetOrCreateAsync(CacheKeysConstants.MatchCalendarCacheConst,
                async () => await _matchService.GetForCalendarAsync());
            return Ok(result);
        }

        /// <summary>
        /// Returns matches list by filter.
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [AllowAnonymous, HttpGet("")]
        public async Task<IActionResult> List([FromQuery] GetMatchListQuery.Request request)
        {
            return Ok(await Mediator.Send(request));
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
            CacheManager.Remove(CacheKeysConstants.MatchCalendarCacheConst);
            var result = await _matchService.DeleteAsync(id);
            return Ok(result);
        }
    }
}
