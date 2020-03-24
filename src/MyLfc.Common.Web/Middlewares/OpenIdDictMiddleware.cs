using System;
using System.IdentityModel.Tokens.Jwt;
using System.IO;
using System.Threading.Tasks;
using AspNet.Security.OpenIdConnect.Primitives;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using MyLfc.Persistence;

namespace MyLfc.Common.Web.Middlewares
{
    public static class OpenIdDictMiddleware
    {
        public static IServiceCollection ApplyCustomOpenIdDict(this IServiceCollection services, IWebHostEnvironment env, IConfiguration config)
        {
            services.AddOpenIddict()
                .AddCore(options =>
                {
                    // Configure OpenIddict to use the default entities.
                    // Register the Entity Framework stores.
                    options.UseEntityFrameworkCore(opts =>
                    {
                        opts.ReplaceDefaultEntities<int>();
                        opts.UseDbContext<LiverpoolContext>();
                    });
                })
                .AddServer(options =>
                {
                    options.UseMvc();
                    options.EnableLogoutEndpoint("/connect/logout")
                        // Enable the token endpoint (required to use the password flow).
                        .EnableTokenEndpoint("/connect/token")
                        .AllowPasswordFlow()
                        .AllowRefreshTokenFlow()
                        .SetIdentityTokenLifetime(TimeSpan.FromDays(1))
                        //   .SetAccessTokenLifetime(TimeSpan.FromSeconds(10))
                        .SetRefreshTokenLifetime(TimeSpan.FromDays(14))
                        // During development, you can disable the HTTPS requirement.
                        .DisableHttpsRequirement()
                        .AcceptAnonymousClients() //todo fix needed
                        .UseJsonWebTokens()
                        // When request caching is enabled, authorization and logout requests
                        // are stored in the distributed cache by OpenIddict and the user agent
                        // is redirected to the same page with a single parameter (request_id).
                        // This allows flowing large OpenID Connect requests even when using
                        // an external authentication provider like Google, Facebook or Twitter.
                        .EnableRequestCaching();
                    if (env.IsDevelopment())
                    {
                        // Register a new ephemeral key, that is discarded when the application
                        // shuts down. Tokens signed using this key are automatically invalidated.
                        // This method should only be used during development.
                        options.AddEphemeralSigningKey();
                    }
                    else
                    {
                        try
                        {
                            options.AddSigningCertificate(
                                new FileStream(Path.Combine(Directory.GetCurrentDirectory(), "..", "cert.pfx"), FileMode.Open),
                                config.GetSection("Cert")["password"]);
                        }
                        catch
                        {
                            options.AddSigningCertificate(
                                new FileStream(Path.Combine(Directory.GetCurrentDirectory(), "..", "cert2.pfx"), FileMode.Open),
                                config.GetSection("Cert")["password"]);
                        }
                    }
                });


            JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Clear();
            JwtSecurityTokenHandler.DefaultOutboundClaimTypeMap.Clear();
            services.AddAuthentication()
                .AddJwtBearer(options =>
                {
                    options.Authority = config.GetSection("Cert")["ApiUrl"];
                    options.Audience = "api1";
                    options.RequireHttpsMetadata = false;
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        NameClaimType = OpenIdConnectConstants.Claims.Subject,
                        RoleClaimType = OpenIdConnectConstants.Claims.Role,
                        ValidateAudience = false
                    };
                    options.Events = new JwtBearerEvents
                    {
                        OnMessageReceived = ctx =>
                        {
                            if (ctx.Request.Query.ContainsKey("access_token"))
                            {
                                ctx.Token = ctx.Request.Query["access_token"];
                            }

                            return Task.CompletedTask;
                        }
                    };
                });

            return services;
        }
    }
}
