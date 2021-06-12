using System;
using System.Diagnostics;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;

namespace MyLiverpool.Web.WebApiNext.Middlewares
{
    /// <summary>
    /// 
    /// </summary>
    public sealed class ResponseTimeMeasureMiddleware
    {
        // Name of the Response Header, Custom Headers starts with "X-"  
        private const string RESPONSE_HEADER_RESPONSE_TIME = "X-Response-Time-ms";
        private readonly RequestDelegate _next;
        private readonly ILogger _logger;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="next"></param>
        /// <param name="loggerFactory"></param>
        public ResponseTimeMeasureMiddleware(
            RequestDelegate next,
            ILoggerFactory loggerFactory)
        {
            _next = next;
            _logger = loggerFactory.
                CreateLogger<ResponseTimeMeasureMiddleware>();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="context"></param>
        /// <returns></returns>
        public async Task Invoke(HttpContext context)
        {
            var stopWatch = new Stopwatch();
            stopWatch.Start();
            context.Response.OnStarting(() => {
                // Stop the timer information and calculate the time   
                stopWatch.Stop();
                var responseTimeForCompleteRequest = stopWatch.ElapsedMilliseconds;
                // Add the Response time information in the Response headers.   
                context.Response.Headers[RESPONSE_HEADER_RESPONSE_TIME] = responseTimeForCompleteRequest.ToString();
                _logger.LogError(11, $"{context.Request.Path} took {stopWatch.ElapsedMilliseconds}");

                return Task.CompletedTask;
            });
            await _next(context);
        }
    }
}
