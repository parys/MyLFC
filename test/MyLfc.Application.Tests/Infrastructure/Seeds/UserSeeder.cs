using System.Linq;
using AutoFixture;
using MyLfc.Application.Tests.Infrastructure.Customizations.Domains;
using MyLfc.Domain;

namespace MyLfc.Application.Tests.Infrastructure.Seeds
{
    public class UserSeeder
    {
        public const int AdminUserId = 1;
        public const string AdminUserName = "Admin";
        public static void Seed(ILiverpoolContext context)
        {
            var users = new Fixture()
                .Customize(new UserCustomization())
                .CreateMany<FullUser>(3)
                .Select(x =>
                {
                    x.RoleGroupId = RoleGroupsSeeder.DefaultRoleGroupId;
                    return x;
                }).ToList();

            users[0].Id = AdminUserId;
            users[0].UserName = AdminUserName;

            context.Users.AddRange(users);

            context.SaveChanges();
        }
    }
}
