using System.Threading.Tasks;
using System.Web.Mvc;
using Microsoft.AspNet.Identity;
using MyLiverpool.Controllers;
using MyLiverpoolSite.Business.Contracts;

namespace MyLiverpool.Web.WebApi.Controllers
{
    [Authorize]
    public class NewsController : BaseController
    {
        private readonly IMaterialCommentService _materialCommentService;

        public NewsController()
        {
            
        }

        public NewsController(IMaterialCommentService materialCommentService)//todo remove
        {
            _materialCommentService = materialCommentService;
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

        //[Authorize]
        //[ValidateInput(false)]
        //[HttpPost]
        //public async Task<ActionResult> AddComment(string comment, int newsId, int? parentId)
        //{
        //    var result = await _materialCommentService.AddCommentAsync(comment, newsId, parentId, User.Identity.GetUserId<int>());
        //    return Json(result);
        //}

        //[Authorize]
        //[ValidateInput(false)]
        //[HttpPost]
        //public async Task<ActionResult> EditComment(int commentId, string comment, string answer)
        //{
        //    var result = await _materialCommentService.EditCommentAsync(commentId, comment, answer);
        //    return Json(result);
        //}

        //[Authorize(Roles = "ModeratorStart")]
        //[HttpPost]
        //public async Task<ActionResult> DeleteComment(int? id)
        //{
        //    if (!id.HasValue)
        //    {
        //        return HttpNotFound();
        //    }
        //    var result = await _materialCommentService.DeleteAsync(id.Value);
        //    return Json(result);
        //}

        [AllowAnonymous]
        public ActionResult Categories()
        {
            return View();
        }
    }
}
