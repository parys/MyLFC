//using FluentValidation.TestHelper;
//using Wentrum.Application.Exams;
//using Xunit;

//namespace Wentrum.Application.Tests.Exams
//{
//    public abstract class UpsertExamCommandValidatorTests<TValidator, TCommand>
//        where TValidator : UpsertExamCommand.Validator<TCommand>
//        where TCommand : UpsertExamCommand.Request, new()
//    {
//        #region Properties

//        protected TValidator Validator { get; set; }

//        #endregion

//        #region Exam Id Rules 

//        [Theory]
//        [InlineData((string)null)]
//        [InlineData("")]
//        public void UpsertExam_RuleForId_WhenNoIdIsSupplied_ShouldHaveValidationError(string id)
//        {
//            Validator.ShouldHaveValidationErrorFor(x => x.Id, id);
//        }

//        [Theory]
//        [InlineData(@"By in no ecstatic wondered disposal my speaking.
//                    Direct wholly valley or uneasy it at really.
//                    Sir wish like said dull and need make.
//                    Sportsman one bed departure rapturous situation disposing his. Off say yet ample ten ought hence.
//                    Depending in newspaper an september do existence strangers. Total great saw water had mirth happy new.
//                    Projecting pianoforte no of partiality is on. Nay besides joy society him totally six.
//                    Projecting pianoforte no of partiality is on. Nay besides joy  him totally six. ")]
//        public void UpsertExam_RuleForId_WhenIdIsLongerThan500Symbols_ShouldHaveValidationError(string id)
//        {
//            Validator.ShouldHaveValidationErrorFor(x => x.Id, id);
//        }

//        #endregion

//        #region Anesthesiologist Rules 

//        [Theory]
//        [InlineData((string)null)]
//        [InlineData("")]
//        public void UpsertExam_RuleForAnesthesiologist_WhenNoValueIsSupplied_ShouldNotHaveValidationError(string id)
//        {
//            Validator.ShouldNotHaveValidationErrorFor(x => x.Anesthesiologist, id);
//        }

//        [Theory]
//        [InlineData("By in no ecstatic wondered disposal my speaking. Direct wholly64")]
//        public void UpsertExam_RuleForAnesthesiologist_WhenValueLengthIs64_ShouldNotHaveValidationError(string id)
//        {
//            Validator.ShouldNotHaveValidationErrorFor(x => x.Anesthesiologist, id);
//        }

//        [Theory]
//        [InlineData("By in no ecstatic wondered disposal my speaking. Direct wholly 65")]
//        public void UpsertExam_RuleForAnesthesiologist_WhenValueIsLongerThan64Symbols_ShouldHaveValidationError(string id)
//        {
//            Validator.ShouldHaveValidationErrorFor(x => x.Anesthesiologist, id);
//        }

//        #endregion

//        #region ArchiveName Rules 

//        [Theory]
//        [InlineData((string)null)]
//        [InlineData("")]
//        public void UpsertExam_RuleForArchiveName_WhenNoIdIsSupplied_ShouldNotHaveValidationError(string id)
//        {
//            Validator.ShouldNotHaveValidationErrorFor(x => x.ArchiveName, id);
//        }

//        [Theory]
//        [InlineData(@"By in no ecstatic wondered disposal my speaking. Direct wholly v.By in no ecstatic wondered disposal my speaking. Direct wholly v.By in no ecstatic wondered disposal my speaking. Direct wholly v.By in no ecstatic wondered disposal my speaking. Direct wh256")]
//        public void UpsertExam_RuleForArchiveName_WhenValueLengthIs256_ShouldNotHaveValidationError(string id)
//        {
//            Validator.ShouldNotHaveValidationErrorFor(x => x.ArchiveName, id);
//        }

