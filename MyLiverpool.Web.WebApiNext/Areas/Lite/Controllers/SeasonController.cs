using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Web.WebApiNext.Extensions;

namespace MyLiverpool.Web.WebApiNext.Areas.Lite.Controllers
{
    [Area("lite")]
    public class SeasonController : Controller
    {
        private readonly ISeasonService _seasonService;
        private readonly IMemoryCache _cache;

        public SeasonController(ISeasonService seasonService, IMemoryCache cache)
        {
            _seasonService = seasonService;
            _cache = cache;
        }

        public async Task<IActionResult> Calendar(int id = 0)
        {
            var result = await _seasonService.GetByIdWithMatchesAsync(id);
            return View(result);
        }
    }
}