using FluentValidation.TestHelper;
using MyLfc.Data.Common;
using Xunit;
using Request = MyLfc.Application.Materials.Commands.CreateMaterialCommand.Request;
using Validator = MyLfc.Application.Materials.Commands.CreateMaterialCommand.Validator;

namespace MyLfc.Application.Tests.Materials.CreateMaterialCommand
{
    [Collection(nameof(CreateMaterialCommandCollection))]
    public class ValidatorTests
    {
        private readonly Validator _validator;
        #region Initialize

        public ValidatorTests()
        {
            _validator = new Validator();
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
            var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.Type));
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
            var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.Type));
            result.ShouldNotHaveValidationErrorFor(x => x.Type);
        }

        #endregion
    }
}
