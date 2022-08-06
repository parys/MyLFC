using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.Features.Admin.Commands;
using MyLfc.Application.Features.HelpEntities.Commands;
using MyLfc.Common.Utilities;
using MyLfc.Data.Common;

namespace MyLfc.Web.WebHost.Controllers;

/// <inheritdoc />
/// <summary>
/// Controller for manage admin functions.
/// </summary>
[Authorize(Roles = nameof(RolesEnum.AdminStart))]
public class AdminController : BaseController
{
    /// <summary>
    /// Updates epl table.
    /// </summary>
    /// <returns>Result of update.</returns>
    [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpGet("updateTable")]
    public async Task<IActionResult> UpdateEplTable()
    {
        var result = await Mediator.Send(new UpdateEplTableCommand.Request());
        CacheManager.SetString(GlobalConstants.HelperEntity + HelperEntityType.EplTable, result.Result);
        return Ok(result.Result);
    }

    /// <summary>
    /// Recalculate comments count in materials.
    /// </summary>
    [HttpPut("RecalculateMaterialComments")]
    public async Task<IActionResult> RecalculateMaterialComments()
    {
        await Mediator.Send(new RecalculateMaterialCommentsCommand.Request());
        return Ok();
    }

    /// <summary>
    /// Calculate comments votes.
    /// </summary>
    [HttpPut("CalculateCommentVotes")]
    public async Task<IActionResult> CalculateCommentVotes()
    {
        await Mediator.Send(new CalculateCommentVotesCommand.Request());
        return Ok();
    }

    /// <summary>
    /// Recalculate user numbers.
    /// </summary>
    [HttpPut("RecalculateUsersNumbers")]
    public async Task<IActionResult> RecalculateUsersNumbers()
    {
        await Mediator.Send(new RecalculateUserNumbersCommand.Request());
        return Ok();
    }

    /// <summary>
    /// Recalculate comments numbers.
    /// </summary>
    [HttpPut("CalculateCommentsNumber")]
    public async Task<IActionResult> CalculateCommentsNumber()
    {
        await Mediator.Send(new CalculateCommentsNumberCommand.Request());
        return Ok();
    }

    /// <summary>
    /// Send test email.
    /// </summary>
    [HttpPut("SendTestEmail")]
    public async Task<IActionResult> SendTestEmail(SendTestEmailCommand.Request request)
    {
        await Mediator.Send(request);
        return Ok();
    }
}