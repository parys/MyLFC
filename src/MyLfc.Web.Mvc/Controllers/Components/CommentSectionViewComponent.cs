using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.Comments;

namespace MyLfc.Web.Mvc.Controllers.Components
{
    [ViewComponent(Name = "CommentSection")]
    public class CommentSectionViewComponent : ViewComponent
    {
        private readonly IMediator _mediator;

        public CommentSectionViewComponent(IMediator mediator)
        {
            _mediator = mediator;
        }

        public async Task<IViewComponentResult> InvokeAsync(int? materialId = null, int? matchId = null)
        {
            var request = new GetCommentListByEntityIdQuery.Request
            {
                MaterialId = materialId,
                MatchId = matchId
            };

            return View(await _mediator.Send(request));
        }
    }
}