using AutoFixture;
using MyLfc.Application.Tests.Infrastructure;
using MyLfc.Domain;
using MyLfc.Data.Common;
using Xunit;

namespace MyLfc.Application.Tests.HelpEntities
{
    [CollectionDefinition(nameof(HelpEntityQueryCollection))]
    public class HelpEntityQueryCollection : ICollectionFixture<HelpEntityQueryTestFixture> { }

    public class HelpEntityQueryTestFixture : BaseTestFixture
    {
        public HelpEntityQueryTestFixture()
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
