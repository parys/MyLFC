using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using Shouldly;
using Xunit;
using Handler = MyLfc.Application.Materials.Commands.DeleteMaterialCommand.Handler;
using Request = MyLfc.Application.Materials.Commands.DeleteMaterialCommand.Request;
using Response = MyLfc.Application.Materials.Commands.DeleteMaterialCommand.Response;

namespace MyLfc.Application.Tests.Materials.DeleteMaterialCommand;

[Collection(nameof(DeleteMaterialCommandCollection))]
public class HandlerTests
{
    private readonly ILiverpoolContext _context;
    private readonly IRequestHandler<Request, Response> _handler;

    public HandlerTests(DeleteMaterialCommandTestFixture fixture)
    {
        _context = fixture.Context;
        _handler = new Handler(fixture.Context, fixture.AdminRequestContext);
    }

    [Fact]
    public void WhenMaterialNotExist_ThrowsNotFoundException()
    {
        Func<Task> result = async () => await _handler.Handle(new Request { Id = 11111 }, CancellationToken.None);

        result.ShouldThrowAsync<NotFoundException>();
    }

    [Fact]
    public async Task WhenMaterialIdDeleted_ThrowsNotFoundException()
    {
        Func<Task> result = async () =>
            await _handler.Handle(new Request { Id = DeleteMaterialCommandTestFixture.DeletedMaterialId},
                CancellationToken.None);

       await result.ShouldThrowAsync<NotFoundException>();

        var deletedMaterial = await _context.Materials.IgnoreQueryFilters()
            .FirstOrDefaultAsync(x => x.Id == DeleteMaterialCommandTestFixture.DeletedMaterialId);
        deletedMaterial.ShouldNotBeNull();
    }

    //[Fact]
    //public async Task GivenPendingMaterialId_WhenClaimsIsEmpty_ThrowsNotFoundException()
    //{
    //    Func<Task> result = async () =>
    //        await _handler.Handle(new Request { Id = DeleteMaterialCommandTestFixture.PendingMaterialId},
    //            CancellationToken.None);

    //    result.ShouldThrow<NotFoundException>();

    //    var deletedMaterial = await _context.Materials.IgnoreQueryFilters()
    //        .FirstOrDefaultAsync(x => x.Id == DeleteMaterialCommandTestFixture.PendingMaterialId);
    //    deletedMaterial.ShouldNotBeNull();
    //}

    [Fact]
    public async Task GivenPendingMaterialId_WhenUserHasAuthorClaims_ReturnsSuccess()
    {
        var result = await _handler.Handle(new Request
            {
                Id = DeleteMaterialCommandTestFixture.Materials[0].Id
            },CancellationToken.None);

        result.ShouldNotBeNull();

        var deletedExam = await _context.Materials
            .FirstOrDefaultAsync(x => x.Id == DeleteMaterialCommandTestFixture.Materials[0].Id);
        deletedExam.ShouldBeNull();
    }
}
