using System.Threading.Tasks;
using AspNet.Security.OAuth.Validation;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLiverpool.Business.Contracts;
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
        /// Constructor.
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
            return Json(model);
        }

        /// <summary>
        /// Mark notification as read.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Authorize, HttpPut("{id:int}")]
        public async Task<IActionResult> ReadAsync(int id)
        {
            var userId = User.GetUserId();
            var model = await _notificationService.MarkAsReadAsync(id, userId);
            return Json(model);
        }
        
        /// <summary>
        /// Returns count of unread notifications.
        /// </summary>
        /// <returns>Count of unread notifications.</returns>
        [Authorize, HttpGet("unread")]
        public async Task<IActionResult> GetUnreadCount()
        {
            var userId = User.GetUserId();
            var result = //await _cache.GetOrCreate(CacheKeysConstants.NotificationUserId + userId, async x =>
                await _notificationService.GetUnreadCountAsync(userId);//);
            return Json(result);
        }
    }
}