//        [Theory]
//        [InlineData(@"By in no ecstatic wondered disposal my speaking. Direct wholly v.By in no ecstatic wondered disposal my speaking. Direct wholly v.By in no ecstatic wondered disposal my speaking. Direct wholly v.By in no ecstatic wondered disposal my speaking. Direct whO257")]
//        public void UpsertExam_RuleForArchiveName_WhenIdIsLongerThan256Symbols_ShouldHaveValidationError(string id)
//        {
//            Validator.ShouldHaveValidationErrorFor(x => x.ArchiveName, id);
//        }

//        #endregion

//        #region ClinicalReason Rules 

//        [Theory]
//        [InlineData((string)null)]
//        [InlineData("")]
//        public void UpsertExam_RuleForClinicalReason_WhenNoIdIsSupplied_ShouldNotHaveValidationError(string id)
//        {
//            Validator.ShouldNotHaveValidationErrorFor(x => x.ClinicalReason, id);
//        }

//        [Theory]
//        [InlineData(@"v.By in no ecstatic wondered disposal my speaking. Direct wholly v.By in no ecstatic wondered disposal my speaking. Direct wh128")]
//        public void UpsertExam_RuleForClinicalReason_WhenValueLengthIs128_ShouldNotHaveValidationError(string id)
//        {
//            Validator.ShouldNotHaveValidationErrorFor(x => x.ClinicalReason, id);
//        }

//        [Theory]
//        [InlineData(@"v.By in no ecstatic wondered disposal my speaking. Direct wholly v.By in no ecstatic wondered disposal my speaking. Direct wha129")]
//        public void UpsertExam_RuleForClinicalReason_WhenIdIsLongerThan128Symbols_ShouldHaveValidationError(string id)
//        {
//            Validator.ShouldHaveValidationErrorFor(x => x.ClinicalReason, id);
//        }
//        #endregion 

//        #region DataSource Rules 

//        [Theory]
//        [InlineData((string)null)]
//        [InlineData("")]
//        public void UpsertExam_RuleForDataSource_WhenNoIdIsSupplied_ShouldNotHaveValidationError(string id)
//        {
//            Validator.ShouldNotHaveValidationErrorFor(x => x.DataSource, id);
//        }

//        [Theory]
//        [InlineData(@"By in no ecstatic wondered disposal my speaking. Direct wholly v.By in no ecstatic wondered disposal my speaking. Direct wholly v.By in no ecstatic wondered disposal my speaking. Direct wholly v.By in no ecstatic wondered disposal my speaking. Direct wh256")]
//        public void UpsertExam_RuleForDataSource_WhenValueLengthIs256_ShouldNotHaveValidationError(string id)
//        {
//            Validator.ShouldNotHaveValidationErrorFor(x => x.DataSource, id);
//        }

//        [Theory]
//        [InlineData(@"By in no ecstatic wondered disposal my speaking. Direct wholly v.By in no ecstatic wondered disposal my speaking. Direct wholly v.By in no ecstatic wondered disposal my speaking. Direct wholly v.By in no ecstatic wondered disposal my speaking. Direct whO257")]
//        public void UpsertExam_RuleForDataSource_WhenIdIsLongerThan256Symbols_ShouldHaveValidationError(string id)
//        {
//            Validator.ShouldHaveValidationErrorFor(x => x.DataSource, id);
//        }

//        #endregion

//        #region HoursSinceLastMeal Rules 

//        [Theory]
//        [InlineData((string)null)]
//        [InlineData("")]
//        public void UpsertExam_RuleForHoursSinceLastMeal_WhenNoIdIsSupplied_ShouldNotHaveValidationError(string value)
//        {
//            Validator.ShouldNotHaveValidationErrorFor(x => x.HoursSinceLastMeal, value);
//        }

//        [Theory]
//        [InlineData(@"v.By in no ecstatic wondered disposal my speakin50")]
//        public void UpsertExam_RuleForHoursSinceLastMeal_WhenValueLengthIs50_ShouldNotHaveValidationError(string id)
//        {
//            Validator.ShouldNotHaveValidationErrorFor(x => x.HoursSinceLastMeal, id);
//        }

