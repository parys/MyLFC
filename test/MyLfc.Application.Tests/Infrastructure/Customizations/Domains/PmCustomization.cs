using AutoFixture;
using MyLfc.Application.Tests.Infrastructure.FixtureBuilders;
using MyLfc.Domain;

namespace MyLfc.Application.Tests.Infrastructure.Customizations.Domains;

public class PmCustomization : ICustomization
{
    public void Customize(IFixture fixture)
    {
        fixture.Customizations.Add(new IgnoreMembers(new[] {
            nameof(PrivateMessage.Receiver),
            nameof(PrivateMessage.Sender)
        }));
    }
}
