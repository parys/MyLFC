using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MyLfc.Domain;

namespace MyLfc.Persistence.Configurations;

public class ChatMessageConfiguration : IEntityTypeConfiguration<ChatMessage>
{
    public void Configure(EntityTypeBuilder<ChatMessage> builder)
    {
        builder.ToTable("ChatMessages");

        builder.HasOne(x => x.Author)
            .WithMany(x => x.ChatMessages)
            .HasForeignKey(x => x.AuthorId);
        
        builder.Property(x => x.Message).HasMaxLength(5000);

        builder.Property(x => x.Ip).HasMaxLength(50);
    }
}
