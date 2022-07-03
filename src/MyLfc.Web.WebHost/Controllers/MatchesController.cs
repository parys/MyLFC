using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.Comments.Queries;
using MyLfc.Application.HelpEntities;
using MyLfc.Application.Matches.Commands;
using MyLfc.Application.Matches.Queries;
using MyLfc.Common.Utilities.Extensions;
using MyLfc.Common.Web;
using MyLfc.Common.Web.Hubs;
using MyLfc.Data.Common;

namespace MyLfc.Web.WebHost.Controllers
{
    /// <inheritdoc />
    /// <summary>
    /// Manages matches.
    /// </summary>
    public class MatchesController : BaseController
    {
        /// <summary>
        /// Creates new match.
        /// </summary>
        /// <param name="request">Filled match model.</param>
        /// <returns>Created entity.</returns>
        [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpPost("")]
        public async Task<IActionResult> CreateAsync([FromBody]CreateMatchCommand.Request request)
        {
            CacheManager.Remove(CacheKeysConstants.MatchCalendarCacheConst);
            return Ok(await Mediator.Send(request));
        }

        /// <summary>
        /// Updates match.
        /// </summary>
        /// <param name="id">The identifier of entity.</param>
        /// <param name="request">Updated match dto.</param>
        /// <returns>Updated entity.</returns>
        [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpPut("{id:int}")]
        public async Task<IActionResult> UpdateAsync([FromRoute]int id, [FromBody]UpdateMatchCommand.Request request)
        {
            if (id != request.Id)
            {
                return BadRequest();
            }
            CacheManager.Remove(CacheKeysConstants.MatchCalendarCacheConst);
            return Ok(await Mediator.Send(request));
        }

        /// <summary>
        /// Returns match by id.
        /// </summary>
        /// <param name="request">The identifier.</param>
        /// <returns>Found match entity.</returns>
        [AllowAnonymous, HttpGet("{id:int}")]
        public async Task<IActionResult> GetAsync([FromRoute]GetMatchDetailQuery.Request request)
        {
            var result = await Mediator.Send(request);
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
                }))?.Value);
            if (!string.IsNullOrWhiteSpace(helpEntity))
            {
                if (int.TryParse(helpEntity, out var id))
                {
                    var result = await Mediator.Send(new GetMatchHeaderQuery.Request
                    {
                        Id = id
                    });
                    return Ok(result);
                }
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
                async () => await Mediator.Send(new GetMatchCalendarQuery.Request()));
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
        public async Task<IActionResult> DeleteAsync([FromRoute]DeleteMatchCommand.Request request)
        {
            CacheManager.Remove(CacheKeysConstants.MatchCalendarCacheConst);
            return Ok(await Mediator.Send(request));
        }

        /// <summary>
        /// Returns match persons by match id.
        /// </summary>
        /// <param name="request">The identifier of match.</param>
        /// <returns>List of match events for match.</returns>
        [AllowAnonymous, HttpGet("{matchId:int}/persons")]
        public async Task<IActionResult> GetForMatchAsync([FromRoute]GetMatchPersonListQuery.Request request)
        {
            return Ok(await Mediator.Send(request));
        }


        /// <summary>
        /// Returns match events by match id.
        /// </summary>
        /// <param name="request">The identifier of match.</param>
        /// <returns>List of match events for match.</returns>
        [AllowAnonymous, HttpGet("{matchId:int}/events")]
        public async Task<IActionResult> GetForMatchAsync([FromRoute] GetMatchEventListQuery.Request request)
        {
            return Ok((await Mediator.Send(request)).Results);
        }
        
        /// <summary>
        /// Toggle hide teams switcher for match.
        /// </summary>
        /// <returns>List of types.</returns>
        [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpPut("{MatchId:int}/hideTeams")]
        public async Task<IActionResult> ToggleHideTeamsAsync([FromRoute] ToggleHideTeamsCommand.Request request)
        {
            var result = await Mediator.Send(request);

            SignalRHub.Send(HubEndpointConstants.ToggleHideTeams, new { matchId = request.MatchId, result = result.Result} );

            return Ok(result);
        }


        /// <summary>
        /// Updates matches from 3rd party site.
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpPut("Calendar")]
        public async Task<IActionResult> UpdateCalendar([FromQuery] ParseMatchesCommand.Request request)
        {
            return Ok(await Mediator.Send(request));
        }
    }
}
