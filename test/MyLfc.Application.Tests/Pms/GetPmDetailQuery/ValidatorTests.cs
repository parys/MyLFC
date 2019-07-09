using FluentValidation.TestHelper;
using MyLfc.Application.Tests.Materials.UpdateMaterialCommand;
using Xunit;
using Request = MyLfc.Application.Materials.UpdateMaterialCommand.Request;
using Validator = MyLfc.Application.Materials.UpdateMaterialCommand.Validator;

namespace MyLfc.Application.Tests.Pms.UpdateMaterialCommand
{
    [Collection(nameof(PmQueryCollection))]
    public class ValidatorTests
    {
        #region Initialize

        private Validator _validator;

        public ValidatorTests(PmQueryTestFixture fixture)
        {
            _validator = new Validator();
        }

        #endregion
        #region Material Id

        [Fact]
        public void UpdateMaterial_RuleForId_WhenIdIsEmpty_ShouldHaveValidationError()
        {
            _validator.ShouldHaveValidationErrorFor(x => x.Id, 0);
        }

        [Theory]
        [InlineData(1)]
        [InlineData(100)]
        public void UpdateMaterial_RuleForId_WhenIdIsNotEmpty_ShouldNotHaveValidationError(int value)
        {
            _validator.ShouldNotHaveValidationErrorFor(x => x.Id, value);
        }

        #endregion
    }
}