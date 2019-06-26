//using FluentAssertions;
//using MediatR;
//using Microsoft.EntityFrameworkCore;
//using System;
//using System.Collections.Generic;
//using System.Threading;
//using System.Threading.Tasks;
//using Wentrum.Application.Infrastructure.Exceptions;
//using Wentrum.Persistence;
//using Xunit;
//using Handler = Wentrum.Application.Exams.GetExamDetailQuery.Handler;
//using Request = Wentrum.Application.Exams.GetExamDetailQuery.Request;
//using Response = Wentrum.Application.Exams.GetExamDetailQuery.Response;

//namespace Wentrum.Application.Tests.Exams.GetExamDetailQuery
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
//        public void WhenExamIdIsEmptyOrExamNotExist_ThrowsNotFoundException(Guid examId)
//        {
//            Func<Task> result = async () => await _handler.Handle(new Request { ExamId = examId }, CancellationToken.None);

//            result.Should().Throw<NotFoundException>();
//        }

//        [Fact]
//        public async Task WhenExamIdIsForDeletedExam_ThrowsNotFoundException()
//        {
//            Func<Task> result = async () => await _handler.Handle(new Request { ExamId = MaterialQueryTestFixture.DeletedExamId }, CancellationToken.None);

//            result.Should().Throw<NotFoundException>();

//            var deletedExamInDb = await _context.Exams.IgnoreQueryFilters()
//                .FirstOrDefaultAsync(x => x.ExamId == MaterialQueryTestFixture.DeletedExamId);

//            deletedExamInDb.Should().NotBeNull();
//        }


//        [Fact]
//        public async Task WhenExamIdIsValid_ShouldReturnExamDetailDto()
//        {
//            var result = await _handler.Handle(new Request { ExamId = MaterialQueryTestFixture.ExamId }, CancellationToken.None);

//            result.Should().BeOfType<Response>();
//            result.ExamId.Should().Be(MaterialQueryTestFixture.ExamId);
//        }

//        [Fact]
//        public async Task WhenExamIdIsForDeletedExam_ShouldReturnExamDetailDto()
//        {
//            var result = await _handler.Handle(new Request { ExamId = MaterialQueryTestFixture.ExamId }, CancellationToken.None);

//            result.Should().BeOfType<Response>();
//            result.ExamId.Should().Be(MaterialQueryTestFixture.ExamId);
//        }

//        public static IEnumerable<object[]> InvalidExamIds()
//        {
//            yield return new object[] { Guid.Empty };
//            yield return new object[] { new Guid("00000000-0000-0000-0000-000000000001") };
//            yield return new object[] { Guid.NewGuid() };
//        }
//    }
//}
