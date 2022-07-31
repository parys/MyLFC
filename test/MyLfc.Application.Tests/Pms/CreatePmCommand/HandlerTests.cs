using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using FluentAssertions;
using MediatR;
using Moq;
using MyLfc.Common.Web.Hubs;
using MyLfc.Persistence;
using MyLfc.Business.Contracts;
using Xunit;
using Handler = MyLfc.Application.Pms.CreatePmCommand.Handler;
using Request = MyLfc.Application.Pms.CreatePmCommand.Request;
using Response = MyLfc.Application.Pms.CreatePmCommand.Response;

namespace MyLfc.Application.Tests.Pms.CreatePmCommand;

[Collection(nameof(CreatePmCommandCollection))]
public class HandlerTests
{
    private readonly ILiverpoolContext _context;
    private readonly IRequestHandler<Request, Response> _handler;
    private readonly int adminId;

    public HandlerTests(CreatePmCommandTestFixture fixture)
    {
        var messageObject = new Mock<IEmailSender>();
        var signalRObject = new Mock<ISignalRHubAggregator>();
        _context = fixture.Context;
        _handler = new Handler(fixture.Context, fixture.Mapper, fixture.AdminRequestContext,
            messageObject.Object, signalRObject.Object);
        adminId = fixture.AdminRequestContext.UserId.Value;
    }

    [Fact]
    public async Task CreatePm_WhenModelIsValid_ReturnsNewMessageId()
    {
        var request = new Request
        {
            ReceiverId = 2,
            Title = "titlea",
            Message = "messgaeee"
        };
        var result = await _handler.Handle(request, CancellationToken.None);

        result.Id.Should().BeGreaterThan(0);

        var createdPm = _context.PrivateMessages.First(x => x.Id == result.Id);
        createdPm.Should().NotBeNull();
        createdPm.IsRead.Should().BeFalse();
        createdPm.SenderId.Should().Be(adminId);
        createdPm.Title.Should().Be(request.Title);
        createdPm.Message.Should().Be(request.Message);
    }
}
