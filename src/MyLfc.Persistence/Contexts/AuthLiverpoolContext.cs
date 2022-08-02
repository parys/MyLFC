using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using MyLfc.Domain.Identity;
using MyLfc.Persistence.Configurations;

namespace MyLfc.Persistence;

public sealed class AuthLiverpoolContext : IdentityDbContext<FullUser, Role, int>
{
    public AuthLiverpoolContext(DbContextOptions<AuthLiverpoolContext> options) : base(options)
    {
    }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.ApplyConfigurationsFromAssembly(typeof(FullLiverpoolContext).Assembly);
 //       modelBuilder.ApplyConfiguration(new FullUserConfiguration()); // TODO switch to AuthUser
        //modelBuilder.ApplyConfiguration(new  ());
        //modelBuilder.ApplyConfiguration(new FullUserConfiguration());
        //modelBuilder.ApplyConfiguration(new FullUserConfiguration());
    }
}
