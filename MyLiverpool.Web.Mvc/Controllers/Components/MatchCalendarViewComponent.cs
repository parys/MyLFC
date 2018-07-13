using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Common.Web;
using MyLfc.Common.Web.DistributedCache;
using MyLiverpool.Business.Contracts;

namespace MyLiverpool.Web.Mvc.Controllers.Components
{
    public class MatchCalendarViewComponent : ViewComponent
    {
        private readonly IMatchService _matchService;
        private readonly IDistributedCacheManager _cacheManager;

        public MatchCalendarViewComponent(IMatchService matchService, IDistributedCacheManager cache)
        {
            _matchService = matchService;
            _cacheManager = cache;
        }

        public async Task<IViewComponentResult> InvokeAsync()
        {
            var result = await _cacheManager.GetOrCreateAsync(CacheKeysConstants.MatchCalendarCacheConst,
                 async () => await _matchService.GetForCalendarAsync());
            return View(result.ToList());
        }
    }
}
