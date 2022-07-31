using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MyLfc.Domain;

namespace MyLfc.Persistence.Configurations;

public class LoanConfiguration : IEntityTypeConfiguration<Loan>
{
    public void Configure(EntityTypeBuilder<Loan> builder)
    {
        builder.ToTable("Loans");

        builder.HasOne(x => x.Person)
            .WithMany(x => x.Loans)
            .HasForeignKey(x => x.PersonId);

        builder.HasOne(x => x.Club)
            .WithMany(x => x.Loans)
            .HasForeignKey(x => x.ClubId);

    }
}
