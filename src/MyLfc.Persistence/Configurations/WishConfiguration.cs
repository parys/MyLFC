using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MyLfc.Domain;

namespace MyLfc.Persistence.Configurations
{
    public class ForumSectionConfiguration : IEntityTypeConfiguration<ForumSection>
    {
        public void Configure(EntityTypeBuilder<ForumSection> builder)
        {
            builder.ToTable("ForumSections");
            
        }
    }
}
