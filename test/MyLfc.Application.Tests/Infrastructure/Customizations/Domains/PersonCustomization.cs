using AutoFixture;
using MyLfc.Application.Tests.Infrastructure.FixtureBuilders;
using MyLfc.Domain;

namespace MyLfc.Application.Tests.Infrastructure.Customizations.Domains
{
    public class PersonCustomization : ICustomization
    {
        public void Customize(IFixture fixture)
        {
            fixture.Customizations.Add(new IgnoreMembers(new[] {
                nameof(Person.Contracts),
                nameof(Person.Events),
                nameof(Person.Injuries),
                nameof(Person.Loans),
                nameof(Person.Matches),
                nameof(Person.Transfers)
            }));
        }
    }
}
