using AutoFixture;
using MyLfc.Application.Tests.Infrastructure.FixtureBuilders;
using MyLfc.Domain.Identity;

namespace MyLfc.Application.Tests.Infrastructure.Customizations.Domains;

public class UserCustomization : ICustomization
{
    public void Customize(IFixture fixture)
    {
        fixture.Customizations.Add(new IgnoreMembers(new[] {
            nameof(FullUser.Materials),
            nameof(FullUser.ChatMessages),
            nameof(FullUser.Claims),
            nameof(FullUser.CommentVotes),
            nameof(FullUser.Comments),
            nameof(FullUser.ForumMessages),
            nameof(FullUser.Logins),
            nameof(FullUser.Notifications),
            nameof(FullUser.ReceivedPrivateMessages),
            nameof(FullUser.SentPrivateMessages),
            nameof(FullUser.Roles),
            nameof(FullUser.UserConfig),
            nameof(FullUser.RoleGroup)

        }));
    }
}
