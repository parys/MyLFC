using System.Threading;
using System.Threading.Tasks;
using FluentAssertions;
using MediatR;
using Xunit;
using Handler = MyLfc.Application.Features.Users.Queries.GetUserBirthdaysQuery.Handler;
using Request = MyLfc.Application.Features.Users.Queries.GetUserBirthdaysQuery.Request;
using Response = MyLfc.Application.Features.Users.Queries.GetUserBirthdaysQuery.Response;

namespace MyLfc.Application.Tests.Users.GetUserBirthdaysQuery;

[Collection(nameof(UserQueryCollection))]
public class HandlerTests
{
    private readonly IRequestHandler<Request, Response> _handler;

    public HandlerTests(UserQueryTestFixture fixture)
    {
        _handler = new Handler(fixture.Context, fixture.Mapper);
    }
    
    [Fact]
    public async Task WhenTodayUsersHaveBirthdays_ShouldReturnBirthdaysListDto()
    {
        var result = await _handler.Handle(new Request(), CancellationToken.None);

        result.Should().BeOfType<Response>();
        result.Results.Count.Should().BeGreaterThan(0);
    }
}
