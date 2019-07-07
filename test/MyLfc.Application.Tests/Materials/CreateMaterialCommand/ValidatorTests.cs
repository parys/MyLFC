using FluentValidation.TestHelper;
using MyLiverpool.Data.Common;
using Xunit;
using Request = MyLfc.Application.Materials.CreateMaterialCommand.Request;
using Validator = MyLfc.Application.Materials.CreateMaterialCommand.Validator;

namespace MyLfc.Application.Tests.Materials.CreateMaterialCommand
{
    [Collection(nameof(CreateMaterialCommandCollection))]
    public class ValidatorTests : UpsertMaterialCommandValidatorTests<Validator, Request>
    {
        #region Initialize

        public ValidatorTests()
        {
            Validator = new Validator();
        }

        #endregion
        #region Material Type

        [Fact]
        public void UpsertMaterial_RuleForType_WhenTypeIsBoth_ShouldHaveValidationError()
        {
            Validator.ShouldHaveValidationErrorFor(x => x.Type, MaterialType.Both);
        }

        [Theory]
        [InlineData(MaterialType.News)]
        [InlineData(MaterialType.Blogs)]
        public void UpsertMaterial_RuleForType_WhenTypeIsNotBoth_ShouldNotHaveValidationError(MaterialType type)
        {
            Validator.ShouldNotHaveValidationErrorFor(x => x.Type, type);
        }

        #endregion
    }
}
