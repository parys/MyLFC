using System.Reflection;
using System.Web.Http;
using System.Web.Mvc;
using Autofac;
using Autofac.Integration.Mvc;
using Autofac.Integration.WebApi;
using Microsoft.Owin;
using MyLiverpool.Web.WebApi;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Business.Services;
using MyLiverpoolSite.Business.Services.Services;
using MyLiverpoolSite.Data.DataAccessLayer;
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
            builder.RegisterType<NewsItemsRepository>().As<INewsItemsRepository>();

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

         //   app.UseCors(Microsoft.Owin.Cors.CorsOptions.AllowAll);//todo
            AutoMapperBindings.Configure();
        }

        private void RegisterServices(ContainerBuilder builder)
        {
            builder.RegisterType<AccountService>().As<IAccountService>();
            builder.RegisterType<BlogCategoryService>().As<IBlogCategoryService>();
            builder.RegisterType<BlogCommentService>().As<IBlogCommentService>();
            builder.RegisterType<ForumService>().As<IForumService>();
            builder.RegisterType<NewsCategoryService>().As<INewsCategoryService>();
            builder.RegisterType<NewsCommentService>().As<INewsCommentService>();
            builder.RegisterType<NewsService>().As<INewsService>();
            builder.RegisterType<RoleService>().As<IRoleService>();
            builder.RegisterType<UserService>().As<IUserService>();
        }
    }
}
