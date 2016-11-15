using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.DTO;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <summary>
    /// Manages forum subsections.
    /// </summary>
    [Route("api/v1/[controller]")]
    [Authorize]
    public class ForumSubsectionController : Controller
    {
        private readonly IForumSubsectionService _forumSubsectionService;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="forumSubsectionService"></param>
        public ForumSubsectionController(IForumSubsectionService forumSubsectionService)
        {
            _forumSubsectionService = forumSubsectionService;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <param name="page"></param>
        /// <returns></returns>
        [Route("{id}")]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetSubsection(int id, int page = 1)
        {
            var model = await _forumSubsectionService.GetAsync(id, page);
            return Ok(model);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="dto"></param>
        /// <returns></returns>
        [Route("")]
        [HttpPost]
        [Authorize]
        public async Task<IActionResult> Create(ForumSubsectionDto dto)
        {
            var model = await _forumSubsectionService.CreateAsync(dto);
            return Ok(model);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="dto"></param>
        /// <returns></returns>
        [Route("")]
        [HttpPut]
        [Authorize]
        public async Task<IActionResult> Update(ForumSubsectionDto dto)
        {
            var model = await _forumSubsectionService.UpdateAsync(dto);
            return Ok(model);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        [Route("list")]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetListAsync()
        {
            var model = await _forumSubsectionService.GetListAsync();
            return Ok(model);
        }
    }
}
