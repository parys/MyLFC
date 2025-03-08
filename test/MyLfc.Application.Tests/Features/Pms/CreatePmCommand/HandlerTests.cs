using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Moq;
using MyLfc.Common.Web.Hubs;
using MyLfc.Business.Contracts;
using Xunit;
using Handler = MyLfc.Application.Features.Pms.Commands.CreatePmCommand.Handler;
using Request = MyLfc.Application.Features.Pms.Commands.CreatePmCommand.Request;
using Response = MyLfc.Application.Features.Pms.Commands.CreatePmCommand.Response;
using Shouldly;

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

        result.Id.ShouldBeGreaterThan(0);

        var createdPm = _context.PrivateMessages.First(x => x.Id == result.Id);
        createdPm.ShouldNotBeNull();
        createdPm.IsRead.ShouldBeFalse();
        createdPm.SenderId.ShouldBe(adminId);
        createdPm.Title.ShouldBe(request.Title);
        createdPm.Message.ShouldBe(request.Message);
    }
}
