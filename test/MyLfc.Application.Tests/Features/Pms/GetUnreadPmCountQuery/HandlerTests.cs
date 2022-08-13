using System.Threading;
using System.Threading.Tasks;
using FluentAssertions;
using MediatR;
using Xunit;
using Handler = MyLfc.Application.Features.Pms.Queries.GetUnreadPmCountQuery.Handler;
using Request = MyLfc.Application.Features.Pms.Queries.GetUnreadPmCountQuery.Request;
using Response = MyLfc.Application.Features.Pms.Queries.GetUnreadPmCountQuery.Response;

namespace MyLfc.Application.Tests.Pms.GetUnreadPmCountQuery;

[Collection(nameof(GetUnreadPmQueryCollection))]
public class HandlerTests
{
    private readonly IRequestHandler<Request, Response> _handler;

    public HandlerTests(GetUnreadPmQueryTestFixture fixture)
    {
        _handler = new Handler(fixture.Context, fixture.AdminRequestContext);
    }

    [Fact]
    public async Task WhenUserHasUnread_ShouldReturnGreaterThan0()
    {
        var result = await _handler.Handle(new Request(), CancellationToken.None);

        result.Result.Should().BeGreaterThan(0);
    }
}
