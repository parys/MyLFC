using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MyLfc.Domain;

namespace MyLfc.Persistence.Configurations;

public class HelpEntityConfiguration : IEntityTypeConfiguration<HelpEntity>
{
    public void Configure(EntityTypeBuilder<HelpEntity> builder)
    {
        builder.ToTable("HelpEntities");
    }
}
