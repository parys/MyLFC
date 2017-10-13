using System;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;

namespace MyLiverpool.Web.WebApiNext.Areas.Lite.Controllers.Components
{
    public class CommentSectionViewComponent : ViewComponent
    {
        private readonly IMaterialCommentService _commentService;

        public CommentSectionViewComponent(IMaterialCommentService commentService)
        {
            _commentService = commentService;
        }

        public IViewComponentResult InvokeAsync(int? materialId = null, int? matchId = null)
        {
         //   var result = await _commentService.GetListByMaterialIdAsync(id, page);
          //  var result = await _commentService.GetListByMatchIdAsync(id, page);
            return View();
        }
    }
}