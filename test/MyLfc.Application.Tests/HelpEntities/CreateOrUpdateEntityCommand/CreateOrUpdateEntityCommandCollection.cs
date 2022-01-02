using AutoFixture;
using MyLfc.Application.Tests.Infrastructure;
using MyLfc.Domain;
using MyLfc.Data.Common;
using Xunit;

namespace MyLfc.Application.Tests.HelpEntities.CreateOrUpdateEntityCommand
{
    [CollectionDefinition(nameof(CreateOrUpdateEntityCommandCollection))]
    public class CreateOrUpdateEntityCommandCollection : ICollectionFixture<CreateOrUpdateEntityCommandTestFixture> { }

    public class CreateOrUpdateEntityCommandTestFixture : BaseTestFixture
    {
        public CreateOrUpdateEntityCommandTestFixture()
        {
            SeedHelpEntities();
        }

        private void SeedHelpEntities()
        {
            var helpEntity = new Fixture()
                .Create<HelpEntity>();
            helpEntity.Type = HelperEntityType.BestPlayer;
            Context.HelpEntities.Add(helpEntity);
            Context.SaveChanges();
        }
    }
}
