using System.Collections.Generic;
using System.Linq;
using AutoFixture;
using MyLfc.Application.Tests.Infrastructure;
using MyLfc.Application.Tests.Infrastructure.Customizations.Domains;
using MyLfc.Application.Tests.Infrastructure.Seeds;
using MyLfc.Domain;
using MyLfc.Domain.Identity;
using Xunit;

namespace MyLfc.Application.Tests.Pms.GetUnreadPmCountQuery;

[CollectionDefinition(nameof(GetUnreadPmQueryCollection))]
public class GetUnreadPmQueryCollection : ICollectionFixture<GetUnreadPmQueryTestFixture> { }


public class GetUnreadPmQueryTestFixture : BaseTestFixture
{
    public static int UserId { get; set; } = 22;
    public static int SecondUserId { get; set; } = 33;
    public static PrivateMessage ImmutablePrivateMessage => PrivateMessages[0];
    public static PrivateMessage PrivateMessageForRead => PrivateMessages[1];
    public static PrivateMessage PrivateMessageThatNotRelatedToAdmin => PrivateMessages[3];
    public static List<PrivateMessage> PrivateMessages { get; private set; }


    public GetUnreadPmQueryTestFixture()
    {
        UserSeeder.Seed(Context);
        SeedUser();
        SeedPms();
    }

    private void SeedPms()
    {
        var privateMessages = new Fixture()
            .Customize(new PmCustomization())
            .CreateMany<PrivateMessage>(10)
            .Select(x =>
            {
                x.SenderId = UserId;
                x.ReceiverId = 1;
                return x;
            })
            .ToList();

        privateMessages[0].IsRead = privateMessages[1].IsRead = privateMessages[3].IsRead = false;

        privateMessages[2].SenderId = 1;
        privateMessages[2].ReceiverId = UserId;
        privateMessages[3].SenderId = UserId;
        privateMessages[3].ReceiverId = SecondUserId;
        privateMessages[4].ReceiverId = 1;
        privateMessages[4].SenderId = UserId;

        Context.PrivateMessages.AddRange(privateMessages);
        Context.SaveChanges();

        PrivateMessages = privateMessages;
    }

    private void SeedUser()
    {
        var users = new Fixture()
            .Customize(new UserCustomization())
            .CreateMany<FullUser>(2).ToList();

        users[0].Id = UserId;
        users[1].Id = SecondUserId;

        Context.Users.AddRange(users);
        Context.SaveChanges();
    }
}
