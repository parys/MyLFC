using System.Diagnostics.CodeAnalysis;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace MyLfc.Persistence
{
    [ExcludeFromCodeCoverage]
    public class LiverpoolContextFactory : IDesignTimeDbContextFactory<LiverpoolContext>
    {
        IConfiguration config = new ConfigurationBuilder()
            .AddJsonFile("appsettings.json")
            .AddJsonFile("appsettings.local.json", true)
            .Build();

        public LiverpoolContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<LiverpoolContext>();
            optionsBuilder.UseOpenIddict<int>();
            optionsBuilder.UseSqlServer(config.GetConnectionString("DefaultConnection"),
                b => b.MigrationsAssembly("MyLfc.Persistence"));

            return new LiverpoolContext(optionsBuilder.Options);
        }
    }
}
