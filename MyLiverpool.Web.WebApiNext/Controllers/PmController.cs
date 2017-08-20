using System.Threading.Tasks;
using AspNet.Security.OAuth.Validation;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Common.Utilities.Extensions;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <summary>
    /// Manages private messages.
    /// </summary>
    [Authorize(AuthenticationSchemes = OAuthValidationDefaults.AuthenticationScheme), Route("api/v1/[controller]")]
    public class PmController : Controller
    {
        private readonly IPmService _pmService;
        private readonly IMemoryCache _cache;
        private const string UserPm = "userPm";

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="pmService"></param>
        /// <param name="cache"></param>
        public PmController(IPmService pmService, IMemoryCache cache)
        {
            _pmService = pmService;
            _cache = cache;
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
        public async Task<IActionResult> GetAsync(int id)
        {
            var userId = User.GetUserId();
            var model = await _pmService.GetAsync(id, userId);
      //      _cache.Remove(UserPm + userId);
            return Ok(model);
        }

        /// <summary>
        /// Creates new private message.
        /// </summary>
        /// <param name="model">Private message model.</param>
        /// <returns>Is created successfully.</returns>
        [Authorize, HttpPost("")]
        public async Task<IActionResult> CreateAsync([FromBody]PrivateMessageDto model)
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
         //   _cache.Remove(UserPm + model.ReceiverId);
            return Ok(result);
        }

        /// <summary>
        /// Returns count of unread messages.
        /// </summary>
        /// <returns>Count of unreaded messages.</returns>
        [Authorize, HttpGet("unreadCount")]
        public async Task<IActionResult> GetUnreadPmCount()
        {
            var userId = User.GetUserId();
            var result = //await _cache.GetOrCreate(UserPm + userId, async x =>
            await _pmService.GetUnreadPmCountAsync(userId);//);
            return Json(result);
        }
    }
}
