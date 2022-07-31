using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MyLfc.Domain;

namespace MyLfc.Persistence.Configurations;

public class RoleRoleGroupConfiguration : IEntityTypeConfiguration<RoleRoleGroup>
{
    public void Configure(EntityTypeBuilder<RoleRoleGroup> builder)
    {
        builder.ToTable("RoleRoleGroups");

        builder.HasKey(t => new { t.RoleId, t.RoleGroupId });

        builder.HasOne(pt => pt.Role)
            .WithMany(p => p.RoleRoleGroups)
            .HasForeignKey(pt => pt.RoleId);

        builder.HasOne(pt => pt.RoleGroup)
            .WithMany(t => t.RoleGroups)
            .HasForeignKey(pt => pt.RoleGroupId);
    }
}
