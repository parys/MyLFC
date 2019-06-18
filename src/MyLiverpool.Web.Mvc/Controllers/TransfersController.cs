using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;

namespace MyLiverpool.Web.Mvc.Controllers
{
    public class TransfersController : Controller
    {
        private readonly ITransferService _transferService;

        public TransfersController(ITransferService transferService)
        {
            _transferService = transferService;
        }

        public async Task<IActionResult> Current()
        {
            var result = await _transferService.GetCurrentListAsync();
            return View(result);
        }
    }
}