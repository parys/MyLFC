using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Moq;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Common.Web.Hubs;
using Shouldly;
using Xunit;
using Handler = MyLfc.Application.Features.Pms.Queries.GetPmDetailQuery.Handler;
using Request = MyLfc.Application.Features.Pms.Queries.GetPmDetailQuery.Request;
using Response = MyLfc.Application.Features.Pms.Queries.GetPmDetailQuery.Response;

namespace MyLfc.Application.Tests.Pms.GetPmDetailQuery;

[Collection(nameof(PmQueryCollection))]
public class HandlerTests
{
    private readonly ILiverpoolContext _context;
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

        result.ShouldThrowAsync<NotFoundException>();
    }

    [Fact]
    public async Task WhenPmIsNotSendOrReceivedByCurrentUser_ThrowsNotFoundException()
    {
        Func<Task> result = async () =>
            await _handler.Handle(new Request { Id = PmQueryTestFixture.PrivateMessageThatNotRelatedToAdmin.Id }, CancellationToken.None);

        await result.ShouldThrowAsync<NotFoundException>();

        var privateMessage = await _context.PrivateMessages.IgnoreQueryFilters()
            .FirstOrDefaultAsync(x => x.Id == PmQueryTestFixture.PrivateMessageThatNotRelatedToAdmin.Id);
        privateMessage.ShouldNotBeNull();
        privateMessage.Id.ShouldBe(PmQueryTestFixture.PrivateMessageThatNotRelatedToAdmin.Id);
    }

    [Fact]
    public async Task GivenValidPmId_WhenPmIsNotReadBefore_ReturnsPmAndMarkAsRead()
    {
        var messageBefore = _context.PrivateMessages.First(x => x.Id == PmQueryTestFixture.PrivateMessageForRead.Id);

        messageBefore.ShouldNotBeNull();
        messageBefore.IsRead.ShouldBeFalse();

        var result = await _handler.Handle(
            new Request{Id = PmQueryTestFixture.PrivateMessageForRead.Id }, CancellationToken.None);

        result.ShouldNotBeNull();
        result.Id.ShouldBeGreaterThan(0);

        var updatedEntity = await _context.PrivateMessages.FirstOrDefaultAsync(x => x.Id == PmQueryTestFixture.PrivateMessageForRead.Id);

        updatedEntity.ShouldNotBeNull();
        updatedEntity.IsRead.ShouldBeTrue();
    }
}
