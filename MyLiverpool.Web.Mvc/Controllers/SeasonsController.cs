using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using MyLiverpool.Business.Contracts;

namespace MyLiverpool.Web.Mvc.Controllers
{
    public class SeasonsController : Controller
    {
        private readonly ISeasonService _seasonService;
        private readonly IMatchEventService _matchEventService;
        private readonly IMemoryCache _cache;

        public SeasonsController(ISeasonService seasonService, IMemoryCache cache, IMatchEventService matchEventService)
        {
            _seasonService = seasonService;
            _cache = cache;
            _matchEventService = matchEventService;
        }

        public async Task<IActionResult> Calendar(int id = 0)
        {
            var result = await _seasonService.GetByIdWithMatchesAsync(id);
            return View(result);
        }

        public async Task<IActionResult> Statistics(int id = 0)
        {
            var result = await _matchEventService.GetStatistics(id);
            return View(result);
        }
    }
}