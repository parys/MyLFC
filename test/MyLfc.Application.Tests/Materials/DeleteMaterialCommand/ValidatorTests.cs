//using FluentValidation.TestHelper;
//using System;
//using Xunit;
//using Validator = MyLfc.Application.Exams.DeleteExamCommand.Validator;

//namespace MyLfc.Application.Tests.Exams.DeleteExamCommand
//{
//    [Collection(nameof(DeleteExamCommandCollection))]
//    public class ValidatorTests
//    {
//        #region Initialize

//        private readonly Validator _validator;

//        public ValidatorTests(DeleteExamCommandTestFixture fixture)
//        {
//            _validator = new Validator();
//        }

//        #endregion

//        #region Exam Id Rules 

//        [Fact]
//        public void DeleteExam_RuleForExamId_WhenNoIdIsSupplied_ShouldHaveValidationError()
//        {
//            _validator.ShouldHaveValidationErrorFor(x => x.ExamId, Guid.Empty);
//        }

//        [Fact]
//        public void DeleteExam_RuleForExamId_WhenIdIsSupplied_ShouldNotHaveValidationError()
//        {
//            _validator.ShouldNotHaveValidationErrorFor(x => x.ExamId, Guid.NewGuid());
//        }

//        #endregion
//    }
//}
