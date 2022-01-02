using MyLfc.Application.Tests.Infrastructure;
using Xunit;

namespace MyLfc.Application.Tests.Features.Persons.CreatePersonCommand
{
    [CollectionDefinition(nameof(CreatePersonCommandCollection))]
    public class CreatePersonCommandCollection : ICollectionFixture<CreatePersonCommandTestFixture> { }

    public class CreatePersonCommandTestFixture : BaseTestFixture
    {
    }
}