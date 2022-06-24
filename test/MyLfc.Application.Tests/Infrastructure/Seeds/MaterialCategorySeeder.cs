using System.Linq;
using AutoFixture;
using MyLfc.Application.Tests.Infrastructure.Customizations.Domains;
using MyLfc.Domain;
using MyLfc.Persistence;
using MyLfc.Data.Common;

namespace MyLfc.Application.Tests.Infrastructure.Seeds
{
    public class MaterialCategorySeeder
    {
        public static int DefaultCategoryId { get; set; } = 1;
        public static string DefaultCategoryName { get; set; } = "DefCategory";
        public static int SecondCategoryId { get; set; } = 2;
        public static string SecondCategoryName { get; set; } = "2DefCategory2";

        public static void Seed(ILiverpoolContext context)
        {
            var newsCategories = new Fixture()
                .Customize(new MaterialCategoryCustomization(MaterialType.News))
                .CreateMany<MaterialCategory>(3).ToList();

            newsCategories[0].Id = DefaultCategoryId;
            newsCategories[0].Name = DefaultCategoryName;

            newsCategories[1].Id = SecondCategoryId;
            newsCategories[1].Name = SecondCategoryName;

            context.MaterialCategories.AddRange(newsCategories);

            var blogsCategories = new Fixture()
                .Customize(new MaterialCategoryCustomization(MaterialType.Blogs, 5))
                .CreateMany<MaterialCategory>(3);

            context.MaterialCategories.AddRange(blogsCategories);

            context.SaveChanges();
        }
    }
}
