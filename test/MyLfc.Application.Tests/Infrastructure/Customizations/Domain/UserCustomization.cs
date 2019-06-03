using AutoFixture;
using MyLfc.Application.Tests.Infrastructure.FixtureBuilders;
using MyLfc.Domain;

namespace MyLfc.Application.Tests.Infrastructure.Customizations.Domain
{
    public class UserCustomization : ICustomization
    {
        public void Customize(IFixture fixture)
        {
            fixture.Customizations.Add(new IgnoreMembers(new[] {
                nameof(User.Materials),
                nameof(User.ChatMessages),
                nameof(User.Claims),
                nameof(User.CommentVotes),
                nameof(User.Comments),
                nameof(User.ForumMessages),
                nameof(User.Logins),
                nameof(User.Notifications),
                nameof(User.ReceivedPrivateMessages),
                nameof(User.SentPrivateMessages),
                nameof(User.Roles),
                nameof(User.UserConfig),
                nameof(User.RoleGroup)

            }));
        }
    }
}
