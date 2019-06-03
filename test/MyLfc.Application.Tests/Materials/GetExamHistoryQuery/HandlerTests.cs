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
//using Handler = Wentrum.Application.Exams.GetExamHistoryQuery.Handler;
//using Request = Wentrum.Application.Exams.GetExamHistoryQuery.Request;
//using Response = Wentrum.Application.Exams.GetExamHistoryQuery.Response;

//namespace Wentrum.Application.Tests.Exams.GetExamHistoryQuery
//{
//    [Collection(nameof(MaterialQueryCollection))]
//    public class HandlerTests
//    {
//        private readonly WentrumDbContext _context;
//        private readonly IRequestHandler<Request, Response> _handler;

//        public HandlerTests(MaterialQueryTestFixture fixture)
//        {
//            _context = fixture.Context;
//            _handler = new Handler(fixture.Context, fixture.Mapper);
//        }

//        [Theory]
//        [MemberData(nameof(InvalidExamIds))]
//        public void GetExamHistory_WhenExamIdIsEmptyOrExamNotExist_ThrowsNotFoundException(Guid examId)
//        {
//            Func<Task> result = async () => await _handler.Handle(new Request { ExamId = examId }, CancellationToken.None);

//            result.Should().Throw<NotFoundException>();
//        }

//        [Fact]
//        public async Task GetExamHistory_WhenExamIsDeleted_ThrowsNotFoundException()
//        {
//            Func<Task> result = async () => await _handler.Handle(new Request { ExamId = MaterialQueryTestFixture.DeletedExamId }, CancellationToken.None);

//            result.Should().Throw<NotFoundException>();

//            var deletedExamInDb = await _context.Exams.IgnoreQueryFilters()
//                .FirstOrDefaultAsync(x => x.ExamId == MaterialQueryTestFixture.DeletedExamId);

//            deletedExamInDb.Should().NotBeNull();
//        }


//        [Fact]
//        public async Task GetExamHistory_WhenExamHasNoHistoryEntries_ShouldReturnEmptyList()
//        {
//            var result = await _handler.Handle(new Request { ExamId = MaterialQueryTestFixture.ExamId }, CancellationToken.None);

//            result.Should().BeOfType<Response>();
//            result.ExamHistoryEntries.ForEach(x => x.ExamId.Should().Be(MaterialQueryTestFixture.ExamId));
//            result.ExamHistoryEntries.Count.Should().Be(0);
//        }

//        [Fact]
//        public async Task GetExamHistory_WhenExamHasHistoryEntries_ShouldReturnNotEmptyList()
//        {
//            var examWithHistoryEntries = await _context.Exams.Include(x => x.ExamWorkflowMovements)
//                .FirstAsync(x => x.ExamId == MaterialQueryTestFixture.ExamWithHistoryEntries);

//            var result = await _handler.Handle(new Request { ExamId = MaterialQueryTestFixture.ExamWithHistoryEntries }, CancellationToken.None);

//            result.Should().BeOfType<Response>();
//            result.ExamHistoryEntries.ForEach(x => x.ExamId.Should().Be(MaterialQueryTestFixture.ExamWithHistoryEntries));
//            result.ExamHistoryEntries.Count.Should().Be(examWithHistoryEntries.ExamWorkflowMovements.Count);
//        }

//        public static IEnumerable<object[]> InvalidExamIds()
//        {
//            yield return new object[] { Guid.Empty };
//            yield return new object[] { new Guid("00000000-0000-0000-0000-000000000001") };
//            yield return new object[] { Guid.NewGuid() };
//        }
//    }
//}
