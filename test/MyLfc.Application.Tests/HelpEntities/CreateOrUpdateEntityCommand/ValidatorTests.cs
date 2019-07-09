using System;
using System.Collections.Generic;
using FluentValidation.TestHelper;
using MyLiverpool.Data.Common;
using Xunit;
using Validator = MyLfc.Application.HelpEntities.CreateOrUpdateEntityCommand.Validator;

namespace MyLfc.Application.Tests.HelpEntities.CreateOrUpdateEntityCommand
{
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
        public void RuleForType_WhenTypeIsInEnum_ShouldNotHaveValidationError(HelperEntityType type)
        {
            _validator.ShouldNotHaveValidationErrorFor(x => x.Type, type);
        }

        [Fact]
        public void RuleForType_WhenTypeIsNotInEnum_ShouldHaveValidationError()
        {
            _validator.ShouldHaveValidationErrorFor(x => x.Type, (HelperEntityType) 111);
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
}
