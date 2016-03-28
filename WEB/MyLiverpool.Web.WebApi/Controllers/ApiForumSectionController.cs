using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using Microsoft.Ajax.Utilities;
using MyLiverpoolSite.Business.Contracts;

namespace MyLiverpool.Web.WebApi.Controllers
{
    [RoutePrefix("api/ForumSection")]
    public class ApiForumSectionController : ApiController
    {
        private readonly IForumSectionService _forumSectionService; // todo forumSectionService

        public ApiForumSectionController(IForumSectionService forumSectionService)
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
    }
}
