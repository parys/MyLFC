using System;
using System.Collections.Generic;
using FluentValidation.TestHelper;
using MyLfc.Data.Common;
using Xunit;
using Validator = MyLfc.Application.Features.HelpEntities.Commands.CreateOrUpdateEntityCommand.Validator;
using Request = MyLfc.Application.Features.HelpEntities.Commands.CreateOrUpdateEntityCommand.Request;

namespace MyLfc.Application.Tests.HelpEntities.CreateOrUpdateEntityCommand;

[Collection(nameof(CreateOrUpdateEntityCommandCollection))]
public class ValidatorTests
{
    #region Initialize

    private readonly Validator _validator;

    public ValidatorTests()
    {
        _validator = new Validator();
    }

    #endregion

    #region Exam Id Rules 

    [Theory]
    [MemberData(nameof(ValidHelperEntityTypes))]
    public void RuleForType_WhenTypeIsInEnum_ShouldNotHaveValidationError(HelperEntityType value)
    {
        var model = new Request
        {
            Type = value
        };
        var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.Type));
        result.ShouldNotHaveValidationErrorFor(x => x.Type);
    }

    [Fact]
    public void RuleForType_WhenTypeIsNotInEnum_ShouldHaveValidationError()
    {
        var model = new Request
        {
            Type = (HelperEntityType)111
        };
        var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.Type));
        result.ShouldHaveValidationErrorFor(x => x.Type);
    }

    public static IEnumerable<object[]> ValidHelperEntityTypes()
    {
        foreach (var enumValue in Enum.GetValues(typeof(HelperEntityType)))
        {
            yield return new object[] {(HelperEntityType) enumValue};
        }
    }

    #endregion
}
