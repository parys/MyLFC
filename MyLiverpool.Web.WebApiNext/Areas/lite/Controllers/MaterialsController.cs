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
    [Route("news")]
    public class MaterialsController : Controller
    {
        private readonly IMaterialService _materialService;
        private readonly IMemoryCache _cache;

        public MaterialsController(IMaterialService materialService, IMemoryCache cache)
        {
            _materialService = materialService;
            _cache = cache;
        }

        public async Task<IActionResult> Index(int page = 1, int? categoryId = null, MaterialType type = MaterialType.Both, int? userId = null)
        {
            var filters = new MaterialFiltersDto
            {
                Page = page,
                MaterialType = type,
                IsInNewsmakerRole = false,
                CategoryId = categoryId,
                UserId = userId
            };
            var result = await _materialService.GetDtoAllAsync(filters);
            return View(result);
        }
    }
}