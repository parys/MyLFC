using Microsoft.AspNetCore.Http;

namespace MyLfc.Web.WebHost.Extensions
{
    /// <summary>
    /// Helpers for HttpContext
    /// </summary>
    public static class HttpContextExtensions
    {
        /// <summary>
        /// Returns remote user ip
        /// </summary>
        /// <param name="context">HttpContext for request</param>
        /// <returns></returns>
        public static string GetIp(this HttpContext context)
        {
            return context.Connection.RemoteIpAddress.ToString();
        }
    }
}
