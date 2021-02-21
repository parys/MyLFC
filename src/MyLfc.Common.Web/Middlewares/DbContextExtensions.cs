﻿using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MyLfc.Persistence;

namespace MyLfc.Common.Web.Middlewares
{
    public static class DbContextExtensions
    {
        public static IServiceCollection AddCustomDbContext(this IServiceCollection services, IConfiguration configuration)
        { 
            services.AddDbContext<LiverpoolContext>(options =>
            {
                options.UseSqlServer(configuration.GetConnectionString("DefaultConnection"));
                options.UseOpenIddict<int>();
            }, ServiceLifetime.Transient); //todo try to avoid sql server 258 to instead of scope 

            return services;
        }
    }
}
