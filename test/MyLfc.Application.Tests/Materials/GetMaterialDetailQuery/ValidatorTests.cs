//using FluentValidation.TestHelper;
//using System;
//using Xunit;
//using Validator = MyLfc.Application.Exams.GetExamDetailQuery.Validator;

//namespace MyLfc.Application.Tests.Exams.GetExamDetailQuery
//{
//    [Collection(nameof(MaterialQueryCollection))]
//    public class ValidatorTests
//    {
//        #region Initialize

//        private readonly Validator _validator;

//        public ValidatorTests()
//        {
//            _validator = new Validator();
//        }

//        #endregion

//        #region Exam Id Rules 

//        [Fact]
//        public void GetExamDetail_RuleForExamId_WhenNoIdIsSupplied_ShouldHaveValidationError()
//        {
//            _validator.ShouldHaveValidationErrorFor(x => x.ExamId, Guid.Empty);
//        }

//        [Fact]
//        public void GetExamDetail_RuleForExamId_WhenIdIsSupplied_ShouldNotHaveValidationError()
//        {
//            _validator.ShouldNotHaveValidationErrorFor(x => x.ExamId, Guid.NewGuid());
//        }

//        #endregion
//    }
//}
