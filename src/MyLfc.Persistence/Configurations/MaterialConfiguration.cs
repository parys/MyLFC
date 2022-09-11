using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MyLfc.Domain;

namespace MyLfc.Persistence.Configurations;

public class MaterialConfiguration : IEntityTypeConfiguration<Material>
{
    public void Configure(EntityTypeBuilder<Material> builder)
    {
        builder.ToTable("Materials");

        builder.Property(x => x.Title).HasMaxLength(200);

        builder.Property(x => x.Source).HasMaxLength(300);

        builder.Property(x => x.PhotoPreview).HasMaxLength(400);

        builder.Property(x => x.PhotoPath).HasMaxLength(400);

        builder.Property(x => x.Brief).HasMaxLength(1000);

        builder.Property(x => x.Tags).HasMaxLength(200);

        builder.Property(x => x.Message).HasMaxLength(60000);

        builder.Property(x => x.CategoryName).HasMaxLength(100);

        builder.Property(x => x.UserName).HasMaxLength(256);

        builder.HasOne(x => x.Author)
            .WithMany(x => x.Materials)
            .HasForeignKey(x => x.AuthorId);

        builder.HasOne(x => x.Category)
            .WithMany(x => x.Materials)
            .HasForeignKey(x => x.CategoryId);

        builder.HasIndex(e => e.AdditionTime)
                    .IsClustered(false)
                    .HasDatabaseName("IX_Mat_AdditionTime");

        builder.HasIndex(e => e.Pending)
                    .IsClustered(false)
                    .HasDatabaseName("IX_Mat_Pending");

        builder.HasIndex(e => new { e.Deleted, e.Pending })
                    .IsClustered(false)
                    .HasDatabaseName("IX_Mat_Del_Pen");   

        builder.HasIndex(e => new { e.Deleted, e.Pending, e.OnTop })
                    .IsClustered(false)
                    .HasDatabaseName("IX_Mat_Del_Pen_Top");            

        builder.HasQueryFilter(x => !x.Deleted);

    }
}
