using MyLfc.Application.Tests.Infrastructure;
using MyLfc.Application.Tests.Infrastructure.Seeds;
using Xunit;

namespace MyLfc.Application.Tests.Materials.UpdateMaterialCommand
{
    [CollectionDefinition(nameof(UpdateMaterialCommandCollection))]
    public class UpdateMaterialCommandCollection : ICollectionFixture<UpdateMaterialCommandTestFixture> { }

    public class UpdateMaterialCommandTestFixture : BaseTestFixture
    {
        public UpdateMaterialCommandTestFixture() : base()
        {
            MaterialCategorySeed.Seed(Context);
            UserSeed.Seed(Context);
        }
    }
}