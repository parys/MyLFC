using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Data.Common;
using MyLiverpool.Web.WebApiNext.Extensions;

namespace MyLiverpool.Web.WebApiNext.Areas.Lite.Controllers.Components
{
    public class MatchPanelViewComponent : ViewComponent
    {
        private readonly IMatchService _matchService;
        private readonly IHelperService _helperService;
        private readonly IMemoryCache _cache;

        public MatchPanelViewComponent(IMatchService matchService, IMemoryCache cache, IHelperService helperService)
        {
            _matchService = matchService;
            _cache = cache;
            _helperService = helperService;
        }

        public async Task<IViewComponentResult> InvokeAsync()
        {
            var helpEntity = await _cache.GetOrCreateAsync(CacheKeysConstants.HeaderMatchId,
                async x => await _helperService.GetAsync(HelperEntityType.HeaderMatch));
            if (!string.IsNullOrWhiteSpace(helpEntity))
            {
                var result = await _matchService.GetByIdAsync(int.Parse(helpEntity));
                return View(result);
            }
            return View(null as MatchDto);
        }
    }
}
