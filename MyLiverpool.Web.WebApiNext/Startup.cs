using System;
using System.IO;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using AspNet.Security.OpenIdConnect.Extensions;
using AspNet.Security.OpenIdConnect.Server;
using AutoMapper;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http.Authentication;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using MyLiverpool.Common.MapperConfigurations.Profiles;
using MyLiverpool.Web.WebApiNext.Data;
using MyLiverpool.Web.WebApiNext.Models;
using MyLiverpool.Web.WebApiNext.Services;
using MyLiverpoolSite.Business.Contracts;
using MyLiverpoolSite.Business.Services.Services;
using MyLiverpoolSite.Data.DataAccessLayer;
using MyLiverpoolSite.Data.DataAccessLayer.Contracts;
using MyLiverpoolSite.Data.DataAccessLayer.Repositories;
using IConfigurationProvider = AutoMapper.IConfigurationProvider;

namespace MyLiverpool.Web.WebApiNext
{
    public class Startup
    {
        private static readonly IConfigurationProvider Config = new MapperConfiguration(cfg => {
            cfg.AddProfile(new ClubMapperProfile());
            cfg.AddProfile(new ForumMessageMapperProfile());
            cfg.AddProfile(new ForumSectionMapperProfile());
            cfg.AddProfile(new ForumSubsectionMapperProfile());
            cfg.AddProfile(new ForumThemeMapperProfile());
            cfg.AddProfile(new MatchMapperProfile());
            cfg.AddProfile(new MaterialMapperProfile());
            cfg.AddProfile(new MaterialCategoryMapperProfile());
            cfg.AddProfile(new MaterialCommentMapperProfile());
            cfg.AddProfile(new PmMapperProfile());
            cfg.AddProfile(new RoleGroupsMapperProfile());
            cfg.AddProfile(new UserMapperProfile());
            cfg.AddProfile(new WishMapperProfile());
        });

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);

            if (env.IsDevelopment())
            {
                // For more details on using the user secret store see http://go.microsoft.com/fwlink/?LinkID=532709
                builder.AddUserSecrets();
            }

            builder.AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

            services.AddIdentity<ApplicationUser, IdentityRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();

            services.AddMvc();

            // Add application services.
            services.AddTransient<IEmailSender, AuthMessageSender>();
            services.AddTransient<ISmsSender, AuthMessageSender>();
            RegisterServices(services);
            //--- from old proj
            services.AddCors(options => options.AddPolicy("AllowAll", p => p.AllowAnyOrigin())); //from sof

