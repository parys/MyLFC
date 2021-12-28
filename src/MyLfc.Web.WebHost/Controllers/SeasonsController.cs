using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.HelpEntities;
using MyLfc.Application.Seasons;
using MyLfc.Data.Common;

namespace MyLfc.Web.WebApiNext.Controllers
{
    /// <inheritdoc />
    /// <summary>
    /// Manages seasons.
    /// </summary>
    public class SeasonsController : BaseController
    {
        /// <summary>
        /// Returns wishes list by filter.
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [AllowAnonymous, HttpGet("")]
        public async Task<IActionResult> List([FromQuery] GetSeasonListQuery.Request request)
        {
            request.PageSize = 200;
            return Ok(await Mediator.Send(request));
        }

        /// <summary>
        /// Returns season by id.
        /// </summary>
        /// <param name="request">The identifier of season.</param>
        /// <returns>Found season by id.</returns>
        [AllowAnonymous, HttpGet("{id:int}")]
        public async Task<IActionResult> GetAsync([FromRoute] GetSeasonDetailQuery.Request request)
        {
            return Ok(await Mediator.Send(request));
        }

        /// <summary>
        /// Returns season by id with matches for calendar.
        /// </summary>
        /// <param name="request">The identifier of season.</param>
        /// <returns>Found season by id with matches.</returns>
        [AllowAnonymous, HttpGet("{seasonId:int}/calendar")]
        public async Task<IActionResult> GetSeasonCalendarWithMatchesAsync([FromRoute]GetSeasonCalendarQuery.Request request)
        {
            return Ok(await Mediator.Send(request));
        }

        /// <summary>
        /// Returns statistics for season.
        /// </summary>
        /// <param name="request">The identifier of season.</param>
        /// <returns>Statistics for season.</returns>
        [AllowAnonymous, HttpGet("{seasonId:int}/statistics")]
        public async Task<IActionResult> GetStatisticsAsync([FromRoute] GetSeasonStatisticsQuery.Request request)
        {
            return Ok(await Mediator.Send(request));
        }

        /// <summary>
        /// Creates new season.
        /// </summary>
        /// <param name="request">Filled dto for new season.</param>
        /// <returns>Created season object.</returns>
        [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpPost("")]
        public async Task<IActionResult> CreateAsync([FromBody] CreateSeasonCommand.Request request)
        {
            return Ok((await Mediator.Send(request)).Id);
        }

        /// <summary>
        /// Updates season.
        /// </summary>
        /// <param name="id">The identifier of update object.</param>
        /// <param name="request">Filled dto contains new values.</param>
        /// <returns>Updated season object.</returns>
        [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpPut("{id:int}")]
        public async Task<IActionResult> UpdateAsync(int id, [FromBody] UpdateSeasonCommand.Request request)
        {
            if (id != request.Id)
            {
                return BadRequest();
            }
            return Ok((await Mediator.Send(request)).Id);
        }

        /// <summary>
        /// Deletes season.
        /// </summary>
        /// <param name="request">The identifier of removing object.</param>
        /// <returns>Result of deleting season.</returns>
        [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteAsync([FromRoute] DeleteSeasonCommand.Request request)
        {
            return Ok(await Mediator.Send(request));
        }

        /// <summary>
        /// Ser season as current.
        /// </summary>
        /// <param name="id">The identifier of season.</param>
        /// <returns></returns>
        [Authorize(Roles = nameof(RolesEnum.InfoFull)), HttpPut("{id:int}/SetAsCurrent")]
        public async Task<IActionResult> SetAsCurrentAsync([FromRoute] int id)
        {
            var request = new CreateOrUpdateEntityCommand.Request
            {
                Type = HelperEntityType.CurrentSeason,
                Value = id.ToString()
            };
            return Ok(await Mediator.Send(request));
        }
    }
}
