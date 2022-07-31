using System.Collections.Generic;
using System.Linq;
using AutoFixture;
using MyLfc.Application.Tests.Infrastructure.Customizations.Domains;
using MyLfc.Domain;
using MyLfc.Data.Common;

namespace MyLfc.Application.Tests.Infrastructure.Seeds;

public class MaterialSeeder
{
    public static List<Material> Seed(ILiverpoolContext context)
    {
        var result = new List<Material>();

        var materials = new Fixture()
            .Customize(new MaterialCustomization(MaterialType.News))
            .CreateMany<Material>(3).ToList();

        context.Materials.AddRange(materials);
        result.AddRange(materials);

        var blogs = new Fixture()
            .Customize(new MaterialCustomization(MaterialType.Blogs))
            .CreateMany<Material>(3).ToList();

        context.Materials.AddRange(blogs);
        result.AddRange(blogs);

        context.SaveChanges();

        return result;
    }
}
