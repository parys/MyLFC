using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using FluentAssertions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Moq;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Common.Web.Hubs;
using MyLfc.Persistence;
using Xunit;
using Handler = MyLfc.Application.Pms.GetPmDetailQuery.Handler;
using Request = MyLfc.Application.Pms.GetPmDetailQuery.Request;
using Response = MyLfc.Application.Pms.GetPmDetailQuery.Response;

namespace MyLfc.Application.Tests.Pms.GetPmDetailQuery
{
    [Collection(nameof(PmQueryCollection))]
    public class HandlerTests
    {
        private readonly LiverpoolContext _context;
        private readonly IRequestHandler<Request, Response> _handler;

        public HandlerTests(PmQueryTestFixture fixture)
        {
            var signalRObject = new Mock<ISignalRHubAggregator>();
            _context = fixture.Context;
            _handler = new Handler(fixture.Context, fixture.AdminRequestContext, fixture.Mapper,
                signalRObject.Object);
        }

        [Fact]
        public void WhenPmIsNotExist_ThrowsNotFoundException()
        {
            Func<Task> result = async () =>
                await _handler.Handle(new Request { Id = 111111 }, CancellationToken.None);

            result.Should().Throw<NotFoundException>();
        }

        [Fact]
        public async Task WhenPmIsNotSendOrReceivedByCurrentUser_ThrowsNotFoundException()
        {
            Func<Task> result = async () =>
                await _handler.Handle(new Request { Id = PmQueryTestFixture.PrivateMessageThatNotRelatedToAdmin.Id }, CancellationToken.None);

            result.Should().Throw<NotFoundException>();

            var privateMessage = await _context.PrivateMessages.IgnoreQueryFilters()
                .FirstOrDefaultAsync(x => x.Id == PmQueryTestFixture.PrivateMessageThatNotRelatedToAdmin.Id);
            privateMessage.Should().NotBeNull();
            privateMessage.Id.Should().Be(PmQueryTestFixture.PrivateMessageThatNotRelatedToAdmin.Id);
        }

        [Fact]
        public async Task GivenValidPmId_WhenPmIsNotReadBefore_ReturnsPmAndMarkAsRead()
        {
            var messageBefore = _context.PrivateMessages.First(x => x.Id == PmQueryTestFixture.PrivateMessageThatNotRelatedToAdmin.Id);

            messageBefore.Should().NotBeNull();
            messageBefore.IsRead.Should().BeFalse();
            
            var result = await _handler.Handle(
                new Request{Id = PmQueryTestFixture.PrivateMessageThatNotRelatedToAdmin.Id }, CancellationToken.None);

            result.Should().NotBeNull();
            result.Id.Should().BeGreaterThan(0);

            var updatedEntity = await _context.PrivateMessages.FirstOrDefaultAsync(x => x.Id == PmQueryTestFixture.PrivateMessageThatNotRelatedToAdmin.Id);

            updatedEntity.Should().NotBeNull();
            updatedEntity.IsRead.Should().BeTrue();
        }
    }
}
