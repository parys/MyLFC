using System;
using System.Linq;
using Microsoft.AspNetCore.Builder;

namespace MyLfc.Web.WebHost.Middlewares;

/// <summary>
/// SignalR extensions.
/// </summary>
public static class SignalRExtensions
{
    private static readonly String AUTH_QUERY_STRING_KEY = "access_token";

    /// <summary>
    /// Extension for adding authentication.
    /// </summary>
    /// <param name="app"></param>
    public static void UseSignalRAuthentication(this IApplicationBuilder app)
    {
        app.Use(async (context, next) =>
        {
            if (string.IsNullOrWhiteSpace(context.Request.Headers["Authorization"]))
            {
                try
                {
                    if (context.Request.QueryString.HasValue)
                    {
                        var access_token = context.Request.QueryString.Value
                            .Split('&')
                            .SingleOrDefault(x => x.Contains(AUTH_QUERY_STRING_KEY))?
                            .Split('=')
                            .Last();

                        if (!string.IsNullOrWhiteSpace(access_token))
                        {
                            context.Request.Headers.Add("Authorization", new[] {$"Bearer {access_token}"});
                        }
                    }
                }
                catch
                {
                    // if multiple headers it may throw an error.  Ignore both.
                }
            }

            await next.Invoke();
        });

    }
}
