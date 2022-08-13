using FluentValidation.TestHelper;
using Xunit;
using Request = MyLfc.Application.Features.Pms.Queries.GetPmDetailQuery.Request;
using Validator = MyLfc.Application.Features.Pms.Queries.GetPmDetailQuery.Validator;

namespace MyLfc.Application.Tests.Pms.GetPmDetailQuery;

[Collection(nameof(PmQueryCollection))]
public class ValidatorTests
{
    #region Initialize

    private readonly Validator _validator;

    public ValidatorTests()
    {
        _validator = new Validator();
    }

    #endregion
    #region Pm Id

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
}