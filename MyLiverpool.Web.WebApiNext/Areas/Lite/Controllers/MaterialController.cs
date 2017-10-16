using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto.Filters;
using MyLiverpool.Common.Utilities.Extensions;
using MyLiverpool.Data.Common;
using MyLiverpool.Web.WebApiNext.Extensions;

namespace MyLiverpool.Web.WebApiNext.Areas.Lite.Controllers
{
    [Area("lite")]
    public class MaterialController : Controller
    {
        private readonly IMaterialService _materialService;
        private readonly IMemoryCache _cache;

        public MaterialController(IMaterialService materialService, IMemoryCache cache)
        {
            _materialService = materialService;
            _cache = cache;
        }

        public async Task<IActionResult> Index(int page = 1, int? categoryId = null)
        {
            var filters = new MaterialFiltersDto
            {
                Page = page,
                MaterialType = MaterialType.Both,
                IsInNewsmakerRole = false,
                CategoryId = categoryId
            };
            var result = await _materialService.GetDtoAllAsync(filters);
            return View(result);
        }

        public async Task<IActionResult> Detail(int id)
        {
            var hasAccess = User != null && (User.IsInRole(nameof(RolesEnum.NewsStart)) || User.IsInRole(nameof(RolesEnum.BlogStart)));
            var model = await _cache.GetOrCreateAsync(CacheKeysConstants.Material + id, async x => await _materialService.GetDtoAsync(id, hasAccess));
            if (model.Pending)
            {
                if ((model.Type == MaterialType.News || User.GetUserId() != model.UserId) &&
                    (User == null || !User.IsInRole(nameof(RolesEnum.NewsStart))))
                {
                    return BadRequest();
                }
            }
            var label = "Material" + id;
            if (string.IsNullOrWhiteSpace(Request.Cookies[label]))
            {
                var options = new CookieOptions { Expires = DateTime.Now.AddMonths(1) };
                Response.Cookies.Append(label, "1", options);
                model.Reads = +1;
                await _materialService.AddViewAsync(id);
            }
            return View(model);
        }
    }
}