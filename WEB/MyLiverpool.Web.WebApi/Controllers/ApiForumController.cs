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
    }
}
