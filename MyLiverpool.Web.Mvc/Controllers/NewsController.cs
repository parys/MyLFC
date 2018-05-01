using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using MyLfc.Common.Web;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto.Filters;
using MyLiverpool.Common.Utilities.Extensions;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Web.Mvc.Controllers
{
    /// <inheritdoc />
    /// <summary>
    /// Manages blogs.
    /// </summary>
    [Route("[controller]")]
    public class NewsController : Controller
    {
        private readonly IMaterialService _materialService;
        private readonly IMemoryCache _cache;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="materialService"></param>
        /// <param name="cache"></param>
        public NewsController(IMaterialService materialService, IMemoryCache cache)
        {
            _materialService = materialService;
            _cache = cache;
        }

        /// <summary>
        /// Shows blogs lits.
        /// </summary>
        /// <param name="page"></param>
        /// <param name="categoryId"></param>
        /// <param name="userId"></param>
        /// <returns></returns>
        [Route("")]
        public async Task<IActionResult> Index(int page = 1, int? categoryId = null, int? userId = null)
        {
            var filters = new MaterialFiltersDto
            {
                Page = page,
                MaterialType = MaterialType.News,
                IsInNewsmakerRole = false,
                CategoryId = categoryId,
                UserId = userId
            };
            var result = await _materialService.GetDtoAllAsync(filters);
            return View("../Materials/Index", result);
        }

        /// <summary>
        /// Returns blog item.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id:int}")]
        public async Task<IActionResult> Detail(int id)
        {
            var hasAccess = User != null && (User.IsInRole(nameof(RolesEnum.NewsStart)) || User.IsInRole(nameof(RolesEnum.BlogStart)));
            var model = await _cache.GetOrCreateAsync(CacheKeysConstants.Material + id, async x => await _materialService.GetDtoAsync(id, hasAccess));
            if (model == null)
            {
                return RedirectToAction("Index", "News");
            }
            if (model.Pending)
            {
                if ((model.Type == MaterialType.News || User.GetUserId() != model.UserId) &&
                    (User == null || !User.IsInRole(nameof(RolesEnum.NewsStart))))
                {
                    return BadRequest();
                }
            }
            var label = CacheKeysConstants.Material + id;
            if (string.IsNullOrWhiteSpace(Request.Cookies[label]))
            {
                var options = new CookieOptions { Expires = DateTime.Now.AddMonths(1) };
                Response.Cookies.Append(label, "1", options);
                model.Reads++;
                await _materialService.AddViewAsync(id);
                _cache.Remove(CacheKeysConstants.Material + id);
                _cache.Remove(CacheKeysConstants.MaterialList);
            }

            return View("../Materials/Detail", model);
        }
    }
}
