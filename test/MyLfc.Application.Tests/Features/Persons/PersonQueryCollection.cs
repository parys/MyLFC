using System.Collections.Generic;
using System.Linq;
using AutoFixture;
using MyLfc.Application.Tests.Infrastructure;
using MyLfc.Application.Tests.Infrastructure.Customizations.Domains;
using MyLfc.Domain;
using Xunit;

namespace MyLfc.Application.Tests.Features.Persons
{
    [CollectionDefinition(nameof(PersonQueryCollection))]
    public class PersonQueryCollection : ICollectionFixture<PersonQueryTestFixture> { }


    public class PersonQueryTestFixture : BaseTestFixture
    {
        public static List<Person> Persons { get; private set; }


        public PersonQueryTestFixture()
        {
            SeedPersons();
        }

        private void SeedPersons()
        {
            var persons = new Fixture()
                .Customize(new PersonCustomization())
                .CreateMany<Person>(5).ToList();
            
            Context.Persons.AddRange(persons);
            Context.SaveChanges();

            Persons = persons;
        }

    }
}
