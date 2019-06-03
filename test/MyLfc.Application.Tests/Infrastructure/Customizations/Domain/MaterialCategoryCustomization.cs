using AutoFixture;
using MyLfc.Application.Tests.Infrastructure.FixtureBuilders;
using MyLfc.Domain;

namespace MyLfc.Application.Tests.Infrastructure.Customizations.Domain
{
    public class MaterialCategoryCustomization : ICustomization
    {
        public void Customize(IFixture fixture)
        {
            fixture.Customizations.Add(new IgnoreMembers(new[] {
                nameof(MaterialCategory.Materials),
            }));
        }
    }
}
