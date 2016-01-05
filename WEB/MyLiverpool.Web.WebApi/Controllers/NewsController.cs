using System.Net;
using System.Threading.Tasks;
using System.Web.Mvc;
using Microsoft.AspNet.Identity;
using MyLiverpool.Controllers;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Business.ViewModels.News;

namespace MyLiverpool.Web.WebApi.Controllers
{
    [Authorize]
    public class NewsController : BaseController
    {
        private readonly INewsService _newsService;
        private readonly INewsCommentService _newsCommentService;

        public NewsController()
        {
            
        }

        public NewsController(INewsService newsService, INewsCommentService newsCommentService)//todo remove
        {
            _newsService = newsService;
            _newsCommentService = newsCommentService;
        }

        [AllowAnonymous]
        public ActionResult List()
        {
            return View();
        }

        [AllowAnonymous]
        public ActionResult Info()
        {
            return View();
        }

        [Authorize(Roles = "NewsStart")]
        public ActionResult Edit()
        {
            return View();
        }

        [Authorize]
        [ValidateInput(false)]
        [HttpPost]
        public async Task<ActionResult> AddComment(string comment, int newsId, int? parentId)
        {
            var result = await _newsCommentService.AddCommentAsync(comment, newsId, parentId, User.Identity.GetUserId<int>());
            return Json(result);
        }

        [Authorize]
        [ValidateInput(false)]
        [HttpPost]
        public async Task<ActionResult> EditComment(int commentId, string comment, string answer)
        {
            var result = await _newsCommentService.EditCommentAsync(commentId, comment, answer);
            return Json(result);
        }

        [Authorize(Roles = "ModeratorStart")]
        [HttpPost]
        public async Task<ActionResult> DeleteComment(int? id)
        {
            if (!id.HasValue)
            {
                return HttpNotFound();
            }
            var result = await _newsCommentService.DeleteAsync(id.Value);
            return Json(result);
        }

        [AllowAnonymous]
        public ActionResult Categories()
        {
            return View();
        }
    }
}
