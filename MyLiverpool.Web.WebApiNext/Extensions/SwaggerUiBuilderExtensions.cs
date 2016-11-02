using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.StaticFiles;
using Microsoft.Extensions.FileProviders;
using Swashbuckle.SwaggerUi.Application;
using System.Reflection;

namespace MyLiverpool.Web.WebApiNext.Extensions
{
    public static class SwaggerUiBuilderExtensions
    {
        public static IApplicationBuilder UseSwaggerUi(
            this IApplicationBuilder app,
            Action<SwaggerUiOptions> setupAction = null)
        {
            var options = new SwaggerUiOptions();
            setupAction?.Invoke(options);

            // Enable redirect from basePath to indexPath
            app.UseMiddleware<RedirectMiddleware>(options.BaseRoute, options.IndexPath);

            // Serve indexPath via middleware
            app.UseMiddleware<SwaggerUiMiddleware>(options);

            // Serve everything else via static file server
            var fileServerOptions = new FileServerOptions
            {
                RequestPath = $"/{options.BaseRoute}",
                EnableDefaultFiles = false,
                FileProvider = new EmbeddedFileProvider(typeof(SwaggerUiBuilderExtensions).GetTypeInfo().Assembly,
                    "MyLiverpool.Web.WebApiNext.wwwroot.js.swagger.ui")
            };
            fileServerOptions.StaticFileOptions.ContentTypeProvider = new FileExtensionContentTypeProvider();
            app.UseFileServer(fileServerOptions);

            return app;
        }
    }
}
