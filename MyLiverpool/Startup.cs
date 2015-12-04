using System.Collections.Generic;
using System.Globalization;
using System.Web.Mvc;
using Autofac;
using Autofac.Integration.Mvc;
using Microsoft.Owin;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Business.Services;
using MyLiverpoolSite.Business.Services.Services;
using MyLiverpoolSite.Data.DataAccessLayer;
using Owin;

[assembly: OwinStartupAttribute(typeof(MyLiverpool.Startup))]
namespace MyLiverpool
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);

            var builder = new ContainerBuilder();
            builder.RegisterControllers(typeof(MvcApplication).Assembly);
            builder.RegisterType<NewsService>().As<INewsService>();
            builder.RegisterType<UserService>().As<IUserService>();
            builder.RegisterType<UserService>().As<IUserService>();
            builder.RegisterType<ForumService>().As<IForumService>();
            builder.RegisterType<NewsCategoryService>().As<INewsCategoryService>();
            builder.RegisterType<BlogCategoryService>().As<IBlogCategoryService>();
            builder.RegisterType<NewsCommentService>().As<INewsCommentService>();
            builder.RegisterType<BlogCommentService>().As<IBlogCommentService>();
            builder.RegisterType<UnitOfWork>().As<IUnitOfWork>();
            builder.RegisterType<NewsItemsRepository>().As<INewsItemsRepository>();
          //  builder.RegisterType<>().As<NewsService>();
            // Register dependencies, then...
            var container = builder.Build();
            DependencyResolver.SetResolver(new AutofacDependencyResolver(container));
            //container.

            // Register the Autofac middleware FIRST. This also adds
            // Autofac-injected middleware registered with the container.
            app.UseAutofacMiddleware(container);
            app.UseAutofacMvc();

            AutoMapperBindings.Configure();
        }
    }
}
