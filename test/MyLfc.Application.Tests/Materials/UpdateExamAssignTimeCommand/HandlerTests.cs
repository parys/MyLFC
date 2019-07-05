//using FluentAssertions;
//using MediatR;
//using Microsoft.EntityFrameworkCore;
//using System;
//using System.Threading;
//using System.Threading.Tasks;
//using MyLfc.Application.Infrastructure.Exceptions;
//using MyLfc.Persistence;
//using Xunit;
//using Handler = MyLfc.Application.Exams.UpdateExamAssignTimeCommand.Handler;
//using Request = MyLfc.Application.Exams.UpdateExamAssignTimeCommand.Request;
//using Response = MyLfc.Application.Exams.UpdateExamAssignTimeCommand.Response;


//namespace MyLfc.Application.Tests.Exams.UpdateExamAssignTimeCommand
//{
//    [Collection(nameof(UpdateExamAssignTimeCommandCollection))]
//    public class HandlerTests
//    {
//        private readonly LiverpoolContext _context;
//        private readonly IRequestHandler<Request, Response> _handler;

//        public HandlerTests(UpdateExamAssignTimeCommandTestFixture fixture)
//        {
//            _context = fixture.Context;
//            _handler = new Handler(fixture.Context);
//        }

//        [Fact]
//        public void WhenExamNotExist_ThrowsNotFoundException()
//        {
//            Func<Task> result = async () =>
//                await _handler.Handle(new Request { ExamId = Guid.NewGuid() }, CancellationToken.None);

//            result.Should().Throw<NotFoundException>();
//        }

//        [Fact]
//        public async Task WhenExamDeleted_ThrowsNotFoundException()
//        {
//            Func<Task> result = async () =>
//                await _handler.Handle(
//                    new Request { ExamId = UpdateExamAssignTimeCommandTestFixture.DeletedExamId },
//                    CancellationToken.None);

//            result.Should().Throw<NotFoundException>();

//            var deletedExam = await _context.Exams.IgnoreQueryFilters()
//                .FirstOrDefaultAsync(x => x.ExamId == UpdateExamAssignTimeCommandTestFixture.DeletedExamId);
//            deletedExam.Should().NotBeNull();
//            deletedExam.ExamId.Should().Be(UpdateExamAssignTimeCommandTestFixture.DeletedExamId);
//        }

//        [Fact]
//        public async Task WhenExamCommandIsValid_ReturnsExamGuid()
//        {
//            var newDateTime = DateTime.Now.AddDays(1);
//            var newExamSpaceId = Guid.NewGuid();

//            var result = await _handler.Handle(
//                    new Request
//                    {
//                        ExamId = UpdateExamAssignTimeCommandTestFixture.ExamId,
//                        ExamSpaceId = newExamSpaceId,
//                        AssignTime = newDateTime
//                    },
//                    CancellationToken.None);

//            result.Should().NotBeNull();
//            result.ExamId.Should().Be(UpdateExamAssignTimeCommandTestFixture.ExamId);

//            var updatedExam = await _context.Exams.IgnoreQueryFilters()
//                .FirstOrDefaultAsync(x => x.ExamId == UpdateExamAssignTimeCommandTestFixture.ExamId);
//            updatedExam.Should().NotBeNull();
//            updatedExam.ExamId.Should().Be(UpdateExamAssignTimeCommandTestFixture.ExamId);
//            updatedExam.ScheduledDate.Should().Be(newDateTime);
//            updatedExam.ExamSpaceId.Should().Be(newExamSpaceId);
//        }
//    }
//}
