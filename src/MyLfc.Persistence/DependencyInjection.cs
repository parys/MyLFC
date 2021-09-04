using System.Diagnostics.CodeAnalysis;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MyLfc.Application;

namespace MyLfc.Persistence
{
    [ExcludeFromCodeCoverage]
    public static class DependencyInjection
    {
        public static void AddPersistence(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<LiverpoolContext>(options =>
            {
                options.UseSqlServer(
                    configuration.GetConnectionString("DefaultConnection"),
                    b => b.MigrationsAssembly(typeof(LiverpoolContext).Assembly.FullName));
                options.UseOpenIddict<int>();
            });
            services.AddScoped<ILiverpoolContext>(provider => provider.GetService<LiverpoolContext>());
        }
    }
}
