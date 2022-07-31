using System.Diagnostics.CodeAnalysis;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace MyLfc.Persistence;

[ExcludeFromCodeCoverage]
public class LiverpoolContextFactory : IDesignTimeDbContextFactory<FullLiverpoolContext>
{
    IConfiguration config = new ConfigurationBuilder()
        .AddJsonFile("appsettings.json")
        .AddJsonFile("appsettings.local.json", true)
        .Build();

    public FullLiverpoolContext CreateDbContext(string[] args)
    {
        var optionsBuilder = new DbContextOptionsBuilder<FullLiverpoolContext>();
        optionsBuilder.UseOpenIddict<int>();
        optionsBuilder.UseSqlServer(config.GetConnectionString("DefaultConnection"),
            b => b.MigrationsAssembly("MyLfc.Persistence"));

        return new FullLiverpoolContext(optionsBuilder.Options);
    }
}
