using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Microsoft.AspNet.Identity;
using MyLiverpoolSite.Business.Contracts;

namespace MyLiverpool.Controllers
{
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
        public ActionResult AddParentComment(string comment, int newsId)
        {
            var result = _newsCommentService.AddParentComment(comment, newsId, User.Identity.GetUserId<int>());
            return RedirectToAction("Index", "Home");
        }
    }
}