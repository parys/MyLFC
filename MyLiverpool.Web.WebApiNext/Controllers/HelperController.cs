using System.Threading.Tasks;
using AspNet.Security.OAuth.Validation;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Common.Utilities;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <summary>
    /// Manages common things.
    /// </summary>
    [Authorize(AuthenticationSchemes = OAuthValidationDefaults.AuthenticationScheme), Route("api/v1/[controller]")]
    public class HelperController: Controller
    {
        private readonly IHelperService _helperService;
        private readonly IMemoryCache _cache;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="helperService"></param>
        /// <param name="cache"></param>
        public HelperController(IHelperService helperService, IMemoryCache cache)
        {
            _helperService = helperService;
            _cache = cache;
        }

        /// <summary>
        /// Returns helper entity value.
        /// </summary>
        /// <returns></returns>
        [AllowAnonymous, HttpGet("value/{id:int}")]
        public async Task<IActionResult> GetAsync(int id)
        {
            var result = await _cache.GetOrCreateAsync(GlobalConstants.HelperEntity + id, async x => await _helperService.GetAsync((HelperEntityType)id));
            return Ok(result);
        }

        /// <summary>
        /// Updates page content.
        /// </summary>
        /// <returns>Result of update.</returns>
        [Authorize(Roles = nameof(RolesEnum.AdminStart)), HttpPut("value/{id:int}")]
        public async Task<IActionResult> UpdateAsync(int id, [FromBody]string value)
        {
            _cache.Remove(GlobalConstants.HelperEntity + id);
            var result = await _helperService.UpdateAsync((HelperEntityType)id, value);
            return Json(result);
        }
    }
}
