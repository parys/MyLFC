using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.Extensions.DependencyInjection;

namespace MyLiverpool.Data.ResourceAccess
{
    public class LiverpoolContextFactory : IDbContextFactory<LiverpoolContext>
    {
        public LiverpoolContext Create()
        {
        var optionsBuilder = new DbContextOptionsBuilder<LiverpoolContext>();
        optionsBuilder.UseOpenIddict<int>();
        optionsBuilder.UseSqlServer(
                "Server=.;Database=MyLiverpool1123;Trusted_Connection=True;MultipleActiveResultSets=true");

        return new LiverpoolContext(optionsBuilder.Options);
        }

        public LiverpoolContext Create(DbContextFactoryOptions options)
        {
            var optionsBuilder = new DbContextOptionsBuilder<LiverpoolContext>();
            optionsBuilder.UseOpenIddict<int>();
            optionsBuilder.UseSqlServer(
                    "Server=.;Database=MyLiverpool1123;Trusted_Connection=True;MultipleActiveResultSets=true");

            return new LiverpoolContext(optionsBuilder.Options);
        }
    }
}
