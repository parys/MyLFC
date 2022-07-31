using System;
using System.IO;
using System.Net;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using MyLfc.Application.Infrastructure.Exceptions;

namespace MyLfc.Web.WebHost.Filters;

/// <summary>
/// Specifies filter to unwrap exception and return appropriate http status code.
/// </summary>
[AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
public class CustomExceptionFilterAttribute : ExceptionFilterAttribute
{
    private readonly IWebHostEnvironment _hostingEnvironment;
    private readonly ILogger _logger;

    /// <summary>
    /// Constructor.
    /// </summary>
    /// <param name="hostingEnvironment"></param>
    /// <param name="logger"></param>
    public CustomExceptionFilterAttribute(IWebHostEnvironment hostingEnvironment, ILogger<CustomExceptionFilterAttribute> logger)
    {
        _hostingEnvironment = hostingEnvironment;
        _logger = logger;
    }

    /// <summary>
    /// Invokes when exception has been thrown.
    /// </summary>
    /// <param name="context"></param>
    public override void OnException(ExceptionContext context)
    {
        context.HttpContext.Response.ContentType = "application/json";
        context.HttpContext.Response.StatusCode = (int)HttpStatusCode.BadRequest;

        switch (context.Exception)
        {
            case ValidationException exception:
                context.Result = new JsonResult(new
                {
                    errors = exception.Failures
                });
                return;
        }

        var code = HttpStatusCode.InternalServerError;

        switch (context.Exception)
        {
            case FileNotFoundException _:
            case NotFoundException _:
                code = HttpStatusCode.NotFound;
                break;
        }

        context.HttpContext.Response.StatusCode = (int)code;

        _logger.LogError(0, context.Exception, "An unhandled exception has occurred: " + context.Exception.StackTrace);

        if (_hostingEnvironment.IsProduction())
        {
            context.Result = new JsonResult(new
            {
                errors = new[] { context.Exception.Message }
            });
        }
        else
        {
            context.Result = new JsonResult(new
            {
                errors = new[] { context.Exception.Message },
                stackTrace = context.Exception.StackTrace
            });
        }
    }
}
