using System;
using System.Threading;
using System.Threading.Tasks;
using FluentAssertions;
using MediatR;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Application.Tests.HelpEntities.CreateOrUpdateEntityCommand;
using MyLfc.Data.Common;
using Xunit;
using Handler = MyLfc.Application.Features.HelpEntities.Queries.GetEntityQuery.Handler;
using Request = MyLfc.Application.Features.HelpEntities.Queries.GetEntityQuery.Request;
using Response = MyLfc.Application.Features.HelpEntities.Queries.GetEntityQuery.Response;

namespace MyLfc.Application.Tests.HelpEntities.GetEntityQuery;

[Collection(nameof(CreateOrUpdateEntityCommandCollection))]
public class HandlerTests
{
    private readonly IRequestHandler<Request, Response> _handler;

    public HandlerTests(CreateOrUpdateEntityCommandTestFixture fixture)
    {
        _handler = new Handler(fixture.Context);
    }

    [Fact]
    public async Task GivenValidType_ReturnsEntity()
    {
        var entityType = HelperEntityType.BestPlayer;

        var result = await _handler.Handle(new Request { Type = entityType }, CancellationToken.None);

        result.Type.Should().Be(entityType);
        result.Value.Should().NotBeNullOrWhiteSpace();
    }

    [Fact]
    public void WhenTypeNotExist_ThrowsNotFoundException()
    {
        Func<Task> result = async () => await _handler.Handle(new Request { Type = (HelperEntityType) 144 }, CancellationToken.None);

        result.Should().ThrowAsync<NotFoundException>();
    }
}
