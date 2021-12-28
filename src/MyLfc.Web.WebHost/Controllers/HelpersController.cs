using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.HelpEntities;
using MyLfc.Common.Utilities;
using MyLfc.Data.Common;

namespace MyLfc.Web.WebApiNext.Controllers
{
    /// <summary>
    /// Manages common things.
    /// </summary>
    public class HelpersController : BaseController
    {
        /// <summary>
        /// Returns helper entity value.
        /// </summary>
        /// <returns></returns>
        [AllowAnonymous, HttpGet("{type:int}")]
        public async Task<IActionResult> GetAsync([FromRoute]GetEntityQuery.Request request)
        {
            var result = await CacheManager.GetOrCreateStringAsync(GlobalConstants.HelperEntity + request.Type,
                async () => (await Mediator.Send(request)).Value);
            return Ok(result);
        }

        /// <summary>
        /// Updates page content.
        /// </summary>
        /// <returns>Result of update.</returns>
        [Authorize(Roles = nameof(RolesEnum.AdminStart)), HttpPut("{type:int}")]
        public async Task<IActionResult> UpdateAsync([FromRoute]int type, [FromBody]CreateOrUpdateEntityCommand.Request request)
        {
            request.Type = (HelperEntityType) type;
            var result = await Mediator.Send(request);
            CacheManager.SetString(GlobalConstants.HelperEntity + request.Type, request.Value);
            return Ok(result);
        }
    }
}
