using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.FaqCategories;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <summary>
    /// Manages faq.
    /// </summary>
    [AllowAnonymous]
    public class FaqController : BaseController
    {
        /// <summary>
        /// Get faq.
        /// </summary>
        /// <returns>Details result.</returns>
        [AllowAnonymous, HttpGet("")]
        public async Task<IActionResult> Get()
        {
            var result = await Mediator.Send(new GetFaqQuery.Request());
            return Ok(result.Results);
        }
    }
}
