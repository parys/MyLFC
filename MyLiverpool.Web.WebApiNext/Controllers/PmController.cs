using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.DTO;
using MyLiverpool.Web.WebApiNext.Extensions;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    [Route("api/[controller]")]
   // [Authorize]
    public class PmController : Controller
    {
        private readonly IPmService _pmService;

        public PmController(IPmService pmService)
        {
            _pmService = pmService;
        }

        [Route("")]
        [HttpGet]
     //   [Authorize]
        public async Task<IActionResult> GetPms()
        {
            var model = await _pmService.GetListAsync(User.GetUserId());
            return Ok(model);
        }

        [Route("{id:int}")]
        [HttpGet]
        [Authorize]
        public async Task<IActionResult> Pm(int id)
        {
            var model = await _pmService.GetAsync(id, User.GetUserId());
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
            model.SenderId = User.GetUserId();
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
