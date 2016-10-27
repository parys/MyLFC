using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.DTO;
using MyLiverpool.Web.WebApiNext.Extensions;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    public class ForumThemeController : Controller
    {
        private readonly IForumThemeService _forumThemeService;

        public ForumThemeController(IForumThemeService forumThemeService)
        {
            _forumThemeService = forumThemeService;
        }

        [Route("")]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetTheme(int id, int? page)
        {
            if (!page.HasValue)
            {
                page = 1;
            }
            var model = await _forumThemeService.GetAsync(id, page.Value);
            return Ok(model);
        }

        [Route("")]
        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetTheme(int id)
        {
            var model = await _forumThemeService.GetAsync(id);
            return Ok(model);
        }

        [Route("")]
        [HttpPost]
        [Authorize]
        public async Task<IActionResult> Create(ForumThemeDto dto)
        {
            dto.AuthorId = User.GetUserId();
            var model = await _forumThemeService.CreateAsync(dto);

            return Ok(model);
        }

        [Route("")]
        [HttpPut]
        [Authorize]
        public async Task<IActionResult> Update(ForumThemeDto dto)
        {
            // if (id != dto.Id)
            {
                //    return BadRequest();
            }
            var model = await _forumThemeService.UpdateAsync(dto);
            return Ok(model);
        }
    }
}
