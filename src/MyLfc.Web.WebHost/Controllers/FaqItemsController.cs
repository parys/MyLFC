using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.Features.FaqItems.Commands;
using MyLfc.Application.Features.FaqItems.Queries;
using MyLfc.Data.Common;

namespace MyLfc.Web.WebHost.Controllers;

/// <inheritdoc />
/// <summary>
/// Controller for manage faq categories functions.
/// </summary>
[Authorize(Roles = nameof(RolesEnum.InfoStart))]
public class FaqItemsController : BaseController
{
    /// <summary>
    /// Create faq item.
    /// </summary>
    /// <returns>Result of create.</returns>
    [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpPost]
    public async Task<IActionResult> Create([FromBody]CreateFaqItemCommand.Request request)
    {
        var result = await Mediator.Send(request);
        return Ok(result.Id);
    }     
    
    /// <summary>
    /// Updates faq item.
    /// </summary>
    /// <returns>Result of update.</returns>
    [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpPut("{faqItemId:int}")]
    public async Task<IActionResult> Update([FromRoute]int faqItemId, [FromBody]UpdateFaqItemCommand.Request request)
    {
        request.Id = faqItemId;
        var result = await Mediator.Send(request);
        return Ok(result.Id);
    }

    /// <summary>
    /// Get faq item details.
    /// </summary>
    /// <returns>Details result.</returns>
    [AllowAnonymous, HttpGet("{id:int}")]
    public async Task<IActionResult> GetById([FromRoute]GetFaqItemDetailQuery.Request request)
    {
        var result = await Mediator.Send(request);
        return Ok(result);
    }

    /// <summary>
    /// Deletes faq item.
    /// </summary>
    /// <param name="request">The identifier of deleting category.</param>
    /// <returns>Result of deleting.</returns>
    [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpDelete("{id:int}")]
    public async Task<IActionResult> DeleteAsync([FromRoute] DeleteFaqItemCommand.Request request)
    {
        return Ok(await Mediator.Send(request));
    }
}