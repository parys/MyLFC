using FluentAssertions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Persistence;
using Xunit;
using Handler = MyLfc.Application.Materials.GetMaterialDetailQuery.Handler;
using Request = MyLfc.Application.Materials.GetMaterialDetailQuery.Request;
using Response = MyLfc.Application.Materials.GetMaterialDetailQuery.Response;

namespace MyLfc.Application.Tests.Materials.GetMaterialDetailQuery
{
    [Collection(nameof(MaterialQueryCollection))]
    public class HandlerTests
    {
        private readonly ILiverpoolContext _context;
        private readonly IRequestHandler<Request, Response> _handler;

        public HandlerTests(MaterialQueryTestFixture fixture)
        {
            _context = fixture.Context;
            _handler = new Handler(fixture.Context, fixture.Mapper);
        }

        [Theory]
        [MemberData(nameof(InvalidMaterialIds))]
        public void WhenMaterialIsNotExist_ThrowsNotFoundException(int id)
        {
            Func<Task> result = async () => await _handler.Handle(new Request { Id = id }, CancellationToken.None);

            result.Should().Throw<NotFoundException>();
        }

        [Fact]
        public async Task WhenMaterialIdIsForDeletedMaterial_ThrowsNotFoundException()
        {
            Func<Task> result = async () => await _handler.Handle(new Request { Id = MaterialQueryTestFixture.DeletedMaterial }, CancellationToken.None);

            result.Should().Throw<NotFoundException>();

            var deletedMaterial = await _context.Materials.IgnoreQueryFilters()
                .FirstOrDefaultAsync(x => x.Id == MaterialQueryTestFixture.DeletedMaterial);

            deletedMaterial.Should().NotBeNull();
        }

        [Fact]
        public async Task GivenPendingMaterialId_WhenHasNoAccess_ThrowsNotFoundException()
        {
            Func<Task> result = async () => await _handler.Handle(new Request { Id = MaterialQueryTestFixture.PendingMaterial }, CancellationToken.None);

            result.Should().Throw<NotFoundException>();

            var pendingMaterial = await _context.Materials.IgnoreQueryFilters()
                .FirstOrDefaultAsync(x => x.Id == MaterialQueryTestFixture.PendingMaterial);

            pendingMaterial.Should().NotBeNull();
        }
        
        [Fact]
        public async Task WhenMaterialIdIsValid_ShouldReturnResponse()
        {
            var result = await _handler.Handle(new Request { Id = MaterialQueryTestFixture.MaterialWithComments }, CancellationToken.None);

            result.Should().BeOfType<Response>();
            result.Id.Should().Be(MaterialQueryTestFixture.MaterialWithComments);
        }

        [Fact]
        public async Task GivenPendingMaterialId_WhenHasAccess_ShouldReturnResponse()
        {
            var result = await _handler.Handle(new Request { Id = MaterialQueryTestFixture.PendingMaterial, IncludePending = true}, CancellationToken.None);

            result.Should().BeOfType<Response>();
            result.Id.Should().Be(MaterialQueryTestFixture.PendingMaterial);
        }

        public static IEnumerable<object[]> InvalidMaterialIds()
        {
            yield return new object[] { -1 };
            yield return new object[] { 0 };
            yield return new object[] { 1000000 };
        }
    }
}
