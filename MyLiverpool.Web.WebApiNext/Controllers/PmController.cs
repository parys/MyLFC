using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Web.WebApiNext.Extensions;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <summary>
    /// Manages private messages.
    /// </summary>
    [Authorize, Route("api/v1/[controller]")]
    public class PmController : Controller
    {
        private readonly IPmService _pmService;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="pmService"></param>
        public PmController(IPmService pmService)
        {
            _pmService = pmService;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        [Authorize, HttpGet("")]
        public async Task<IActionResult> GetPms()
        {
            var model = await _pmService.GetListAsync(User.GetUserId());
            return Ok(model);
        }

        /// <summary>
        /// Returns detailed pm.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Authorize, HttpGet("{id:int}")]
        public async Task<IActionResult> Pm(int id)
        {
            var model = await _pmService.GetAsync(id, User.GetUserId());
            return Ok(model);
        }

        /// <summary>
        /// Creates new private message.
        /// </summary>
        /// <param name="model">Private message model.</param>
        /// <returns>Is created successfully.</returns>
        [Authorize, HttpPost("")]
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

        /// <summary>
        /// Returns count of unread messages.
        /// </summary>
        /// <returns>Count of unreaded messages.</returns>
        [Authorize, HttpGet("unreadCount")]
        public async Task<IActionResult> GetUnreadPmCount()
        {
            var result = await _pmService.GetUnreadPmCountAsync(User.GetUserId());
            return Ok(result);
        }
    }
}
