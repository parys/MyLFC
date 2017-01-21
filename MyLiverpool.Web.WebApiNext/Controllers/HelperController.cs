using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
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

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="helperService"></param>
        public HelperController(IHelperService helperService)
        {
            _helperService = helperService;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        [AllowAnonymous, HttpGet("")]
        public async Task<IActionResult> GetAsync()
        {
            var result = await _helperService.GetEplTableAsync();
            return Ok(result);
        }
    }
}
