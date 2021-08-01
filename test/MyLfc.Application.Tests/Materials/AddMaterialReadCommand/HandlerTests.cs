using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using FluentAssertions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using Xunit;
using Handler = MyLfc.Application.Materials.AddMaterialReadCommand.Handler;
using Request = MyLfc.Application.Materials.AddMaterialReadCommand.Request;

namespace MyLfc.Application.Tests.Materials.AddMaterialReadCommand
{
    [Collection(nameof(AddMaterialReadCommandCollection))]
    public class HandlerTests
    {
        private readonly ILiverpoolContext _context;
        private readonly IRequestHandler<Request, Unit> _handler;

        public HandlerTests(AddMaterialReadCommandTestFixture fixture)
        {
            _handler = new Handler(fixture.Context);
            _context = fixture.Context;
        }

        [Theory]
        [MemberData(nameof(InvalidMaterialIds))]
        public void AddMaterialReadCommand_WhenMaterialIsNotExist_ThrowsNotFoundException(int id)
        {
            Func<Task> result = async () => await _handler.Handle(new Request { Id = id }, CancellationToken.None);

            result.Should().Throw<NotFoundException>();
        }

        [Fact]
        public async Task AddMaterialReadCommand_WhenAddReadCommandIsValid_ShouldAddNewRead()
        {
            var material = _context.Materials.First(x => x.Id == AddMaterialReadCommandTestFixture.MaterialId);
            var oldRead = material.Reads;
            var result = await _handler.Handle(new Request{Id = material.Id}, CancellationToken.None);

            result.Should().NotBeNull();

            var updatedEntity = await _context.Materials.FirstOrDefaultAsync(x => x.Id == AddMaterialReadCommandTestFixture.MaterialId);

            updatedEntity.Reads.Should().Be(oldRead + 1);
        }

        public static IEnumerable<object[]> InvalidMaterialIds()
        {
            yield return new object[] { -1 };
            yield return new object[] { 0 };
            yield return new object[] { 44444 };
        }
    }
}
