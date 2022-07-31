using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.Stadiums;
using MyLfc.Data.Common;

namespace MyLfc.Web.WebHost.Controllers;

/// <summary>
/// Manages stadiums.
/// </summary>
public class StadiumsController: BaseController
{
    /// <summary>
    /// Returns stadium by id.
    /// </summary>
    /// <param name="request">The identifier of stadium.</param>
    /// <returns>Found stadium.</returns>
    [AllowAnonymous, HttpGet("{id:int}")]
    public async Task<IActionResult> GetAsync([FromRoute] GetStadiumDetailQuery.Request request)
    {
        return Ok(await Mediator.Send(request));
    }

    /// <summary>
    /// Returns stadiums list by filter.
    /// </summary>
    /// <param name="request"></param>
    /// <returns></returns>
    [AllowAnonymous, HttpGet("")]
    public async Task<IActionResult> List([FromQuery] GetStadiumListQuery.Request request)
    {
        return Ok(await Mediator.Send(request));
    }
    
    /// <summary>
    /// Creates new stadium.
    /// </summary>
    /// <param name="request">Filled dto for new stadium.</param>
    /// <returns>Created stadium.</returns>
    [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpPost("")]
    public async Task<IActionResult> CreateAsync([FromBody] CreateStadiumCommand.Request request)
    {
        return Ok(await Mediator.Send(request));
    }

    /// <summary>
    /// Updates season.
    /// </summary>
    /// <param name="id">The identifier of updatable object.</param>
    /// <param name="request">Filled dto contains new values.</param>
    /// <returns>Updated season object.</returns>
    [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpPut("{id:int}")]
    public async Task<IActionResult> UpdateAsync(int id, [FromBody] UpdateStadiumCommand.Request request)
    {
        if (id != request.Id)
        {
            return BadRequest();
        }
        return Ok(await Mediator.Send(request));
    }

    /// <summary>
    /// Deletes season.
    /// </summary>
    /// <param name="request">The identifier of removing object.</param>
    /// <returns>Result of deleting season.</returns>
    [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpDelete("{id:int}")]
    public async Task<IActionResult> DeleteAsync([FromRoute] DeleteStadiumCommand.Request request)
    {
        return Ok(await Mediator.Send(request));
    }
}