//        [Theory]
//        [InlineData(@"v.By in no ecstatic wondered disposal my speaking51")]
//        public void UpsertExam_RuleForHoursSinceLastMeal_WhenIdIsLongerThan256Symbols_ShouldHaveValidationError(string id)
//        {
//            Validator.ShouldHaveValidationErrorFor(x => x.HoursSinceLastMeal, id);
//        }

//        #endregion

//        #region Neurophysiologist Rules 

//        [Theory]
//        [InlineData((string)null)]
//        [InlineData("")]
//        public void UpsertExam_RuleForNeurophysiologist_WhenNoValueIsSupplied_ShouldNotHaveValidationError(string value)
//        {
//            Validator.ShouldNotHaveValidationErrorFor(x => x.Neurophysiologist, value);
//        }

//        [Theory]
//        [InlineData("By in no ecstatic wondered disposal my speaking. Direct wholly64")]
//        public void UpsertExam_RuleForNeurophysiologist_WhenValueLengthIs64_ShouldNotHaveValidationError(string value)
//        {
//            Validator.ShouldNotHaveValidationErrorFor(x => x.Neurophysiologist, value);
//        }

//        [Theory]
//        [InlineData("By in no ecstatic wondered disposal my speaking. Direct wholly 65")]
//        public void UpsertExam_RuleForNeurophysiologist_WhenValueIsLongerThan64Symbols_ShouldHaveValidationError(string value)
//        {
//            Validator.ShouldHaveValidationErrorFor(x => x.Neurophysiologist, value);
//        }

//        #endregion

//        #region RequestedBy Rules 

//        [Theory]
//        [InlineData((string)null)]
//        [InlineData("")]
//        public void UpsertExam_RuleForRequestedBy_WhenNoValueIsSupplied_ShouldNotHaveValidationError(string value)
//        {
//            Validator.ShouldNotHaveValidationErrorFor(x => x.RequestedBy, value);
//        }

//        [Theory]
//        [InlineData("By in no ecstatic wondered disposal my speaking. Direct wholly64")]
//        public void UpsertExam_RuleForRequestedBy_WhenValueLengthIs64_ShouldNotHaveValidationError(string value)
//        {
//            Validator.ShouldNotHaveValidationErrorFor(x => x.RequestedBy, value);
//        }

//        [Theory]
//        [InlineData("By in no ecstatic wondered disposal my speaking. Direct wholly 65")]
//        public void UpsertExam_RuleForRequestedBy_WhenValueIsLongerThan64Symbols_ShouldHaveValidationError(string value)
//        {
//            Validator.ShouldHaveValidationErrorFor(x => x.RequestedBy, value);
//        }

//        #endregion

//        #region Surgeon Rules 

//        [Theory]
//        [InlineData((string)null)]
//        [InlineData("")]
//        public void UpsertExam_RuleForSurgeon_WhenNoValueIsSupplied_ShouldNotHaveValidationError(string value)
//        {
//            Validator.ShouldNotHaveValidationErrorFor(x => x.Surgeon, value);
//        }

//        [Theory]
//        [InlineData("By in no ecstatic wondered disposal my speaking. Direct wholly64")]
//        public void UpsertExam_RuleForSurgeon_WhenValueLengthIs64_ShouldNotHaveValidationError(string value)
//        {
//            Validator.ShouldNotHaveValidationErrorFor(x => x.Surgeon, value);
//        }

//        [Theory]
//        [InlineData("By in no ecstatic wondered disposal my speaking. Direct wholly 65")]
//        public void UpsertExam_RuleForSurgeon_WhenValueIsLongerThan64Symbols_ShouldHaveValidationError(string value)
//        {
//            Validator.ShouldHaveValidationErrorFor(x => x.Surgeon, value);
//        }

//        #endregion

//        #region LocalPath Rules 

//        [Theory]
//        [InlineData((string)null)]
//        [InlineData("")]
//        public void UpsertExam_RuleForLocalPath_WhenNoValueIsSupplied_ShouldNotHaveValidationError(string value)
//        {
//            Validator.ShouldNotHaveValidationErrorFor(x => x.LocalPath, value);
//        }

