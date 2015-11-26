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

        public NewsController(INewsService newsService)
        {
            _newsService = newsService;
        }

        // GET: News
        public async Task<ActionResult> Index(int page = 1)
        {
            return View( await _newsService.GetAll(page));
        }

        // GET: News/Details/5
        public async Task<ActionResult> Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            IndexNewsViewModel indexNewsViewModel = await _newsService.GetById(id.Value);
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
            var model = await _newsService.GetCreateEditViewModel(null);
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
                var result = await _newsService.Create(model, User.Identity.GetUserId<int>());
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
            var model = await _newsService.GetCreateEditViewModel(id);
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
                var result = await _newsService.Edit(model);

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
            var result = await _newsService.Delete(id.Value);
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
            var result = await _newsService.Activate(id.Value);
            return Json(result);
        }
    }
}
