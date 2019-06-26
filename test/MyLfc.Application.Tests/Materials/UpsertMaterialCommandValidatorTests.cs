using FluentValidation.TestHelper;
using MyLfc.Application.Materials;
using Xunit;

namespace MyLfc.Application.Tests.Materials
{
    public abstract class UpsertMaterialCommandValidatorTests<TValidator, TCommand>
        where TValidator : UpsertMaterialCommand.Validator<TCommand>
        where TCommand : UpsertMaterialCommand.Request, new()
    {
        #region Properties

        protected TValidator Validator { get; set; }

        #endregion

        #region Title Rules 

        [Theory]
        [InlineData((string)null)]
        [InlineData("")]
        public void UpsertMaterial_RuleForTitle_WhenNoValueIsSupplied_ShouldHaveValidationError(string title)
        {
            Validator.ShouldHaveValidationErrorFor(x => x.Title, title);
        }

        [Fact]
        public void UpsertMaterial_RuleForTitle_WhenValueLengthIs80_ShouldNotHaveValidationError()
        {
            var value = new string('1', 200);
            Validator.ShouldNotHaveValidationErrorFor(x => x.Title, value);
        }

        [Fact]
        public void UpsertMaterial_RuleForTitle_WhenValueIsLongerThan81Symbols_ShouldHaveValidationError()
        {
            var value = new string('1', 201);
            Validator.ShouldHaveValidationErrorFor(x => x.Title, value);
        }

        #endregion

        #region Brief Rules 

        [Theory]
        [InlineData((string)null)]
        [InlineData("")]
        public void UpsertMaterial_RuleForBrief_WhenNoValueIsSupplied_ShouldHaveValidationError(string brief)
        {
            Validator.ShouldHaveValidationErrorFor(x => x.Brief, brief);
        }

        [Fact]
        public void UpsertMaterial_RuleForBrief_WhenValueLengthIs1000_ShouldNotHaveValidationError()
        {
            var value = new string('1', 1000);
            Validator.ShouldNotHaveValidationErrorFor(x => x.Brief, value);
        }

        [Fact]
        public void UpsertMaterial_RuleForBrief_WhenValueIsLongerThan1001Symbols_ShouldHaveValidationError()
        {
            var value = new string('1', 1001);
            Validator.ShouldHaveValidationErrorFor(x => x.Brief, value);
        }

        #endregion

        #region Message Rules 

        [Theory]
        [InlineData((string)null)]
        [InlineData("")]
        public void UpsertMaterial_RuleForMessage_WhenNoValueIsSupplied_ShouldHaveValidationError(string message)
        {
            Validator.ShouldHaveValidationErrorFor(x => x.Message, message);
        }

        [Fact]
        public void UpsertMaterial_RuleForMessage_WhenValueLengthIs80000_ShouldNotHaveValidationError()
        {
            var value = new string('1', 80000);
            Validator.ShouldNotHaveValidationErrorFor(x => x.Message, value);
        }

        [Fact]
        public void UpsertMaterial_RuleForMessage_WhenValueIsLongerThan80001Symbols_ShouldHaveValidationError()
        {
            var value = new string('1', 80001);
            Validator.ShouldHaveValidationErrorFor(x => x.Message, value);
        }
        #endregion

        #region Source Rules 

        [Theory]
        [InlineData((string)null)]
        [InlineData("")]
        public void UpsertMaterial_RuleForSource_WhenNoValueIsSupplied_ShouldNotHaveValidationError(string value)
        {
            Validator.ShouldNotHaveValidationErrorFor(x => x.Source, value);
        }

        [Fact]
        public void UpsertMaterial_RuleForSource_WhenValueLengthIs300_ShouldNotHaveValidationError()
        {
            var value = new string('1', 300);
            Validator.ShouldNotHaveValidationErrorFor(x => x.Source, value);
        }

        [Fact]
        public void UpsertMaterial_RuleForSource_WhenValueIsLongerThan301Symbols_ShouldHaveValidationError()
        {
            var value = new string('1', 301);
            Validator.ShouldHaveValidationErrorFor(x => x.Source, value);
        }

        #endregion

        #region Photo Rules 

        [Theory]
        [InlineData((string)null)]
        [InlineData("")]
        public void UpsertMaterial_RuleForPhoto_WhenNoValueIsSupplied_ShouldNotHaveValidationError(string value)
        {
            Validator.ShouldHaveValidationErrorFor(x => x.Photo, value);
        }

        [Fact]
        public void UpsertMaterial_RuleForPhoto_WhenValueLengthIs400_ShouldNotHaveValidationError()
        {
            var value = new string('1', 400);
            Validator.ShouldNotHaveValidationErrorFor(x => x.Photo, value);
        }

        [Fact]
        public void UpsertMaterial_RuleForPhoto_WhenValueIsLongerThan401Symbols_ShouldHaveValidationError()
        {
            var value = new string('1', 401);
            Validator.ShouldHaveValidationErrorFor(x => x.Photo, value);
        }

        #endregion

        #region PhotoPreview Rules 

        [Theory]
        [InlineData((string)null)]
        [InlineData("")]
        public void UpsertMaterial_RuleForPhotoPreview_WhenNoValueIsSupplied_ShouldNotHaveValidationError(string value)
        {
            Validator.ShouldHaveValidationErrorFor(x => x.PhotoPreview, value);
        }

        [Fact]
        public void UpsertMaterial_RuleForPhotoPreview_WhenValueLengthIs400_ShouldNotHaveValidationError()
        {
            var value = new string('1', 400);
            Validator.ShouldNotHaveValidationErrorFor(x => x.PhotoPreview, value);
        }

        [Fact]
        public void UpsertMaterial_RuleForPhotoPreview_WhenValueIsLongerThan401Symbols_ShouldHaveValidationError()
        {
            var value = new string('1', 401);
            Validator.ShouldHaveValidationErrorFor(x => x.PhotoPreview, value);
        }

        #endregion

    }
}
