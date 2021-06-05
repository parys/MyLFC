using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MyLfc.Domain;

namespace MyLfc.Persistence.Configurations
{
    public class TransferConfiguration : IEntityTypeConfiguration<Transfer>
    {
        public void Configure(EntityTypeBuilder<Transfer> builder)
        {
            builder.ToTable("Transfers");

            builder.HasOne(x => x.Person)
                .WithMany(x => x.Transfers)
                .HasForeignKey(x => x.PersonId);

            builder.HasOne(x => x.Club)
                .WithMany(x => x.Transfers)
                .HasForeignKey(x => x.ClubId)
                .IsRequired(false);
        }
    }
}
