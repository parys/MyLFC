using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using MyLfc.Domain.Identity;
using MyLfc.Persistence.Configurations.Identity;

namespace MyLfc.Persistence;

public sealed class AuthLiverpoolContext : IdentityDbContext<AuthUser, AuthRole, int>
{
    public AuthLiverpoolContext(DbContextOptions<AuthLiverpoolContext> options) : base(options)
    {
    }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.ApplyConfiguration(new AuthUserConfiguration()); // TODO switch to AuthUser
    }
}
