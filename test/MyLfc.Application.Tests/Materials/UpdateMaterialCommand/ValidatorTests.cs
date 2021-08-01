using FluentValidation.TestHelper;
using Xunit;
using Request = MyLfc.Application.Materials.UpdateMaterialCommand.Request;
using Validator = MyLfc.Application.Materials.UpdateMaterialCommand.Validator;

namespace MyLfc.Application.Tests.Materials.UpdateMaterialCommand
{
    [Collection(nameof(UpdateMaterialCommandCollection))]
    public class ValidatorTests
    {
        private readonly Validator _validator;
        #region Initialize

        public ValidatorTests()
        {
            _validator = new Validator();
        }

        #endregion
        #region Material Id

        [Fact]
        public void UpdateMaterial_RuleForId_WhenIdIsEmpty_ShouldHaveValidationError()
        {
            var model = new Request
            {
                Id = 0
            };
            var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.Id));
            result.ShouldHaveValidationErrorFor(x => x.Id);
        }

        [Theory]
        [InlineData(1)]
        [InlineData(100)]
        public void UpdateMaterial_RuleForId_WhenIdIsNotEmpty_ShouldNotHaveValidationError(int value)
        {
            var model = new Request
            {
                Id = value
            };
            var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.Id));
            result.ShouldNotHaveValidationErrorFor(x => x.Id);
        }

        #endregion

        #region Title Rules 

        [Theory]
        [InlineData((string)null)]
        [InlineData("")]
        public void UpsertMaterial_RuleForTitle_WhenNoValueIsSupplied_ShouldHaveValidationError(string value)
        {
            var model = new Request
            {
                Title = value
            };
            var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.Title));
            result.ShouldHaveValidationErrorFor(x => x.Title);
        }

        [Fact]
        public void UpsertMaterial_RuleForTitle_WhenValueLengthIs80_ShouldNotHaveValidationError()
        {
            var value = new string('1', 200);
            var model = new Request
            {
                Title = value
            };
            var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.Title));
            result.ShouldNotHaveValidationErrorFor(x => x.Title);
        }

        [Fact]
        public void UpsertMaterial_RuleForTitle_WhenValueIsLongerThan81Symbols_ShouldHaveValidationError()
        {
            var value = new string('1', 201);
            var model = new Request
            {
                Title = value
            };
            var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.Title));
            result.ShouldHaveValidationErrorFor(x => x.Title);
        }

        #endregion

        #region Brief Rules 

        [Theory]
        [InlineData((string)null)]
        [InlineData("")]
        public void UpsertMaterial_RuleForBrief_WhenNoValueIsSupplied_ShouldHaveValidationError(string value)
        {
            var model = new Request
            {
                Brief = value
            };
            var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.Brief));
            result.ShouldHaveValidationErrorFor(x => x.Brief);
        }

        [Fact]
        public void UpsertMaterial_RuleForBrief_WhenValueLengthIs1000_ShouldNotHaveValidationError()
        {
            var value = new string('1', 1000);
            var model = new Request
            {
                Brief = value
            };
            var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.Brief));
            result.ShouldNotHaveValidationErrorFor(x => x.Brief);
        }

        [Fact]
        public void UpsertMaterial_RuleForBrief_WhenValueIsLongerThan1001Symbols_ShouldHaveValidationError()
        {
            var value = new string('1', 1001);
            var model = new Request
            {
                Brief = value
            };
            var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.Brief));
            result.ShouldHaveValidationErrorFor(x => x.Brief);
        }

        #endregion

        #region Message Rules 

        [Theory]
        [InlineData((string)null)]
        [InlineData("")]
        public void UpsertMaterial_RuleForMessage_WhenNoValueIsSupplied_ShouldHaveValidationError(string value)
        {
            var model = new Request
            {
                Message = value
            };
            var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.Message));
            result.ShouldHaveValidationErrorFor(x => x.Message);
        }

        [Fact]
        public void UpsertMaterial_RuleForMessage_WhenValueLengthIs80000_ShouldNotHaveValidationError()
        {
            var value = new string('1', 80000);
            var model = new Request
            {
                Message = value
            };
            var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.Message));
            result.ShouldNotHaveValidationErrorFor(x => x.Message);
        }

        [Fact]
        public void UpsertMaterial_RuleForMessage_WhenValueIsLongerThan80001Symbols_ShouldHaveValidationError()
        {
            var value = new string('1', 80001);
            var model = new Request
            {
                Message = value
            };
            var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.Message));
            result.ShouldHaveValidationErrorFor(x => x.Message);
        }
        #endregion

        #region Source Rules 

        [Theory]
        [InlineData((string)null)]
        [InlineData("")]
        public void UpsertMaterial_RuleForSource_WhenNoValueIsSupplied_ShouldNotHaveValidationError(string value)
        {
            var model = new Request
            {
                Source = value
            };
            var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.Source));
            result.ShouldNotHaveValidationErrorFor(x => x.Source);
        }

        [Fact]
        public void UpsertMaterial_RuleForSource_WhenValueLengthIs300_ShouldNotHaveValidationError()
        {
            var value = new string('1', 300);
            var model = new Request
            {
                Source = value
            };
            var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.Source));
            result.ShouldNotHaveValidationErrorFor(x => x.Source);
        }

        [Fact]
        public void UpsertMaterial_RuleForSource_WhenValueIsLongerThan301Symbols_ShouldHaveValidationError()
        {
            var value = new string('1', 301);
            var model = new Request
            {
                Source = value
            };
            var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.Source));
            result.ShouldHaveValidationErrorFor(x => x.Source);
        }

        #endregion

        #region Photo Rules 

        [Theory]
        [InlineData((string)null)]
        [InlineData("")]
        public void UpsertMaterial_RuleForPhoto_WhenNoValueIsSupplied_ShouldNotHaveValidationError(string value)
        {
            var model = new Request
            {
                Photo = value
            };
            var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.Photo));
            result.ShouldHaveValidationErrorFor(x => x.Photo);
        }

        [Fact]
        public void UpsertMaterial_RuleForPhoto_WhenValueLengthIs400_ShouldNotHaveValidationError()
        {
            var value = new string('1', 400);
            var model = new Request
            {
                Photo = value
            };
            var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.Photo));
            result.ShouldNotHaveValidationErrorFor(x => x.Photo);
        }

        [Fact]
        public void UpsertMaterial_RuleForPhoto_WhenValueIsLongerThan401Symbols_ShouldHaveValidationError()
        {
            var value = new string('1', 401);
            var model = new Request
            {
                Photo = value
            };
            var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.Photo));
            result.ShouldHaveValidationErrorFor(x => x.Photo);
        }

        #endregion

        #region PhotoPreview Rules 

        [Theory]
        [InlineData((string)null)]
        [InlineData("")]
        public void UpsertMaterial_RuleForPhotoPreview_WhenNoValueIsSupplied_ShouldNotHaveValidationError(string value)
        {
            var model = new Request
            {
                PhotoPreview = value
            };
            var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.PhotoPreview));
            result.ShouldHaveValidationErrorFor(x => x.PhotoPreview);
        }

        [Fact]
        public void UpsertMaterial_RuleForPhotoPreview_WhenValueLengthIs400_ShouldNotHaveValidationError()
        {
            var value = new string('1', 400);
            var model = new Request
            {
                PhotoPreview = value
            };
            var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.PhotoPreview));
            result.ShouldNotHaveValidationErrorFor(x => x.PhotoPreview);
        }

        [Fact]
        public void UpsertMaterial_RuleForPhotoPreview_WhenValueIsLongerThan401Symbols_ShouldHaveValidationError()
        {
            var value = new string('1', 401);
            var model = new Request
            {
                PhotoPreview = value
            };
            var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.PhotoPreview));
            result.ShouldHaveValidationErrorFor(x => x.PhotoPreview);
        }

        #endregion
    }
}