using System.Collections.Generic;
using System.Linq;
using AutoFixture;
using MyLfc.Application.Tests.Infrastructure;
using MyLfc.Application.Tests.Infrastructure.Customizations.Domains;
using MyLfc.Domain;
using MyLfc.Domain.Identity;
using Xunit;

namespace MyLfc.Application.Tests.RoleGroups;

[CollectionDefinition(nameof(RoleGroupQueryCollection))]
public class RoleGroupQueryCollection : ICollectionFixture<RoleGroupQueryTestFixture>
{
}


public class RoleGroupQueryTestFixture : BaseTestFixture
{
    public int RoleId { get; set; }

    public RoleGroupQueryTestFixture()
    {
        SeedRoles();
        SeedRoleGroups();
        SeedRoleRoleGroups();
    }

    private void SeedRoles()
    {
        var roles = new Fixture()
            .Customize(new RoleCustomization())
            .CreateMany<Role>(2)
            .ToList();

        Context.Roles.AddRange(roles);

        Context.SaveChanges();

        RoleId = roles[0].Id;
    }

    private void SeedRoleGroups()
    {
        var roleGroups = new Fixture()
            .Customize(new RoleGroupCustomization())
            .CreateMany<RoleGroup>(4)
            .ToList();

        Context.RoleGroups.AddRange(roleGroups);

        Context.SaveChanges();
    }

    private void SeedRoleRoleGroups()
    {
        var roleGroups = Context.RoleGroups.ToList();

        var roleRoleGroups = new List<RoleRoleGroup>();

        roleGroups.ForEach(x =>
        {
            roleRoleGroups.Add(new RoleRoleGroup
            { 
                RoleGroupId = x.Id,
                RoleId = RoleId
            });
        });

        Context.RoleRoleGroups.AddRange(roleRoleGroups);

        Context.SaveChanges();
    }
}
