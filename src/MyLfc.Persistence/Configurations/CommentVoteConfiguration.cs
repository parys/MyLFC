using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MyLfc.Domain;

namespace MyLfc.Persistence.Configurations;

public class CommentVoteConfiguration : IEntityTypeConfiguration<CommentVote>
{
    public void Configure(EntityTypeBuilder<CommentVote> builder)
    {
        builder.ToTable("CommentVotes");

        builder.HasKey(t => new { t.UserId, t.CommentId });

        builder.HasQueryFilter(x => !x.Comment.Deleted);
    }
}
