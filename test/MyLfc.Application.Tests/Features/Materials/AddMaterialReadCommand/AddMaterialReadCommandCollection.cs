using AutoFixture;
using MyLfc.Application.Tests.Infrastructure;
using MyLfc.Application.Tests.Infrastructure.Customizations.Domains;
using MyLfc.Domain;
using MyLfc.Data.Common;
using Xunit;

namespace MyLfc.Application.Tests.Materials.AddMaterialReadCommand;

[CollectionDefinition(nameof(AddMaterialReadCommandCollection))]
public class AddMaterialReadCommandCollection : ICollectionFixture<AddMaterialReadCommandTestFixture> { }

public class AddMaterialReadCommandTestFixture : BaseTestFixture
{
    public static int MaterialId { get; set; }

    public AddMaterialReadCommandTestFixture()
    {
        SeedPendingMaterial();
    }

    private void SeedPendingMaterial()
    {
        var material = new Fixture()
            .Customize(new MaterialCustomization(MaterialType.News))
            .Create<Material>();

        Context.Materials.Add(material);
        Context.SaveChanges();

        MaterialId = material.Id;
    }
}
