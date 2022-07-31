using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using FluentAssertions;
using MediatR;
using MyLfc.Application.Infrastructure.Exceptions;
using Xunit;
using Handler = MyLfc.Application.Users.GetUserDetailQuery.Handler;
using Request = MyLfc.Application.Users.GetUserDetailQuery.Request;
using Response = MyLfc.Application.Users.GetUserDetailQuery.Response;

namespace MyLfc.Application.Tests.Users.GetUserDetailQuery;

[Collection(nameof(UserQueryCollection))]
public class HandlerTests
{
    private readonly IRequestHandler<Request, Response> _handler;

    public HandlerTests(UserQueryTestFixture fixture)
    {
        _handler = new Handler(fixture.Context, fixture.Mapper, fixture.AdminRequestContext);
    }

    [Theory]
    [MemberData(nameof(InvalidUserIds))]
    public void WhenExamIdIsEmptyOrExamNotExist_ThrowsNotFoundException(int id)
    {
        Func<Task> result = async () => await _handler.Handle(new Request { Id = id }, CancellationToken.None);

        result.Should().ThrowAsync<NotFoundException>();
    }
    
    [Fact]
    public async Task WhenUserIdIsValid_ShouldReturnUserDetailDto()
    {
        var result = await _handler.Handle(new Request { Id = UserQueryTestFixture.UserId }, CancellationToken.None);

        result.Should().BeOfType<Response>();
        result.Id.Should().Be(UserQueryTestFixture.UserId);
    }

    public static IEnumerable<object[]> InvalidUserIds()
    {
        yield return new object[] { 0 };
        yield return new object[] { -1 };
        yield return new object[] { 1000000 };
    }
}
