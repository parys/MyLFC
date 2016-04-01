using System.Threading.Tasks;
using System.Web.Http;
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
        public async Task<IHttpActionResult> GetTheme(int id, int page = 1)
        {
            var model = await _forumThemeService.GetAsync(id, page);
            return Ok(model);
        }
    }
}
