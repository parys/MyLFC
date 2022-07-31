using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MyLfc.Domain;

namespace MyLfc.Persistence.Configurations;

public class MatchConfiguration : IEntityTypeConfiguration<Match>
{
    public void Configure(EntityTypeBuilder<Match> builder)
    {
        builder.ToTable("Matches");

        builder.HasOne(x => x.Club)
            .WithMany(x => x.Matches)
            .HasForeignKey(x => x.ClubId);

        builder.HasOne(x => x.Stadium)
            .WithMany(x => x.Matches)
            .HasForeignKey(x => x.StadiumId);

        builder.HasOne(m => m.Season)
            .WithMany(s => s.Matches)
            .HasForeignKey(m => m.SeasonId);

    }
}
