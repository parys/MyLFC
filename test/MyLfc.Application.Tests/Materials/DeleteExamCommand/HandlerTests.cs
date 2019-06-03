//using System;
//using System.Collections.Generic;
//using System.Threading;
//using System.Threading.Tasks;
//using FluentAssertions;
//using MediatR;
//using Microsoft.EntityFrameworkCore;
//using Wentrum.Application.Infrastructure.Exceptions;
//using Wentrum.Persistence;
//using Xunit;
//using Handler = Wentrum.Application.Exams.DeleteExamCommand.Handler;
//using Request = Wentrum.Application.Exams.DeleteExamCommand.Request;
//using Response = Wentrum.Application.Exams.DeleteExamCommand.Response;

//namespace Wentrum.Application.Tests.Exams.DeleteExamCommand
//{
//    [Collection(nameof(DeleteExamCommandCollection))]
//    public class HandlerTests
//    {
//        private readonly WentrumDbContext _context;
//        private readonly IRequestHandler<Request, Response> _handler;

//        public HandlerTests(DeleteExamCommandTestFixture fixture)
//        {
//            _context = fixture.Context;
//            _handler = new Handler(fixture.Context);
//        }

//        [Theory]
//        [MemberData(nameof(InvalidExamIds))]
//        public void WhenExamIdIsEmptyOrExamNotExist_ThrowsNotFoundException(Guid examId)
//        {
//            Func<Task> result = async () => await _handler.Handle(new Request { ExamId = examId }, CancellationToken.None);

//            result.Should().Throw<NotFoundException>();
//        }

//        [Fact]
//        public async Task WhenExamIsAlreadyDeleted_ThrowsNotFoundException()
//        {
//            Func<Task> result = async () =>
//                await _handler.Handle(new Request { ExamId = DeleteExamCommandTestFixture.DeletedExamId },
//                    CancellationToken.None);

//            result.Should().Throw<NotFoundException>();

//            var deletedExam = await _context.Exams.IgnoreQueryFilters()
//                .FirstOrDefaultAsync(x => x.ExamId == DeleteExamCommandTestFixture.DeletedExamId);
//            deletedExam.Should().NotBeNull();
//        }

//        [Fact]
//        public async Task WhenExamExistAndVisitHasOtherNotDeletedExams_ReturnsExamIdAndNotMakeVisitArchived()
//        {
//            var visitId = (await _context.Exams
//                .FirstAsync(x => x.ExamId == DeleteExamCommandTestFixture.ExamIdOfExamWithVisitThatContainsMoreThanOneExam))
//                .VisitId;
//            (await _context.Visits.FirstAsync(x => x.VisitId == visitId)).Archived.Should().BeFalse();


//            var result = await _handler.Handle(new Request { ExamId = DeleteExamCommandTestFixture.ExamIdOfExamWithVisitThatContainsMoreThanOneExam },
//                    CancellationToken.None);

//            result.Should().NotBeNull();
//            result.ExamId.Should().Be(DeleteExamCommandTestFixture.ExamIdOfExamWithVisitThatContainsMoreThanOneExam);

//            var deletedExam = await _context.Exams
//                .FirstOrDefaultAsync(x => x.ExamId == DeleteExamCommandTestFixture.ExamIdOfExamWithVisitThatContainsMoreThanOneExam);
//            deletedExam.Should().BeNull();

//            (await _context.Visits.FirstAsync(x => x.VisitId == visitId)).Archived.Should().BeFalse();
//        }

//        [Fact]
//        public async Task WhenExamExistAndVisitHasNoOtherNotDeletedExams_ReturnsExamIdAndMakeVisitArchived()
//        {
//            var visitId = (await _context.Exams
//                    .FirstAsync(x => x.ExamId == DeleteExamCommandTestFixture.ExamIdOfExamWithVisitThatContainsOnlyOneExam))
//                .VisitId;
//            (await _context.Visits.FirstAsync(x => x.VisitId == visitId)).Archived.Should().BeFalse();


//            var result = await _handler.Handle(new Request { ExamId = DeleteExamCommandTestFixture.ExamIdOfExamWithVisitThatContainsOnlyOneExam },
//                    CancellationToken.None);

//            result.Should().NotBeNull();
//            result.ExamId.Should().Be(DeleteExamCommandTestFixture.ExamIdOfExamWithVisitThatContainsOnlyOneExam);

//            var deletedExam = await _context.Exams
//                .FirstOrDefaultAsync(x => x.ExamId == DeleteExamCommandTestFixture.ExamIdOfExamWithVisitThatContainsOnlyOneExam);
//            deletedExam.Should().BeNull();

//            (await _context.Visits.FirstAsync(x => x.VisitId == visitId)).Archived.Should().BeTrue();
//        }
        
//        public static IEnumerable<object[]> InvalidExamIds()
//        {
//            yield return new object[] { Guid.Empty };
//            yield return new object[] { new Guid("00000000-0000-0000-0000-000000000001") };
//            yield return new object[] { Guid.NewGuid() };
//        }
//    }
//}
