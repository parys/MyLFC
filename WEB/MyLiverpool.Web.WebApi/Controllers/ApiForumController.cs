using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using MyLiverpool.Business.DTO;
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

        [Route("")]
        [HttpGet]
        [AllowAnonymous]
        [ResponseType(typeof(ForumDto))]
        public async Task<IHttpActionResult> Get()
        {
            var model = await _forumService.GetDtoAsync();
            return Ok(model);
        }

        [Route("Subsection")]
        [HttpGet]
        [AllowAnonymous]
        [ResponseType(typeof(ForumSubsectionDto))]
        public async Task<IHttpActionResult> GetSubsection(int id, int page = 1)
        {
            var model = await _forumService.GetSubsectionDtoAsync(id, page);
            return Ok(model);
        }
    }
}
