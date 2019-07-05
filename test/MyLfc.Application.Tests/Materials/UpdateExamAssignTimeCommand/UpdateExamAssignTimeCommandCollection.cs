//using System;
//using System.Collections.Generic;
//using System.Linq;
//using AutoFixture;
//using MyLfc.Application.Tests.Infrastructure;
//using MyLfc.Application.Tests.Infrastructure;
//using MyLfc.Domain.Entities;
//using MyLfc.Shared.Tests.Customizations.Domain;
//using Xunit;

//namespace MyLfc.Application.Tests.Exams.UpdateExamAssignTimeCommand
//{
//    [CollectionDefinition(nameof(UpdateExamAssignTimeCommandCollection))]
//    public class UpdateExamAssignTimeCommandCollection : ICollectionFixture<UpdateExamAssignTimeCommandTestFixture> { }
    
//    public class UpdateExamAssignTimeCommandTestFixture : BaseTestFixture
//    {
//        public static Guid ExamId => Exams[0].ExamId;

//        public static Guid DeletedExamId => DeletedExams[0].ExamId;

//        public static Guid DeletedExamSpaceId { get; private set; }

//        public static Guid ExamSpaceId { get; private set; }

//        public static List<Exam> DeletedExams { get; private set; }

//        public static List<Exam> Exams { get; private set; }

//        public UpdateExamAssignTimeCommandTestFixture() : base()
//        {
//            SeedPatients();
//            SeedVisits();
//            SeedDeletedExams();
//            SeedNotDeletedExams();
//            SeedExamSpaces();
//            SeedDeletedExamSpaces();
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

//        private void SeedExamSpaces()
//        {
//            var examSpace = new Fixture()
//                .Customize(new ExamSpaceCustomization(false))
//                .Create<ExamSpace>();

//            Context.ExamSpaces.Add(examSpace);
//            Context.SaveChanges();

//            ExamSpaceId = examSpace.ExamSpaceId;
//        }

//        private void SeedDeletedExamSpaces()
//        {
//            var examSpace = new Fixture()
//                .Customize(new ExamSpaceCustomization(true))
//                .Create<ExamSpace>();

//            Context.ExamSpaces.Add(examSpace);
//            Context.SaveChanges();

//            DeletedExamSpaceId = examSpace.ExamSpaceId;
//        }
//    }
//}
