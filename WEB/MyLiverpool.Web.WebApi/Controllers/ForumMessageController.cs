using System.Threading.Tasks;
using System.Web.Http;
using Microsoft.AspNet.Identity;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Business.Contracts;

namespace MyLiverpool.Web.WebApi.Controllers
{
    [RoutePrefix("api/forumMessage")]
    [Authorize]
    public class ForumMessageController : ApiController
    {
        private readonly IForumMessageService _forumMessageService;

        public ForumMessageController(IForumMessageService forumMessageService)
        {
            _forumMessageService = forumMessageService;
        }

        [Route]
        [HttpPost]
        [Authorize]
        public async Task<IHttpActionResult> CreateAsync(ForumMessageDto dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            dto.AuthorId = User.Identity.GetUserId<int>();
            var result = await _forumMessageService.CreateAsync(dto);
            result.AuthorUserName = User.Identity.Name;
            return Ok(result);
        }
    }
}
