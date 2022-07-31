using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.Transfers;
using MyLfc.Data.Common;

namespace MyLfc.Web.WebHost.Controllers;

/// <summary>
/// Manages transfers.
/// </summary>
public class TransfersController : BaseController
{
    /// <summary>
    /// Returns transfer by id.
    /// </summary>
    /// <param name="request">The identifier of transfer.</param>
    /// <returns>Found transfer by id.</returns>
    [AllowAnonymous, HttpGet("{id:int}")]
    public async Task<IActionResult> GetAsync([FromRoute] GetTransferDetailQuery.Request request)
    {
        return Ok(await Mediator.Send(request));
    }

    /// <summary>
    /// Returns filtered users list.
    /// </summary>
    /// <param name="request">Filters.</param>
    /// <returns>List with users.</returns>
    [AllowAnonymous, HttpGet]
    public async Task<IActionResult> List([FromQuery] GetTransferListQuery.Request request)
    {
        return Ok(await Mediator.Send(request));
    }

    /// <summary>
    /// Returns transfers list for current moment.
    /// </summary>
    /// <returns>List with transfers.</returns>
    [AllowAnonymous, HttpGet("current")]
    public async Task<IActionResult> GetCurrentListAsync()
    {
        return Ok(await Mediator.Send(new GetCurrentTransferListQuery.Request()));
    }

    /// <summary>
    /// Creates new transfer.
    /// </summary>
    /// <param name="request">Filled transfer model.</param>
    /// <returns>Created entity.</returns>
    [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpPost("")]
    public async Task<IActionResult> CreateAsync([FromBody]CreateTransferCommand.Request request)
    {
        return Ok(await Mediator.Send(request));
    }

    /// <summary>
    /// Updates transfer.
    /// </summary>
    /// <param name="id">The identifier of entity.</param>
    /// <param name="request">Updated transfer dto.</param>
    /// <returns>Updated entity.</returns>
    [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpPut("{id:int}")]
    public async Task<IActionResult> UpdateAsync(int id, [FromBody]UpdateTransferCommand.Request request)
    {
        if (id != request.Id)
        {
            return BadRequest();
        }
        return Ok(await Mediator.Send(request));
    }

    /// <summary>
    /// Deletes transfer.
    /// </summary>
    /// <param name="request">The identifier of removing object.</param>
    /// <returns>Result of deleting season.</returns>
    [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpDelete("{id:int}")]
    public async Task<IActionResult> DeleteAsync([FromRoute] DeleteTransferCommand.Request request)
    {
        return Ok(await Mediator.Send(request));
    }
}
