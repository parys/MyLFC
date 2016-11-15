using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <summary>
    /// Manages forum sections.
    /// </summary>
    [Route("api/v1/[controller]")]
    [Authorize]
    public class ForumSectionController : Controller
    {
        private readonly IForumSectionService _forumSectionService;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="forumSectionService"></param>
        public ForumSectionController(IForumSectionService forumSectionService)
        {
            _forumSectionService = forumSectionService;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        [Route("")]
        [HttpPost]
        [Authorize(Roles = "AdminStart")]
        public async Task<IActionResult> CreateSection(string name)
        {
            if (string.IsNullOrEmpty(name))
            {
                return BadRequest();
            }
            var result = await _forumSectionService.CreateAsync(name);
            if (result == null)
            {
                return StatusCode((int) HttpStatusCode.Conflict); //new HttpStatusCodeResult(422);
            }
            return Ok(result);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Route("")]
        [HttpDelete]
        [Authorize(Roles = "AdminStart")]
        public async Task<IActionResult> DeleteSection(int id)
        {
            var result = await _forumSectionService.DeleteAsync(id);
            return Ok(result);
        }

        //[Route("")]
        //[HttpGet]
        //[AllowAnonymous]
        //public async Task<IActionResult> Get()
        //{
        //    var result = await _forumSectionService.GetAsync();
        //    return Ok(result);
        //}

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Route("")]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> Get(int id)
        {
            var result = await _forumSectionService.GetAsync(id);
            return Ok(result);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        [Route("list")]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> List()
        {
            var result = await _forumSectionService.GetListAsync();
            return Ok(result);
        }
    }
}
