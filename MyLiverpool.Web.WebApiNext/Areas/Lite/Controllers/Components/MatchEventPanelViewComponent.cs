using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Dto;

namespace MyLiverpool.Web.WebApiNext.Areas.Lite.Controllers.Components
{
    public class MatchEventPanelViewComponent : ViewComponent
    {
        public IViewComponentResult Invoke(IEnumerable<MatchEventDto> events, bool isHome)
        {
            Update(events, isHome);
            return View(events);
        }

        public void Update(IEnumerable<MatchEventDto> events, bool isHome)
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
