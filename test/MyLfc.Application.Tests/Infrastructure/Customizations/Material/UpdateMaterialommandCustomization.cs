using AutoFixture;
using MyLfc.Application.Materials;
using MyLfc.Shared.Tests.Customizations.Exams;

namespace MyLfc.Application.Tests.Infrastructure.Customizations.Material
{
    public class UpdateMaterialCommandCustomization : UpsertMaterialCommandCustomization<UpdateMaterialCommand.Request>
    {
        public override void Customize(IFixture fixture)
        {
        }
    }
}
