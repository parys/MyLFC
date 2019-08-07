using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MyLfc.Domain;

namespace MyLfc.Persistence.Configurations
{
    public class FaqItemConfiguration : IEntityTypeConfiguration<FaqItem>
    {
        public void Configure(EntityTypeBuilder<FaqItem> builder)
        {
            builder.ToTable("FaqItems");

            builder.Property(x => x.Question).HasMaxLength(200);

            builder.Property(x => x.Answer).HasMaxLength(2000);

            builder.HasOne(x => x.FaqCategory)
                .WithMany(x => x.Items)
                .HasForeignKey(x => x.FaqCategoryId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