//        [Theory]
//        [InlineData("v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.aaaaaaaaa512")]
//        public void UpsertExam_RuleForLocalPath_WhenValueLengthIs512_ShouldNotHaveValidationError(string value)
//        {
//            Validator.ShouldNotHaveValidationErrorFor(x => x.LocalPath, value);
//        }

//        [Theory]
//        [InlineData("v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.aaaaaaaaaa513")]
//        public void UpsertExam_RuleForLocalPath_WhenValueIsLongerThan512Symbols_ShouldHaveValidationError(string value)
//        {
//            Validator.ShouldHaveValidationErrorFor(x => x.LocalPath, value);
//        }

//        #endregion

//        #region Path Rules 

//        [Theory]
//        [InlineData((string)null)]
//        [InlineData("")]
//        public void UpsertExam_RuleForPath_WhenNoValueIsSupplied_ShouldNotHaveValidationError(string value)
//        {
//            Validator.ShouldNotHaveValidationErrorFor(x => x.Path, value);
//        }

//        [Theory]
//        [InlineData("v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.aaaaaaaaa512")]
//        public void UpsertExam_RuleForPath_WhenValueLengthIs512_ShouldNotHaveValidationError(string value)
//        {
//            Validator.ShouldNotHaveValidationErrorFor(x => x.Path, value);
//        }

//        [Theory]
//        [InlineData("v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.aaaaaaaaaa513")]
//        public void UpsertExam_RuleForPath_WhenValueIsLongerThan512Symbols_ShouldHaveValidationError(string value)
//        {
//            Validator.ShouldHaveValidationErrorFor(x => x.Path, value);
//        }

//        #endregion

//        #region RecordedPath Rules 

//        [Theory]
//        [InlineData((string)null)]
//        [InlineData("")]
//        public void UpsertExam_RuleFoRecordedPath_WhenNoValueIsSupplied_ShouldNotHaveValidationError(string value)
//        {
//            Validator.ShouldNotHaveValidationErrorFor(x => x.RecordedPath, value);
//        }

//        [Theory]
//        [InlineData("v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.aaaaaaaaa512")]
//        public void UpsertExam_RuleForRecordedPath_WhenValueLengthIs512_ShouldNotHaveValidationError(string value)
//        {
//            Validator.ShouldNotHaveValidationErrorFor(x => x.RecordedPath, value);
//        }

//        [Theory]
//        [InlineData("v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaking.aaaaaaaaaa513")]
//        public void UpsertExam_RuleForRecordedPath_WhenValueIsLongerThan512Symbols_ShouldHaveValidationError(string value)
//        {
//            Validator.ShouldHaveValidationErrorFor(x => x.RecordedPath, value);
//        }

//        #endregion

//        #region RecordedPath Rules 

//        [Theory]
//        [InlineData((string)null)]
//        [InlineData("")]
//        public void UpsertExam_RuleFoThumbprintWhenNoValueIsSupplied_ShouldNotHaveValidationError(string value)
//        {
//            Validator.ShouldNotHaveValidationErrorFor(x => x.Thumbprint, value);
//        }

//        [Theory]
//        [InlineData("v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaki100")]
//        public void UpsertExam_RuleForThumbprint_WhenValueLengthIs100_ShouldNotHaveValidationError(string value)
//        {
//            Validator.ShouldNotHaveValidationErrorFor(x => x.Thumbprint, value);
//        }

//        [Theory]
//        [InlineData("v.By in no ecstatic wondered disposal my speaking.v.By in no ecstatic wondered disposal my speaaki101")]
//        public void UpsertExam_RuleForThumbprint_WhenValueIsLongerThan100Symbols_ShouldHaveValidationError(string value)
//        {
//            Validator.ShouldHaveValidationErrorFor(x => x.Thumbprint, value);
//        }

//        #endregion

//    }
//}
