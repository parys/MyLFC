using AutoFixture;
using MyLfc.Application.Materials;

namespace MyLfc.Application.Tests.Infrastructure.Customizations.Material
{
    public class UpdateMaterialCommandCustomization : UpsertMaterialCommandCustomization<UpdateMaterialCommand.Request>
    {
        public override void Customize(IFixture fixture)
        {
        }
    }
}
