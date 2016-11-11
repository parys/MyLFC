using System.Collections.Generic;
using System.IO;
using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.PlatformAbstractions;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Services.Services;
using MyLiverpool.Common.MapperConfigs;
using MyLiverpool.Common.Utilities;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess;
using MyLiverpool.Data.ResourceAccess.Contracts;
using MyLiverpool.Data.ResourceAccess.Repositories;
using Newtonsoft.Json.Serialization;
using Swashbuckle.Swagger.Model;
using IConfigurationProvider = AutoMapper.IConfigurationProvider;

namespace MyLiverpool.Web.WebApiNext
{
    /// <summary>
    /// Startup class.
    /// </summary>
    public class Startup
    {
        private static readonly IConfigurationProvider Config = new MapperConfiguration(cfg =>
        {
            cfg.AddProfile(new ClubMapperProfile());
            cfg.AddProfile(new ForumMessageMapperProfile());
            cfg.AddProfile(new ForumSectionMapperProfile());
            cfg.AddProfile(new ForumSubsectionMapperProfile());
            cfg.AddProfile(new ForumThemeMapperProfile());
            cfg.AddProfile(new MatchMapperProfile());
            cfg.AddProfile(new MaterialMapperProfile());
            cfg.AddProfile(new MaterialCategoryMapperProfile());
            cfg.AddProfile(new MaterialCommentMapperProfile());
            cfg.AddProfile(new PmMapperProfile());
            cfg.AddProfile(new RoleGroupsMapperProfile());
            cfg.AddProfile(new UserMapperProfile());
            cfg.AddProfile(new WishMapperProfile());
        });

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
                builder.AddUserSecrets();
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
            // Add framework services.
            services.AddDbContext<LiverpoolContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"), b => b.MigrationsAssembly("MyLiverpool.Data.ResourceAccess")));

            services.AddIdentity<User, Role>()
                .AddEntityFrameworkStores<LiverpoolContext, int>()
                .AddDefaultTokenProviders();

            services.AddMvc().AddJsonOptions(options =>
            {
                options.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            });

            services.Configure<EmailSettings>(Configuration.GetSection("EmailSettings"));

            RegisterServices(services);
            
            services.AddCors();

            services.AddOpenIddict<LiverpoolContext, int>()
                // Enable the authorization and token endpoints (required to use the code flow).
                .EnableAuthorizationEndpoint("/connect/authorize")
                .EnableLogoutEndpoint("/connect/logout")
                // Enable the token endpoint (required to use the password flow).
                .EnableTokenEndpoint("/connect/token")
                
                // Allow client applications to use the grant_type=password flow.
                .AllowImplicitFlow()
                .AllowPasswordFlow()
                //.AllowAuthorizationCodeFlow()
                .AllowRefreshTokenFlow()

                // During development, you can disable the HTTPS requirement.
                .DisableHttpsRequirement()

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
                    }
                });

             //   options.OperationFilter<AssignSecurityRequirements>();
            });

            new DatabaseInitializer((LiverpoolContext)services.BuildServiceProvider().GetService(typeof(LiverpoolContext))).Seed();

        }

        /// <summary>
        /// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        /// </summary>
        /// <param name="app"></param>
        /// <param name="env"></param>
        /// <param name="loggerFactory"></param>
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
                app.UseBrowserLink();
                //app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions()
                //{
                //    HotModuleReplacement = true
                //});

                app.UseSwagger(documentFilter: (swaggerDoc, httpRequest) =>
                {
                    swaggerDoc.Host = httpRequest.Host.Value;
                });

                app.UseSwaggerUi(c =>
                {
                    c.SwaggerEndpoint("/swagger/v1/swagger.json", "V1 Docs");
                    c.ConfigureOAuth2("test-client-id123", "test-client-secr43et", "test-rea32lm", "test-a11pp");
                }
                );
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.Use(async (context, next) =>
            {
                await next();

                if (context.Response.StatusCode == 404 && !Path.HasExtension(context.Request.Path.Value))
                {
                    context.Request.Path = "/index.html"; // Put your Angular root page here 
                    await next();
                }
            });

            var angularRoutes = new[] {
                 "/api",
                 "/connect"
             };

            //app.Use(async (context, next) =>
            //{
            //    if (context.Request.Path.HasValue && null == angularRoutes.FirstOrDefault(
            //        (ar) => context.Request.Path.Value.StartsWith(ar, StringComparison.OrdinalIgnoreCase)))
            //    {
            //        context.Request.Path = new PathString("/");
            //    }

            //    await next();
            //});

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
            });

            // Add external authentication middleware below. To configure them please see http://go.microsoft.com/fwlink/?LinkID=532715
            app.UseCors(builder =>
            {
                builder.WithOrigins("localhost:1669")
                    .AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin();
            });
        }

        private void RegisterServices(IServiceCollection services)
        {
            // builder.RegisterAssemblyTypes(Assembly.GetExecutingAssembly()).AsImplementedInterfaces();
            services.AddTransient<IAccountService, AccountService>();
            services.AddTransient<IAdminService, AdminService>();
            services.AddTransient<IClubService, ClubService>();
            services.AddTransient<IEmailSender, AuthMessageSender>();
            //  services.AddTransient<IIdentityMessageService, EmailService>();
            services.AddTransient<IForumMessageService, ForumMessageService>();
            services.AddTransient<IForumSectionService, ForumSectionService>();
            services.AddTransient<IForumSubsectionService, ForumSubsectionService>();
            services.AddTransient<IForumThemeService, ForumThemeService>();
            services.AddTransient<IMatchService, MatchService>();
            services.AddTransient<IMaterialCategoryService, MaterialCategoryService>();
            services.AddTransient<IMaterialCommentService, MaterialCommentService>();
            services.AddTransient<IMaterialService, MaterialService>();
            services.AddTransient<IPmService, PmService>();
            services.AddTransient<IRoleService, RoleService>();
            services.AddTransient<ISmsSender, AuthMessageSender>();
            services.AddTransient<IUploadService, UploadService>();
            services.AddTransient<IUserService, UserService>();
            services.AddTransient<IUnitOfWork, UnitOfWork>();
            services.AddTransient<IWishService, WishService>();
            services.AddSingleton<IMapper>(Config.CreateMapper());
            RegisterRepositories(services);
            RegisterCoreHelpers(services);
        }

        private void RegisterRepositories(IServiceCollection services)
        {
            services.AddTransient<IForumSectionRepository, ForumSectionRepository>();
            services.AddScoped<IMaterialCategoryRepository, MaterialCategoryRepository>();
            services.AddScoped<IMaterialCommentRepository, MaterialCommentRepository>();
            services.AddScoped<IMaterialRepository, MaterialRepository>();
            services.AddTransient<IPmRepository, PmRepository>();
            services.AddTransient<IUserRepository, UserRepository>();
        }


        private void RegisterCoreHelpers(IServiceCollection services)
        {
            services.AddSingleton<IHostingEnvironment>(Env);
            services.AddSingleton<IConfigurationRoot>(Configuration);
            services.TryAddSingleton<IHttpContextAccessor, HttpContextAccessor>();
        }
        private string GetXmlCommentsPath(ApplicationEnvironment appEnvironment)
        {
            return Path.Combine(appEnvironment.ApplicationBasePath, "Basic.xml");
        }
    }
}
