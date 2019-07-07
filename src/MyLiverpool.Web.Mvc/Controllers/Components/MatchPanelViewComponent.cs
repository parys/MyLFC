using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.HelpEntities;
using MyLfc.Common.Web;
using MyLfc.Common.Web.DistributedCache;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Web.Mvc.Controllers.Components
{
    public class MatchPanelViewComponent : ViewComponent
    {
        private readonly IMatchService _matchService;
        private readonly IMediator _mediator;
        private readonly IDistributedCacheManager _cacheManager;

        public MatchPanelViewComponent(IMatchService matchService, IDistributedCacheManager cache, IMediator mediator)
        {
            _matchService = matchService;
            _cacheManager = cache;
            _mediator = mediator;
        }

        public async Task<IViewComponentResult> InvokeAsync()
        {
            var helpEntity = await _cacheManager.GetOrCreateAsync(CacheKeysConstants.HeaderMatchId,
            async () => (await _mediator.Send(new GetEntityQuery.Request { Type = HelperEntityType.HeaderMatch })).Value);

            if (!string.IsNullOrWhiteSpace(helpEntity))
            {
                var result = await _matchService.GetByIdAsync(int.Parse(helpEntity));
                return View(result);
            }
            return View(null as MatchDto);
        }
    }
}
