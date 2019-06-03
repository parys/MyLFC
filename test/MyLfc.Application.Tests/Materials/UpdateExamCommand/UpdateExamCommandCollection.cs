//using AutoFixture;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using MyLfc.Application.Tests.Infrastructure;
//using Wentrum.Application.Tests.Infrastructure;
//using Wentrum.Domain.Entities;
//using Wentrum.Shared.Tests.Customizations.Domain;
//using Xunit;

//namespace Wentrum.Application.Tests.Exams.UpdateExamCommand
//{
//    [CollectionDefinition(nameof(UpdateExamCommandCollection))]
//    public class UpdateExamCommandCollection : ICollectionFixture<UpdateExamCommandTestFixture> { }

//    public class UpdateExamCommandTestFixture : BaseTestFixture
//    {
//        public static Guid ExamId => Exams[0].ExamId;

//        public static Guid DeletedExamId => DeletedExams[0].ExamId;

//        public static List<Exam> DeletedExams { get; private set; }

//        public static List<Exam> Exams { get; private set; }
//        public UpdateExamCommandTestFixture() : base()
//        {
//            SeedPatients();
//            SeedVisits();
//            SeedDeletedExams();
//            SeedNotDeletedExams();
//        }
//        private void SeedPatients()
//        {
//            var patients = new Fixture()
//                .Customize(new PatientCustomization(false))
//                .CreateMany<Patient>(3);

//            Context.Patients.AddRange(patients);
//            Context.SaveChanges();
//        }

//        private void SeedVisits()
//        {
//            var patientId = Context.Patients.First().PatientId;
//            var visits = new Fixture()
//                .Customize(new VisitCustomization())
//                .CreateMany<Visit>(3).ToList();

//            visits.ForEach(x => x.PatientId = patientId);

//            Context.Visits.AddRange(visits);
//            Context.SaveChanges();
//        }

//        private void SeedDeletedExams()
//        {
//            var visitId = Context.Visits.First().VisitId;
//            var deletedExams = new Fixture()
//                .Customize(new ExamCustomization(true))
//                .CreateMany<Exam>(5).ToList();

//            deletedExams.ForEach(x => x.VisitId = visitId);

//            Context.Exams.AddRange(deletedExams);
//            Context.SaveChanges();

//            DeletedExams = deletedExams;
//        }

//        private void SeedNotDeletedExams()
//        {
//            var visitId = Context.Visits.First().VisitId;
//            var exams = new Fixture()
//                .Customize(new ExamCustomization(false))
//                .CreateMany<Exam>(50).ToList();

//            exams.ForEach(x => x.VisitId = visitId);

//            Context.Exams.AddRange(exams);
//            Context.SaveChanges();

//            Exams = exams;
//        }
//    }
//}
