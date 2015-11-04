using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Net;
using System.Web;
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
        public async Task<ActionResult> Index()
        {
            return View( await _newsService.GetAll());
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
                return RedirectToAction("Index");
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
        public async Task<ActionResult> Delete(int? id)
        {
            throw new NotImplementedException();
            //if (id == null)
            //{
            //    return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            //}
            //IndexNewsViewModel indexNewsViewModel = await db.IndexNewsViewModels.FindAsync(id);
            //if (indexNewsViewModel == null)
            //{
            //    return HttpNotFound();
            //}
            //return View(indexNewsViewModel);
        }

        // POST: News/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
     //   [Authorize(Roles = "Admin")]
        public async Task<ActionResult> DeleteConfirmed(int id)
        {
            throw new NotImplementedException();
            //    IndexNewsViewModel indexNewsViewModel = await db.IndexNewsViewModels.FindAsync(id);
            //    db.IndexNewsViewModels.Remove(indexNewsViewModel);
            //    await db.SaveChangesAsync();
            //    return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                //db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
