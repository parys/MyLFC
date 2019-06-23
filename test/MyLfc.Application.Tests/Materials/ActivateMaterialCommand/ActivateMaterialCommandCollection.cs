using AutoFixture;
using MyLfc.Application.Tests.Infrastructure;
using MyLfc.Application.Tests.Infrastructure.Customizations.Domain;
using MyLfc.Domain;
using MyLiverpool.Data.Common;
using Xunit;

namespace MyLfc.Application.Tests.Materials.ActivateMaterialCommand
{
    [CollectionDefinition(nameof(ActivateMaterialCommandCollection))]
    public class ActivateMaterialCommandCollection : ICollectionFixture<ActivateMaterialCommandTestFixture> { }

    public class ActivateMaterialCommandTestFixture : BaseTestFixture
    {
        public static int PendingId { get; set; }

        public ActivateMaterialCommandTestFixture()
        {
            SeedPendingMaterial();
        }

        private void SeedPendingMaterial()
        {
            var material = new Fixture()
                .Customize(new MaterialCustomization(MaterialType.News))
                .Create<Material>();
            material.Pending = true;

            Context.Materials.Add(material);
            Context.SaveChanges();

            PendingId = material.Id;
        }
    }
}
