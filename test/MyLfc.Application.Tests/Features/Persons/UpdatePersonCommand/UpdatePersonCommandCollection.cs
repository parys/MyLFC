using AutoFixture;
using MyLfc.Application.Tests.Infrastructure;
using MyLfc.Application.Tests.Infrastructure.Customizations.Domains;
using MyLfc.Domain;
using Xunit;

namespace MyLfc.Application.Tests.Features.Persons.UpdatePersonCommand;

[CollectionDefinition(nameof(UpdatePersonCommandCollection))]
public class UpdatePersonCommandCollection : ICollectionFixture<UpdatePersonCommandTestFixture>
{
}

public class UpdatePersonCommandTestFixture : BaseTestFixture
{
    public static int PersonId;

    public UpdatePersonCommandTestFixture()
    {
        SeedPersons();
    }

    private void SeedPersons()
    {
        var person = new Fixture()
            .Customize(new PersonCustomization())
            .Create<Person>();
        person.Photo = null;

        Context.Persons.Add(person);

        Context.SaveChanges();

        PersonId = person.Id;
    }
}
