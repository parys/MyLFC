using Autofac;
using Microsoft.Owin;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Business.Services;
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

          //  builder.RegisterType<INewsService, NewsService>();
            // Register dependencies, then...
            var container = builder.Build();

            // Register the Autofac middleware FIRST. This also adds
            // Autofac-injected middleware registered with the container.
            app.UseAutofacMiddleware(container);
            app.UseAutofacMvc();
        }
    }
}
