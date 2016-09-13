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
    public class ForumMessageController : Controller
    {
        private readonly IForumMessageService _forumMessageService;

        public ForumMessageController(IForumMessageService forumMessageService)
        {
            _forumMessageService = forumMessageService;
        }

        [Route("")]
        [HttpPost]
        [Authorize]
        public async Task<IActionResult> CreateAsync(ForumMessageDto dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            dto.AuthorId = User.GetUserId();
            var result = await _forumMessageService.CreateAsync(dto);
            result.AuthorUserName = User.Identity.Name;
            return Ok(result);
        }
    }
}
