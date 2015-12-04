using System.Threading.Tasks;
using System.Web.Mvc;
using MyLiverpoolSite.Business.Contracts;

namespace MyLiverpool.Controllers
{
    public class ForumController : BaseController
    {
        private readonly IForumService _forumService;

        public ForumController(IForumService forumService)
        {
            _forumService = forumService;
        }

        // GET: Forum
        public async Task<ActionResult> Index()
        {
            var model = await _forumService.Get();
            return View(model);
        }

        public async Task<ActionResult> IndexSubsection(int? id, int page = 1)
        {
            if (!id.HasValue)
            {
                return HttpNotFound();
            }
            var model = await _forumService.GetSubsection(id.Value, page);
            return View(model);
        }

        public async Task<ActionResult> IndexTheme(int? id, int page = 1)
        {
            if (!id.HasValue)
            {
                return HttpNotFound();
            }
            var model = await _forumService.GetTheme(id.Value, page);
            return View(model);
        }
    }
}