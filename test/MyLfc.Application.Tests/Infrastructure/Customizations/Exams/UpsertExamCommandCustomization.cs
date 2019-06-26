//using AutoFixture;
//using Wentrum.Application.Exams;
//using Wentrum.Shared.Tests.Extensions;

//namespace Wentrum.Shared.Tests.Customizations.Exams
//{
//    public class UpsertExamCommandCustomization<T> : ICustomization where T : UpsertExamCommand.Request
//    {
//        public virtual void Customize(IFixture fixture)
//        {
//            fixture.Customize<T>(o => o
//                .With(x => x.Id, () => Generator.Generate(nameof(UpsertExamCommand.Request.Id), 500))
//                .With(x => x.Anesthesiologist, () => Generator.Generate(nameof(UpsertExamCommand.Request.Anesthesiologist), 64))
//                .With(x => x.ArchiveName, () => Generator.Generate(nameof(UpsertExamCommand.Request.ArchiveName), 256))
//                .With(x => x.ClinicalReason, () => Generator.Generate(nameof(UpsertExamCommand.Request.ClinicalReason), 128))
//                .With(x => x.DataSource, () => Generator.Generate(nameof(UpsertExamCommand.Request.DataSource), 256))
//                .With(x => x.Diagnosis, () => Generator.Generate(nameof(UpsertExamCommand.Request.Diagnosis), 50))
//                .With(x => x.HoursSinceLastMeal, () => Generator.Generate(nameof(UpsertExamCommand.Request.HoursSinceLastMeal), 50))
//                .With(x => x.LocalPath, () => Generator.Generate(nameof(UpsertExamCommand.Request.LocalPath), 512))
//                .With(x => x.Medication, () => Generator.Generate(nameof(UpsertExamCommand.Request.Medication), 50))
//                .With(x => x.Neurophysiologist, () => Generator.Generate(nameof(UpsertExamCommand.Request.Neurophysiologist), 64))
//                .With(x => x.Path, () => Generator.Generate(nameof(UpsertExamCommand.Request.Path), 512))
//                .With(x => x.Surgeon, () => Generator.Generate(nameof(UpsertExamCommand.Request.PatientState), 64))
//                .With(x => x.Thumbprint, () => Generator.Generate(nameof(UpsertExamCommand.Request.Thumbprint), 100))
//            );
//        }
//    }
//}
