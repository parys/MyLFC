using System.Threading.Tasks;
using System.Web.Mvc;
using Microsoft.AspNet.Identity;
using MyLiverpoolSite.Business.Contracts;

namespace MyLiverpool.Controllers
{
    public class BlogCommentController : BaseController
    {
        private readonly IBlogCommentService _blogCommentService;

        public BlogCommentController(IBlogCommentService blogCommentService)
        {
            _blogCommentService = blogCommentService;
        }

        [HttpPost]
        public async Task<ActionResult> AddComment(string comment, int newsId, int? parentId)
        {
            var result = await _blogCommentService.AddParentComment(comment, newsId, parentId, User.Identity.GetUserId<int>());
            return Json(result);
        }
    }
}