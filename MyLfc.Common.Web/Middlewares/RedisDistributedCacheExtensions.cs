using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace MyLfc.Common.Web.Middlewares
{
    public static class RedisDistributedCacheExtensions
    {
        public static IServiceCollection AddCustomRedisCache(this IServiceCollection services, IConfiguration configuration)
        {
            var redisConfig = configuration.GetSection("Redis");
            services.AddDistributedRedisCache(opts =>
            {
                opts.Configuration = redisConfig["Domain"] + ":" + redisConfig["Port"];
            });
            services.AddTransient<IDistributedCacheManager, DistributedCacheManager>();

            return services;
        }
    }
}
