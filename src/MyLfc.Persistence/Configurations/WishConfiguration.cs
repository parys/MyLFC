using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MyLfc.Domain;

namespace MyLfc.Persistence.Configurations;

public class ForumSectionConfiguration : IEntityTypeConfiguration<Wish>
{
    public void Configure(EntityTypeBuilder<Wish> builder)
    {
        builder.ToTable("Wishes");
        
    }
}
