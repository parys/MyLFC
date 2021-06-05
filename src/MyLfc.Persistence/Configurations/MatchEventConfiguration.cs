using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MyLfc.Domain;

namespace MyLfc.Persistence.Configurations
{
    public class MatchEventConfiguration : IEntityTypeConfiguration<MatchEvent>
    {
        public void Configure(EntityTypeBuilder<MatchEvent> builder)
        {
            builder.ToTable("MatchEvents");

            builder.HasOne(x => x.Season)
                .WithMany(x => x.Events)
                .HasForeignKey(x => x.SeasonId);
            builder.HasOne(x => x.Person)
                .WithMany(x => x.Events)
                .HasForeignKey(x => x.PersonId);
            builder.HasOne(x => x.Match)
                .WithMany(x => x.Events)
                .HasForeignKey(x => x.MatchId);
        }
    }
}
