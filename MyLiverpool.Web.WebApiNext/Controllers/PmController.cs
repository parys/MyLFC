using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.DTO;
using MyLiverpool.Web.WebApiNext.Extensions;

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
        public async Task<IActionResult> WritePm([FromBody]PrivateMessageDto model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            model.SenderId = User.GetUserId();
            if (model.ReceiverId == model.SenderId)
            {
                return BadRequest();
            }
            var result = await _pmService.SaveAsync(model);
            return Ok(result);
        }

        [Route("GetUnreadPmCount")]
        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetUnreadPmCount()
        {
            var result = await _pmService.GetUnreadPmCountAsync(User.GetUserId());
            return Ok(result);
        }
    }
}
