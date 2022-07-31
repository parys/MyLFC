using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MyLfc.Domain.Polls;

namespace MyLfc.Persistence.Configurations;

public class PollAnswerUserConfiguration : IEntityTypeConfiguration<PollAnswerUser>
{
    public void Configure(EntityTypeBuilder<PollAnswerUser> builder)
    {
        builder.ToTable("PollAnswerUsers");

        builder.HasKey(t => new {t.PollAnswerId, t.UserId});

        builder.HasOne(x => x.Poll)
            .WithMany()
            .HasForeignKey(x => x.PollId);
    }
}
