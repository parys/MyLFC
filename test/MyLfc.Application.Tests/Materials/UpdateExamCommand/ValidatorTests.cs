//using System;
//using FluentValidation.TestHelper;
//using Xunit;
//using Validator = Wentrum.Application.Exams.UpdateExamCommand.Validator;
//using Request = Wentrum.Application.Exams.UpdateExamCommand.Request;


//namespace Wentrum.Application.Tests.Exams.UpdateExamCommand
//{
//    [Collection(nameof(UpdateExamCommandCollection))]
//    public class ValidatorTests : UpsertExamCommandValidatorTests<Validator, Request>
//    {
//        #region Initialize

//        public ValidatorTests(UpdateExamCommandTestFixture fixture)
//        {
//            Validator = new Validator(fixture.Context);
//        }

//        #endregion

//        #region Exam Id Rules 

//        [Fact]
//        public void RuleForExamId_WhenNoIdIsSupplied_ShouldHaveValidationError()
//        {
//            Validator.ShouldHaveValidationErrorFor(x => x.ExamId, Guid.Empty);
//        }

//        [Fact]
//        public void RuleForExamId_WhenIdIsSupplied_ShouldNotHaveValidationError()
//        {
//            Validator.ShouldNotHaveValidationErrorFor(x => x.ExamId, Guid.NewGuid());
//        }

//        #endregion
//    }
//}
