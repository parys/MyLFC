using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using MyLiverpool.Business.Contracts;

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

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="helperService"></param>
        public HelperController(IHelperService helperService, IMemoryCache cache)
        {
            _helperService = helperService;
            _cache = cache;
        }

        /// <summary>
        /// Returns epl table.
        /// </summary>
        /// <returns></returns>
        [AllowAnonymous, HttpGet("")]
        public async Task<IActionResult> GetAsync()
        {
            var result = await _cache.GetOrCreateAsync("eplTable", async x => await _helperService.GetEplTableAsync());
            return Ok(result);
        }
    }
}
