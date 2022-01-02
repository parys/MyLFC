using System.Collections.Generic;
using System.Linq;
using AutoFixture;
using MyLfc.Application.Tests.Infrastructure;
using MyLfc.Application.Tests.Infrastructure.Customizations.Domains;
using MyLfc.Application.Tests.Infrastructure.Seeds;
using MyLfc.Domain;
using Xunit;

namespace MyLfc.Application.Tests.Features.Injuries
{
    [CollectionDefinition(nameof(InjuryQueryCollection))]
    public class InjuryQueryCollection : ICollectionFixture<InjuryQueryTestFixture> { }


    public class InjuryQueryTestFixture : BaseTestFixture
    {
        public static List<Injury> Injuries { get; private set; }


        public InjuryQueryTestFixture()
        {
            PersonsSeeder.Seed(Context);
            SeedInjuries();
        }

        private void SeedInjuries()
        {
            var injuries = new Fixture()
                .Customize(new InjuryCustomization())
                .CreateMany<Injury>(5).ToList();
            
            Context.Injuries.AddRange(injuries);
            Context.SaveChanges();

            Injuries = injuries;
        }

    }
}
