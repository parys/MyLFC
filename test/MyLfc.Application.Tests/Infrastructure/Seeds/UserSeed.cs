using AutoFixture;
using MyLfc.Application.Tests.Infrastructure.Customizations.Domains;
using MyLfc.Domain;
using MyLfc.Persistence;

namespace MyLfc.Application.Tests.Infrastructure.Seeds
{
    public class UserSeed
    {
        public static void Seed(LiverpoolContext context)
        {
            var users = new Fixture()
                .Customize(new UserCustomization())
                .CreateMany<User>(3);

            context.Users.AddRange(users);

            context.SaveChanges();
        }
    }
}
