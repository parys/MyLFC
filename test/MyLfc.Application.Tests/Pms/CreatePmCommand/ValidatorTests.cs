using FluentValidation.TestHelper;
using Xunit;
using Validator = MyLfc.Application.Pms.CreatePmCommand.Validator;

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
            _validator.ShouldHaveValidationErrorFor(x => x.Title, value);
        }

        [Fact]
        public void RuleForTitle_WhenValueLengthIs50_ShouldNotHaveValidationError()
        {
            var value = new string('1', 50);
            _validator.ShouldNotHaveValidationErrorFor(x => x.Title, value);
        }

        [Fact]
        public void RuleForTitle_WhenValueLengthIs51_ShouldHaveValidationError()
        {
            var value = new string('1', 51);
            _validator.ShouldHaveValidationErrorFor(x => x.Title, value);
        }
        #endregion

        #region Message

        [Theory]
        [InlineData((string)null)]
        [InlineData("")]
        public void RuleForMessage_WhenTitleIsNullOrEmpty_ShouldHaveValidationError(string value)
        {
            _validator.ShouldHaveValidationErrorFor(x => x.Message, value);
        }

        [Fact]
        public void RuleForMessage_WhenValueLengthIs2500_ShouldNotHaveValidationError()
        {
            var value = new string('1', 2500);
            _validator.ShouldNotHaveValidationErrorFor(x => x.Message, value);
        }

        [Fact]
        public void RuleForMessage_WhenValueLengthIs2501_ShouldHaveValidationError()
        {
            var value = new string('1', 2501);
            _validator.ShouldHaveValidationErrorFor(x => x.Message, value);
        }
        #endregion
    }
}