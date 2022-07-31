using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using FluentAssertions;
using MediatR;
using Xunit;
using Handler = MyLfc.Application.Pms.GetPmListQuery.Handler;
using Request = MyLfc.Application.Pms.GetPmListQuery.Request;
using Response = MyLfc.Application.Pms.GetPmListQuery.Response;

namespace MyLfc.Application.Tests.Pms.GetPmListQuery;

[Collection(nameof(PmQueryCollection))]
public class HandlerTests
{
    private readonly IRequestHandler<Request, Response> _handler;

    public HandlerTests(PmQueryTestFixture fixture)
    {
        _handler = new Handler(fixture.Context, fixture.AdminRequestContext, fixture.Mapper);
    }

    [Fact]
    public async Task GivenValidEmptyRequest_ReturnsListsOfUserPms()
    {
        var result = await _handler.Handle(new Request(), CancellationToken.None);

        result.Should().NotBeNull();
        result.Received.Count().Should().BeGreaterThan(0);
        result.Sent.Count().Should().BeGreaterThan(0);
    }
}
