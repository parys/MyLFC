using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MyLfc.Domain;

namespace MyLfc.Persistence.Configurations;

public class UserConfigConfiguration : IEntityTypeConfiguration<UserConfig>
{
    public void Configure(EntityTypeBuilder<UserConfig> builder)
    {
        builder.ToTable("UserConfigs");

        builder.HasKey(x => x.UserId);
        builder.Property(x => x.UserId).ValueGeneratedNever();
        builder.HasOne(x => x.User).WithOne(x => x.UserConfig).IsRequired();
    }
}
