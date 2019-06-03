//using System.Linq;
//using AutoFixture;
//using MyLfc.Application.Tests.Infrastructure;
//using Wentrum.Application.Tests.Infrastructure;
//using Wentrum.Domain.Entities;
//using Wentrum.Shared.Tests.Customizations.Domain;
//using Xunit;

//namespace Wentrum.Application.Tests.Exams.CreateExamCommand
//{
//    [CollectionDefinition(nameof(CreateExamCommandCollection))]
//    public class CreateExamCommandCollection : ICollectionFixture<CreateExamCommandTestFixture> { }

//    public class CreateExamCommandTestFixture : BaseTestFixture
//    {
//        public CreateExamCommandTestFixture() : base()
//        {
//            SeedPatients();
//            SeedVisits();
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

//            visits.Last().Archived = true;
//            visits.Last().PatientId = Context.Patients.Last().PatientId;

//            Context.Visits.AddRange(visits);
//            Context.SaveChanges();
//        }

//    }
//}
