using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MyLfc.Domain;

namespace MyLfc.Persistence.Configurations;

public class ForumSubsectionConfiguration : IEntityTypeConfiguration<ForumSubsection>
{
    public void Configure(EntityTypeBuilder<ForumSubsection> builder)
    {
        builder.ToTable("ForumSubsections");

        builder.HasOne(x => x.Section)
            .WithMany(x => x.Subsections)
            .HasForeignKey(x => x.SectionId);
    }
}
