using System.Threading.Tasks;
using System.Web.Http;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Business.Contracts;

namespace MyLiverpool.Web.WebApi.Controllers
{
    [RoutePrefix("api/forumTheme")]
    [Authorize]
    public class ForumThemeController : ApiController
    {
        private readonly IForumThemeService _forumThemeService;

        public ForumThemeController(IForumThemeService forumThemeService)
        {
            _forumThemeService = forumThemeService;
        }

        [Route]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IHttpActionResult> GetTheme(int id, int? page)
        {
            if (!page.HasValue)
            {
                page = 1;
            }
            var model = await _forumThemeService.GetAsync(id, page.Value );
            return Ok(model);
        }

        [Route]
        [HttpGet]
        [Authorize]
        public async Task<IHttpActionResult> GetTheme(int id)
        {
            var model = await _forumThemeService.GetAsync(id);
            return Ok(model);
        }

        [Route]
        [HttpPost]
        [Authorize]
        public async Task<IHttpActionResult> Create(ForumThemeDto dto)
        {
            var model = await _forumThemeService.CreateAsync(dto);
            return Ok(model);
        }

        [Route]
        [HttpPut]
        [Authorize]
        public async Task<IHttpActionResult> Update(int id, ForumThemeDto dto) //todo all update need ID
        {
            if (id != dto.Id)
            {
                return BadRequest();
            }
            var model = await _forumThemeService.UpdateAsync(dto);
            return Ok(model);
        }
    }
}
