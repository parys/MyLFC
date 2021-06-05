using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MyLfc.Domain;

namespace MyLfc.Persistence.Configurations
{
    public class PrivateMessageConfiguration : IEntityTypeConfiguration<PrivateMessage>
    {
        public void Configure(EntityTypeBuilder<PrivateMessage> builder)
        {
            builder.ToTable("PrivateMessages");

            builder.HasOne(x => x.Sender)
                .WithMany(x => x.SentPrivateMessages)
                .HasForeignKey(x => x.SenderId);

            builder.HasOne(x => x.Receiver)
                .WithMany(x => x.ReceivedPrivateMessages)
                .HasForeignKey(x => x.ReceiverId);

            builder.Property(x => x.Message).HasMaxLength(2500);
            builder.Property(x => x.Title).HasMaxLength(50);
        }
    }
}
