using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.IO.Compression;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.ResponseCompression;
using Microsoft.AspNetCore.Rewrite;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using MyLfc.Application.Infrastructure;
using MyLfc.Application.Infrastructure.Profiles;
using MyLfc.Business.Services.Helpers;
using MyLfc.Common.Mappings;
using MyLfc.Common.Utilities;
using MyLfc.Common.Web;
using MyLfc.Common.Web.Hubs;
using MyLfc.Common.Web.Middlewares;
using MyLfc.Persistence;
using MyLfc.Web.WebHost.Filters;
using MyLfc.Web.WebHost.Middlewares;
using Newtonsoft.Json.Serialization;
using Serilog;

namespace MyLfc.Web.WebHost
{
    /// <summary>
    /// Startup class.
    /// </summary>
    public class Startup
    {
        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="env"></param>
        public Startup(IWebHostEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddJsonFile($"appsettings.local.json", optional: true);

            if (env.IsDevelopment())
            {
                // For more details on using the user secret store see http://go.microsoft.com/fwlink/?LinkID=532709
                // builder.AddUserSecrets<Startup>();
            }

            builder.AddEnvironmentVariables();
            Configuration = builder.Build();
            Log.Logger = new LoggerConfiguration().ReadFrom.Configuration(Configuration)
                .CreateLogger();
            Env = env;
        }

        private IConfigurationRoot Configuration { get; }

        private IWebHostEnvironment Env { get; }

        /// <summary>
        /// This method gets called by the runtime. Use this method to add services to the container.
        /// </summary>
        /// <param name="services">IServiceCollection.</param>
        public void ConfigureServices(IServiceCollection services)
        {
            if (Configuration.GetSection("Settings") != null &&
                Convert.ToBoolean(Configuration.GetSection("Settings")["Compression"]))
            {
                services.Configure<GzipCompressionProviderOptions>(options => options.Level = CompressionLevel.Optimal);
                services.AddCustomResponseCompression();
            }

            services.Configure<RequestLocalizationOptions>(options =>
            {
                options.DefaultRequestCulture = new RequestCulture("ru-RU");
                options.SupportedCultures = new List<CultureInfo> { new CultureInfo("ru-RU") };
                options.RequestCultureProviders = new List<IRequestCultureProvider>();
            });
            services.AddRouting(options => options.LowercaseUrls = true);
            services.AddControllersWithViews(options =>
                {
                    options.Filters.Add(typeof(RequestDecorator));
                    options.Filters.Add(typeof(CustomExceptionFilterAttribute));
                })

                .AddNewtonsoftJson(options =>
                    options.SerializerSettings.ContractResolver =
                        new CamelCasePropertyNamesContractResolver());

            services.AddCors(options =>
            {
                options.AddPolicy("MyPolicy", builder =>
                {
                    builder
                        .AllowCredentials()
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .WithOrigins("localhost:1669", "localhost:4500", "test.mylfc.ru", "mylfc.ru")
                        .SetIsOriginAllowed(_ => true)
                        .Build();
                });
            });

            services.AddPersistence(Configuration);

            services.AddDataProtection().SetApplicationName("liverpoolfc-app")
                .PersistKeysToFileSystem(new DirectoryInfo(Directory.GetCurrentDirectory()));

            services.AddCustomIdentitySettings();


            services.ApplyCustomOpenIdDict(Env, Configuration);

            services.AddSignalR();

            RegisterCoreHelpers(services);
            services.RegisterServices();

            services.Configure<EmailSettings>(Configuration.GetSection("EmailSettings"));
            services.AddCustomRedisCache(Configuration);

            services.AddAntiforgery(options => options.HeaderName = "X-XSRF-TOKEN");

            if (Env.IsDevelopment())
            {
                //services.AddSwaggerGen(options =>
                //{
                //    options.SwaggerDoc("v1", new OpenApiInfo()
                //    {
                //        Version = "v1",
                //        Title = "Swagger Sample API",
                //        Description = "API Sample made",
                //      //  TermsOfService = "None"
                //    });

                //    //    var filePath = Path.Combine(PlatformServices.Default.Application.ApplicationBasePath, "MyApi.xml");
                //    //s    options.IncludeXmlComments(filePath);
                //    options.OperationFilter<HandleModelbinding>();

                //    options.AddSecurityDefinition("oauth2", new OpenApiSecurityScheme
                //    {
                //        //Type = SecuritySchemeType.OAuth2,
                //        //Flows = new OpenApiOAuthFlows
                //        //{
                //        //    Implicit = new OpenApiOAuthFlow()
                //        //    {

                //        //    }
                //        //}"implicit",
                //        //AuthorizationUrl = "/connect/authorize",
                //        ////   Extensions = { {"123", new object()}},
                //        //TokenUrl = "connect/token",
                //        //Scopes = new Dictionary<string, string>
                //        //{
                //        //    {"roles", "roles scope"},
                //        //    {"openid", "openid scope"}
                //        //},
                //    });

                //    //   options.OperationFilter<AssignSecurityRequirements>();
                //});
            }
            services.AddAutoMapper(typeof(MaterialProfile), typeof(ForumMessageMapperProfile));
            services.AddMediatR();
            
            services.AddScoped<RequestContext>();
        }

        /// <summary>
        /// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        /// </summary>
        /// <param name="app"></param>
        /// <param name="env"></param>
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (Configuration["EnableResponseTimeMeasure"] != null && Configuration.GetValue<bool>("EnableResponseTimeMeasure"))
            {
                app.UseMiddleware<ResponseTimeMeasureMiddleware>();
            }
            
            // app.UseXsrf();
            if (env.IsDevelopment())
            {
                //  app.UseSwagger();
                //  app.UseSwaggerUI(c =>
                //  {
                //      c.SwaggerEndpoint("/swagger/v1/swagger.json", "V1 Docs");
                //   c.ConfigureOAuth2("test-client-id123", "test-client-secr43et", "test-rea32lm", "test-a11pp");
                //  });
                var options = new RewriteOptions()
                    .AddRewrite("^/small([0-9]+)(.*)", "$1", true);

                app.UseRewriter(options);
            }
            else
            {
                app.UseForwardedHeaders(new ForwardedHeadersOptions
                {
                    ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
                });
                if (Configuration.GetSection("Settings") != null &&
                    Convert.ToBoolean(Configuration.GetSection("Settings")["Compression"]))
                {
                    app.UseResponseCompression();
                }
            }

            app.UseDefaultFiles();

            var cachePeriod = env.IsDevelopment() ? "600" : "6048000";
            app.UseStaticFiles(new StaticFileOptions
            {
                OnPrepareResponse = ctx =>
                {
                    ctx.Context.Response.Headers.Append("Cache-Control", $"public, max-age={cachePeriod}");
                }
            });


            app.UseRouting();
            app.UseCors("MyPolicy");

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapHub<AnonymHub>("/hubs/anonym");
                endpoints.MapHub<AuthHub>("/hubs/auth");
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });
        }

        private void RegisterCoreHelpers(IServiceCollection services)
        {
            services.AddSingleton<IWebHostEnvironment>(Env);
            services.AddSingleton<IConfigurationRoot>(Configuration);
            services.AddTransient<IHttpContextAccessor, HttpContextAccessor>();
            services.AddTransient<ISignalRHubAggregator, SignalRHubAggregator>();
        }
    }
}