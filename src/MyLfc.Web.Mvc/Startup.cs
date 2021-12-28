﻿using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.IO.Compression;
using System.Text.Json;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.ResponseCompression;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Hosting;
using MyLfc.Application.Infrastructure;
using MyLfc.Application.Infrastructure.Profiles;
using MyLfc.Common.Web;
using MyLfc.Common.Web.Hubs;
using MyLfc.Business.Services.Helpers;
using MyLfc.Common.Utilities;
using MyLfc.Common.Web.Middlewares;
using MyLfc.Persistence;
using MyLfc.Common.Mappings;

namespace MyLfc.Web.Mvc
{
    public class Startup
    {
        public Startup(IWebHostEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);

            builder.AddEnvironmentVariables();
            Configuration = builder.Build();
            Env = env;
        }

        private IConfigurationRoot Configuration { get; }

        private IWebHostEnvironment Env { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<GzipCompressionProviderOptions>(options => options.Level = CompressionLevel.Optimal);
            services.AddCustomResponseCompression();
            
            services.Configure<RequestLocalizationOptions>(options =>
            {
                options.DefaultRequestCulture = new RequestCulture("ru-RU");
                options.SupportedCultures = new List<CultureInfo> { new CultureInfo("ru-RU") };
                options.RequestCultureProviders = new List<IRequestCultureProvider>();
            });
            services.AddRouting(options => options.LowercaseUrls = true);
            services.AddControllersWithViews().AddJsonOptions(options =>
            {
                options.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
                
                //options.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            });
            
            services.AddPersistence(Configuration);

            services.AddDataProtection().SetApplicationName("liverpoolfc-app")
                .PersistKeysToFileSystem(new DirectoryInfo(Directory.GetCurrentDirectory()));

            services.AddCustomIdentitySettings();
            
            RegisterCoreHelpers(services);
            services.RegisterServices();

            services.Configure<EmailSettings>(Configuration.GetSection("EmailSettings"));

            services.AddCustomRedisCache(Configuration);

            //var context = (LiverpoolContext)services.BuildServiceProvider().GetService(typeof(LiverpoolContext));
            //context.Database.Migrate();

            services.AddAutoMapper(typeof(MaterialProfile), typeof(ForumMessageMapperProfile));
            services.AddMediatR();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseForwardedHeaders(new ForwardedHeadersOptions
            {
                ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
            });

            app.UseResponseCompression();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseDefaultFiles();

            var cachePeriod = env.IsDevelopment() ? "600" : "604800";
            app.UseStaticFiles(new StaticFileOptions
            {
                OnPrepareResponse = ctx =>
                {
                    ctx.Context.Response.Headers.Append("Cache-Control", $"public, max-age={cachePeriod}");
                }
            });

            app.UseRouting();
            
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
                endpoints.MapRazorPages();
            });
        }

        private void RegisterCoreHelpers(IServiceCollection services)
        {
            services.AddSingleton<IWebHostEnvironment>(Env);
            services.AddSingleton<IConfigurationRoot>(Configuration);
            services.TryAddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddTransient<ISignalRHubAggregator, EmptyHubAggregator>();
            services.AddScoped<RequestContext>();
        }
    }
}
