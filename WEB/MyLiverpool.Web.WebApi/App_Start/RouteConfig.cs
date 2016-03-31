using System.Web.Mvc;
using System.Web.Routing;

namespace MyLiverpool.Web.WebApi
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.LowercaseUrls = true;

            routes.MapRoute(
                name: "Default",
                url: "{*anything}",
                defaults: new { controller = "Home", action = "Index" }
                );
        }
    }
}
