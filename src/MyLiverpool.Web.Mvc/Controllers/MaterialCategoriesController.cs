using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Web.Mvc.Controllers
{
    [Route("[controller]")]
    public class MaterialCategoriesController : Controller
    {
        private readonly IMaterialCategoryService _materialCategoryService;

        public MaterialCategoriesController(IMaterialCategoryService materialCategoryService)
        {
            _materialCategoryService = materialCategoryService;
        }

        public async Task<IActionResult> Index(MaterialType type)
        {
            var result = await _materialCategoryService.GetListAsync(type);
            return View(result);
        }
    }
}