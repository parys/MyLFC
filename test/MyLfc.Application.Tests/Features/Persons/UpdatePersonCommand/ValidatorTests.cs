using FluentValidation.TestHelper;
using MyLfc.Domain;
using MyLfc.Data.Common;
using Xunit;
using Validator = MyLfc.Application.Features.Persons.Commands.UpdatePersonCommand.Validator;
using Request = MyLfc.Application.Features.Persons.Commands.UpdatePersonCommand.Request;

namespace MyLfc.Application.Tests.Features.Persons.UpdatePersonCommand;

[Collection(nameof(UpdatePersonCommandCollection))]
public class ValidatorTests
{
    #region Initialize

    private readonly Validator _validator;

    public ValidatorTests()
    {
        _validator = new Validator();
    }

    #endregion

    #region FirstRussianName

    [Theory]
    [InlineData((string)null)]
    [InlineData("")]
    public void RuleForFirstRussianName_WhenIsNullOrEmpty_ShouldHaveValidationError(string value)
    {
        var model = new Request
        {
            FirstRussianName = value
        };
        var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.FirstRussianName));
        result.ShouldHaveValidationErrorFor(x => x.FirstRussianName);
    }

    [Fact]
    public void RuleForFirstRussianName_WhenValueLengthIsCorrect_ShouldNotHaveValidationError()
    {
        var value = new string('1', Person.FirstRussianNameLength);
        var model = new Request
        {
            FirstRussianName = value
        };
        var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.FirstRussianName));
        result.ShouldNotHaveValidationErrorFor(x => x.FirstRussianName);
    }

    [Fact]
    public void RuleForFirstRussianName_WhenValueLengthIsOver_ShouldHaveValidationError()
    {
        var value = new string('1', Person.FirstRussianNameLength + 1);
        var model = new Request
        {
            FirstRussianName = value
        };
        var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.FirstRussianName));
        result.ShouldHaveValidationErrorFor(x => x.FirstRussianName);
    }
    #endregion


    #region LastRussianName

    [Theory]
    [InlineData((string)null)]
    [InlineData("")]
    public void RuleForLastRussianName_WhenIsNullOrEmpty_ShouldHaveValidationError(string value)
    {
        var model = new Request
        {
            LastRussianName = value
        };
        var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.LastRussianName));
        result.ShouldHaveValidationErrorFor(x => x.LastRussianName);
    }

    [Fact]
    public void RuleForLastRussianName_WhenValueLengthIsCorrect_ShouldNotHaveValidationError()
    {
        var value = new string('1', Person.LastRussianNameLength);
        var model = new Request
        {
            LastRussianName = value
        };
        var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.LastRussianName));
        result.ShouldNotHaveValidationErrorFor(x => x.LastRussianName);
    }

    [Fact]
    public void RuleForLastRussianName_WhenValueLengthIsOver_ShouldHaveValidationError()
    {
        var value = new string('1', Person.LastRussianNameLength + 1);
        var model = new Request
        {
            LastRussianName = value
        };
        var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.LastRussianName));
        result.ShouldHaveValidationErrorFor(x => x.LastRussianName);
    }
    #endregion

    #region Country

    [Theory]
    [InlineData((string)null)]
    [InlineData("")]
    public void RuleForCountry_WhenIsNullOrEmpty_ShouldNotHaveValidationError(string value)
    {
        var model = new Request
        {
            Country = value
        };
        var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.Country));
        result.ShouldNotHaveValidationErrorFor(x => x.Country);
    }

    [Fact]
    public void RuleForCountry_WhenValueLengthIsCorrect_ShouldNotHaveValidationError()
    {
        var value = new string('1', Person.CountryLength);
        var model = new Request
        {
            Country = value
        };
        var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.Country));
        result.ShouldNotHaveValidationErrorFor(x => x.Country);
    }

    [Fact]
    public void RuleForCountry_WhenValueLengthIsOver_ShouldHaveValidationError()
    {
        var value = new string('1', Person.CountryLength + 1);
        var model = new Request
        {
            Country = value
        };
        var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.Country));
        result.ShouldHaveValidationErrorFor(x => x.Country);
    }
    #endregion

    #region FirstName

    [Theory]
    [InlineData((string)null)]
    [InlineData("")]
    public void RuleForFirstName_WhenIsNullOrEmpty_ShouldNotHaveValidationError(string value)
    {
        var model = new Request
        {
            FirstName = value
        };
        var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.FirstName));
        result.ShouldNotHaveValidationErrorFor(x => x.FirstName);
    }

    [Fact]
    public void RuleForFirstName_WhenValueLengthIsCorrect_ShouldNotHaveValidationError()
    {
        var value = new string('1', Person.FirstNameLength);
        var model = new Request
        {
            FirstName = value
        };
        var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.FirstName));
        result.ShouldNotHaveValidationErrorFor(x => x.FirstName);
    }

    [Fact]
    public void RuleForFirstName_WhenValueLengthIsOver_ShouldHaveValidationError()
    {
        var value = new string('1', Person.FirstNameLength + 1);
        var model = new Request
        {
            FirstName = value
        };
        var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.FirstName));
        result.ShouldHaveValidationErrorFor(x => x.FirstName);
    }
    #endregion

    #region LastName

    [Theory]
    [InlineData((string)null)]
    [InlineData("")]
    public void RuleForLastName_WhenIsNullOrEmpty_ShouldNotHaveValidationError(string value)
    {
        var model = new Request
        {
            LastName = value
        };
        var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.LastName));
        result.ShouldNotHaveValidationErrorFor(x => x.LastName);
    }

    [Fact]
    public void RuleForLastName_WhenValueLengthIsCorrect_ShouldNotHaveValidationError()
    {
        var value = new string('1', Person.LastNameLength);
        var model = new Request
        {
            LastName = value
        };
        var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.LastName));
        result.ShouldNotHaveValidationErrorFor(x => x.LastName);
    }

    [Fact]
    public void RuleForLastName_WhenValueLengthIsOver_ShouldHaveValidationError()
    {
        var value = new string('1', Person.LastNameLength + 1);
        var model = new Request
        {
            LastName = value
        };
        var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.LastName));
        result.ShouldHaveValidationErrorFor(x => x.LastName);
    }
    #endregion

    #region Nickname

    [Theory]
    [InlineData((string)null)]
    [InlineData("")]
    public void RuleForNickname_WhenIsNullOrEmpty_ShouldNotHaveValidationError(string value)
    {
        var model = new Request
        {
            Nickname = value
        };
        var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.Nickname));
        result.ShouldNotHaveValidationErrorFor(x => x.Nickname);
    }

    [Fact]
    public void RuleForNickname_WhenValueLengthIsCorrect_ShouldNotHaveValidationError()
    {
        var value = new string('1', Person.NicknameLength);
        var model = new Request
        {
            Nickname = value
        };
        var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.Nickname));
        result.ShouldNotHaveValidationErrorFor(x => x.Nickname);
    }

    [Fact]
    public void RuleForNickname_WhenValueLengthIsOver_ShouldHaveValidationError()
    {
        var value = new string('1', Person.NicknameLength + 1);
        var model = new Request
        {
            Nickname = value
        };
        var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.Nickname));
        result.ShouldHaveValidationErrorFor(x => x.Nickname);
    }
    #endregion

    #region Position

    [Theory]
    [InlineData((string)null)]
    [InlineData("")]
    public void RuleForPosition_WhenIsNullOrEmpty_ShouldNotHaveValidationError(string value)
    {
        var model = new Request
        {
            Position = value
        };
        var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.Position));
        result.ShouldNotHaveValidationErrorFor(x => x.Position);
    }

    [Fact]
    public void RuleForPosition_WhenValueLengthIsCorrect_ShouldNotHaveValidationError()
    {
        var value = new string('1', Person.PositionLength);
        var model = new Request
        {
            Position = value
        };
        var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.Position));
        result.ShouldNotHaveValidationErrorFor(x => x.Position);
    }

    [Fact]
    public void RuleForPosition_WhenValueLengthIsOver_ShouldHaveValidationError()
    {
        var value = new string('1', Person.PositionLength + 1);
        var model = new Request
        {
            Position = value
        };
        var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.Position));
        result.ShouldHaveValidationErrorFor(x => x.Position);
    }
    #endregion

    #region Number

    [Theory]
    [InlineData(null)]
    public void RuleForNumber_WhenIsNullOrEmpty_ShouldNotHaveValidationError(byte? value)
    {
        var model = new Request
        {
            Number = value
        };
        var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.Number));
        result.ShouldNotHaveValidationErrorFor(x => x.Number);
    }

    [Fact]
    public void RuleForNumber_WhenValueLengthIsCorrect_ShouldNotHaveValidationError()
    {
        var value = new string('1', Person.PositionLength);
        var model = new Request
        {
            Number = 1
        };
        var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.Number));
        result.ShouldNotHaveValidationErrorFor(x => x.Number);
    }

    [Theory]
    [InlineData((byte)0)]
    [InlineData((byte)100)]
    public void RuleForNumber_WhenValueLengthIsOverOrUnderLimit_ShouldHaveValidationError(byte value)
    {
        var model = new Request
        {
            Number = value
        };
        var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.Number));
        result.ShouldHaveValidationErrorFor(x => x.Number);
    }
    #endregion

    #region Type
    
    [Fact]
    public void RuleForType_WhenValueIsCorrect_ShouldNotHaveValidationError()
    {
        var model = new Request
        {
            Type = PersonType.Academy
        };
        var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.Type));
        result.ShouldNotHaveValidationErrorFor(x => x.Type);
    }

    [Fact]
    public void RuleForType_WhenValueInNotInEnum_ShouldHaveValidationError()
    {
        var model = new Request
        {
            Type = (PersonType)100
        };
        var result = _validator.TestValidate(model, opt => opt.IncludeProperties(x => x.Type));
        result.ShouldHaveValidationErrorFor(x => x.Type);
    }
    #endregion
}