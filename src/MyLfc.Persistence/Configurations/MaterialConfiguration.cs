using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MyLfc.Domain;

namespace MyLfc.Persistence.Configurations
{
    public class MaterialConfiguration : IEntityTypeConfiguration<Material>
    {
        public void Configure(EntityTypeBuilder<Material> builder)
        {
            builder.ToTable("Materials");

            builder.HasQueryFilter(x => !x.Deleted);

            builder.Property(x => x.Title).HasMaxLength(200);

            builder.Property(x => x.Source).HasMaxLength(300);

            builder.Property(x => x.PhotoPreview).HasMaxLength(400);

            builder.Property(x => x.PhotoPath).HasMaxLength(400);

            builder.Property(x => x.Brief).HasMaxLength(1000);

            builder.HasOne(x => x.Author)
                .WithMany(x => x.Materials)
                .HasForeignKey(x => x.AuthorId);

            builder.HasOne(x => x.Category)
                .WithMany(x => x.Materials)
                .HasForeignKey(x => x.CategoryId);

        }
    }
}
