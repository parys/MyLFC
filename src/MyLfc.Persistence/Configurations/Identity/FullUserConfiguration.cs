using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MyLfc.Domain.Identity;

namespace MyLfc.Persistence.Configurations;

public class FullUserConfiguration : IEntityTypeConfiguration<FullUser>
{
    public void Configure(EntityTypeBuilder<FullUser> builder)
    {
        builder.ToTable("AspNetUsers");

        builder.Property(x => x.FullName).HasMaxLength(50);
        builder.Property(x => x.Photo).HasMaxLength(100);
        builder.Property(x => x.Ip).HasMaxLength(50);

        builder
            .HasMany(e => e.Claims)
            .WithOne()
            .HasForeignKey(e => e.UserId)
            .IsRequired()
            .OnDelete(DeleteBehavior.Cascade);

        builder
            .HasMany(e => e.Logins)
            .WithOne()
            .HasForeignKey(e => e.UserId)
            .IsRequired()
            .OnDelete(DeleteBehavior.Cascade);

        builder
            .HasMany(e => e.Roles)
            .WithOne()
            .HasForeignKey(e => e.UserId)
            .IsRequired()
            .OnDelete(DeleteBehavior.Cascade);


        builder
            .HasOne(x => x.RoleGroup)
            .WithMany(x => x.Users)
            .HasForeignKey(x => x.RoleGroupId);

        builder
            .HasMany(x => x.CommentVotes)
            .WithOne(x => x.User)
            .HasForeignKey(x => x.UserId);

        builder.HasMany(x => x.Notifications)
            .WithOne(x => x.User)
            .HasForeignKey(x => x.UserId);
    }
}
