using System.Threading.Tasks;
using System.Web.Http;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Business.Contracts;

namespace MyLiverpool.Web.WebApi.Controllers
{
    [RoutePrefix("api/forumSubsection")]
    [Authorize]
    public class ForumSubsectionController : ApiController
    {
        private readonly IForumSubsectionService _forumSubsectionService;

        public ForumSubsectionController(IForumSubsectionService forumSubsectionService)
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

        [Route]
        [HttpPost]
        [Authorize]
        public async Task<IHttpActionResult> Create(ForumSubsectionDto dto)
        {
            var model = await _forumSubsectionService.CreateAsync(dto);
            return Ok(model);
        }

        [Route]
        [HttpPut]
        [Authorize]
        public async Task<IHttpActionResult> Update(ForumSubsectionDto dto)
        {
            var model = await _forumSubsectionService.UpdateAsync(dto);
            return Ok(model);
        }

        [Route]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IHttpActionResult> GetListAsync()
        {
            var model = await _forumSubsectionService.GetListAsync();
            return Ok(model);
        }
    }
}
