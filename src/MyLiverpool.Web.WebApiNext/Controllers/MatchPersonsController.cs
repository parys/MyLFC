using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.Matches;
using MyLfc.Application.MatchPersons;
using MyLiverpool.Common.Utilities.Extensions;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <inheritdoc />
    /// <summary>
    /// Manages match events.
    /// </summary>
    public class MatchPersonsController : BaseController
    {
        /// <summary>
        /// Creates new match person.
        /// </summary>
        /// <param name="request">Filled match person model.</param>
        /// <returns>Created entity.</returns>
        [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpPost("")]
        public async Task<IActionResult> CreateAsync([FromBody]UpdateMatchPersonCommand.Request request)
        {
            return Ok(await Mediator.Send(request));
        }

        /// <summary>
        /// Updates match person.
        /// </summary>
        /// <param name="request">Updated match event dto.</param>
        /// <returns>Updated entity.</returns>
        [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpPut("")]
        public async Task<IActionResult> UpdateAsync([FromBody]UpdateMatchPersonCommand.Request request)
        {
            return Ok(await Mediator.Send(request));
        }
        
        /// <summary>
        /// Returns match persons by match id.
        /// </summary>
        /// <param name="id">The identifier of match.</param>
        /// <returns>List of match events for match.</returns>
        [AllowAnonymous, HttpGet("getForMatch/{id:int}")]
        [Obsolete("Remove after 10 AUg 19")]
        public async Task<IActionResult> GetForMatchAsync(int id)
        {
            var request = new GetMatchPersonListQuery.Request {MatchId = id};
            return Ok(await Mediator.Send(request));
        }

        /// <summary>
        /// Returns all types of match persons.
        /// </summary>
        /// <returns>List of types.</returns>
        [Authorize, HttpGet("getTypes")]
        public async Task<IActionResult> GetTypes()
        {
            var list = new List<object>();
            foreach (MatchPersonType type in Enum.GetValues(typeof(MatchPersonType)))
            {
                list.Add(new { key = type, value = type.GetNameAttribute() });
            }
            return Ok(await Task.FromResult(list));
        }

        /// <summary>
        /// Delete match person.
        /// </summary>
        /// <returns>Result of deleting.</returns>
        [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpDelete("{matchId:int}/{personId:int}")]
        public async Task<IActionResult> DeleteAsync([FromRoute] DeleteMatchPersonCommand.Request request)
        {
            return Ok(await Mediator.Send(request));
        }
    }
}
