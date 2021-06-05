using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MyLfc.Domain.Polls;

namespace MyLfc.Persistence.Configurations
{
    public class PollAnswerConfiguration : IEntityTypeConfiguration<PollAnswer>
    {
        public void Configure(EntityTypeBuilder<PollAnswer> builder)
        {
            builder.ToTable("PollAnswers");

            builder.HasOne(x => x.Poll)
                .WithMany(x => x.Answers)
                .HasForeignKey(x => x.PollId);

        }
    }
}
