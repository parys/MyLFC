//using System;
//using System.Collections.Generic;
//using System.Linq;
//using AutoFixture;
//using MyLfc.Application.Tests.Infrastructure;
//using Wentrum.Application.Tests.Infrastructure;
//using Wentrum.Domain.Entities;
//using Wentrum.Shared.Tests.Customizations.Domain;
//using Xunit;

//namespace Wentrum.Application.Tests.Exams.DeleteExamCommand
//{
//    [CollectionDefinition(nameof(DeleteExamCommandCollection))]
//    public class DeleteExamCommandCollection : ICollectionFixture<DeleteExamCommandTestFixture> { }

//    public class DeleteExamCommandTestFixture : BaseTestFixture
//    {
//        public static Guid ExamId => Exams[0].ExamId;

//        public static Guid ExamIdOfExamWithVisitThatContainsOnlyOneExam { get; private set; }
//        public static Guid ExamIdOfExamWithVisitThatContainsMoreThanOneExam { get; private set; }

//        public static Guid DeletedExamId => DeletedExams[0].ExamId;

//        public static List<Exam> DeletedExams { get; private set; }

//        public static List<Exam> Exams { get; private set; }
//        public static List<Visit> Visits { get; private set; }

//        public DeleteExamCommandTestFixture() : base()
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
//            Visits = new Fixture()
//                .Customize(new VisitCustomization())
//                .CreateMany<Visit>(3).ToList();

//            Visits.ForEach(x => x.PatientId = patientId);

//            Context.Visits.AddRange(Visits);
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
//            var exams = new Fixture()
//                .Customize(new ExamCustomization(false))
//                .CreateMany<Exam>(50).ToList();

//            exams.ForEach(x => x.VisitId = Visits[0].VisitId);

//            //visit with only one exam
//            exams[40].VisitId = Visits[1].VisitId;
//            ExamIdOfExamWithVisitThatContainsOnlyOneExam = exams[40].ExamId;

//            exams[41].VisitId = Visits[2].VisitId;
//            exams[42].VisitId = Visits[2].VisitId;
//            ExamIdOfExamWithVisitThatContainsMoreThanOneExam = exams[41].ExamId;

//            Context.Exams.AddRange(exams);
//            Context.SaveChanges();

//            Exams = exams;
//        }

//    }
//}
