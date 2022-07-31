using FluentAssertions;
using FluentValidation.TestHelper;
using Xunit;
using Request = MyLfc.Application.Comments.Queries.GetCommentListByEntityIdQuery.Request;
using Validator = MyLfc.Application.Comments.Queries.GetCommentListByEntityIdQuery.Validator;

namespace MyLfc.Application.Tests.Features.Comments.Queries.GetCommentListByEntityIdQuery;

public class ValidatorTests
{
    #region Initialize

    private readonly Validator _validator;

    public ValidatorTests()
    {
        _validator = new Validator();
    }

    #endregion


    #region Type

    [Theory]
    [InlineData(null, null)]
    [InlineData(0, null)]
    [InlineData(null, 0)]
    [InlineData(0, 0)]
    public void RuleForRequest_WhenBothValuesAreIncorrect_ShouldHaveValidationError(int? matchId, int? materialId)
    {
        var model = new Request
        {
            MaterialId = matchId,
            MatchId = materialId
        };
        var result = _validator.TestValidate(model);
        result.ShouldHaveAnyValidationError();
    }

    [Theory]
    [InlineData(null, 1)]
    [InlineData(0, 3)]
    [InlineData(5, 0)]
    [InlineData(6, 0)]
    public void RuleForRequest_WhenOneValueIsCorrect_ShouldNotHaveValidationError(int? matchId, int? materialId)
    {
        var model = new Request
        {
            MaterialId = matchId,
            MatchId = materialId
        };
        var result = _validator.TestValidate(model);
        result.IsValid.Should().BeTrue();
    }
    #endregion
}
