using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.Seasons.Queries;

namespace MyLfc.Web.Mvc.Controllers
{
    public class SeasonsController : BaseController
    {
        public async Task<IActionResult> Calendar(int id = 0)
        {
            return View(await Mediator.Send(new GetSeasonCalendarQuery.Request {SeasonId = id}));
        }

        public async Task<IActionResult> Statistics(int id = 0)
        {
            return View(await Mediator.Send(new GetSeasonStatisticsQuery.Request {SeasonId = id}));
        }
    }
}