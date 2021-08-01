using AutoFixture;
using MyLfc.Application.Tests.Infrastructure.Customizations.Domains;
using MyLfc.Domain;

namespace MyLfc.Application.Tests.Infrastructure.Seeds
{
    public class RoleGroupsSeeder
    {
        public static int DefaultRoleGroupId { get; set; }

        public static void Seed(ILiverpoolContext context)
        {
            var roleGroup = new Fixture()
                .Customize(new RoleGroupCustomization())
                .Create<RoleGroup>();

            context.RoleGroups.Add(roleGroup);
            context.SaveChanges();

            DefaultRoleGroupId = roleGroup.Id;
        }
    }
}
