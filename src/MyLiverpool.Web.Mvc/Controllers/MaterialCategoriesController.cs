using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.MaterialCategories;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Web.Mvc.Controllers
{
    [Route("[controller]")]
    public class MaterialCategoriesController : BaseController
    {
        public async Task<IActionResult> Index(MaterialType type)
        {
            var request = new GetMaterialCategoryListQuery.Request
            {
                MaterialType = type
            };
            return View(await Mediator.Send(request));
        }
    }
}