using System.Collections.Generic;
using AutoFixture;
using MyLfc.Application.Tests.Infrastructure;
using MyLfc.Application.Tests.Infrastructure.Customizations.Domains;
using MyLfc.Application.Tests.Infrastructure.Seeds;
using MyLfc.Domain;
using MyLiverpool.Data.Common;
using Xunit;

namespace MyLfc.Application.Tests.Features.Persons.CreatePersonCommand
{
    [CollectionDefinition(nameof(CreatePersonCommandCollection))]
    public class CreatePersonCommandCollection : ICollectionFixture<CreatePersonCommandTestFixture> { }

    public class CreatePersonCommandTestFixture : BaseTestFixture
    {
        public static int DeletedMaterialId;
        public static int PendingMaterialId;
        public static List<Person> Persons { get; private set; }
        
        public CreatePersonCommandTestFixture()
        {
            //MaterialCategorySeeder.Seed(Context);
            //Materials = MaterialSeeder.Seed(Context);
            //UserSeeder.Seed(Context);
            //SeedMaterials();
        }

        private void SeedMaterials()
        {
            //var deletedMaterial = new Fixture()
            //    .Customize(new MaterialCustomization(MaterialType.News, true))
            //    .Create<Material>();
            //Context.Materials.Add(deletedMaterial);

            //var pendingMaterial = new Fixture()
            //    .Customize(new MaterialCustomization(MaterialType.News, false))
            //    .Create<Material>();
            //pendingMaterial.Pending = true;
            //Context.Materials.Add(pendingMaterial);

            //Context.SaveChanges();

            //DeletedMaterialId = deletedMaterial.Id;
            //PendingMaterialId = pendingMaterial.Id;
        }
    }
}