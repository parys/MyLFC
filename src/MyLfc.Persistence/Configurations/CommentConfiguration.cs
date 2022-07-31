using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MyLfc.Domain;

namespace MyLfc.Persistence.Configurations;

public class CommentConfiguration : IEntityTypeConfiguration<Comment>
{
    public void Configure(EntityTypeBuilder<Comment> builder)
    {
        builder.ToTable("MaterialComments");


        builder.Property(x => x.Message).HasMaxLength(30000);

        builder.Property(x => x.Answer).HasMaxLength(5000);

        builder
            .HasOne(x => x.Author)
            .WithMany(x => x.Comments)
            .HasForeignKey(x => x.AuthorId);
        builder
            .HasOne(u => u.Material)
            .WithMany(x => x.Comments)
            .HasForeignKey(x => x.MaterialId)
            .IsRequired(false);
        builder
            .HasOne(u => u.Match)
            .WithMany(x => x.Comments)
            .HasForeignKey(x => x.MatchId)
            .IsRequired(false);
        builder
            .HasOne(u => u.Poll)
            .WithMany(x => x.Comments)
            .HasForeignKey(x => x.PollId)
            .IsRequired(false);
        builder
            .HasMany(x => x.CommentVotes)
            .WithOne(x => x.Comment)
            .HasForeignKey(x => x.CommentId);

        builder.HasQueryFilter(x => !x.Deleted);
    }
}
