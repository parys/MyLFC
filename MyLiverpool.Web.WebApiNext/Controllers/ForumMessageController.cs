using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.DTO;
using MyLiverpool.Web.WebApiNext.Extensions;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <summary>
    /// Manages forum messages.
    /// </summary>
    [Route("api/v1/[controller]")]
    [Authorize]
    public class ForumMessageController : Controller
    {
        private readonly IForumMessageService _forumMessageService;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="forumMessageService"></param>
        public ForumMessageController(IForumMessageService forumMessageService)
        {
            _forumMessageService = forumMessageService;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="dto"></param>
        /// <returns></returns>
        [Route("")]
        [HttpPost]
        [Authorize]
        public async Task<IActionResult> CreateAsync([FromBody]ForumMessageDto dto)
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
