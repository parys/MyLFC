using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.Materials.Queries;

namespace MyLfc.Web.Mvc.Controllers
{
    public class MaterialsController : BaseController
    {
        public async Task<IActionResult> Index(GetMaterialListQuery.Request request)
        {
            return View(await Mediator.Send(request));
        }
    }
}