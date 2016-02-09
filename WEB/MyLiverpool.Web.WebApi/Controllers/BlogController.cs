using System.Threading.Tasks;
using System.Web.Mvc;
using MyLiverpool.Controllers;

namespace MyLiverpool.Web.WebApi.Controllers
{
    [Authorize]
    public class BlogController : BaseController
    {
        [AllowAnonymous]
        public ActionResult Index()
        {
            return View();
        }

        //        // GET: News/Details/5
        //        public async Task<ActionResult> Details(int? id)
        //        {
        //            if (id == null)
        //            {
        //                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
        //            }
        //            IndexBlogVM indexblogVM = await _blogService.GetById(id.Value);
        //            if (indexblogVM == null)
        //            {
        //                return HttpNotFound();
        //            }
        //            return View(indexblogVM);
        //        }

        //        // GET: News/Create
        //        [Authorize]
        //        public async Task<ActionResult> Create()
        //        {
        //            var model = await _blogService.GetCreateEditViewModel(null);
        //            return View(model);
        //        }

        //        // POST: News/Create
        //        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        //        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        //        [HttpPost]
        //        [ValidateAntiForgeryToken]
        //        [Authorize]
        //        public async Task<ActionResult> Create(CreateEditBlogVM model)
        //        {
        //            if (ModelState.IsValid)
        //            {
        //                var result = await _blogService.Create(model, User.Identity.GetUserId<int>());
        //                return RedirectToAction("Index");
        //            }
        //            return View(model);
        //        }

        //        // GET: News/Edit/5
        //        [Authorize]
        //        public async Task<ActionResult> Edit(int? id)
        //        {
        //            if (id == null)
        //            {
        //                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
        //            }
        //            var model = await _blogService.GetCreateEditViewModel(id);
        //            if (model == null)
        //            {
        //                return HttpNotFound();
        //            }
        //            return View(model);
        //        }

        //        // POST: News/Edit/5
        //        // To protect from overposting attacks, please enable the specific properties you want to bind to, for         
        //        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        //        [HttpPost]
        //        [ValidateAntiForgeryToken]
        //        [Authorize]
        //        public async Task<ActionResult> Edit(CreateEditBlogVM model)
        //        {
        //            if (ModelState.IsValid)
        //            {
        //                var result = await _blogService.Edit(model);

        //                return RedirectToAction("Index");
        //            }
        //            return View(model);
        //        }



        //        protected override void Dispose(bool disposing)
        //        {
        //            if (disposing)
        //            {
        //                //db.Dispose();
        //            }
        //            base.Dispose(disposing);
        //        }
    }
}