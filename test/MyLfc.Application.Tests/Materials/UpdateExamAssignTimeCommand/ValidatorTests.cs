//using System;
//using FluentValidation.TestHelper;

//using Xunit;
//using Validator = Wentrum.Application.Exams.UpdateExamAssignTimeCommand.Validator;


//namespace Wentrum.Application.Tests.Exams.UpdateExamAssignTimeCommand
//{
//    [Collection(nameof(UpdateExamAssignTimeCommandCollection))]
//    public class ValidatorTests
//    {
//        #region Initialize

//        private readonly Validator _validator;

//        public ValidatorTests(UpdateExamAssignTimeCommandTestFixture fixture)
//        {
//            _validator = new Validator(fixture.Context);
//        }

//        #endregion

//        #region Exam Space Id Rules 

//        [Fact]
//        public void UpdateExamAssignTime_RuleForExamId_WhenExamIdIsEmpty_ShouldHaveValidationError()
//        {
//            _validator.ShouldHaveValidationErrorFor(x => x.ExamId, Guid.Empty);
//        }
        
//        #endregion

//        #region Exam Space Id Rules 

//        [Fact]
//        public void UpdateExamAssignTime_RuleForExamSpaceId_WhenExamSpaceIdIsEmpty_ShouldHaveValidationError()
//        {
//            _validator.ShouldHaveValidationErrorFor(x => x.ExamSpaceId, Guid.Empty);
//        }

//        [Fact]
//        public void UpdateExamAssignTime_RuleForExamSpaceId_WhenExamSpaceNotExist_ShouldHaveValidationError()
//        {
//            _validator.ShouldHaveValidationErrorFor(x => x.ExamSpaceId, Guid.NewGuid());
//        }

//        [Fact]
//        public void UpdateExamAssignTime_RuleForExamSpaceId_WhenExamSpaceDeleted_ShouldHaveValidationError()
//        {
//            _validator.ShouldHaveValidationErrorFor(x => x.ExamSpaceId, UpdateExamAssignTimeCommandTestFixture.DeletedExamSpaceId);
//        }

//        [Fact]
//        public void UpdateExamAssignTime_RuleForExamSpaceId_WhenExamSpaceExist_ShouldNotHaveValidationError()
//        {
//            _validator.ShouldNotHaveValidationErrorFor(x => x.ExamSpaceId, UpdateExamAssignTimeCommandTestFixture.ExamSpaceId);
//        }

//        #endregion
//    }
//}
