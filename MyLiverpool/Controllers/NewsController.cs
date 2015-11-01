using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Net;
using System.Web;
using System.Web.Mvc;
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
            return View(_newsService.GetAll());
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
        public ActionResult Create()
        {
            return View();
        }

        // POST: News/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include = "Id,OldId,CategoryId,Year,Month,Day,CanCommentary,AdditionTime,Title,Brief,Message,Reads,Source,PhotoPath,LastModifiedUtc")] IndexNewsViewModel indexNewsViewModel)
        {
            throw new NotImplementedException();
            //if (ModelState.IsValid)
            //{
            //    db.IndexNewsViewModels.Add(indexNewsViewModel);
            //    await db.SaveChangesAsync();
            //    return RedirectToAction("Index");
            //}

            //return View(indexNewsViewModel);
        }

        // GET: News/Edit/5
        public async Task<ActionResult> Edit(int? id)
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

        // POST: News/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "Id,OldId,CategoryId,Year,Month,Day,CanCommentary,AdditionTime,Title,Brief,Message,Reads,Source,PhotoPath,LastModifiedUtc")] IndexNewsViewModel indexNewsViewModel)
        {
            throw new NotImplementedException();
            //if (ModelState.IsValid)
            //{
            //    db.Entry(indexNewsViewModel).State = EntityState.Modified;
            //    await db.SaveChangesAsync();
            //    return RedirectToAction("Index");
            //}
            //return View(indexNewsViewModel);
        }

        // GET: News/Delete/5
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
