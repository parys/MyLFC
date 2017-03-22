using System;
using System.Collections.Generic;
using AspNet.Security.OpenIdConnect.Primitives;
using AutoMapper;
using Microsoft.AspNetCore.Antiforgery;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.ResponseCompression;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Logging;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Services;
using MyLiverpool.Common.Mappings;
using MyLiverpool.Common.Utilities;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess;
using MyLiverpool.Data.ResourceAccess.Interfaces;
using MyLiverpool.Data.ResourceAccess.Repositories;
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

            services.AddIdentity<User, Role>(options =>
            {
                options.Password.RequireDigit = false;
                options.Password.RequiredLength = 2;
                options.Password.RequireLowercase = false;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireUppercase = false;
                options.User.RequireUniqueEmail = true;
                options.User.AllowedUserNameCharacters =
                    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._@!#$&?";
                options.SignIn.RequireConfirmedEmail = true;
                options.SignIn.RequireConfirmedPhoneNumber = false;
                options.Lockout.AllowedForNewUsers = true;
            })
                .AddEntityFrameworkStores<LiverpoolContext, int>()
                .AddDefaultTokenProviders();

            services.Configure<IdentityOptions>(options =>
            {
                options.ClaimsIdentity.UserNameClaimType = OpenIdConnectConstants.Claims.Name;
                options.ClaimsIdentity.UserIdClaimType = OpenIdConnectConstants.Claims.Subject;
                options.ClaimsIdentity.RoleClaimType = OpenIdConnectConstants.Claims.Role;
            });

            //  services.AddAntiforgery(options => options.HeaderName = "X-XSRF-TOKEN");

            services.AddMvc().AddJsonOptions(options =>
            {
                options.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            });

            services.Configure<EmailSettings>(Configuration.GetSection("EmailSettings"));

            services.Configure<GzipCompressionProviderOptions>(options => options.Level = System.IO.Compression.CompressionLevel.Fastest);
            services.AddResponseCompression(options =>{});

            RegisterServices(services);
            
            services.AddCors(options =>
            {
                options.AddPolicy("MyPolicy", builder =>
                {
                    builder.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader().Build();
                });
            });

            services.AddOpenIddict<int>()
                .AddEntityFrameworkCoreStores<LiverpoolContext>()
              //  .AddMvcBinders()
                // Enable the authorization and token endpoints (required to use the code flow).
                .EnableAuthorizationEndpoint("/connect/authorize")
                .EnableLogoutEndpoint("/connect/logout")
                // Enable the token endpoint (required to use the password flow).
                .EnableTokenEndpoint("/connect/token")
                
                // Allow client applications to use the grant_type=password flow.
                .AllowImplicitFlow()
                .AllowPasswordFlow()
                //.AllowAuthorizationCodeFlow)
                .AllowRefreshTokenFlow()
                .SetIdentityTokenLifetime(TimeSpan.FromDays(14))
                .SetAccessTokenLifetime(TimeSpan.FromDays(14))

                // During development, you can disable the HTTPS requirement.
                .DisableHttpsRequirement()

                // When request caching is enabled, authorization and logout requests
                // are stored in the distributed cache by OpenIddict and the user agent
                // is redirected to the same page with a single parameter (request_id).
                // This allows flowing large OpenID Connect requests even when using
                // an external authentication provider like Google, Facebook or Twitter.
                .EnableRequestCaching()
                // Register a new ephemeral key, that is discarded when the application
                // shuts down. Tokens signed using this key are automatically invalidated.
                // This method should only be used during development.
                .AddEphemeralSigningKey();

            // services.AddE();
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

            services.AddNodeServices(options =>
            {
               // options.InvocationTimeoutMilliseconds = 1000000;
            });
            var context = (LiverpoolContext) services.BuildServiceProvider().GetService(typeof(LiverpoolContext));
            context.Database.Migrate();
            new DatabaseInitializer(context).Seed();
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
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseResponseCompression();

            if (env.IsDevelopment())
            {
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

            //app.Use(next => context =>
            //{
            //    var tokens = antiforgery.GetAndStoreTokens(context);
            //    context.Response.Cookies.Append("XSRF-TOKEN", tokens.RequestToken,
            //        new CookieOptions() {HttpOnly = false});
            //    var formFields = new Dictionary<string, StringValues>()
            //    {
            //        {"X-XSRF-TOKEN", context.Request.Headers["X-XSRF-TOKEN"]}
            //    };
            //    context.Request.Form = new FormCollection(formFields);
            //    return next(context);
            //});
            app.UseCors("MyPolicy");

            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseIdentity();

            app.UseOAuthValidation();
            
            app.UseOpenIddict();

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

        private void RegisterServices(IServiceCollection services)
        {
            services.AddTransient<IAccountService, AccountService>();
            services.AddTransient<IAdminService, AdminService>();
            services.AddTransient<IChatMessageService, ChatMessageService>();
            services.AddTransient<IClubService, ClubService>();
            services.AddTransient<IEmailSender, AuthMessageSender>();
            services.AddTransient<IForumMessageService, ForumMessageService>();
            services.AddTransient<IForumSectionService, ForumSectionService>();
            services.AddTransient<IForumSubsectionService, ForumSubsectionService>();
            services.AddTransient<IForumThemeService, ForumThemeService>();
            services.AddTransient<IHelperService, HelperService>();
            services.AddTransient<IMatchService, MatchService>();
            services.AddTransient<IMaterialCategoryService, MaterialCategoryService>();
            services.AddTransient<IMaterialCommentService, MaterialCommentService>();
            services.AddTransient<IMaterialService, MaterialService>();
            services.AddTransient<IPersonService, PersonService>();
            services.AddTransient<IPmService, PmService>();
            services.AddTransient<IRoleService, RoleService>();
            services.AddTransient<ISeasonService, SeasonService>();
            services.AddTransient<ISmsSender, AuthMessageSender>();
            services.AddTransient<IUploadService, UploadService>();
            services.AddTransient<IUserService, UserService>();
            services.AddTransient<IWishService, WishService>();
            services.AddSingleton<IMapper>(MapperConfig.GetConfiration.CreateMapper());
            RegisterRepositories(services);
            RegisterCoreHelpers(services);
        }

        private void RegisterRepositories(IServiceCollection services)
        {
            services.AddScoped<IChatMessageRepository, ChatMessageRepository>();
            services.AddScoped<IClubRepository, ClubRepository>();
            services.AddScoped<IForumMessageRepository, ForumMessageRepository>();
            services.AddScoped<IForumSectionRepository, ForumSectionRepository>();
            services.AddScoped<IForumSubsectionRepository, ForumSubsectionRepository>();
            services.AddScoped<IForumThemeRepository, ForumThemeRepository>();
            services.AddScoped<IHelperEntityRepository, HelperEntityRepository>();
            services.AddScoped<IMatchRepository, MatchRepository>();
            services.AddScoped<IMaterialCategoryRepository, MaterialCategoryRepository>();
            services.AddScoped<IMaterialCommentRepository, MaterialCommentRepository>();
            services.AddScoped<IMaterialRepository, MaterialRepository>();
            services.AddScoped<IPersonRepository, PersonRepository>();
            services.AddScoped<IPmRepository, PmRepository>();
            services.AddScoped<IRoleGroupRepository, RoleGroupRepository>();
            services.AddScoped<ISeasonRepository, SeasonRepository>();
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IWishRepository, WishRepository>();
        }

        private void RegisterCoreHelpers(IServiceCollection services)
        {
            services.AddSingleton<IHostingEnvironment>(Env);
            services.AddSingleton<IConfigurationRoot>(Configuration);
            services.TryAddSingleton<IHttpContextAccessor, HttpContextAccessor>();
        }
    }
}