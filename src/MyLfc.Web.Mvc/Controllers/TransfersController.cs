using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.Transfers;

namespace MyLfc.Web.Mvc.Controllers;

public class TransfersController : BaseController
{
    public async Task<IActionResult> Current()
    {
        return View(await Mediator.Send(new GetCurrentTransferListQuery.Request()));
    }
}