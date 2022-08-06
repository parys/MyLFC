using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.Features.MaterialCategories.Queries;
using MyLfc.Data.Common;

namespace MyLfc.Web.Mvc.Controllers;

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