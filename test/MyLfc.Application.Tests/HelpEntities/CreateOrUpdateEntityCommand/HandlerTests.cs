using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using FluentAssertions;
using MediatR;
using MyLfc.Persistence;
using MyLfc.Data.Common;
using Xunit;
using Handler = MyLfc.Application.Features.HelpEntities.Commands.CreateOrUpdateEntityCommand.Handler;
using Request = MyLfc.Application.Features.HelpEntities.Commands.CreateOrUpdateEntityCommand.Request;
using Response = MyLfc.Application.Features.HelpEntities.Commands.CreateOrUpdateEntityCommand.Response;

namespace MyLfc.Application.Tests.HelpEntities.CreateOrUpdateEntityCommand;

[Collection(nameof(CreateOrUpdateEntityCommandCollection))]
public class HandlerTests
{
    private readonly ILiverpoolContext _context;
    private readonly IRequestHandler<Request, Response> _handler;

    public HandlerTests(CreateOrUpdateEntityCommandTestFixture fixture)
    {
        _context = fixture.Context;
        _handler = new Handler(fixture.Context, fixture.Mapper);
    }

    [Fact]
    public async Task WhenTypeNotExist_CreateNewEntity()
    {
        var entityType = HelperEntityType.Fantasy;
        var entityBefore = _context.HelpEntities.FirstOrDefault(x => x.Type == entityType);
        entityBefore.Should().BeNull();

        var result = await _handler.Handle(new Request { Value = "newValue", Type = entityType }, CancellationToken.None);

        result.Id.Should().BeGreaterThan(0);
        var entityAfter = _context.HelpEntities.FirstOrDefault(x => x.Type == entityType);
        entityAfter.Should().NotBeNull();
        entityAfter.Id.Should().Be(result.Id);
    }

    [Fact]
    public async Task WhenTypeExist_UpdatesEntityValue()
    {
        var entityType = HelperEntityType.BestPlayer;
        var entityBefore = _context.HelpEntities.FirstOrDefault(x => x.Type == entityType);
        entityBefore.Should().NotBeNull();
        var valueBefore = entityBefore.Value;

        var result = await _handler.Handle(new Request { Value = "newBestPlayerValue", Type = entityType }, CancellationToken.None);

        result.Id.Should().BeGreaterThan(0);
        var entityAfter = _context.HelpEntities.FirstOrDefault(x => x.Type == entityType);
        entityAfter.Should().NotBeNull();
        entityAfter.Id.Should().Be(result.Id);
        entityAfter.Value.Should().NotBe(valueBefore);
    }
}
