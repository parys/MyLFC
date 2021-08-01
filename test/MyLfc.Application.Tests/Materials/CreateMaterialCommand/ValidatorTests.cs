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
            var model = new Request
            {
                Type = MaterialType.Both
            };
            var result = Validator.TestValidate(model, opt => opt.IncludeProperties(x => x.Type));
            result.ShouldHaveValidationErrorFor(x => x.Type);
        }

        [Theory]
        [InlineData(MaterialType.News)]
        [InlineData(MaterialType.Blogs)]
        public void UpsertMaterial_RuleForType_WhenTypeIsNotBoth_ShouldNotHaveValidationError(MaterialType value)
        {
            var model = new Request
            {
                Type = value
            };
            var result = Validator.TestValidate(model, opt => opt.IncludeProperties(x => x.Type));
            result.ShouldNotHaveValidationErrorFor(x => x.Type);
        }

        #endregion
    }
}
