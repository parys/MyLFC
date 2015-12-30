using System.Web.Mvc;
using System.Web.Routing;

namespace MyLiverpool.Web.WebApi
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            //        routes.MapRoute(
            //          name: "routeOne",
            //          url: "routesDemo/One",
            //       defaults: new { controller = "RoutesDemo", action = "One" });

            //        routes.MapRoute(
            //            name: "routeTwo",
            //            url: "routesDemo/Two/{donuts}",
            //            defaults: new { controller = "RoutesDemo", action = "Two", donuts = UrlParameter.Optional });

            //        routes.MapRoute(
            //            name: "routeThree",
            //            url: "routesDemo/Three",
            //            defaults: new { controller = "RoutesDemo", action = "Three" });

            routes.MapRoute(
                name: "values",
                url: "Values/Get",
                defaults: new {controller = "Values", action = "Get"});

            routes.MapRoute(
                name: "login",
                url: "Account/Login",
                defaults: new { controller = "Account", action = "Login" });

            routes.MapRoute(
                name: "register",
                url: "Account/Register",
                defaults: new { controller = "Account", action = "Register" });

            routes.MapRoute(
                name: "home",
                url: "News/Index",
                defaults: new { controller = "News", action = "Index" });

            routes.MapRoute(
                name: "news",
                url: "News/Index",
                defaults: new { controller = "News", action = "Index" });

            routes.MapRoute(
                name: "newsInfo",
                url: "News/Info",
                defaults: new { controller = "News", action = "Info" });

            routes.MapRoute(
                name: "userInfo",
                url: "User/Info",
                defaults: new { controller = "User", action = "Info" });

            routes.MapRoute(
                name: "users",
                url: "User/index",
                defaults: new { controller = "User", action = "Index" });

            routes.MapRoute(
                name: "pms",
                url: "User/Pms",
                defaults: new { controller = "User", action = "PrivateMessages" });

            routes.MapRoute(
                name: "forum",
                url: "Forum/Index",
                defaults: new {controller = "Forum", action = "Index"});

            routes.MapRoute(
                name: "forumSubsection",
                url: "Forum/Subsection",
                defaults: new {controller = "Forum", action = "Subsection"});

            routes.MapRoute(
                name: "Default",
                url: "{*url}",
                defaults: new { controller = "Home", action = "Index" });


            //routes.MapRoute(
            //    name: "Default",
            //    url: "{controller}/{action}/{id}",
            //    defaults: new {controller = "Home", action = "Index", id = UrlParameter.Optional}
            //    );
        }
    }
}
