using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.MaterialCategories;
using MyLfc.Data.Common;

namespace MyLfc.Web.WebApiNext.Controllers
{
    /// <summary>
    /// Manages news categories.
    /// </summary>
    public class MaterialCategoriesController : BaseController
    {
        /// <summary> 
        /// Returns material category by id.
        /// </summary>
        /// <param name="request">The identifier of searching category.</param>
        /// <returns>Material category.</returns>
        [Authorize, HttpGet("{id:int}")]
        public async Task<IActionResult> Get([FromRoute] GetMaterialCategoryDetailQuery.Request request)
        {
            return Ok(await Mediator.Send(request));
        }

        /// <summary>
        /// Returns material categories list with given type.
        /// </summary>
        /// <param name="request">Material type.</param>
        /// <returns>Material categories list.</returns>
        [AllowAnonymous, HttpGet("")]
        public async Task<IActionResult> Get([FromQuery] GetMaterialCategoryListQuery.Request request)
        {
            return Ok(await Mediator.Send(request));
        }

        /// <summary>
        /// Creates new material category.
        /// </summary>
        /// <param name="request">Filled dto for new category.</param>
        /// <returns>Created category object</returns>
        [Authorize(Roles = nameof(RolesEnum.NewsFull) + "," + nameof(RolesEnum.BlogFull)), HttpPost("")]
        public async Task<IActionResult> CreateAsync([FromBody] CreateMaterialCategoryCommand.Request request)
        {
            return Ok(await Mediator.Send(request));
        }

        /// <summary>
        /// Updates material category.
        /// </summary>
        /// <param name="id">The identifier of updatable object.</param>
        /// <param name="request">Filled dto contains new values.</param>
        /// <returns>Updated category object.</returns>
        [Authorize(Roles = nameof(RolesEnum.NewsFull) + "," + nameof(RolesEnum.BlogFull)), HttpPut("{id:int}")]
        public async Task<IActionResult> UpdateAsync([FromRoute]int id, [FromBody] UpdateMaterialCategoryCommand.Request request)
        {
            if (id != request.Id)
            {
                return BadRequest();
            }
            return Ok(await Mediator.Send(request));
        }

        /// <summary>
        /// Deletes material category.
        /// </summary>
        /// <param name="request">The identifier of removing object.</param>
        /// <returns>Result of deleting.</returns>
        [Authorize(Roles = nameof(RolesEnum.NewsFull) + "," + nameof(RolesEnum.BlogFull)), HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteAsync([FromRoute] DeleteMaterialCategoryCommand.Request request)
        {
            return Ok(await Mediator.Send(request));
        }
    }
}