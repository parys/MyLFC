using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Common.Web;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Business.Dto.Filters;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Web.Mvc.Controllers
{
    public class MaterialsController : Controller
    {
        private readonly IMaterialService _materialService;
        private readonly IDistributedCacheManager _cacheManager;

        public MaterialsController(IMaterialService materialService, IDistributedCacheManager cache)
        {
            _materialService = materialService;
            _cacheManager = cache;
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
            PageableData<MaterialMiniDto> result;
            if (filters.Page == 1 && !filters.IsInNewsmakerRole && filters.MaterialType == MaterialType.Both)
            {
                result = await _cacheManager.GetOrCreateAsync(CacheKeysConstants.MaterialList,
                    async () => await _materialService.GetDtoAllAsync(filters));
            }
            else
            {
                result = await _materialService.GetDtoAllAsync(filters);
            }
            return View(result);
        }
    }
}