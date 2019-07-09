using System.Linq;
using AutoFixture;
using MyLfc.Application.Tests.Infrastructure.Customizations.Domains;
using MyLfc.Domain;
using MyLfc.Persistence;

namespace MyLfc.Application.Tests.Infrastructure.Seeds
{
    public class UserSeeder
    {
        public static void Seed(LiverpoolContext context)
        {
            var users = new Fixture()
                .Customize(new UserCustomization())
                .CreateMany<User>(3)
                .Select(x =>
                {
                    x.RoleGroupId = RoleGroupsSeeder.DefaultRoleGroupId;
                    return x;
                }).ToList();

            users[0].Id = 1;

            context.Users.AddRange(users);

            context.SaveChanges();
        }
    }
}
