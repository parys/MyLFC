using System.Threading.Tasks;
using System.Web.Mvc;
using MyLiverpoolSite.Business.Contracts;

namespace MyLiverpool.Controllers
{
    public class ForumController : Controller
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

        public async Task<ActionResult> IndexSubsection(int? id)
        {
            if (!id.HasValue)
            {
                return HttpNotFound();
            }
            var model = await _forumService.GetSubsection(id.Value);
            return View(model);
        }
    }
}