﻿using System.Web.Mvc;
using System.Web.Routing;

namespace MyLiverpool.Web.WebApi
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.LowercaseUrls = true;

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
                name: "login",
                url: "Account/Login",
                defaults: new { controller = "Account", action = "Login" });

            routes.MapRoute(
                name: "register",
                url: "Account/Register",
                defaults: new { controller = "Account", action = "Register" });

            routes.MapRoute(
                name: "home",
                url: "News/List",
                defaults: new { controller = "News", action = "List" });

            routes.MapRoute(
                name: "news",
                url: "News/List",
                defaults: new { controller = "News", action = "List" });

            routes.MapRoute(
                name: "newsInfo",
                url: "News/Info",
                defaults: new { controller = "News", action = "Info" });

            routes.MapRoute(
                name: "newsEdit",
                url: "News/Edit",
                defaults: new {controller = "News", action = "Edit" });

            routes.MapRoute(
                name: "newsCategories",
                url: "News/Categories",
                defaults: new {controller = "News", action = "Categories"});

            routes.MapRoute(
                name: "userInfo",
                url: "User/Info",
                defaults: new { controller = "User", action = "Info" });

            routes.MapRoute(
                name: "users",
                url: "User/List",
                defaults: new { controller = "User", action = "List" });

            routes.MapRoute(
                name: "pms",
                url: "User/Pms",
                defaults: new { controller = "User", action = "PrivateMessages" });

            routes.MapRoute(
                name: "pm",
                url: "User/Pm",
                defaults: new {controller = "User", action = "ReadMessage"});

            routes.MapRoute(
                name: "wpm",
                url: "User/WritePm",
                defaults: new {controller = "User", action = "WriteMessage"});

            routes.MapRoute(
                name: "forum",
                url: "Forum/Index",
                defaults: new {controller = "Forum", action = "Index"});

            routes.MapRoute(
                name: "subsection",
                url: "Forum/Subsection",
                defaults: new {controller = "Forum", action = "Subsection"});

            routes.MapRoute(
                name: "theme",
                url: "Forum/Theme",
                defaults: new {controller = "Forum", action = "Theme" });

            routes.MapRoute(
                name: "images",
                url: "images/index",
                defaults: new {controller = "Image", action = "Index"});

            routes.MapRoute(
                name: "rules",
                url: "home/rules",
                defaults: new {controller = "Home", action = "Rules"});

            routes.MapRoute(
                name: "confirmed",
                url: "account/confirmEmail",
                defaults: new {controller = "Account", action = "ConfirmEmail" });

            routes.MapRoute(
                name: "unconfirmed",
                url: "account/unconfirmEmail",
                defaults: new {controller = "Account", action = "UnconfirmEmail" });

            routes.MapRoute(
                name: "forgotPassword",
                url: "account/forgotPassword",
                defaults: new {controller = "Account", action = "forgotPassword" });

            routes.MapRoute(
                name: "emailSent",
                url: "account/emailSent",
                defaults: new {controller = "Account", action = "emailSent" });

            routes.MapRoute(
                name: "resetPassword",
                url: "account/resetPassword",
                defaults: new {controller = "Account", action = "resetPassword" });

            routes.MapRoute(
                name: "changePassword",
                url: "account/changePassword",
                defaults: new {controller = "Account", action = "changePassword" });

            routes.MapRoute(
                name: "passwordChanged",
                url: "account/passwordChanged",
                defaults: new {controller = "Account", action = "passwordChanged" });

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
