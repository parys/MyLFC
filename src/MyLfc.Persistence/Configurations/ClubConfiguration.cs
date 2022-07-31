using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MyLfc.Domain;

namespace MyLfc.Persistence.Configurations;

public class ClubConfiguration : IEntityTypeConfiguration<Club>
{
    public void Configure(EntityTypeBuilder<Club> builder)
    {
        builder.ToTable("Clubs");

        builder.HasOne(x => x.Stadium)
            .WithMany(x => x.Clubs)
            .HasForeignKey(x => x.StadiumId);

        builder.Property(x => x.Name).HasMaxLength(50);

        builder.Property(x => x.EnglishName).HasMaxLength(50);

        builder.Property(x => x.Logo).HasMaxLength(100);
    }
}
