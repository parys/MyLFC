using Xunit;
using Request = MyLfc.Application.Materials.CreateMaterialCommand.Request;
using Validator = MyLfc.Application.Materials.CreateMaterialCommand.Validator;

namespace MyLfc.Application.Tests.Materials.CreateMaterialCommand
{
    [Collection(nameof(CreateMaterialCommandCollection))]
    public class ValidatorTests : UpsertMaterialCommandValidatorTests<Validator, Request>
    {
        #region Initialize

        public ValidatorTests(CreateMaterialCommandTestFixture fixture)
        {
            Validator = new Validator();
        }

        #endregion
    }
}
