using System.IO;
using System.Linq;
using CryptoHelper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess;
//using MyLiverpool.Common.MapperConfigurations.Profiles;
using MyLiverpool.Web.WebApiNext.Services;
using OpenIddict;
//using MyLiverpoolSite.Business.Contracts;
//using MyLiverpoolSite.Business.Services.Services;
//using MyLiverpoolSite.Data.DataAccessLayer;
//using MyLiverpoolSite.Data.DataAccessLayer.Contracts;
//using MyLiverpoolSite.Data.DataAccessLayer.Repositories;
using IConfigurationProvider = AutoMapper.IConfigurationProvider;

namespace MyLiverpool.Web.WebApiNext
{
    public class Startup
    {
        //private static readonly IConfigurationProvider Config = new MapperConfiguration(cfg => {
        //    cfg.AddProfile(new ClubMapperProfile());
        //    cfg.AddProfile(new ForumMessageMapperProfile());
        //    cfg.AddProfile(new ForumSectionMapperProfile());
        //    cfg.AddProfile(new ForumSubsectionMapperProfile());
        //    cfg.AddProfile(new ForumThemeMapperProfile());
        //    cfg.AddProfile(new MatchMapperProfile());
        //    cfg.AddProfile(new MaterialMapperProfile());
        //    cfg.AddProfile(new MaterialCategoryMapperProfile());
        //    cfg.AddProfile(new MaterialCommentMapperProfile());
        //    cfg.AddProfile(new PmMapperProfile());
        //    cfg.AddProfile(new RoleGroupsMapperProfile());
        //    cfg.AddProfile(new UserMapperProfile());
        //    cfg.AddProfile(new WishMapperProfile());
        //});

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
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddDbContext<LiverpoolContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));


            services.AddIdentity<User, Role>()
                .AddEntityFrameworkStores<LiverpoolContext, int>()
                .AddDefaultTokenProviders();
  

            services.AddMvc();

            // Add application services.
            services.AddTransient<IEmailSender, AuthMessageSender>();
            services.AddTransient<ISmsSender, AuthMessageSender>();
           // RegisterServices(services);
            //--- from old proj
            services.AddCors(options => options.AddPolicy("AllowAll", p => p.AllowAnyOrigin())); //from sof

            services.AddOpenIddict<User, Role, LiverpoolContext, int>()
                // Enable the authorization and token endpoints (required to use the code flow).
        .EnableAuthorizationEndpoint("/connect/authorize")
       // Enable the token endpoint (required to use the password flow).
       .EnableTokenEndpoint("/connect/token")

       // Allow client applications to use the grant_type=password flow.
       .AllowPasswordFlow()

       // During development, you can disable the HTTPS requirement.
       .DisableHttpsRequirement()

       // Register a new ephemeral key, that is discarded when the application
       // shuts down. Tokens signed using this key are automatically invalidated.
       // This method should only be used during development.
       .AddEphemeralSigningKey();

            //  services.AddAuthentication(options => {
            //      options.SignInScheme = "ServerCookie";
            //    });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
                app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            //app.Use(async (context, next) =>
            //{
            //    await next();

            //    if (context.Response.StatusCode == 404 && !Path.HasExtension(context.Request.Path.Value))
            //    {
            //        context.Request.Path = "/index.html"; //todo Put your Angular root page here 
            //        await next();
            //    }
            //});

            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseIdentity();

            app.UseOAuthValidation();

            app.UseOpenIddict();

            app.UseMvcWithDefaultRoute();
            
         

            // Add external authentication middleware below. To configure them please see http://go.microsoft.com/fwlink/?LinkID=532715


            //app.UseMvc(routes =>
            //{
            //    routes.MapRoute(
            //        name: "default",services.AddTransient
            //        template: "{controller=Home}/{action=Index}/{id?}");
            //});

            //----------------------------------------------from OLD PROJECT
            app.UseCors("AllowAll");

        //    using (var context = new LiverpoolContext())
        //    {
        //        context.Database.EnsureCreated();

        //        if (!context.Applications.Any())
        //        {
        //            context.Applications.Add(new OpenIddictApplication
        //            {
        //                // Assign a unique identifier to your client app:
        //                Id = "48BF1BC3-CE01-4787-BBF2-0426EAD21342",

        //                // Assign a display named used in the consent form page:
        //                DisplayName = "MVC Core client application",

        //                // Register the appropriate redirect_uri and post_logout_redirect_uri:
        //                RedirectUri = "http://localhost:53507/signin-oidc",
        //                LogoutRedirectUri = "http://localhost:53507/",

        //                // Generate a new derived key from the client secret:
        //                ClientSecret = Crypto.HashPassword("secret_secret_secret"),

        //                // Note: use "public" for JS/mobile/desktop applications
        //                // and "confidential" for server-side applications.
        //                Type = OpenIddictConstants.ClientTypes.Public
        //            });

        //            context.SaveChanges();
        //        }
        //    }
        }

        //private void RegisterServices(IServiceCollection services)
        //{
        //    // builder.RegisterAssemblyTypes(Assembly.GetExecutingAssembly()).AsImplementedInterfaces();
        //    services.AddTransient<IAccountService, AccountService>();
        //    services.AddTransient<IAdminService, AdminService>();
        //    services.AddTransient<IClubService, ClubService>();
        //  //  services.AddTransient<IIdentityMessageService, EmailService>();
        //    services.AddTransient<IForumMessageService, ForumMessageService>();
        //    services.AddTransient<IForumSectionService, ForumSectionService>();
        //    services.AddTransient<IForumSubsectionService, ForumSubsectionService>();
        //    services.AddTransient<IForumThemeService, ForumThemeService>();
        //    services.AddTransient<IMatchService, MatchService>();
        //    services.AddTransient<IMaterialCategoryService, MaterialCategoryService>();
        //    services.AddTransient<IMaterialCommentService, MaterialCommentService>();
        //    services.AddTransient<IMaterialService, MaterialService>();
        //    services.AddTransient<IPmService, PmService>();
        //    services.AddTransient<IWishService, WishService>();
        //    services.AddTransient<IRoleService, RoleService>();
        //    services.AddTransient<IUploadService, UploadService>();
        //    services.AddTransient<IUserService, UserService>();
        //    services.AddTransient<IUnitOfWork, UnitOfWork>();
        //    services.AddTransient<IMaterialRepository, MaterialRepository>();
        //    services.AddSingleton<IMapper>(Config.CreateMapper());
        //}
    }
}
