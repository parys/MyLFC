using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using Microsoft.AspNet.Identity;
using MyLiverpoolSite.Business.Contracts;

namespace MyLiverpool.Controllers
{
    [Authorize]
    public class NewsCommentController : Controller
    {
        private readonly INewsCommentService _newsCommentService;

        public NewsCommentController(INewsCommentService newsCommentService)
        {
            _newsCommentService = newsCommentService;
        }

        // GET: NewsComment
        //public ActionResult Index()
        //{
        //    return View();
        //}

        [HttpPost]
        public async Task<ActionResult> AddComment(string comment, int newsId, int? parentId)
        {
            var result = await _newsCommentService.AddParentComment(comment, newsId, parentId, User.Identity.GetUserId<int>());
            return Json(result);
        }
    }
}