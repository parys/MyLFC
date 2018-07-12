using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Common.Web;
using MyLiverpool.Business.Contracts;

namespace MyLiverpool.Web.Mvc.Controllers.Components
{
    public class InjuryPanelViewComponent : ViewComponent
    {
        private readonly IInjuryService _injuryService;
        private readonly IDistributedCacheManager _cacheManager;

        public InjuryPanelViewComponent(IInjuryService injuryService, IDistributedCacheManager cacheManager)
        {
            _injuryService = injuryService;
            _cacheManager = cacheManager;
        }

        public async Task<IViewComponentResult> InvokeAsync()
        {
            var result = await _cacheManager.GetOrCreateAsync(CacheKeysConstants.LastInjuries,
                async () => await _injuryService.GetCurrentListAsync());
            return View(result);
        }
    }
}
