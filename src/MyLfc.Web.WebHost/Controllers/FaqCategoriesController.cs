using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.FaqCategories;
using MyLfc.Data.Common;

namespace MyLfc.Web.WebHost.Controllers;

/// <inheritdoc />
/// <summary>
/// Controller for manage faq categories functions.
/// </summary>
[Authorize(Roles = nameof(RolesEnum.InfoStart))]
public class FaqCategoriesController : BaseController
{
    /// <summary>
    /// Create faq category.
    /// </summary>
    /// <returns>Result of create.</returns>
    [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpPost]
    public async Task<IActionResult> Create([FromBody]CreateFaqCategoryCommand.Request request)
    {
        var result = await Mediator.Send(request);
        return Ok(result.Id);
    }     
    
    /// <summary>
    /// Updates faq category.
    /// </summary>
    /// <returns>Result of update.</returns>
    [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpPut("{faqCategoryId:int}")]
    public async Task<IActionResult> Update([FromRoute]int faqCategoryId, [FromBody]UpdateFaqCategoryCommand.Request request)
    {
        request.Id = faqCategoryId;
        var result = await Mediator.Send(request);
        return Ok(result.Id);
    }

    /// <summary>
    /// Get faq category details.
    /// </summary>
    /// <returns>Details result.</returns>
    [AllowAnonymous, HttpGet("{id:int}")]
    public async Task<IActionResult> GetById([FromRoute]GetFaqCategoryDetailQuery.Request request)
    {
        var result = await Mediator.Send(request);
        return Ok(result);
    }

    /// <summary>
    /// Deletes faq category.
    /// </summary>
    /// <param name="request">The identifier of deleting category.</param>
    /// <returns>Result of deleting.</returns>
    [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpDelete("{id:int}")]
    public async Task<IActionResult> DeleteAsync([FromRoute] DeleteFaqCategoryCommand.Request request)
    {
        return Ok(await Mediator.Send(request));
    }

    /// <summary>
    /// Get faq item details.
    /// </summary>
    /// <returns>Details result.</returns>
    [AllowAnonymous, HttpGet]
    public async Task<IActionResult> GetList()
    {
        var result = await Mediator.Send(new GetFaqCategoriesListQuery.Request());
        return Ok(result.Results);
    }
}