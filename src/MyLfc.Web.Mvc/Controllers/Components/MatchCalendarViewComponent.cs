using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.Matches;
using MyLfc.Common.Web;
using MyLfc.Common.Web.DistributedCache;

namespace MyLfc.Web.Mvc.Controllers.Components
{
    public class MatchCalendarViewComponent : ViewComponent
    {
        private readonly IMediator _mediator;
        private readonly IDistributedCacheManager _cacheManager;

        public MatchCalendarViewComponent(IMediator mediator, IDistributedCacheManager cache)
        {
            _mediator = mediator;
            _cacheManager = cache;
        }

        public async Task<IViewComponentResult> InvokeAsync()
        {
            var result = await _cacheManager.GetOrCreateAsync(CacheKeysConstants.MatchCalendarCacheConst,
                 async () => await _mediator.Send(new GetMatchCalendarQuery.Request()));
            return View(result);
        }
    }
}
