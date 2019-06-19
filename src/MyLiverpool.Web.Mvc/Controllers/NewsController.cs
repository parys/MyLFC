using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.Materials;
using MyLfc.Common.Web;
using MyLfc.Common.Web.DistributedCache;
using MyLiverpool.Common.Utilities.Extensions;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Web.Mvc.Controllers
{
    /// <inheritdoc />
    /// <summary>
    /// Manages blogs.
    /// </summary>
    [Route("[controller]")]
    public class NewsController : BaseController
    {
        private readonly IDistributedCacheManager _cacheManager;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="cache"></param>
        public NewsController(IDistributedCacheManager cache)
        {
            _cacheManager = cache;
        }

        [Route("")]
        public async Task<IActionResult> Index(GetMaterialListQuery.Request request)
        {
            return View("../Materials/Index", await Mediator.Send(request));
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> Detail(GetMaterialDetailQuery.Request request)
        {
            request.IncludePending = User != null && (User.IsInRole(nameof(RolesEnum.NewsStart)) || User.IsInRole(nameof(RolesEnum.BlogStart)));

            var model = await Mediator.Send(request);
            if (model == null)
            {
                return RedirectToAction("Index", "Blogs");
            }
            if (model.Pending)
            {
                if ((model.Type == MaterialType.News || User.GetUserId() != model.UserId) &&
                    (User == null || !User.IsInRole(nameof(RolesEnum.NewsStart))))
                {
                    return BadRequest();
                }
            }
            var label = CacheKeysConstants.Material + request.Id;
            if (string.IsNullOrWhiteSpace(Request.Cookies[label]))
            {
                var options = new CookieOptions { Expires = DateTime.Now.AddMonths(1) };
                Response.Cookies.Append(label, "1", options);
                model.Reads++;
                await Mediator.Send(new AddMaterialReadCommand.Request{Id = request.Id});
                UpdateMaterialCacheAddViewAsync(request.Id);
            }

            return View("../Materials/Detail", model);
        }

        private async void UpdateMaterialCacheAddViewAsync(int materialId)
        {
            var materialCache = await _cacheManager.GetAsync<GetMaterialDetailQuery.Response>(CacheKeysConstants.Material + materialId);
            if (materialCache != null)
            {
                materialCache.Reads++;
                _cacheManager.Set(CacheKeysConstants.Material + materialId, materialCache);
            }

            var materialsCache =
                await _cacheManager.GetAsync<GetLatestMaterialsQuery.Response>(CacheKeysConstants.MaterialsLatest);

            var material = materialsCache?.Results.FirstOrDefault(x => x.Id == materialId);
            if (material != null)
            {
                material.Reads++;
                _cacheManager.Set(CacheKeysConstants.MaterialsLatest, materialsCache);
            }

            var materialsPinnedCache =
                await _cacheManager.GetAsync<GetPinnedMaterialsQuery.Response>(CacheKeysConstants.MaterialsPinned);

            var materialPinned = materialsPinnedCache?.Results.FirstOrDefault(x => x.Id == materialId);
            if (material != null)
            {
                material.Reads++;
                _cacheManager.Set(CacheKeysConstants.MaterialsPinned, materialPinned);
            }
        }
    }
}
