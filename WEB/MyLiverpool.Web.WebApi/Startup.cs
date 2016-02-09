using System.Reflection;
using System.Web.Http;
using Autofac;
using Autofac.Integration.WebApi;
using Microsoft.Owin;
using MyLiverpool.Web.WebApi;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Business.Services.Mapping;
using MyLiverpoolSite.Business.Services.Services;
using MyLiverpoolSite.Data.DataAccessLayer;
using MyLiverpoolSite.Data.DataAccessLayer.Repositories;
using Owin;

[assembly: OwinStartup(typeof(Startup))]
namespace MyLiverpool.Web.WebApi
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);

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
            //   app.UseAutofacMiddleware(container);
            //   app.UseAutofacMvc();
            //  app

            app.UseCors(Microsoft.Owin.Cors.CorsOptions.AllowAll);//todo
            new AutoMapperBindings().Config();

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
            builder.RegisterType<AccountService>().As<IAccountService>();
            builder.RegisterType<ForumService>().As<IForumService>();
            builder.RegisterType<MaterialCategoryService>().As<IMaterialCategoryService>();
            builder.RegisterType<MaterialCommentService>().As<IMaterialCommentService>();
            builder.RegisterType<MaterialService>().As<IMaterialService>();
            builder.RegisterType<RoleService>().As<IRoleService>();
            builder.RegisterType<UserService>().As<IUserService>();
        }
    }
}
