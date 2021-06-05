using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MyLfc.Domain;

namespace MyLfc.Persistence.Configurations
{
    public class MaterialCategoryConfiguration : IEntityTypeConfiguration<MaterialCategory>
    {
        public void Configure(EntityTypeBuilder<MaterialCategory> builder)
        {
            builder.ToTable("MaterialCategories");

            builder.Property(x => x.Name).HasMaxLength(100);
        }
    }
}
