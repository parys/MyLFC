using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.DTO;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    public class ForumSubsectionController : Controller
    {
        private readonly IForumSubsectionService _forumSubsectionService;

        public ForumSubsectionController(IForumSubsectionService forumSubsectionService)
        {
            _forumSubsectionService = forumSubsectionService;
        }

        [Route("{id}")]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetSubsection(int id, int page = 1)
        {
            var model = await _forumSubsectionService.GetAsync(id, page);
            return Ok(model);
        }

        [Route("")]
        [HttpPost]
        [Authorize]
        public async Task<IActionResult> Create(ForumSubsectionDto dto)
        {
            var model = await _forumSubsectionService.CreateAsync(dto);
            return Ok(model);
        }

        [Route("")]
        [HttpPut]
        [Authorize]
        public async Task<IActionResult> Update(ForumSubsectionDto dto)
        {
            var model = await _forumSubsectionService.UpdateAsync(dto);
            return Ok(model);
        }

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
