using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <summary>
    /// Manages seasons.
    /// </summary>
    [AllowAnonymous(), Route("api/v1/[controller]")]
    public class SeasonController : Controller
    {
        private readonly ISeasonService _seasonService;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="seasonService"></param>
        public SeasonController(ISeasonService seasonService)
        {
            _seasonService = seasonService;
        }

        /// <summary>
        /// Returns seasons list.
        /// </summary>
        /// <returns>List with seasons.</returns>
        [AllowAnonymous, Route("list")]
        public async Task<IActionResult> GetListAsync()
        {
            var result = await _seasonService.GetListAsync();
            return Ok(result);
        }
    }
}
