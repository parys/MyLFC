using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MyLiverpool.Startup))]
namespace MyLiverpool
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
