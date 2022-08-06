using System.Diagnostics.CodeAnalysis;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MyLfc.Application;
using MyLfc.Persistence.AuthModel;

namespace MyLfc.Persistence;

[ExcludeFromCodeCoverage]
public static class DependencyInjection
{
    public static void AddPersistence(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddDbContext<FullLiverpoolContext>(options =>
        {
            options.UseSqlServer(
                configuration.GetConnectionString("DefaultConnection"),
                b => b.MigrationsAssembly(typeof(FullLiverpoolContext).Assembly.FullName));
        });
        
        services.AddDbContext<AuthLiverpoolContext>(options =>
        {
            options.UseModel(AuthLiverpoolContextModel.Instance);
            options.UseSqlServer(configuration.GetConnectionString("DefaultConnection"));
            options.UseOpenIddict<int>();
        });

        services.AddScoped<ILiverpoolContext>(provider => provider.GetService<FullLiverpoolContext>());
    }
}
