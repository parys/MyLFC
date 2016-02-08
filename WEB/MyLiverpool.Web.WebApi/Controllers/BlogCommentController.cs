using System.Threading.Tasks;
using System.Web.Mvc;
using MyLiverpool.Controllers;

namespace MyLiverpool.Web.WebApi.Controllers
{
    public class BlogCommentController : BaseController
    {
     //   private readonly IBlogCommentService _blogCommentService;

      //  public BlogCommentController(IBlogCommentService blogCommentService)
      //  {
     //       _blogCommentService = blogCommentService;
     //   }

        [HttpPost]
        public Task<ActionResult> AddComment(string comment, int newsId, int? parentId)
        {
           // var result = await _blogCommentService.AddParentComment(comment, newsId, parentId, User.Identity.GetUserId<int>());
          //  return Json(result);
          return null;
        }
    }
}