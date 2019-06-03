using AutoFixture;
using MyLfc.Application.Tests.Infrastructure.FixtureBuilders;
using MyLfc.Domain;

namespace MyLfc.Application.Tests.Infrastructure.Customizations.Domain
{
    public class CommentCustomization : ICustomization
    {
        public void Customize(IFixture fixture)
        {
            fixture.Customizations.Add(new IgnoreMembers(new[] {
                nameof(MaterialComment.Author),
                nameof(MaterialComment.Children),
                nameof(MaterialComment.CommentVotes),
                nameof(MaterialComment.Match),
                nameof(MaterialComment.Material),
                nameof(MaterialComment.Parent),
                nameof(MaterialComment.Poll),
            }));
        }
    }
}
