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
        public ActionResult Create()
        {
            return View();
        }


        // GET: News/Edit/5
        [Authorize]
        public async Task<ActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            var model = await _newsService.GetCreateEditViewModelAsync(id);
            if (model == null)
            {
                return HttpNotFound();
            }
            return View(model);
        }

        // POST: News/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        [Authorize]
        public async Task<ActionResult> Edit(CreateEditNewsViewModel model)
        {
            if (ModelState.IsValid)
            {
                var result = await _newsService.EditAsync(model);

                return RedirectToAction("List");
            }
            return View(model);
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
