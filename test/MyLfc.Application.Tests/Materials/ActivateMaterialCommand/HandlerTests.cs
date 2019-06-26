using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using FluentAssertions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Persistence;
using Xunit;
using Handler = MyLfc.Application.Materials.ActivateMaterialCommand.Handler;
using Request = MyLfc.Application.Materials.ActivateMaterialCommand.Request;

namespace MyLfc.Application.Tests.Materials.ActivateMaterialCommand
{
    [Collection(nameof(ActivateMaterialCommandCollection))]
    public class HandlerTests
    {
        private readonly LiverpoolContext _context;
        private readonly IRequestHandler<Request, Unit> _handler;

        public HandlerTests(ActivateMaterialCommandTestFixture fixture)
        {
            _handler = new Handler(fixture.Context);
            _context = fixture.Context;
        }

        [Theory]
        [MemberData(nameof(InvalidMaterialIds))]
        public void ActivateMaterialCommand_WhenMaterialIsNotExist_ThrowsNotFoundException(int id)
        {
            Func<Task> result = async () => await _handler.Handle(new Request { Id = id }, CancellationToken.None);

            result.Should().Throw<NotFoundException>();
        }

        [Fact]
        public async Task ActivateMaterialCommand_WhenActivateCommandIsValid_ShouldChangeMaterialPerndingToFalse()
        {
            var material = _context.Materials.First(x => x.Id == ActivateMaterialCommandTestFixture.PendingId);
            material.Pending.Should().BeTrue();

            var result = await _handler.Handle(new Request{Id = material.Id}, CancellationToken.None);

            result.Should().NotBeNull();

            var updatedEntity = await _context.Materials.FirstOrDefaultAsync(x => x.Id == ActivateMaterialCommandTestFixture.PendingId);

            updatedEntity.Pending.Should().BeFalse();
        }

        public static IEnumerable<object[]> InvalidMaterialIds()
        {
            yield return new object[] { -1 };
            yield return new object[] { 0 };
            yield return new object[] { 44444 };
        }
    }
}
