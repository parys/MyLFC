using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AspNet.Security.OAuth.Validation;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Dto;
using MyLiverpool.Common.Utilities.Extensions;

namespace MyLiverpool.Web.WebApiNext.Controllers
{
    /// <inheritdoc />
    /// <summary>
    /// Manages notifiacations.
    /// </summary>
    [Authorize(AuthenticationSchemes = OAuthValidationDefaults.AuthenticationScheme), Route("api/v1/[controller]")]
    public class NotificationController : Controller
    {
        private readonly INotificationService _notificationService;

        /// <summary>
        /// Notifications.
        /// </summary>
        /// <param name="notificationService"></param>
        public NotificationController(INotificationService notificationService)
        {
            _notificationService = notificationService;
        }

        /// <summary>
        /// Returns user notifications.
        /// </summary>
        /// <returns></returns>
        [Authorize, HttpGet("")]
        public async Task<IActionResult> GetListAsync()
        {
            var model = await _notificationService.GetListAsync(User.GetUserId());
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
            var model = await _notificationService.GetAsync(id, userId);
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
            var result = await _notificationService.SaveAsync(model);
            //   _cache.Remove(UserPm + model.ReceiverId);
            return Ok(result);
        }
    }
}
