using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Common.Utilities;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Web.Mvc.Controllers.Components
{
    public class StaticPageViewComponent : ViewComponent
    {
        private readonly IHelperService _helperService;
        private readonly IMemoryCache _cache;

        public StaticPageViewComponent(IHelperService helperService, IMemoryCache cache)
        {
            _helperService = helperService;
            _cache = cache;
        }

        public async Task<IViewComponentResult> InvokeAsync(HelperEntityType type)
        {
            var result = await _cache.GetOrCreateAsync(GlobalConstants.HelperEntity + (int)type, async x => await _helperService.GetAsync(type));
            return View(model:result);
        }
    }
}
