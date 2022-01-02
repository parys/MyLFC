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
    [CollectionDefinition(nameof(CommentQueryCollection))]
    public class CommentQueryCollection : ICollectionFixture<CommentQueryTestFixture> { }


    public class CommentQueryTestFixture : BaseTestFixture
    {
        public static List<Comment> Comments { get; private set; }


        public CommentQueryTestFixture()
        {
            PersonsSeeder.Seed(Context);
            SeedInjuries();
        }

        private void SeedInjuries()
        {
            var comments = new Fixture()
                .Customize(new CommentCustomization())
                .CreateMany<Comment>(5).ToList();
            
            Context.MaterialComments.AddRange(comments);
            Context.SaveChanges();

            Comments = comments;
        }

    }
}
