using System;
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
        /// Creates new forum message.
        /// </summary>
        /// <param name="dto"></param>
        /// <returns>Result of creation message.</returns>
        [Authorize, HttpPost("")]
        public async Task<IActionResult> CreateAsync([FromBody]ForumMessageDto dto)
        {
            dto.AuthorId = User.GetUserId();
            dto.AdditionTime = DateTime.Now;//maybe move dates to frontend?
            dto.LastModifiedTime = DateTime.Now;
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            var result = await _forumMessageService.CreateAsync(dto);
            result.AuthorUserName = User.Identity.Name;
            return Ok(result);
        }
    }
}
