using FluentValidation.TestHelper;
using Xunit;
using Request = MyLfc.Application.Materials.UpdateMaterialCommand.Request;
using Validator = MyLfc.Application.Materials.UpdateMaterialCommand.Validator;

namespace MyLfc.Application.Tests.Materials.UpdateMaterialCommand
{
    [Collection(nameof(UpdateMaterialCommandCollection))]
    public class ValidatorTests : UpsertMaterialCommandValidatorTests<Validator, Request>
    {
        #region Initialize

        public ValidatorTests(UpdateMaterialCommandTestFixture fixture)
        {
            Validator = new Validator();
        }

        #endregion
        #region Material Id

        [Fact]
        public void UpdateMaterial_RuleForId_WhenIdIsEmpty_ShouldHaveValidationError()
        {
            Validator.ShouldHaveValidationErrorFor(x => x.Id, 0);
        }

        [Theory]
        [InlineData(1)]
        [InlineData(100)]
        public void UpdateMaterial_RuleForId_WhenIdIsNotEmpty_ShouldNotHaveValidationError(int value)
        {
            Validator.ShouldNotHaveValidationErrorFor(x => x.Id, value);
        }

        #endregion
    }
}