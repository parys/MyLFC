using AutoFixture;
using MyLfc.Application.Tests.Infrastructure.FixtureBuilders;
using MyLfc.Domain;

namespace MyLfc.Application.Tests.Infrastructure.Customizations.Domains;

public class CommentCustomization : ICustomization
{
    private bool Deleted { get; }

    public CommentCustomization(bool deleted = false)
    {
        Deleted = deleted;
    }

    public void Customize(IFixture fixture)
    {
        fixture.Customizations.Add(new IgnoreMembers(new[] {
            nameof(Comment.Author),
            nameof(Comment.Children),
            nameof(Comment.CommentVotes),
            nameof(Comment.Match),
            nameof(Comment.Material),
            nameof(Comment.Parent),
            nameof(Comment.Poll),
        }));

        fixture.Customize<Comment>(
            o => o
                .With(x => x.Deleted, Deleted));
    }
}