            services.AddAuthentication(options => {
                options.SignInScheme = "ServerCookie";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
                app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.Use(async (context, next) =>
            {
                await next();

                if (context.Response.StatusCode == 404 && !Path.HasExtension(context.Request.Path.Value))
                {
                    context.Request.Path = "/index.html"; //todo Put your Angular root page here 
                    await next();
                }
            });

            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseIdentity();
            app.UseMvcWithDefaultRoute();

            // secretKey contains a secret passphrase only your server knows
            //todo simple auth remove
            //var secretKey = "mysupersecret_se321cretkey!123";
            //var signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(secretKey));
            //var tokenValidationParameters = new TokenValidationParameters
            //{
            //    // The signing key must match!
            //    ValidateIssuerSigningKey = true,
            //    IssuerSigningKey = signingKey,

            //    // Validate the JWT Issuer (iss) claim
            //    ValidateIssuer = true,
            //    ValidIssuer = "ExampleIssuer3",

            //    // Validate the JWT Audience (aud) claim
            //    ValidateAudience = true,
            //    ValidAudience = "ExampleAudience33",

            //    // Validate the token expiry
            //    ValidateLifetime = true,

            //    // If you want to allow a certain amount of clock drift, set that here:
            //    ClockSkew = TimeSpan.Zero
            //};
            //app.UseJwtBearerAuthentication(new JwtBearerOptions
            //{
            //    AutomaticAuthenticate = true,
            //    AutomaticChallenge = true,
            //    TokenValidationParameters = tokenValidationParameters
            //});
            // Add external authentication middleware below. To configure them please see http://go.microsoft.com/fwlink/?LinkID=532715
            app.UseOpenIdConnectServer(options => {
                options.TokenEndpointPath = "/connect/token";
                options.AutomaticAuthenticate = true; //todo change my
                options.AllowInsecureHttp = true;
                options.Provider = new OpenIdConnectServerProvider
                {
                    // Implement OnValidateTokenRequest to support flows using the token endpoint.
                    OnValidateTokenRequest = context => {
                        // Reject token requests that don't use grant_type=password or grant_type=refresh_token.
                        if (!context.Request.IsPasswordGrantType() && !context.Request.IsRefreshTokenGrantType())
                        {
                            context.Reject(
                                error: OpenIdConnectConstants.Errors.UnsupportedGrantType,
                                description: "Only grant_type=password and refresh_token " +
                                             "requests are accepted by this server.");

                            return Task.FromResult(0);
                        }

                        // Note: you can skip the request validation when the client_id
                        // parameter is missing to support unauthenticated token requests.
                        // if (string.IsNullOrEmpty(context.ClientId)) {
                        //     context.Skip();
                        // 
                        //     return Task.FromResult(0);
                        // }

                        // Note: to mitigate brute force attacks, you SHOULD strongly consider applying
                        // a key derivation function like PBKDF2 to slow down the secret validation process.
                        // You SHOULD also consider using a time-constant comparer to prevent timing attacks.
                        if (string.Equals(context.ClientId, "client_id3", StringComparison.Ordinal) &&
                            string.Equals(context.ClientSecret, "client_secret44", StringComparison.Ordinal))
                        {
                            context.Validate();
                        }

                        // Note: if Validate() is not explicitly called,
                        // the request is automatically rejected.
                        return Task.FromResult(0);
                    },

                    // Implement OnHandleTokenRequest to support token requests.
                    OnHandleTokenRequest = context => {
                        // Only handle grant_type=password token requests and let the
                        // OpenID Connect server middleware handle the other grant types.
                        if (context.Request.IsPasswordGrantType())
                        {
                            // Implement context.Request.Username/context.Request.Password validation here.
                            // Note: you can call context Reject() to indicate that authentication failed.
                            // Using password derivation and time-constant comparer is STRONGLY recommended.
                            if (!string.Equals(context.Request.Username, "Bob", StringComparison.Ordinal) &&
                                !string.Equals(context.Request.Password, "123", StringComparison.Ordinal))
                            {
                                context.Reject(
                                    error: OpenIdConnectConstants.Errors.InvalidGrant,
                                    description: "Invalid user credentials.");

                                return Task.FromResult(0);
                            }

                            var identity = new ClaimsIdentity(context.Options.AuthenticationScheme);
                            identity.AddClaim(ClaimTypes.NameIdentifier, "[unique id]");

                            // By default, claims are not serialized in the access/identity tokens.
                            // Use the overload taking a "destinations" parameter to make sure
                            // your claims are correctly inserted in the appropriate tokens.
                            identity.AddClaim("urn:customclaim", "value",
                                OpenIdConnectConstants.Destinations.AccessToken,
                                OpenIdConnectConstants.Destinations.IdentityToken);

                            var ticket = new AuthenticationTicket(
                                new ClaimsPrincipal(identity),
                                new AuthenticationProperties(),
                                context.Options.AuthenticationScheme);

                            // Call SetScopes with the list of scopes you want to grant
                            // (specify offline_access to issue a refresh token).
                            ticket.SetScopes(
                                OpenIdConnectConstants.Scopes.Profile,
                                OpenIdConnectConstants.Scopes.OfflineAccess);

                            context.Validate(ticket);
                        }

                        return Task.FromResult(0);
                    }
                };
            });

            //app.UseMvc(routes =>
            //{
            //    routes.MapRoute(
            //        name: "default",services.AddTransient
            //        template: "{controller=Home}/{action=Index}/{id?}");
            //});

            //----------------------------------------------from OLD PROJECT
            app.UseCors("AllowAll");

        }

        private void RegisterServices(IServiceCollection services)
        {
            // builder.RegisterAssemblyTypes(Assembly.GetExecutingAssembly()).AsImplementedInterfaces();
            services.AddTransient<IAccountService, AccountService>();
            services.AddTransient<IAdminService, AdminService>();
            services.AddTransient<IClubService, ClubService>();
          //  services.AddTransient<IIdentityMessageService, EmailService>();
            services.AddTransient<IForumMessageService, ForumMessageService>();
            services.AddTransient<IForumSectionService, ForumSectionService>();
            services.AddTransient<IForumSubsectionService, ForumSubsectionService>();
            services.AddTransient<IForumThemeService, ForumThemeService>();
            services.AddTransient<IMatchService, MatchService>();
            services.AddTransient<IMaterialCategoryService, MaterialCategoryService>();
            services.AddTransient<IMaterialCommentService, MaterialCommentService>();
            services.AddTransient<IMaterialService, MaterialService>();
            services.AddTransient<IPmService, PmService>();
            services.AddTransient<IWishService, WishService>();
            services.AddTransient<IRoleService, RoleService>();
            services.AddTransient<IUploadService, UploadService>();
            services.AddTransient<IUserService, UserService>();
            services.AddTransient<IUnitOfWork, UnitOfWork>();
            services.AddTransient<IMaterialRepository, MaterialRepository>();
            services.AddSingleton<IMapper>(Config.CreateMapper());
        }
    }
}
