//using System;
//using System.Linq;
//using System.Threading;
//using System.Threading.Tasks;
//using FluentAssertions;
//using MediatR;
//using Microsoft.EntityFrameworkCore;
//using Wentrum.Persistence;
//using Xunit;
//using Handler = Wentrum.Application.Exams.CreateExamCommand.Handler;
//using Request = Wentrum.Application.Exams.CreateExamCommand.Request;
//using Response = Wentrum.Application.Exams.CreateExamCommand.Response;

//namespace Wentrum.Application.Tests.Exams.CreateExamCommand
//{
//    [Collection(nameof(CreateExamCommandCollection))]
//    public class HandlerTests
//    {
//        private readonly WentrumDbContext _context;
//        private readonly IRequestHandler<Request, Response> _handler;

//        public HandlerTests(CreateExamCommandTestFixture fixture)
//        {
//            _handler = new Handler(fixture.Context, fixture.Mapper);
//            _context = fixture.Context;
//        }

//        [Fact]
//        public async Task WhenExamCommandIsValid_ReturnsGuidOfNewExam()
//        {
//            var examCommand = new Request();

//            var result = await _handler.Handle(examCommand, CancellationToken.None);

//            result.Should().NotBeNull();
//            result.ExamId.Should().NotBeEmpty();

//            var createdEntity = await _context.Exams.FirstOrDefaultAsync(x => x.ExamId == result.ExamId);

//            createdEntity.Should().NotBeNull();
//            createdEntity.ExamId.Should().Be(result.ExamId);
//            createdEntity.Anesthesiologist.Should().Be(examCommand.Anesthesiologist);
//            createdEntity.ArchiveName.Should().Be(examCommand.ArchiveName);
//            createdEntity.Diagnosis.Should().Be(examCommand.Diagnosis);
//        }

//        [Fact]
//        public async Task WhenExamCommandIsValidAndVisitNotExists_ReturnsGuidOfNewExamAndCreatesVisit()
//        {
//            var examCommand = new Request();

//            var patientWithoutVisits = await _context.Patients.Where(x => !x.Visits.Any()).Include(x => x.Visits).FirstAsync();
//            patientWithoutVisits.PatientId.Should().NotBeEmpty();
//            patientWithoutVisits.Visits.Count.Should().Be(0);

//            var visitsCountBeforeExamCreation = await _context.Visits.CountAsync();

//            examCommand.PatientId = patientWithoutVisits.PatientId;
            
//            var result = await _handler.Handle(examCommand, CancellationToken.None);

//            result.Should().NotBeNull();
//            result.ExamId.Should().NotBeEmpty();

//            var visitsCountAfterExamCreationCount = await _context.Visits.CountAsync();
//            visitsCountAfterExamCreationCount.Should().Be(visitsCountBeforeExamCreation + 1);

//            var patientWithVisit = await _context.Patients.Include(p => p.Visits)
//                .FirstAsync(x => x.PatientId == patientWithoutVisits.PatientId);

//            patientWithVisit.Visits.Count.Should().Be(1);
//        }

//        [Fact]
//        public async Task WhenExamCommandIsValidAndVisitNotArchived_ReturnsGuidOfNewExamAndNotCreateVisit()
//        {
//            var examCommand = new Request();

//            var patientWithoutVisits = await _context.Patients.Where(x => x.Visits.Any(v => !v.Archived))
//                .Include(x => x.Visits).FirstAsync();
//            patientWithoutVisits.PatientId.Should().NotBeEmpty();
//            patientWithoutVisits.Visits.Count.Should().BeGreaterThan(0);

//            var visitsCountBeforeExamCreation = await _context.Visits.CountAsync();

//            examCommand.PatientId = patientWithoutVisits.PatientId;
            
//            var result = await _handler.Handle(examCommand, CancellationToken.None);

//            result.Should().NotBeNull();
//            result.ExamId.Should().NotBeEmpty();

//            var visitsCountAfterExamCreationCount = await _context.Visits.CountAsync();
//            visitsCountAfterExamCreationCount.Should().Be(visitsCountBeforeExamCreation);

//            var patientWithVisit = await _context.Patients.Include(p => p.Visits)
//                .FirstAsync(x => x.PatientId == patientWithoutVisits.PatientId);

//            patientWithVisit.Visits.Count.Should().Be(patientWithoutVisits.Visits.Count);
//        }

//        [Fact]
//        public async Task WhenExamCommandIsValidAndVisitArchived_ReturnsGuidOfNewExamAndCreateVisit()
//        {
//            var examCommand = new Request();

//            var patientWithArchivedVisits = await _context.Patients.Where(x => x.Visits.Any(v => v.Archived))
//                .Include(x => x.Visits).FirstAsync();
//            patientWithArchivedVisits.PatientId.Should().NotBeEmpty();
//            patientWithArchivedVisits.Visits.Count.Should().Be(1);

//            var visitsCountBeforeExamCreation = await _context.Visits.CountAsync();
//            var patientVisitsCountBeforeExamCreation = patientWithArchivedVisits.Visits.Count;

//            examCommand.PatientId = patientWithArchivedVisits.PatientId;
            
//            var result = await _handler.Handle(examCommand, CancellationToken.None);

//            result.Should().NotBeNull();
//            result.ExamId.Should().NotBeEmpty();

//            var visitsCountAfterExamCreationCount = await _context.Visits.CountAsync();
//            visitsCountAfterExamCreationCount.Should().Be(visitsCountBeforeExamCreation + 1);

//            var patientWithVisit = await _context.Patients.Include(p => p.Visits)
//                .FirstAsync(x => x.PatientId == patientWithArchivedVisits.PatientId);

//            patientWithVisit.Visits.Count.Should().Be(patientVisitsCountBeforeExamCreation + 1);
//        }
//    }
//}
