using AutoFixture;
using MyLfc.Application.Tests.Infrastructure.Customizations.Domain;
using MyLfc.Domain;
using MyLfc.Persistence;
using MyLiverpool.Data.Common;

namespace MyLfc.Application.Tests.Infrastructure.Seeds
{
    public class MaterialCategorySeed
    {
        public static void Seed(LiverpoolContext context)
        {
            var newsCategories = new Fixture()
                .Customize(new MaterialCategoryCustomization(MaterialType.News))
                .CreateMany<MaterialCategory>(3);

            context.MaterialCategories.AddRange(newsCategories);

            var blogsCategories = new Fixture()
                .Customize(new MaterialCategoryCustomization(MaterialType.Blogs))
                .CreateMany<MaterialCategory>(3);

            context.MaterialCategories.AddRange(blogsCategories);

            context.SaveChanges();
        }
    }
}
