using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Filters;
using MyLfc.Application.Infrastructure;
using MyLiverpool.Common.Utilities.Extensions;

namespace MyLiverpool.Web.WebApiNext.Infrastructure.Filters
{
    /// <summary>
    /// Parses params to RequestContext.
    /// </summary>
    public class RequestDecorator : IAsyncActionFilter
    {
        /// <summary>
        /// Executes before each action execution.
        /// </summary>
        /// <param name="context"></param>
        /// <param name="next"></param>
        /// <returns></returns>
        public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            var services = context.HttpContext.RequestServices;
            var session = services.GetService(typeof(RequestContext)) as RequestContext;

            var user = context.HttpContext.User;

            if (user.Identity?.IsAuthenticated != false)
            {
                session.UserId = user.GetIdSafe();
                session.User = user;
            }

            await next();
        }
    }
}
