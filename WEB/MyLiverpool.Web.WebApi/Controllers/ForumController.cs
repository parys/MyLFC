using System.Web.Mvc;
using MyLiverpool.Controllers;

namespace MyLiverpool.Web.WebApi.Controllers
{
    public class ForumController : BaseController
    {
        [AllowAnonymous]
        public ActionResult Index()
        {
            return View();
        }

        [AllowAnonymous]
        public ActionResult Subsection()
        {
            return View();
        }

        [AllowAnonymous]
        public ActionResult Theme()
        {
            return View();
        }

        //[ValidateInput(false)]
        //[HttpPost]
        //public async Task<ActionResult> AddComment(string comment, int themeId)
        //{
        //   // var model = await _forumService.AddComment(comment, themeId, User.Identity.GetUserId<int>());
        //    return Json(12);
        //}
    }
}