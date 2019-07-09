using AutoFixture;
using MyLfc.Application.Tests.Infrastructure.FixtureBuilders;
using MyLfc.Domain;
using MyLiverpool.Data.Common;

namespace MyLfc.Application.Tests.Infrastructure.Customizations.Domains
{
    public class MaterialCategoryCustomization : ICustomization
    {
        private MaterialType Type { get; }

        private int _startId;

        private int StartId()
        {
            _startId++;
            return _startId;
        }


        public MaterialCategoryCustomization(MaterialType type, int startId = 0)
        {
            Type = type;
            _startId = startId;
        }

        public void Customize(IFixture fixture)
        {
            fixture.Customizations.Add(new IgnoreMembers(new[] {
                nameof(MaterialCategory.Materials),
            }));


            fixture.Customize<MaterialCategory>(o => o
                .With(p => p.Id, StartId)
                .With(p => p.MaterialType, Type));
        }
    }
}
