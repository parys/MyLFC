using System.Threading;
using System.Threading.Tasks;
using AutoFixture;
using FluentAssertions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Persistence;
using MyLiverpool.Data.Common;
using Xunit;
using Handler = MyLfc.Application.Materials.CreateMaterialCommand.Handler;
using Request = MyLfc.Application.Materials.CreateMaterialCommand.Request;
using Response = MyLfc.Application.Materials.CreateMaterialCommand.Response;

namespace MyLfc.Application.Tests.Materials.CreateMaterialCommand
{
    [Collection(nameof(CreateMaterialCommandCollection))]
    public class HandlerTests
    {
        private readonly ILiverpoolContext _context;
        private readonly IRequestHandler<Request, Response> _handler;

        public HandlerTests(CreateMaterialCommandTestFixture fixture)
        {
            _handler = new Handler(fixture.Context, fixture.AdminRequestContext, fixture.Mapper);
            _context = fixture.Context;
        }

        [Fact]
        public async Task WhenExamCommandIsValid_ReturnsGuidOfNewExam()
        {
            var matCommand = new Fixture()
                .Create<Request>();
            matCommand.Type = MaterialType.News;

            var result = await _handler.Handle(matCommand, CancellationToken.None);

            result.Should().NotBeNull();
            result.Id.Should().BeGreaterThan(0);

            var createdEntity = await _context.Materials.FirstOrDefaultAsync(x => x.Id == result.Id);

            //todo add check by props
            createdEntity.Should().NotBeNull();
            createdEntity.Id.Should().Be(result.Id);
            createdEntity.Type.Should().Be(result.Type);
            createdEntity.Type.Should().NotBe(MaterialType.Both);
        }

        //[Fact]
        //public async Task WhenExamCommandIsValidAndVisitNotExists_ReturnsGuidOfNewExamAndCreatesVisit()
        //{
        //    var examCommand = new Request();

        //    var patientWithoutVisits = await _context.Patients.Where(x => !x.Visits.Any()).Include(x => x.Visits).FirstAsync();
        //    patientWithoutVisits.PatientId.Should().NotBeEmpty();
        //    patientWithoutVisits.Visits.Count.Should().Be(0);

        //    var visitsCountBeforeExamCreation = await _context.Visits.CountAsync();

        //    examCommand.PatientId = patientWithoutVisits.PatientId;

        //    var result = await _handler.Handle(examCommand, CancellationToken.None);

        //    result.Should().NotBeNull();
        //    result.ExamId.Should().NotBeEmpty();

        //    var visitsCountAfterExamCreationCount = await _context.Visits.CountAsync();
        //    visitsCountAfterExamCreationCount.Should().Be(visitsCountBeforeExamCreation + 1);

        //    var patientWithVisit = await _context.Patients.Include(p => p.Visits)
        //        .FirstAsync(x => x.PatientId == patientWithoutVisits.PatientId);

        //    patientWithVisit.Visits.Count.Should().Be(1);
        //}

        //[Fact]
        //public async Task WhenExamCommandIsValidAndVisitNotArchived_ReturnsGuidOfNewExamAndNotCreateVisit()
        //{
        //    var examCommand = new Request();

        //    var patientWithoutVisits = await _context.Patients.Where(x => x.Visits.Any(v => !v.Archived))
        //        .Include(x => x.Visits).FirstAsync();
        //    patientWithoutVisits.PatientId.Should().NotBeEmpty();
        //    patientWithoutVisits.Visits.Count.Should().BeGreaterThan(0);

        //    var visitsCountBeforeExamCreation = await _context.Visits.CountAsync();

        //    examCommand.PatientId = patientWithoutVisits.PatientId;

        //    var result = await _handler.Handle(examCommand, CancellationToken.None);

        //    result.Should().NotBeNull();
        //    result.ExamId.Should().NotBeEmpty();

        //    var visitsCountAfterExamCreationCount = await _context.Visits.CountAsync();
        //    visitsCountAfterExamCreationCount.Should().Be(visitsCountBeforeExamCreation);

        //    var patientWithVisit = await _context.Patients.Include(p => p.Visits)
        //        .FirstAsync(x => x.PatientId == patientWithoutVisits.PatientId);

        //    patientWithVisit.Visits.Count.Should().Be(patientWithoutVisits.Visits.Count);
        //}

        //[Fact]
        //public async Task WhenExamCommandIsValidAndVisitArchived_ReturnsGuidOfNewExamAndCreateVisit()
        //{
        //    var examCommand = new Request();

        //    var patientWithArchivedVisits = await _context.Patients.Where(x => x.Visits.Any(v => v.Archived))
        //        .Include(x => x.Visits).FirstAsync();
        //    patientWithArchivedVisits.PatientId.Should().NotBeEmpty();
        //    patientWithArchivedVisits.Visits.Count.Should().Be(1);

        //    var visitsCountBeforeExamCreation = await _context.Visits.CountAsync();
        //    var patientVisitsCountBeforeExamCreation = patientWithArchivedVisits.Visits.Count;

        //    examCommand.PatientId = patientWithArchivedVisits.PatientId;

        //    var result = await _handler.Handle(examCommand, CancellationToken.None);

        //    result.Should().NotBeNull();
        //    result.ExamId.Should().NotBeEmpty();

        //    var visitsCountAfterExamCreationCount = await _context.Visits.CountAsync();
        //    visitsCountAfterExamCreationCount.Should().Be(visitsCountBeforeExamCreation + 1);

        //    var patientWithVisit = await _context.Patients.Include(p => p.Visits)
        //        .FirstAsync(x => x.PatientId == patientWithArchivedVisits.PatientId);

        //    patientWithVisit.Visits.Count.Should().Be(patientVisitsCountBeforeExamCreation + 1);
        //}
    }
}
