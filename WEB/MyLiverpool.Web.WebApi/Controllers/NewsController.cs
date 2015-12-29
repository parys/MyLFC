using System.Threading.Tasks;
using System.Net;
using System.Web.Mvc;
using Microsoft.AspNet.Identity;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Business.ViewModels.News;

namespace MyLiverpool.Controllers
{
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
        public ActionResult Index()
        {
            return View();
        }

        [AllowAnonymous]
        public ActionResult Info()
        {
            return View();
        }

        // GET: News/Create
        [Authorize]
        public async Task<ActionResult> Create()
        {
            var model = await _newsService.GetCreateEditViewModelAsync(null);
            return View(model);
        }

        // POST: News/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        [Authorize]
        public async Task<ActionResult> Create(CreateEditNewsViewModel model)
        {
            if (ModelState.IsValid)
            {
                var result = await _newsService.CreateAsync(model, User.Identity.GetUserId<int>());
                return RedirectToAction("Details", new {id = result});
            }
            return View(model);
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

                return RedirectToAction("Index");
            }
            return View(model);
        }

        // GET: News/Delete/5
        [Authorize(Roles = "NewsStart")]
        [HttpPost]
        public async Task<ActionResult> Delete(int? id)
        {
            if (!id.HasValue)
            {
                return HttpNotFound();
            }
            if (!User.IsInRole("NewsFull"))
            {
                return HttpNotFound();
            }
            var result = await _newsService.DeleteAsync(id.Value);
            return Json(result);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                //db.Dispose();
            }
            base.Dispose(disposing);
        }

        [Authorize(Roles = "NewsStart")]
        public async Task<ActionResult> Activate(int? id)
        {
            if (!id.HasValue)
            {
                return HttpNotFound();
            }
            var result = await _newsService.ActivateAsync(id.Value);
            return Json(result);
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
        public async Task<ActionResult> Categories()
        {
            var model = await _newsService.GetCategoriesAsync();
            return View(model);
        }
    }
}
