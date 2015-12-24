using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MvcAngular.Startup))]
namespace MvcAngular
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
