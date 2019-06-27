using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading;
using System.Threading.Tasks;
using FluentAssertions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Persistence;
using Xunit;
using Handler = MyLfc.Application.Materials.DeleteMaterialCommand.Handler;
using Request = MyLfc.Application.Materials.DeleteMaterialCommand.Request;
//using Response = MyLfc.Application.Materials.DeleteMaterialCommand.Response;

namespace MyLfc.Application.Tests.Materials.DeleteMaterialCommand
{
    [Collection(nameof(DeleteMaterialCommandCollection))]
    public class HandlerTests
    {
        private readonly LiverpoolContext _context;
        private readonly IRequestHandler<Request, Unit> _handler;

        public HandlerTests(DeleteMaterialCommandTestFixture fixture)
        {
            _context = fixture.Context;
            _handler = new Handler(fixture.Context, new RequestContext()
            {
                User = new ClaimsPrincipal(new ClaimsIdentity(new List<Claim>()))
            });
        }

        [Fact]
        public void WhenMaterialNotExist_ThrowsNotFoundException()
        {
            Func<Task> result = async () => await _handler.Handle(new Request { Id = 11111 }, CancellationToken.None);

            result.Should().Throw<NotFoundException>();
        }

        [Fact]
        public async Task WhenMaterialIdDeleted_ThrowsNotFoundException()
        {
            Func<Task> result = async () =>
                await _handler.Handle(new Request { Id = DeleteMaterialCommandTestFixture.DeletedMaterialId},
                    CancellationToken.None);

            result.Should().Throw<NotFoundException>();

            var deletedMaterial = await _context.Materials.IgnoreQueryFilters()
                .FirstOrDefaultAsync(x => x.Id == DeleteMaterialCommandTestFixture.DeletedMaterialId);
            deletedMaterial.Should().NotBeNull();
        }

        [Fact]
        public async Task GivenPendingMaterialId_WhenClaimsIsEmpty_ThrowsNotFoundException()
        {
            Func<Task> result = async () =>
                await _handler.Handle(new Request { Id = DeleteMaterialCommandTestFixture.PendingMaterialId},
                    CancellationToken.None);

            result.Should().Throw<NotFoundException>();

            var deletedMaterial = await _context.Materials.IgnoreQueryFilters()
                .FirstOrDefaultAsync(x => x.Id == DeleteMaterialCommandTestFixture.PendingMaterialId);
            deletedMaterial.Should().NotBeNull();
        }

        [Fact]
        public async Task GivenPendingMaterialId_WhenUserHasAuthorClaims_ReturnsSuccess()
        {
            var result = await _handler.Handle(new Request
                {
                    Id = DeleteMaterialCommandTestFixture.Materials[0].Id
                },CancellationToken.None);

            result.Should().NotBeNull();

            var deletedExam = await _context.Materials
                .FirstOrDefaultAsync(x => x.Id == DeleteMaterialCommandTestFixture.Materials[0].Id);
            deletedExam.Should().BeNull();
        }
    }
}
