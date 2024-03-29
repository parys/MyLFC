﻿using System;
using System.Diagnostics.CodeAnalysis;
using System.IdentityModel.Tokens.Jwt;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using static OpenIddict.Abstractions.OpenIddictConstants;

namespace MyLfc.Persistence;

[ExcludeFromCodeCoverage]
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
                    opts.UseDbContext<AuthLiverpoolContext>();
                });
            })
            .AddServer(options =>
            {
                options.SetLogoutEndpointUris("/connect/logout")
                    // Enable the token endpoint (required to use the password flow).
                    .SetTokenEndpointUris("/connect/token");
                options.AllowPasswordFlow()
                    .AllowRefreshTokenFlow()

                    .SetRefreshTokenReuseLeeway(TimeSpan.FromDays(14))                        
                    .SetRefreshTokenLifetime(TimeSpan.FromDays(14));

                // Mark the "email", "profile", "roles" and "demo_api" scopes as supported scopes.
                options.RegisterScopes(Scopes.Email, Scopes.Profile, Scopes.Roles, "api1");

                //to be able to get user at FE side
                options.DisableAccessTokenEncryption();
                
                options.DisableTokenStorage();

                // During development, you can disable the HTTPS requirement.
                options.AcceptAnonymousClients();
                if (env.IsDevelopment())
                {
                    // Register the signing and encryption credentials.
                    options.AddDevelopmentEncryptionCertificate()
                        .AddDevelopmentSigningCertificate();
                }
                else
                {
                    try
                    {

                        options.AddEncryptionCertificate(
                            new FileStream(Path.Combine(Directory.GetCurrentDirectory(), "./config", $"{config.GetSection("Cert")["Name"]}.pfx"),
                            FileMode.Open), config.GetSection("Cert")["password"]);
                        options.AddSigningCertificate(
                            new FileStream(Path.Combine(Directory.GetCurrentDirectory(), "./config", $"{config.GetSection("Cert")["Name"]}2.pfx"),
                            FileMode.Open), config.GetSection("Cert")["password"]);
                    }
                    catch
                    {
                        options.AddEncryptionCertificate(
                            new FileStream(Path.Combine(Directory.GetCurrentDirectory(), "./config", $"{config.GetSection("Cert")["Name"]}3.pfx"),
                            FileMode.Open), config.GetSection("Cert")["password"]);
                        options.AddSigningCertificate(
                            new FileStream(Path.Combine(Directory.GetCurrentDirectory(), "./config", $"{config.GetSection("Cert")["Name"]}4.pfx"),
                            FileMode.Open), config.GetSection("Cert")["password"]);
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
                    NameClaimType = Claims.Subject,
                    RoleClaimType = Claims.Role,
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
