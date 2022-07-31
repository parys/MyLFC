using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MyLfc.Domain;

namespace MyLfc.Persistence.Configurations;

public class MatchPersonConfiguration : IEntityTypeConfiguration<MatchPerson>
{
    public void Configure(EntityTypeBuilder<MatchPerson> builder)
    {
        builder.ToTable("MatchPersons");
        
        builder.HasKey(t => new { t.MatchId, t.PersonId });

        builder
            .HasOne(pt => pt.Match)
            .WithMany(p => p.Persons)
            .HasForeignKey(pt => pt.MatchId);

        builder
            .HasOne(pt => pt.Person)
            .WithMany(t => t.Matches)
            .HasForeignKey(pt => pt.PersonId);

    }
}
