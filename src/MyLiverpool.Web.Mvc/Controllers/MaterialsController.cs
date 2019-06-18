using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.Materials;

namespace MyLiverpool.Web.Mvc.Controllers
{
    public class MaterialsController : BaseController
    {
        public async Task<IActionResult> Index(GetMaterialListQuery.Request request)
        {
            return View(await Mediator.Send(request));
        }
    }
}