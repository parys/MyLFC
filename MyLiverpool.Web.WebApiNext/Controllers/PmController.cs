using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.DTO;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    public class PmController : Controller
    {
        private readonly IPmService _pmService;

        public PmController(IPmService pmService)
        {
            _pmService = pmService;
        }

        [Route("")]
        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetPms()
        {
            var model = await _pmService.GetListAsync(int.Parse(User.Identity.Name));
            return Ok(model);
        }

        [Route("")]
        [HttpGet]
        [Authorize]
        public async Task<IActionResult> Pm(int id)
        {
            var model = await _pmService.GetAsync(id, int.Parse(User.Identity.Name));
            return Ok(model);
        }

        [Route("")]
        [HttpPost]
        [Authorize]
        public async Task<IActionResult> WritePm(PrivateMessageDto model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            model.SenderId = int.Parse(User.Identity.Name);
            var userName = User.Identity.Name;
            if (model.ReceiverUserName == userName)
            {
                return BadRequest();
            }
            var result = await _pmService.SaveAsync(model);
            return Ok(result);
        }
    }
}
