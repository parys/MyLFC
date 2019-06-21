using MyLfc.Application.Tests.Infrastructure;
using MyLfc.Application.Tests.Infrastructure.Seeds;
using Xunit;

namespace MyLfc.Application.Tests.Materials.CreateMaterialCommand
{
    [CollectionDefinition(nameof(CreateMaterialCommandCollection))]
    public class CreateMaterialCommandCollection : ICollectionFixture<CreateMaterialCommandTestFixture> { }

    public class CreateMaterialCommandTestFixture : BaseTestFixture
    {
        public CreateMaterialCommandTestFixture() : base()
        {
            MaterialCategorySeed.Seed(Context);
            UserSeed.Seed(Context);
        }
    }
}
