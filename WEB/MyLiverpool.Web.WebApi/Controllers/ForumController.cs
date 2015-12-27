using System.Threading.Tasks;
using System.Web.Mvc;
using Microsoft.AspNet.Identity;
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

        [AllowAnonymous]
        public async Task<ActionResult> Index()
        {
            var model = await _forumService.Get();
            return View(model);
        }

        [AllowAnonymous]
        public async Task<ActionResult> IndexSubsection(int? id, int page = 1)
        {
            if (!id.HasValue)
            {
                return HttpNotFound();
            }
            var model = await _forumService.GetSubsection(id.Value, page);
            return View(model);
        }

        [AllowAnonymous]
        public async Task<ActionResult> IndexTheme(int? id, int page = 1)
        {
            if (!id.HasValue)
            {
                return HttpNotFound();
            }
            var model = await _forumService.GetTheme(id.Value, page);
            return View(model);
        }

        [ValidateInput(false)]
        [HttpPost]
        public async Task<ActionResult> AddComment(string comment, int themeId)
        {
            var model = await _forumService.AddComment(comment, themeId, User.Identity.GetUserId<int>());
            return Json(model);
        }
    }
}