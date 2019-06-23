using AutoFixture;
using MyLfc.Application.Tests.Infrastructure.Customizations.Domain;
using MyLfc.Domain;
using MyLfc.Persistence;
using MyLiverpool.Data.Common;

namespace MyLfc.Application.Tests.Infrastructure.Seeds
{
    public class MaterialSeed
    {
        public static void Seed(LiverpoolContext context)
        {
            var materials = new Fixture()
                .Customize(new MaterialCustomization(MaterialType.News))
                .CreateMany<Material>(3);

            context.Materials.AddRange(materials);

            var blogs = new Fixture()
                .Customize(new MaterialCustomization(MaterialType.Blogs))
                .CreateMany<Material>(3);

            context.Materials.AddRange(blogs);

            context.SaveChanges();
        }
    }
}
