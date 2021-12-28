using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.Matches;
using MyLfc.Application.MatchEvents;
using MyLfc.Common.Utilities.Extensions;
using MyLfc.Common.Web;
using MyLfc.Common.Web.Hubs;
using MyLfc.Data.Common;

namespace MyLfc.Web.WebHost.Controllers
{
    /// <inheritdoc />
    /// <summary>
    /// Manages match events.
    /// </summary>
    public class MatchEventsController : BaseController
    {
        /// <summary>
        /// Creates new match event.
        /// </summary>
        /// <param name="request">Filled match event model.</param>
        /// <returns>Created entity.</returns>
        [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpPost("")]
        public async Task<IActionResult> CreateAsync([FromBody]CreateMatchEventCommand.Request request)
        {
            var result = await Mediator.Send(request);

            SignalRHub.Send(HubEndpointConstants.UpdateMatchEvent, new SignalrEntity<UpsertMatchEventCommand.Response> { Entity = result.MatchEvent, Type = ActionType.Add});

            SignalRHub.Send(HubEndpointConstants.UpdateMatch, new SignalrEntity<GetMatchDetailQuery.Response> { Entity = result.Match, Type = ActionType.Update });
            CacheManager.Remove(CacheKeysConstants.MatchCalendarCacheConst);
            return Ok(result);
        }

        /// <summary>
        /// Updates match event.
        /// </summary>
        /// <param name="id">The identifier of entity.</param>
        /// <param name="request">Updated match event dto.</param>
        /// <returns>Updated entity.</returns>
        [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpPut("{id:int}")]
        public async Task<IActionResult> UpdateAsync([FromRoute]int id, [FromBody]UpdateMatchEventCommand.Request request)
        {
            if (id != request.Id)
            {
                return BadRequest();
            }
            var result = await Mediator.Send(request);

            SignalRHub.Send(HubEndpointConstants.UpdateMatchEvent, new SignalrEntity<UpsertMatchEventCommand.Response> { Entity = result.MatchEvent, Type = ActionType.Update });

            SignalRHub.Send(HubEndpointConstants.UpdateMatch, new SignalrEntity<GetMatchDetailQuery.Response> { Entity = result.Match, Type = ActionType.Update});

            CacheManager.Remove(CacheKeysConstants.MatchCalendarCacheConst);
            return Ok(result.MatchEvent.Id);
        }

        /// <summary>
        /// Returns all types of match events.
        /// </summary>
        /// <returns>List of types.</returns>
        [Authorize, HttpGet("getTypes")]
        public IActionResult GetTypes()
        {
            var list = new List<object>();
            foreach (MatchEventType type in Enum.GetValues(typeof(MatchEventType)))
            {
                list.Add(new { id = type, name = type.GetNameAttribute() });
            }
            return Ok(list);
        }

        /// <summary>
        /// Deletes match.
        /// </summary>
        /// <returns>Result of deletion.</returns>
        [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteAsync([FromRoute]DeleteMatchEventCommand.Request request)
        {
            var result = await Mediator.Send(request);

            SignalRHub.Send(HubEndpointConstants.UpdateMatchEvent, new SignalrEntity<UpsertMatchEventCommand.Response> { Entity = result.MatchEvent, Type = ActionType.Delete });
            SignalRHub.Send(HubEndpointConstants.UpdateMatch, new SignalrEntity<GetMatchDetailQuery.Response> { Entity = result.Match, Type = ActionType.Update });
            
            CacheManager.Remove(CacheKeysConstants.MatchCalendarCacheConst);
            return Ok(result);
        }
    }
}
