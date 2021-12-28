using System.Collections.Generic;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.Matches;

namespace MyLfc.Web.Mvc.Controllers.Components
{
    public class MatchEventPanelViewComponent : ViewComponent
    {
        private readonly IMediator _mediator;

        public MatchEventPanelViewComponent(IMediator mediator)
        {
            _mediator = mediator;
        }

        public async Task<IViewComponentResult> InvokeAsync(int matchId, bool isHome)
        {
            var list = await _mediator.Send(new GetMatchEventListQuery.Request { MatchId = matchId });
            Update(list.Results, isHome);
            return View(list.Results);
        }

        public void Update(IEnumerable<GetMatchEventListQuery.MatchEventListDto> events, bool isHome)
        {
            foreach (var @event in events)
            {
                if (@event.IsOur && isHome || !@event.IsOur && !isHome)
                {
                    @event.Home = true;
                }
                else
                {
                    @event.Home = false;
                }
            }
        }
    }
}
