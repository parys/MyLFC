using System.Threading.Tasks;
using System.Web.Http;
using MyLiverpoolSite.Business.Contracts;

namespace MyLiverpool.Web.WebApi.Controllers
{
    [RoutePrefix("api/Forum")]
    [Authorize]
    public class ApiForumController : ApiController
    {
        private readonly IForumService _forumService;

        public ApiForumController(IForumService forumService)
        {
            _forumService = forumService;
        }

        [Route("Subsection")]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IHttpActionResult> GetSubsection(int id, int page = 1)
        {
            var model = await _forumService.GetSubsectionDtoAsync(id, page);
            return Ok(model);
        }

        [Route("Theme")]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IHttpActionResult> GetTheme(int id, int page = 1)
        {
            var model = await _forumService.GetThemeDtoAsync(id, page);
            return Ok(model);
        }
    }
}
