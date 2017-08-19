using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using AspNet.Security.OpenIdConnect.Primitives;
using Microsoft.AspNetCore.Antiforgery;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.ResponseCompression;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Logging;
using MyLiverpool.Business.Services.Helpers;
using MyLiverpool.Common.Utilities;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess;
using MyLiverpool.Data.ResourceAccess.Helpers;
using MyLiverpool.Web.WebApiNext.Extensions;
using Newtonsoft.Json.Serialization;
using Swashbuckle.AspNetCore.Swagger;

namespace MyLiverpool.Web.WebApiNext
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
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);

            if (env.IsDevelopment())
            {
                // For more details on using the user secret store see http://go.microsoft.com/fwlink/?LinkID=532709
                builder.AddUserSecrets<Startup>();
            }

            builder.AddEnvironmentVariables();
            Configuration = builder.Build();
            Env = env;
        }

        private IConfigurationRoot Configuration { get; }

        private IHostingEnvironment Env { get; }

        /// <summary>
        /// This method gets called by the runtime. Use this method to add services to the container.
        /// </summary>
        /// <param name="services">IServiceCollection.</param>
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<LiverpoolContext>(options =>
            {
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"));
                options.UseOpenIddict<int>();
            });

            services.AddDataProtection().SetApplicationName("liverpoolfc-app")
                .PersistKeysToFileSystem(new DirectoryInfo(Directory.GetCurrentDirectory()));
            
            services.AddIdentity<User, Role>(options =>
            {
                options.Password.RequireDigit = false;
                options.Password.RequiredLength = 6;
                options.Password.RequireLowercase = false;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireUppercase = false;
                options.User.RequireUniqueEmail = true;
                options.User.AllowedUserNameCharacters =
                    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._@!#$&?абвгдеёжзийклмнопрстуфхцчшщъыьэюяAБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
                options.SignIn.RequireConfirmedEmail = true;
                options.SignIn.RequireConfirmedPhoneNumber = false;
                options.Lockout.AllowedForNewUsers = true;
            })
                .AddEntityFrameworkStores<LiverpoolContext>()
                .AddDefaultTokenProviders();

            services.Configure<IdentityOptions>(options =>
            {
                options.ClaimsIdentity.UserNameClaimType = OpenIdConnectConstants.Claims.Name;
                options.ClaimsIdentity.UserIdClaimType = OpenIdConnectConstants.Claims.Subject;
                options.ClaimsIdentity.RoleClaimType = OpenIdConnectConstants.Claims.Role;
            });

            services.AddAuthentication().AddOAuthValidation();
            services.AddMvc().AddJsonOptions(options =>
            {
                options.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            });

            services.Configure<EmailSettings>(Configuration.GetSection("EmailSettings"));

            services.Configure<GzipCompressionProviderOptions>(options => options.Level = CompressionLevel.Optimal);
            services.AddResponseCompression(options =>{});
            
            RegisterCoreHelpers(services);
            services.RegisterRepositories();
            services.RegisterServices();

            services.AddCors(options =>
            {
                options.AddPolicy("MyPolicy", builder =>
                {
                    builder.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader().Build();
                });
            });

            services.AddOpenIddict<int>(options =>
            {
                options.AddEntityFrameworkCoreStores<LiverpoolContext>()
                    .AddMvcBinders()
                    .EnableLogoutEndpoint("/connect/logout")
                    // Enable the token endpoint (required to use the password flow).
                    .EnableTokenEndpoint("/connect/token")
                    .AllowPasswordFlow()
                    .AllowRefreshTokenFlow()
                    //    .SetIdentityTokenLifetime(TimeSpan.FromDays(14))
                    //   .SetAccessTokenLifetime(TimeSpan.FromSeconds(10))
                    .SetRefreshTokenLifetime(TimeSpan.FromDays(14))
               //todo shouldUse ??  .UseJsonWebTokens()
                    // During development, you can disable the HTTPS requirement.
                    .DisableHttpsRequirement()
                //    .AddSigningKey(new RsaSecurityKey(new RSACng(CngKey.Create(new CngAlgorithm("")))))
                    // When request caching is enabled, authorization and logout requests
                    // are stored in the distributed cache by OpenIddict and the user agent
                    // is redirected to the same page with a single parameter (request_id).
                    // This allows flowing large OpenID Connect requests even when using
                    // an external authentication provider like Google, Facebook or Twitter.
                    .EnableRequestCaching();
            // Register a new ephemeral key, that is discarded when the application
            // shuts down. Tokens signed using this key are automatically invalidated.
            // This method should only be used during development.
                if (Env.IsDevelopment())
                {
                    options.AddEphemeralSigningKey();
                }
                else
                {
                    //try
                    //{
                    //    options.AddSigningCertificate(
                    //        new FileStream(Directory.GetCurrentDirectory() + "/cert.pfx", FileMode.Open),
                    //        Configuration.GetSection("Cert")["password"]);
                    //}
                    //catch
                    //{
                    //    options.AddSigningCertificate(
                    //        new FileStream(Directory.GetCurrentDirectory() + "/cert2.pfx", FileMode.Open),
                    //        Configuration.GetSection("Cert")["password"]);
                    //}
                }
            });

            services.AddMemoryCache();

            //   services.AddAntiforgery(options => options.HeaderName = "X-XSRF-TOKEN");

            if (Env.IsDevelopment())
            {
                services.AddSwaggerGen(options =>
                {
                    options.SwaggerDoc("v1", new Info
                    {
                        Version = "v1",
                        Title = "Swagger Sample API",
                        Description = "API Sample made",
                        TermsOfService = "None"
                    });

                    //    var filePath = Path.Combine(PlatformServices.Default.Application.ApplicationBasePath, "MyApi.xml");
                    //s    options.IncludeXmlComments(filePath);
                    options.OperationFilter<HandleModelbinding>();

                    options.AddSecurityDefinition("oauth2", new OAuth2Scheme()
                    {
                        Type = "oauth2",
                        Flow = "implicit",
                        AuthorizationUrl = "/connect/authorize",
                        //   Extensions = { {"123", new object()}},
                        TokenUrl = "connect/token",
                        Scopes = new Dictionary<string, string>
                        {
                            {"roles", "roles scope"},
                            {"openid", "openid scope"}
                        },
                    });

                    //   options.OperationFilter<AssignSecurityRequirements>();
                });
            }

            services.AddNodeServices(options =>
            {
            });
            var context = (LiverpoolContext) services.BuildServiceProvider().GetService(typeof(LiverpoolContext));
            context.Database.Migrate();
            if (Env.IsDevelopment())
            {
                new DatabaseInitializer(context).Seed();
            }
        }

        /// <summary>
        /// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        /// </summary>
        /// <param name="app"></param>
        /// <param name="env"></param>
        /// <param name="loggerFactory"></param>
        /// <param name="antiforgery"></param>
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory, IAntiforgery antiforgery)
        {
            app.UseMiddleware<ExceptionHandlerMiddleware>();
            app.UseResponseCompression();

           // app.UseXsrf();
            if (env.IsDevelopment())
            {
                loggerFactory.AddConsole(Configuration.GetSection("Logging"));
                loggerFactory.AddDebug();
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
                app.UseBrowserLink();
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions()
                {
                    HotModuleReplacement = true
                });

                app.UseSwagger();
                app.UseSwaggerUI(c =>
                {
                    c.SwaggerEndpoint("/swagger/v1/swagger.json", "V1 Docs");
                    c.ConfigureOAuth2("test-client-id123", "test-client-secr43et", "test-rea32lm", "test-a11pp");
                });
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseCors("MyPolicy");

            app.UseDefaultFiles();
            app.UseStaticFiles(new StaticFileOptions()
            {
                OnPrepareResponse = ctx =>
                {
                    ctx.Context.Response.Headers.Append("Cache-Control", "public,max-age=86400");
                }
            });

            app.UseAuthentication();//UseIdentity();

        //    app.UseOAuthValidation(opt => //todo does it need?
       //     { 
               // opt.AutomaticAuthenticate = true;
              //  opt.AutomaticChallenge = true;
      //      });
            
  //          app.UseOpenIddict();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new {controller = "Home", action = "Index"});
            });
        }

        private void RegisterCoreHelpers(IServiceCollection services)
        {
            services.AddSingleton<IHostingEnvironment>(Env);
            services.AddSingleton<IConfigurationRoot>(Configuration);
            services.TryAddSingleton<IHttpContextAccessor, HttpContextAccessor>();
        }
    }
}