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
using static OpenIddict.Abstractions.OpenIddictConstants.Permissions;

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
                    options.SetLogoutEndpointUris("/connect/logout")
                        // Enable the token endpoint (required to use the password flow).
                        .SetTokenEndpointUris("/connect/token");

                    options.AllowPasswordFlow()
                        .AllowRefreshTokenFlow()

                        .SetIdentityTokenLifetime(TimeSpan.FromDays(1))
                        //   .SetAccessTokenLifetime(TimeSpan.FromSeconds(10))
                        .SetRefreshTokenLifetime(TimeSpan.FromDays(14));

                    // Mark the "email", "profile", "roles" and "demo_api" scopes as supported scopes.
                    options.RegisterScopes(Scopes.Email, Scopes.Profile, Scopes.Roles, "api1");

                    //to be able to get user at FE side
                    options.DisableAccessTokenEncryption();

                    // During development, you can disable the HTTPS requirement.
                    options.AcceptAnonymousClients(); //todo fix needed
                    if (env.IsDevelopment())
                    {
                        // Register a new ephemeral key, that is discarded when the application
                        // shuts down. Tokens signed using this key are automatically invalidated.
                        // This method should only be used during development.

                        // Register the signing and encryption credentials.
                        options.AddDevelopmentEncryptionCertificate()
                            .AddDevelopmentSigningCertificate();
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

                    // Register the ASP.NET Core host and configure the ASP.NET Core-specific options.
                    options.UseAspNetCore()
                        .EnableStatusCodePagesIntegration()
                        .EnableAuthorizationEndpointPassthrough()
                        .EnableLogoutEndpointPassthrough()
                        .EnableTokenEndpointPassthrough()
                        .EnableUserinfoEndpointPassthrough()
                        .EnableVerificationEndpointPassthrough()
                        .DisableTransportSecurityRequirement()
                        ; // During development, you can disable the HTTPS requirement

                    // Note: if you don't want to use permissions, you can disable
                    // permission enforcement by uncommenting the following lines:
                    //
                    // options.IgnoreEndpointPermissions()
                    //        .IgnoreGrantTypePermissions()
                    //        .IgnoreResponseTypePermissions()
                    //        .IgnoreScopePermissions();
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
