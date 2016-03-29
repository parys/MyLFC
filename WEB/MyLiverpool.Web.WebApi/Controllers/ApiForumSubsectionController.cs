using System.Threading.Tasks;
using System.Web.Http;
using MyLiverpoolSite.Business.Contracts;

namespace MyLiverpool.Web.WebApi.Controllers
{
    [RoutePrefix("api/forumSubsection")]
    [Authorize]
    public class ApiForumSubsectionController : ApiController
    {
        private readonly IForumSubsectionService _forumSubsectionService;

        public ApiForumSubsectionController(IForumSubsectionService forumSubsectionService)
        {
            _forumSubsectionService = forumSubsectionService;
        }

        [Route]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IHttpActionResult> GetSubsection(int id, int page = 1)
        {
            var model = await _forumSubsectionService.GetAsync(id, page);
            return Ok(model);
        }
    }
}
