using System.Linq;
using AutoFixture;
using MyLfc.Application.Tests.Infrastructure;
using MyLfc.Application.Tests.Infrastructure.Customizations.Domains;
using MyLfc.Application.Tests.Infrastructure.Seeds;
using MyLfc.Domain;
using Xunit;

namespace MyLfc.Application.Tests.Features.Comments.UpdateCommentVoteCommand
{
    [CollectionDefinition(nameof(UpdateCommentVoteCommandCollection))]
    public class UpdateCommentVoteCommandCollection : ICollectionFixture<UpdateCommentVoteCommandTestFixture> { }


    public class UpdateCommentVoteCommandTestFixture : BaseTestFixture
    {
        public static int CommentId { get; set; }
        public static int SecondCommentId { get; set; }

        //public static PrivateMessage ImmutablePrivateMessage => PrivateMessages[0];
        //public static PrivateMessage PrivateMessageForRead => PrivateMessages[1];
        //public static PrivateMessage PrivateMessageThatNotRelatedToAdmin => PrivateMessages[3];
        //public static List<PrivateMessage> PrivateMessages { get; private set; }


        public UpdateCommentVoteCommandTestFixture()
        {
            UserSeeder.Seed(Context);
            SeedComments();
            SeedCommentVotes();
        }

        private void SeedComments()
        {
            var comments = new Fixture()
                .Customize(new CommentCustomization())
                .CreateMany<Comment>(10)
                .Select(x =>
                {
                    x.AuthorId = AdminUserId;
                    return x;
                })
                .ToList();

            Context.MaterialComments.AddRange(comments);
            Context.SaveChanges();

            CommentId = comments[0].Id;
            SecondCommentId = comments[1].Id;
        }

        private void SeedCommentVotes()
        {
            var commentVotes = new Fixture()
                .Customize(new CommentVoteCustomization())
                .CreateMany<CommentVote>(2)
                .Select(x =>
                {
                    x.CommentId = CommentId;
                    x.UserId = AdminUserId;
                    x.Positive = true;
                    return x;
                })
                .ToList();

            commentVotes[1].CommentId = SecondCommentId;
            commentVotes[1].Positive = false;

            Context.CommentVotes.AddRange(commentVotes);
            Context.SaveChanges();
            
        }
    }
}
