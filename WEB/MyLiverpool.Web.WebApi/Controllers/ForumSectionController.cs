using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using Microsoft.Ajax.Utilities;
using MyLiverpoolSite.Business.Contracts;

namespace MyLiverpool.Web.WebApi.Controllers
{
    [RoutePrefix("api/ForumSection")]
    [Authorize]
    public class ForumSectionController : ApiController
    {
        private readonly IForumSectionService _forumSectionService;

        public ForumSectionController(IForumSectionService forumSectionService)
        {
            _forumSectionService = forumSectionService;
        }

        [Route]
        [HttpPost]
        [Authorize(Roles = "AdminStart")]
        public async Task<IHttpActionResult> CreateSection(string name)
        {
            if (name.IsNullOrWhiteSpace())
            {
                return BadRequest();
            }
            var result = await _forumSectionService.CreateAsync(name);
            if (result == null)
            {
                return StatusCode(HttpStatusCode.Conflict); //new HttpStatusCodeResult(422);
            }
            return Ok(result);
        }

        [Route]
        [HttpDelete]
        [Authorize(Roles = "AdminStart")]
        public async Task<IHttpActionResult> DeleteSection(int id)
        {
            var result = await _forumSectionService.DeleteAsync(id);
            return Ok(result);
        }

        [Route]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IHttpActionResult> Get()
        {
            var result = await _forumSectionService.GetAsync();
            return Ok(result);
        }

        [Route]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IHttpActionResult> Get(int id)
        {
            var result = await _forumSectionService.GetAsync(id);
            return Ok(result);
        }

        [Route("list")]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IHttpActionResult> List()
        {
            var result = await _forumSectionService.GetListAsync();
            return Ok(result);
        }
    }
}
