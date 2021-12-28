using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.Notifications;

namespace MyLfc.Web.WebApiNext.Controllers
{
    /// <inheritdoc />
    /// <summary>
    /// Manages notifications.
    /// </summary>
    public class NotificationsController : BaseController
    {
        /// <summary>
        /// Returns user notifications.
        /// </summary>
        /// <returns></returns>
        [Authorize, HttpGet("")]
        public async Task<IActionResult> GetListAsync()
        {
            var result = await Mediator.Send(new GetNotificationListQuery.Request());
            return Ok(result.Results);
        }

        /// <summary>
        /// Mark notifications as read.
        /// </summary>
        /// <param name="request">Array with ids for </param>
        /// <returns></returns>
        [Authorize, HttpPut("read")]
        public async Task<IActionResult> ReadAsync([FromBody]MarkNotificationsAsReadCommand.Request request)
        {
            return Ok(await Mediator.Send(request));
        }
        
        /// <summary>
        /// Returns count of unread notifications.
        /// </summary>
        /// <returns>Count of unread notifications.</returns>
        [Authorize, HttpGet("unread")]
        public async Task<IActionResult> GetUnreadCount()
        {
            var result = await Mediator.Send(new GetUnreadNotificationCountQuery.Request());
            return Ok(result.Result);
        }
    }
}
