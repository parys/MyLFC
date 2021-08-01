using FluentValidation.TestHelper;
using Xunit;
using Validator = MyLfc.Application.Pms.CreatePmCommand.Validator;
using Request = MyLfc.Application.Pms.CreatePmCommand.Request;

namespace MyLfc.Application.Tests.Pms.CreatePmCommand
{
    [Collection(nameof(CreatePmCommandCollection))]
    public class ValidatorTests
    {
        #region Initialize

        private readonly Validator _validator;

        public ValidatorTests()
        {
            _validator = new Validator();
        }

        #endregion

        #region Title

        [Theory]
        [InlineData((string)null)]
        [InlineData("")]
        public void RuleForTitle_WhenTitleIsNullOrEmpty_ShouldHaveValidationError(string value)
        {
            var model = new Request
            {
                Title = value
            };
            var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.Title));
            result.ShouldHaveValidationErrorFor(x => x.Title);
        }

        [Fact]
        public void RuleForTitle_WhenValueLengthIs50_ShouldNotHaveValidationError()
        {
            var value = new string('1', 50);
            var model = new Request
            {
                Title = value
            };
            var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.Title));
            result.ShouldNotHaveValidationErrorFor(x => x.Title);
        }

        [Fact]
        public void RuleForTitle_WhenValueLengthIs51_ShouldHaveValidationError()
        {
            var value = new string('1', 51);
            var model = new Request
            {
                Title = value
            };
            var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.Title));
            result.ShouldHaveValidationErrorFor(x => x.Title);
        }
        #endregion

        #region Message

        [Theory]
        [InlineData((string)null)]
        [InlineData("")]
        public void RuleForMessage_WhenTitleIsNullOrEmpty_ShouldHaveValidationError(string value)
        {
            var model = new Request
            {
                Message = value
            };
            var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.Message));
            result.ShouldHaveValidationErrorFor(x => x.Message);
        }

        [Fact]
        public void RuleForMessage_WhenValueLengthIs2500_ShouldNotHaveValidationError()
        {
            var model = new Request
            {
                Message = new string('1', 2500)
            };
            var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.Message));
            result.ShouldNotHaveValidationErrorFor(nameof(model.Message));
        }

        [Fact]
        public void RuleForMessage_WhenValueLengthIs2501_ShouldHaveValidationError()
        {
            var model = new Request
            {
                Message = new string('1', 2501)
            };
            var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.Message));
            result.ShouldHaveValidationErrorFor(x => x.Message);
        }
        #endregion
    }
}