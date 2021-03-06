using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.MatchEvents;
using MyLfc.Common.Web;
using MyLfc.Common.Web.Hubs;
using MyLiverpool.Common.Utilities.Extensions;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Web.WebApiNext.Controllers
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

            SignalRHub.Send(HubEndpointConstants.UpdateMatchEvent, new SignalrEntity<CreateMatchEventCommand.Response> { Entity = result, Type = ActionType.Add});

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

            SignalRHub.Send(HubEndpointConstants.UpdateMatchEvent, new SignalrEntity<UpdateMatchEventCommand.Response> { Entity = result, Type = ActionType.Update });

            CacheManager.Remove(CacheKeysConstants.MatchCalendarCacheConst);
            return Ok(result.Id);
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

            SignalRHub.Send(HubEndpointConstants.UpdateMatchEvent, new SignalrEntity<DeleteMatchEventCommand.Response> { Entity = result, Type = ActionType.Delete });

            CacheManager.Remove(CacheKeysConstants.MatchCalendarCacheConst);
            return Ok(result);
        }
    }
}
