using System.Linq;
using AutoFixture;
using MyLfc.Application.Tests.Infrastructure.Customizations.Domains;
using MyLfc.Domain;

namespace MyLfc.Application.Tests.Infrastructure.Seeds;

public class PersonsSeeder
{
    public static int PersonIdWithNickname { get; } = 1;
    public static int PersonIdWithoutNickname { get; } = 2;

    public static void Seed(ILiverpoolContext context)
    {
        var persons = new Fixture()
            .Customize(new PersonCustomization())
            .CreateMany<Person>(3)
            .ToList();


        persons[0].Id = PersonIdWithNickname;
        persons[0].Nickname = string.Empty;

        persons[1].Id = PersonIdWithoutNickname;
        persons[0].Nickname = "SomeNickName";

        context.Persons.AddRange(persons);

        context.SaveChanges();
    }
}
