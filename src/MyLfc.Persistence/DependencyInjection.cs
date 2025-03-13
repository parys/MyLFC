using System.Diagnostics.CodeAnalysis;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MyLfc.Application;
using MyLfc.Persistence.AuthModel;
using Microsoft.Extensions.Hosting;

namespace MyLfc.Persistence;

[ExcludeFromCodeCoverage]
public static class DependencyInjection
{
    public static void AddPersistence(this IServiceCollection services, IConfiguration configuration, bool isDevelopment)
    {
        //TODO switch to use 1 program.cs file
        //if (isDevelopment)
        //{
        //    services.AddSqlServerDbContext<FullLiverpoolContext>("sqldb");
        //    services.AddSqlServerDbContext<AuthLiverpoolContext>("sqldb");

        //}
        //else
        {

            services.AddDbContext<FullLiverpoolContext>(options =>
            {
                //options.UseSqlServer(
                //    configuration.GetConnectionString("DefaultConnection"),
                //    b => b.MigrationsAssembly(typeof(FullLiverpoolContext).Assembly.FullName));
                options.UseInMemoryDatabase("TestDb");
                options.UseOpenIddict<int>();
            });

            //services.AddDbContext<AuthLiverpoolContext>(options =>
            //{
            //    options.UseModel(AuthLiverpoolContextModel.Instance);
            //    options.UseSqlServer(configuration.GetConnectionString("DefaultConnection"));
            //    options.UseOpenIddict<int>();
            //});
        }

        services.AddScoped<ILiverpoolContext>(provider => provider.GetService<FullLiverpoolContext>());
    }
}
