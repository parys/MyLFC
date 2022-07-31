using MyLfc.Application.Tests.Infrastructure;
using MyLfc.Application.Tests.Infrastructure.Seeds;
using Xunit;

namespace MyLfc.Application.Tests.Features.Persons;

[CollectionDefinition(nameof(PersonQueryCollection))]
public class PersonQueryCollection : ICollectionFixture<PersonQueryTestFixture> { }


public class PersonQueryTestFixture : BaseTestFixture
{
    public PersonQueryTestFixture()
    {
        PersonsSeeder.Seed(Context);
    }
}
