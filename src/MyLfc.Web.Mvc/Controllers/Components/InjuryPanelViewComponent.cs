using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.Injuries;
using MyLfc.Common.Web;
using MyLfc.Common.Web.DistributedCache;

namespace MyLfc.Web.Mvc.Controllers.Components
{
    public class InjuryPanelViewComponent : ViewComponent
    {
        private readonly IMediator _mediator;
        private readonly IDistributedCacheManager _cacheManager;

        public InjuryPanelViewComponent(IMediator mediator, IDistributedCacheManager cacheManager)
        {
            _mediator = mediator;
            _cacheManager = cacheManager;
        }

        public async Task<IViewComponentResult> InvokeAsync()
        {
            var result = await _cacheManager.GetOrCreateAsync(CacheKeysConstants.LastInjuries,
                async () => await _mediator.Send(new GetCurrentInjuryListQuery.Request()));
            return View(result);
        }
    }
}
