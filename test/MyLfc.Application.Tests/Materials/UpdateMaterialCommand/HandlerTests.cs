//using System;
//using System.Threading;
//using System.Threading.Tasks;
//using FluentAssertions;
//using MediatR;
//using Microsoft.EntityFrameworkCore;
//using MyLfc.Application.Infrastructure.Exceptions;
//using MyLfc.Persistence;
//using Xunit;
//using Handler = MyLfc.Application.Exams.UpdateExamCommand.Handler;
//using Request = MyLfc.Application.Exams.UpdateExamCommand.Request;
//using Response = MyLfc.Application.Exams.UpdateExamCommand.Response;

//namespace MyLfc.Application.Tests.Exams.UpdateExamCommand
//{
//    [Collection(nameof(UpdateExamCommandCollection))]
//    public class HandlerTests
//    {
//        private readonly LiverpoolContext _context;
//        private readonly IRequestHandler<Request, Response> _handler;

//        public HandlerTests(UpdateExamCommandTestFixture fixture)
//        {
//            _context = fixture.Context;
//            _handler = new Handler(fixture.Context);
//        }

//        [Fact]
//        public void WhenUpdateExamContainsNonExistExamId_ThrowsNotFoundException()
//        {
//            Func<Task> result = async () =>
//                await _handler.Handle(new Request { ExamId = Guid.NewGuid() }, CancellationToken.None);

//            result.Should().Throw<NotFoundException>();
//        }

//        [Fact]
//        public async Task WhenUpdateExamContainsDeletedExamId_ThrowsNotFoundException()
//        {
//            Func<Task> result = async () =>
//                await _handler.Handle(new Request { ExamId = UpdateExamCommandTestFixture.DeletedExamId }, CancellationToken.None);

//            result.Should().Throw<NotFoundException>();

//            var deletedExam = await _context.Exams.IgnoreQueryFilters()
//                .FirstOrDefaultAsync(x => x.ExamId == UpdateExamCommandTestFixture.DeletedExamId);
//            deletedExam.Should().NotBeNull();
//            deletedExam.ExamId.Should().Be(UpdateExamCommandTestFixture.DeletedExamId);
//        }

//        [Fact]
//        public async Task WhenUpdateExamCommandIsValid_ReturnsGuidOfUpdatedExam()
//        {
//            var examToUpdate = await _context.Exams.FirstAsync();
//            var oldAnesthesiologistValue = examToUpdate.Anesthesiologist;
//            var oldSurgeonValue = examToUpdate.Surgeon;
//            var examCommand = new Request
//            {
//                ExamId = examToUpdate.ExamId,
//                Anesthesiologist = "updated Anesthesiologist",
//                Surgeon = "new Surgeon"
//            };
            
//            var result = await _handler.Handle(examCommand, CancellationToken.None);

//            result.Should().NotBeNull();
//            result.ExamId.Should().NotBeEmpty();

//            var updatedEntity = await _context.Exams.FirstOrDefaultAsync(x => x.ExamId == result.ExamId);

//            updatedEntity.Should().NotBeNull();
//            updatedEntity.ExamId.Should().Be(result.ExamId);
//            updatedEntity.Anesthesiologist.Should().Be(examCommand.Anesthesiologist);
//            updatedEntity.Surgeon.Should().Be(examCommand.Surgeon);

//            updatedEntity.Anesthesiologist.Should().NotBe(oldAnesthesiologistValue);
//            updatedEntity.Surgeon.Should().NotBe(oldSurgeonValue);
//        }
//    }
//}
