using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto.Filters;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Web.WebApiNext.Areas.Lite.Controllers
{
    /// <inheritdoc />
    /// <summary>
    /// Home controller.
    /// </summary>
    [AllowAnonymous]
    [Area("lite")]
    public class HomeController : Controller
    {
        private readonly IMaterialService _materialService;

        public HomeController(IMaterialService materialService)
        {
            _materialService = materialService;
        }

        /// <summary>
        /// Returns index wiew with prerended view.
        /// </summary>
        /// <returns></returns>
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
        
        public IActionResult About()
        {
            return View();
        }
        
        public IActionResult Copyright()
        {
            return View();
        }
    }
}
