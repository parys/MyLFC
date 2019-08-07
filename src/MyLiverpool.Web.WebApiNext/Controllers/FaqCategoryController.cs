using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.FaqCategories;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <inheritdoc />
    /// <summary>
    /// Controller for manage faq categories functions.
    /// </summary>
    [Authorize(Roles = nameof(RolesEnum.InfoStart))]
    public class FaqCategoryControllerController : BaseController
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
        [Authorize(Roles = nameof(RolesEnum.InfoStart)), HttpGet("{id:int}")]
        public async Task<IActionResult> Update([FromRoute]int faqCategoryId, [FromBody]UpdateFaqCategoryCommand.Request request)
        {
            if (faqCategoryId != request.Id)
            {
                return BadRequest("id in URL and model should be same");
            }
            var result = await Mediator.Send(request);
            return Ok(result.Id);
        }
    }
}