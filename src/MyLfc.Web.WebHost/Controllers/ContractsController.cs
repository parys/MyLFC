using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.Contracts;
using MyLfc.Data.Common;

namespace MyLfc.Web.WebHost.Controllers;

/// <inheritdoc />
/// <summary>
/// Manages injuries.
/// </summary>
public class ContractsController : BaseController
{
    /// <summary>
    /// Creates new contract item.
    /// </summary>
    /// <param name="request">New contract model.</param>
    /// <returns></returns>
    [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpPost("")]
    public async Task<IActionResult> CreateAsync([FromBody]CreateContractCommand.Request request)
    {
        var result = await Mediator.Send(request);

        return Ok(result);
    }

    /// <summary>
    /// Returns pageable contracts list.
    /// </summary>
    /// <param name="request">Applied filters.</param>
    /// <returns>Injuries list.</returns>
    [AllowAnonymous, HttpGet("")]
    public async Task<IActionResult> GetListAsync([FromQuery] GetContractListQuery.Request request)
    {
        return Ok(await Mediator.Send(request));
    }

    /// <summary>
    /// Returns contract by id.
    /// </summary>
    /// <param name="request">The identifier of contract.</param>
    /// <returns>Contract model.</returns>
    [AllowAnonymous, HttpGet("{id:int}")]
    public async Task<IActionResult> GetAsync([FromRoute] GetContractDetailQuery.Request request)
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
    public async Task<IActionResult> EditAsync(int id, [FromBody]UpdateContractCommand.Request request)
    {
        if (id != request.Id)
        {
            return BadRequest();
        }
        return Ok(await Mediator.Send(request));
    }

    /// <summary>
    /// Deletes injury.
    /// </summary>
    /// <param name="request">The identifier of deleting injury.</param>
    /// <returns>Result of deleting.</returns>
    [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpDelete("{id:int}")]
    public async Task<IActionResult> DeleteAsync([FromRoute] DeleteContractCommand.Request request)
    {
        return Ok(await Mediator.Send(request));
    }

    /// <summary>
    /// Returns contracts list for current moment.
    /// </summary>
    /// <returns>List with contracts.</returns>
    [AllowAnonymous, HttpGet("current")]
    public async Task<IActionResult> GetCurrentListAsync([FromQuery] GetCurrentContractListQuery.Request request)
    {
        return Ok(await Mediator.Send(request));
    }
}
