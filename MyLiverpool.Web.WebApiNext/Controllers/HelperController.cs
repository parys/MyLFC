using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <summary>
    /// Manages common things.
    /// </summary>
    [AllowAnonymous, Route("api/v1/[controller]")]
    public class HelperController: Controller
    {
        private readonly IHelperService _helperService;
        private readonly IMemoryCache _cache;
        private const string HelperEntity = "HelperEntity";

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
        /// Returns epl table.
        /// </summary>
        /// <returns></returns>
        [AllowAnonymous, HttpGet("value/{id:int}")]
        public async Task<IActionResult> GetAsync(int id)
        {
            var result = await _cache.GetOrCreateAsync(HelperEntity + id, async x => await _helperService.GetAsync((HelperEntityType)id));
            return Ok(result);
        }

        /// <summary>
        /// Updates page content.
        /// </summary>
        /// <returns>Result of update.</returns>
        [Authorize(Roles = nameof(RolesEnum.AdminStart)), HttpPut("value/{id:int}")]
        public async Task<IActionResult> UpdateAsync(int id, [FromBody]string value)
        {
            _cache.Remove(HelperEntity + id);
            var result = await _helperService.UpdateAsync((HelperEntityType)id, value);
            return Json(result);
        }
    }
}
