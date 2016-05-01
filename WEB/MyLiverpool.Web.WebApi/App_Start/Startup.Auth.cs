using System;
using AutoMapper;
using Microsoft.AspNet.Identity;
using Microsoft.Owin;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.Security.OAuth;
using MyLiverpool.Web.WebApi.Providers;
using MyLiverpoolSite.Business.Services;
using MyLiverpoolSite.Data.DataAccessLayer;
using Owin;

namespace MyLiverpool.Web.WebApi
{
    public partial class Startup
    {
        public static OAuthAuthorizationServerOptions OAuthOptions { get; private set; }

        public static string PublicClientId { get; private set; }

        //// For more information on configuring authentication, please visit http://go.microsoft.com/fwlink/?LinkId=301864
        //public void ConfigureAuth(IAppBuilder app)
        //{
        //    // Configure the db context and user manager to use a single instance per request
        //    app.CreatePerOwinContext(LiverpoolContext.Create);
        //    app.CreatePerOwinContext<ApplicationUserManager>(ApplicationUserManager.Create);
        //    app.CreatePerOwinContext<ApplicationSignInManager>(ApplicationSignInManager.Create);

        //    // Enable the application to use a cookie to store information for the signed in user
        //    // and to use a cookie to temporarily store information about a user logging in with a third party login provider
        //    app.UseCookieAuthentication(new CookieAuthenticationOptions
        //    {
        //        AuthenticationType = DefaultAuthenticationTypes.ApplicationCookie,
        //        LoginPath = new PathString(string.Empty),
        //        Provider = new CookieAuthenticationProvider
        //        {
        //            // Enables the application to validate the security stamp when the user logs in.
        //            // This is a security feature which is used when you change a password or add an external login to your account.  
        //            OnValidateIdentity = SecurityStampValidator.OnValidateIdentity<ApplicationUserManager, User, int>(
        //                validateInterval: TimeSpan.FromDays(30),
        //                regenerateIdentityCallback: (manager, user) => user.GenerateUserIdentityAsync(manager),
        //                getUserIdCallback: identity => (0))

        //        }
        //    });
        //    app.UseExternalSignInCookie(DefaultAuthenticationTypes.ExternalCookie);

        //    // Configure the application for OAuth based flow
        //    //PublicClientId = "self";
        //    //OAuthOptions = new OAuthAuthorizationServerOptions
        //    //{
        //    //    TokenEndpointPath = new PathString("/Token"),
        //    //    Provider = new ApplicationOAuthProvider(PublicClientId),
        //    //    AuthorizeEndpointPath = new PathString("/api/Account/ExternalLogin"),
        //    //    AccessTokenExpireTimeSpan = TimeSpan.FromDays(14),
        //    //    // In production mode set AllowInsecureHttp = false
        //    //    AllowInsecureHttp = true
        //    //};
        //    //app.UseOAuthBearerTokens(OAuthOptions);


        //    app.UseTwoFactorSignInCookie(DefaultAuthenticationTypes.TwoFactorCookie, TimeSpan.FromMinutes(65));

        //    // Enables the application to remember the second login verification factor such as phone or email.
        //    // Once you check this option, your second step of verification during the login process will be remembered on the device where you logged in from.
        //    // This is similar to the RememberMe option when you log in.
        //    app.UseTwoFactorRememberBrowserCookie(DefaultAuthenticationTypes.TwoFactorRememberBrowserCookie);
        //    // Enable the application to use bearer tokens to authenticate users
            

        //    // Uncomment the following lines to enable logging in with third party login providers
        //    //app.UseMicrosoftAccountAuthentication(
        //    //    clientId: "",
        //    //    clientSecret: "");

        //    //app.UseTwitterAuthentication(
        //    //    consumerKey: "",
        //    //    consumerSecret: "");

        //    //app.UseFacebookAuthentication(
        //    //    appId: "",
        //    //    appSecret: "");

        //    //app.UseGoogleAuthentication(new GoogleOAuth2AuthenticationOptions()
        //    //{
        //    //    ClientId = "",
        //    //    ClientSecret = ""
        //    //});
        //}

        public void ConfigureAuth(IAppBuilder app, IMapper mapper)
        {

            // Configure the db context and user manager to use a single instance per request
            app.CreatePerOwinContext(LiverpoolContext.Create);
            app.CreatePerOwinContext<ApplicationUserManager>(ApplicationUserManager.Create);

            // Enable the application to use a cookie to store information for the signed in user
            // and to use a cookie to temporarily store information about a user logging in with a third party login provider
            app.UseCookieAuthentication(new CookieAuthenticationOptions());
            app.UseExternalSignInCookie(DefaultAuthenticationTypes.ExternalCookie);

            // Configure the application for OAuth based flow
            PublicClientId = "self";
            OAuthOptions = new OAuthAuthorizationServerOptions
            {
                TokenEndpointPath = new PathString("/Token"),
                Provider = new ApplicationOAuthProvider(PublicClientId, new UnitOfWork(), mapper),
                AuthorizeEndpointPath = new PathString("/api/Account/ExternalLogin"),
                AccessTokenExpireTimeSpan = TimeSpan.FromDays(14),
                // In production mode set AllowInsecureHttp = false 
                AllowInsecureHttp = true,
            };

            // Enable the application to use bearer tokens to authenticate users
            app.UseOAuthBearerTokens(OAuthOptions);

           // app.UseCors(CorsOptions.AllowAll); 
        }
    }
}
