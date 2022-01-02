using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.Injuries;
using MyLfc.Application.Injuries.Commands;
using MyLfc.Application.Injuries.Queries;
using MyLfc.Common.Web;
using MyLfc.Data.Common;

namespace MyLfc.Web.WebHost.Controllers
{
    /// <inheritdoc />
    /// <summary>
    /// Manages injuries.
    /// </summary>
    public class InjuriesController : BaseController
    {
        /// <summary>
        /// Creates new injury item.
        /// </summary>
        /// <param name="request">New injury model.</param>
        /// <returns></returns>
        [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpPost("")]
        public async Task<IActionResult> CreateAsync([FromBody]CreateInjuryCommand.Request request)
        {
            var result = await Mediator.Send(request);

            CacheManager.Remove(CacheKeysConstants.LastInjuries);
            return Ok(result);
        }

        /// <summary>
        /// Returns pageable injury list.
        /// </summary>
        /// <param name="request">Applied filters.</param>
        /// <returns>Injuries list.</returns>
        [AllowAnonymous, HttpGet("")]
        public async Task<IActionResult> GetListAsync([FromQuery] GetInjuryListQuery.Request request)
        {
            return Ok(await Mediator.Send(request));
        }

        /// <summary>
        /// Returns injury by id.
        /// </summary>
        /// <param name="request">The identifier of injury.</param>
        /// <returns>Injury model.</returns>
        [AllowAnonymous, HttpGet("{id:int}")]
        public async Task<IActionResult> GetAsync([FromRoute] GetInjuryDetailQuery.Request request)
        {
            return Ok(await Mediator.Send(request));
        }

        /// <summary>
        /// Updates injury.
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <param name="request">Modified injury entity.</param>
        /// <returns>Returns of editing.</returns>
        [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpPut("{id:int}")]
        public async Task<IActionResult> EditAsync(int id, [FromBody]UpdateInjuryCommand.Request request)
        {
            if (id != request.Id)
            {
                return BadRequest();
            }
            CacheManager.Remove(CacheKeysConstants.LastInjuries);
            return Ok(await Mediator.Send(request));
        }

        /// <summary>
        /// Deletes injury.
        /// </summary>
        /// <param name="request">The identifier of deleting injury.</param>
        /// <returns>Result of deleting.</returns>
        [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteAsync([FromRoute] DeleteInjuryCommand.Request request)
        {
            CacheManager.Remove(CacheKeysConstants.LastInjuries);
            return Ok(await Mediator.Send(request));
        }

        /// <summary>
        /// Returns injuries list for current moment.
        /// </summary>
        /// <returns>List with injuries.</returns>
        [AllowAnonymous, HttpGet("current")]
        public async Task<IActionResult> GetCurrentListAsync()
        {
            var result = await CacheManager.GetOrCreateAsync(CacheKeysConstants.LastInjuries,
                async () => await Mediator.Send(new GetCurrentInjuryListQuery.Request()));
            return Ok(result.Results);
        }
    }
}
