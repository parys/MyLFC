using System.Linq;
using AutoFixture;
using MyLfc.Application.Tests.Infrastructure.Customizations.Domains;
using MyLfc.Domain;
using MyLfc.Persistence;
using MyLiverpool.Data.Common;

namespace MyLfc.Application.Tests.Infrastructure.Seeds
{
    public class MaterialCategorySeeder
    {
        public static int DefaultCategoryId { get; set; }

        public static void Seed(ILiverpoolContext context)
        {
            var newsCategories = new Fixture()
                .Customize(new MaterialCategoryCustomization(MaterialType.News))
                .CreateMany<MaterialCategory>(3).ToList();

            context.MaterialCategories.AddRange(newsCategories);

            DefaultCategoryId = newsCategories[0].Id;

            var blogsCategories = new Fixture()
                .Customize(new MaterialCategoryCustomization(MaterialType.Blogs, 5))
                .CreateMany<MaterialCategory>(3);

            context.MaterialCategories.AddRange(blogsCategories);

            context.SaveChanges();
        }
    }
}
