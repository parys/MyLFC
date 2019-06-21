using AutoFixture;
using MyLfc.Application.Tests.Infrastructure.FixtureBuilders;
using MyLfc.Domain;
using MyLiverpool.Data.Common;

namespace MyLfc.Application.Tests.Infrastructure.Customizations.Domain
{
    public class MaterialCategoryCustomization : ICustomization
    {
        private MaterialType Type { get; }

        public MaterialCategoryCustomization(MaterialType type)
        {
            Type = type;
        }

        public void Customize(IFixture fixture)
        {
            fixture.Customizations.Add(new IgnoreMembers(new[] {
                nameof(MaterialCategory.Materials),
            }));


            fixture.Customize<MaterialCategory>(
                o => o.With(p => p.MaterialType, Type));
        }
    }
}
