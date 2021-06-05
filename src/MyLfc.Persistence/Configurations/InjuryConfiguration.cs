using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MyLfc.Domain;

namespace MyLfc.Persistence.Configurations
{
    public class InjuryConfiguration : IEntityTypeConfiguration<Injury>
    {
        public void Configure(EntityTypeBuilder<Injury> builder)
        {
            builder.ToTable("Injuries");

            builder.HasOne(x => x.Person)
                .WithMany(x => x.Injuries)
                .HasForeignKey(x => x.PersonId);

        }
    }
}
