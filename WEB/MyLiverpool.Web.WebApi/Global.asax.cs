using System.Data.Entity;
using System.Globalization;
using System.Threading;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace MyLiverpool.Web.WebApi
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register); 
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }

        protected void Application_BeginRequest()
        {
            Thread.CurrentThread.CurrentCulture = new CultureInfo("ru");
            Thread.CurrentThread.CurrentUICulture = new CultureInfo("ru");

            //Database.SetInitializer(new DatabaseInitializer()); //todo remove
            //LiverpoolContext db = new LiverpoolContext();
            //db.Database.Initialize(true);
        }
    }
}
