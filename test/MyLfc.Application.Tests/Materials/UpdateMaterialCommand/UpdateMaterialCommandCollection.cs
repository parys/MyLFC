using System.Collections.Generic;
using AutoFixture;
using MyLfc.Application.Tests.Infrastructure;
using MyLfc.Application.Tests.Infrastructure.Customizations.Domains;
using MyLfc.Application.Tests.Infrastructure.Seeds;
using MyLfc.Domain;
using MyLfc.Data.Common;
using Xunit;

namespace MyLfc.Application.Tests.Materials.UpdateMaterialCommand
{
    [CollectionDefinition(nameof(UpdateMaterialCommandCollection))]
    public class UpdateMaterialCommandCollection : ICollectionFixture<UpdateMaterialCommandTestFixture> { }

    public class UpdateMaterialCommandTestFixture : BaseTestFixture
    {
        public static int DeletedMaterialId;
        public static int PendingMaterialId;
        public static List<Material> Materials { get; private set; }
        
        public UpdateMaterialCommandTestFixture()
        {
            MaterialCategorySeeder.Seed(Context);
            Materials = MaterialSeeder.Seed(Context);
            UserSeeder.Seed(Context);
            SeedMaterials();
        }

        private void SeedMaterials()
        {
            var deletedMaterial = new Fixture()
                .Customize(new MaterialCustomization(MaterialType.News, true))
                .Create<Material>();
            Context.Materials.Add(deletedMaterial);

            var pendingMaterial = new Fixture()
                .Customize(new MaterialCustomization(MaterialType.News, false))
                .Create<Material>();
            pendingMaterial.Pending = true;
            Context.Materials.Add(pendingMaterial);

            Context.SaveChanges();

            DeletedMaterialId = deletedMaterial.Id;
            PendingMaterialId = pendingMaterial.Id;
        }
    }
}