using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.Matches;
using MyLfc.Application.MatchEvents;
using MyLfc.Common.Web;
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

            CacheManager.Remove(CacheKeysConstants.MatchCalendarCacheConst);
            return Ok(result);
        }


        /// <summary>
        /// Returns match events by match id.
        /// </summary>
        /// <param name="request">The identifier of match.</param>
        /// <returns>List of match events for match.</returns>
        [Authorize, HttpGet("getForMatch/{matchId:int}")]
        [Obsolete("Remove after 10 AUg 19")]
        public async Task<IActionResult> GetForMatchAsync([FromRoute] GetMatchEventListQuery.Request request)
        {
            var result = await Mediator.Send(request);
            return Ok(result.Results);
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

            CacheManager.Remove(CacheKeysConstants.MatchCalendarCacheConst);
            return Ok(result);
        }
    }
}
