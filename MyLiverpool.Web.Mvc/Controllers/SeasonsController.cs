using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;

namespace MyLiverpool.Web.Mvc.Controllers
{
    public class SeasonsController : Controller
    {
        private readonly ISeasonService _seasonService;
        private readonly IMatchEventService _matchEventService;

        public SeasonsController(ISeasonService seasonService, IMatchEventService matchEventService)
        {
            _seasonService = seasonService;
            _matchEventService = matchEventService;
        }

        public async Task<IActionResult> Calendar(int id = 0)
        {
            var result = await _seasonService.GetByIdWithMatchesAsync(id);
            return View(result);
        }

        public async Task<IActionResult> Statistics(int id = 0)
        {
            var result = await _matchEventService.GetStatisticsAsync(id);
            return View(result);
        }
    }
}