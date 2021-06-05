using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MyLfc.Domain;

namespace MyLfc.Persistence.Configurations
{
    public class ForumMessageConfiguration : IEntityTypeConfiguration<ForumMessage>
    {
        public void Configure(EntityTypeBuilder<ForumMessage> builder)
        {
            builder.ToTable("ForumMessages");

            builder.HasOne(x => x.Theme)
                .WithMany(x => x.Messages)
                .HasForeignKey(x => x.ThemeId);

            builder.HasOne(x => x.Author)
                .WithMany(u => u.ForumMessages)
                .HasForeignKey(x => x.AuthorId);

        }
    }
}
