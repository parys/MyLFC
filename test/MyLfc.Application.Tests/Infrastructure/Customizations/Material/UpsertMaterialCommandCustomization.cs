using AutoFixture;
using MyLfc.Application.Materials;
using MyLfc.Application.Tests.Infrastructure.Extensions;
using MyLfc.Application.Tests.Infrastructure.Seeds;

namespace MyLfc.Application.Tests.Infrastructure.Customizations.Material
{
    public class UpsertMaterialCommandCustomization<T> : ICustomization where T : UpsertMaterialCommand.Request
    {
        public virtual void Customize(IFixture fixture)
        {
            fixture.Customize<T>(o => o
                .With(x => x.Brief, () => Generator.Generate(nameof(UpsertMaterialCommand.Request.Brief), 64))
                .With(x => x.Message, () => Generator.Generate(nameof(UpsertMaterialCommand.Request.Message), 256))
                .With(x => x.Photo, () => Generator.Generate(nameof(UpsertMaterialCommand.Request.Photo), 128))
                .With(x => x.PhotoPreview, () => Generator.Generate(nameof(UpsertMaterialCommand.Request.PhotoPreview), 256))
                .With(x => x.Source, () => Generator.Generate(nameof(UpsertMaterialCommand.Request.Source), 50))
                .With(x => x.Tags, () => Generator.Generate(nameof(UpsertMaterialCommand.Request.Tags), 50))
                .With(x => x.Title, () => Generator.Generate(nameof(UpsertMaterialCommand.Request.Title), 512))
                .With(x => x.CategoryId, () => MaterialCategorySeed.DefaultCategoryId));
        }
    }
}
