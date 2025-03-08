using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using MyLfc.Data.Common;
using Shouldly;
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
        entityBefore.ShouldBeNull();

        var result = await _handler.Handle(new Request { Value = "newValue", Type = entityType }, CancellationToken.None);

        result.Id.ShouldBeGreaterThan(0);
        var entityAfter = _context.HelpEntities.FirstOrDefault(x => x.Type == entityType);
        entityAfter.ShouldNotBeNull();
        entityAfter.Id.ShouldBe(result.Id);
    }

    [Fact]
    public async Task WhenTypeExist_UpdatesEntityValue()
    {
        var entityType = HelperEntityType.BestPlayer;
        var entityBefore = _context.HelpEntities.FirstOrDefault(x => x.Type == entityType);
        entityBefore.ShouldNotBeNull();
        var valueBefore = entityBefore.Value;

        var result = await _handler.Handle(new Request { Value = "newBestPlayerValue", Type = entityType }, CancellationToken.None);

        result.Id.ShouldBeGreaterThan(0);
        var entityAfter = _context.HelpEntities.FirstOrDefault(x => x.Type == entityType);
        entityAfter.ShouldNotBeNull();
        entityAfter.Id.ShouldBe(result.Id);
        entityAfter.Value.ShouldNotBe(valueBefore);
    }
}
