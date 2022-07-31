using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;

namespace MyLfc.Web.WebHost.Middlewares;

/// <summary>
/// 
/// </summary>
public sealed class CustomExceptionHandlerMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger _logger;

    /// <summary>
    /// 
    /// </summary>
    /// <param name="next"></param>
    /// <param name="loggerFactory"></param>
    public CustomExceptionHandlerMiddleware(
        RequestDelegate next,
        ILoggerFactory loggerFactory)
    {
        _next = next;
        _logger = loggerFactory.
            CreateLogger<CustomExceptionHandlerMiddleware>();
    }

    /// <summary>
    /// 
    /// </summary>
    /// <param name="context"></param>
    /// <returns></returns>
    public async Task Invoke(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch (Exception ex)
        {
            try
            {

                _logger.LogError(0, ex, "An unhandled exception has occurred: " + ex.StackTrace);
                // Do custom stuff
                // Could be just as simple as calling _logger.LogError

                // if you don't want to rethrow the original exception
                // then call return:
                // return;
            }
            catch (Exception ex2)
            {
                _logger.LogError(
                    0, ex2,
                    "An exception was thrown attempting " +
                    "to execute the error handler.");
            }

            // Otherwise this handler will
            // re -throw the original exception
            throw;
        }
    }
}
