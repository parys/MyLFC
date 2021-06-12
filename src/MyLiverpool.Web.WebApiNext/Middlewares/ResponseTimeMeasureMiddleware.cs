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
            await _next(context);
            stopWatch.Stop();
            context.Response.Headers.Add("X-Total-Count", stopWatch.ElapsedMilliseconds.ToString());

            _logger.LogError(11, $"{context.Request.Path} takes {stopWatch.ElapsedMilliseconds}");
                  
        }
    }
}
