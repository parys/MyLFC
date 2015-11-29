using System;
using System.Threading.Tasks;
using System.Net;
using System.Web.Mvc;
using Microsoft.AspNet.Identity;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Business.ViewModels.News;

namespace MyLiverpool.Controllers
{
    public class NewsController : Controller
    {
        private readonly INewsService _newsService;
        private readonly INewsCommentService _newsCommentService;

        public NewsController(INewsService newsService, INewsCommentService newsCommentService)
        {
            _newsService = newsService;
            _newsCommentService = newsCommentService;
        }

        // GET: News
        public async Task<ActionResult> Index(int page = 1, int? categoryId = null)
        {
            return View( await _newsService.GetAllAsync(page, categoryId));
        }

        // GET: News/Details/5
        public async Task<ActionResult> Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            IndexNewsViewModel indexNewsViewModel = await _newsService.GetByIdAsync(id.Value);
            if (indexNewsViewModel == null)
            {
                return HttpNotFound();
            }
            return View(indexNewsViewModel);
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
      //  [Authorize(Roles = "Admin")]
        [HttpPost]
        public async Task<ActionResult> Delete(int? id)
        {
            if (!id.HasValue)
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

        [Authorize]
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

        public async Task<ActionResult> Categories()
        {
            var model = await _newsService.GetCategoriesAsync();
            return View(model);
        }
    }
}
