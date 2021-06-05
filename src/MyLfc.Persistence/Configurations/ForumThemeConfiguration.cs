using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MyLfc.Domain;

namespace MyLfc.Persistence.Configurations
{
    public class ForumThemeConfiguration : IEntityTypeConfiguration<ForumTheme>
    {
        public void Configure(EntityTypeBuilder<ForumTheme> builder)
        {
            builder.ToTable("ForumThemes");

            builder.HasOne(x => x.Subsection)
                .WithMany(x => x.Themes)
                .HasForeignKey(x => x.SubsectionId);

        }
    }
}
