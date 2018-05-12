using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using MyLfc.Common.Web;
using MyLiverpool.Business.Contracts;

namespace MyLiverpool.Web.Mvc.Controllers.Components
{
    public class MatchCalendarViewComponent : ViewComponent
    {
        private readonly IMatchService _matchService;
        private readonly IMemoryCache _cache;

        public MatchCalendarViewComponent(IMatchService matchService, IMemoryCache cache)
        {
            _matchService = matchService;
            _cache = cache;
        }

        public async Task<IViewComponentResult> InvokeAsync()
        {
            var result = //await _cache.GetOrCreateAsync(CacheKeysConstants.MatchCalendarCacheConst,
                // async x =>
                    await _matchService.GetForCalendarAsync();//);
            return View(result.ToList());
        }
    }
}
