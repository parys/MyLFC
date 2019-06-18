using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Web.Mvc.Controllers.Components
{
    [ViewComponent(Name = "CommentSection")]
    public class CommentSectionViewComponent : ViewComponent
    {
        private readonly ICommentService _commentService;

        public CommentSectionViewComponent(ICommentService commentService)
        {
            _commentService = commentService;
        }

        public async Task<IViewComponentResult> InvokeAsync(int? materialId = null, int? matchId = null)
        {
            PageableData<CommentDto> result = null;
            if (materialId.HasValue) {
                result = await _commentService.GetListByMaterialIdAsync(materialId.Value, 1);
            } else if (matchId.HasValue) {
                 result = await _commentService.GetListByMatchIdAsync(matchId.Value, 1);
            }
            return View(result);
        }
    }
}