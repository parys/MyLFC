using System.Threading.Tasks;
using System.Web.Http;
using Microsoft.Ajax.Utilities;
using MyLiverpoolSite.Business.Contracts;

namespace MyLiverpool.Web.WebApi.Controllers
{
    [RoutePrefix("api/Forum")]
    public class ApiForumController : ApiController
    {
        private readonly IForumService _forumService;

        public ApiForumController(IForumService forumService)
        {
            _forumService = forumService;
        }

        [Route]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IHttpActionResult> Get()
        {
            var model = await _forumService.GetDtoAsync();
            return Ok(model);
        }


        [Route("CreateSection")]
        [HttpPost]
        [Authorize(Roles = "AdminStart")]
        public async Task<IHttpActionResult> CreateSection(string name)
        {
            if (name.IsNullOrWhiteSpace())
            {
                return BadRequest();
            }
            var result = await _forumService.CreateSectionAsync(name);
            return Ok(result);
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
