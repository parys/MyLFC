using System.Reflection;
using System.Web.Http;
using Autofac;
using Autofac.Integration.WebApi;
using AutoMapper;
using Microsoft.AspNet.Identity;
using Microsoft.Owin;
using MyLiverpool.Common.MapperConfigurations.Profiles;
using MyLiverpool.Web.WebApi;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Business.Services.Services;
using MyLiverpoolSite.Data.DataAccessLayer;
using MyLiverpoolSite.Data.DataAccessLayer.Contracts;
using MyLiverpoolSite.Data.DataAccessLayer.Repositories;
using Owin;

[assembly: OwinStartup(typeof(Startup))]
namespace MyLiverpool.Web.WebApi
{
    public partial class Startup
    {
        private static readonly IConfigurationProvider Config = new MapperConfiguration(cfg => {
            cfg.AddProfile(new ClubMapperProfile());
            cfg.AddProfile(new ForumMessageMapperProfile());
            cfg.AddProfile(new ForumSectionMapperProfile());
            cfg.AddProfile(new ForumSubsectionMapperProfile());
            cfg.AddProfile(new ForumThemeMapperProfile());
            cfg.AddProfile(new MaterialMapperProfile());
            cfg.AddProfile(new MaterialCategoryMapperProfile());
            cfg.AddProfile(new MaterialCommentMapperProfile());
            cfg.AddProfile(new PmMapperProfile());
            cfg.AddProfile(new RoleGroupsMapperProfile());
            cfg.AddProfile(new UserMapperProfile());
            cfg.AddProfile(new WishMapperProfile());
        });

        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app, Config.CreateMapper());

            var builder = new ContainerBuilder();

            var config = GlobalConfiguration.Configuration;

            builder.RegisterApiControllers(Assembly.GetExecutingAssembly());

            builder.RegisterWebApiFilterProvider(config);

            builder.RegisterType<UnitOfWork>().As<IUnitOfWork>();
            builder.RegisterType<MaterialRepository>().As<IMaterialRepository>();

            // Register dependencies, then...
            RegisterServices(builder);
            var container = builder.Build();
            config.DependencyResolver = new AutofacWebApiDependencyResolver(container);
            //container.

            // Register the Autofac middleware FIRST. This also adds
            // Autofac-injected middleware registered with the container.
             //  app.UseAutofacMiddleware(container);
            //   app.UseAutofacMvc();
            //  app
            
            app.UseCors(Microsoft.Owin.Cors.CorsOptions.AllowAll);

            //app.Use(async (context, next) =>
            //{
            //    context.Response.Headers.Add("Access-Control-Allow-Origin", new[] { "*"});
            //    context.Response.Headers.Add("Access-Control-Allow-Methods", new[] { "GET, POST, PUT, DELETE, OPTIONS"});
            //    context.Response.Headers.Add("Access-Control-Allow-Headers", new[] {"Content-Type, x-xsrf-token"});

            //    if (context.Request.Method == "OPTIONS")
            //    {
            //        context.Response.StatusCode = 200;
            //    }
            //    else
            //    {
            //        await next();
            //    }
            //});

        }

        private void RegisterServices(ContainerBuilder builder)
        {
           // builder.RegisterAssemblyTypes(Assembly.GetExecutingAssembly()).AsImplementedInterfaces();
            builder.RegisterType<AccountService>().As<IAccountService>();
            builder.RegisterType<ClubService>().As<IClubService>();
            builder.RegisterType<EmailService>().As<IIdentityMessageService>();
            builder.RegisterType<ForumMessageService>().As<IForumMessageService>();
            builder.RegisterType<ForumSectionService>().As<IForumSectionService>();
            builder.RegisterType<ForumSubsectionService>().As<IForumSubsectionService>();
            builder.RegisterType<ForumThemeService>().As<IForumThemeService>();
            builder.RegisterType<MaterialCategoryService>().As<IMaterialCategoryService>();
            builder.RegisterType<MaterialCommentService>().As<IMaterialCommentService>();
            builder.RegisterType<MaterialService>().As<IMaterialService>();
            builder.RegisterType<PmService>().As<IPmService>();
            builder.RegisterType<WishService>().As<IWishService>();
            builder.RegisterType<RoleService>().As<IRoleService>();
            builder.RegisterType<UploadService>().As<IUploadService>();
            builder.RegisterType<UserService>().As<IUserService>();
            builder.RegisterInstance(Config.CreateMapper()).As<IMapper>();
        }
    }
}
