using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.HelpEntities;
using MyLfc.Application.Matches.Queries;
using MyLfc.Common.Web;
using MyLfc.Common.Web.DistributedCache;
using MyLfc.Data.Common;

namespace MyLfc.Web.Mvc.Controllers.Components
{
    public class MatchPanelViewComponent : ViewComponent
    {
        private readonly IMediator _mediator;
        private readonly IDistributedCacheManager _cacheManager;

        public MatchPanelViewComponent(IDistributedCacheManager cache, IMediator mediator)
        {
            _cacheManager = cache;
            _mediator = mediator;
        }

        public async Task<IViewComponentResult> InvokeAsync()
        {
            var helpEntity = await _cacheManager.GetOrCreateAsync(CacheKeysConstants.HeaderMatchId,
            async () => (await _mediator.Send(new GetEntityQuery.Request { Type = HelperEntityType.HeaderMatch })).Value);

            if (!string.IsNullOrWhiteSpace(helpEntity))
            {
                var result = await _mediator.Send(new GetMatchHeaderQuery.Request {Id = int.Parse(helpEntity)});
                return View(result);
            }
            return View(null as GetMatchHeaderQuery.Response);
        }
    }
}
