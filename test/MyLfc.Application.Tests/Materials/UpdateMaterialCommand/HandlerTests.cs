using System;
using System.Threading;
using System.Threading.Tasks;
using AutoFixture;
using FluentAssertions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Application.Tests.Infrastructure.Customizations.Material;
using MyLfc.Application.Tests.Infrastructure.Seeds;
using Xunit;
using Handler = MyLfc.Application.Materials.Commands.UpdateMaterialCommand.Handler;
using Request = MyLfc.Application.Materials.Commands.UpdateMaterialCommand.Request;
using Response = MyLfc.Application.Materials.Commands.UpdateMaterialCommand.Response;

namespace MyLfc.Application.Tests.Materials.UpdateMaterialCommand
{
    [Collection(nameof(UpdateMaterialCommandCollection))]
    public class HandlerTests
    {
        private readonly ILiverpoolContext _context;
        private readonly IRequestHandler<Request, Response> _handler;

        public HandlerTests(UpdateMaterialCommandTestFixture fixture)
        {
            _context = fixture.Context;
            _handler = new Handler(fixture.Context, fixture.Mapper, fixture.AdminRequestContext);
        }

        [Fact]
        public void WhenUpdateMaterialContainsNonExistMaterialId_ThrowsNotFoundException()
        {
            Func<Task> result = async () =>
                await _handler.Handle(new Request { Id = 111111 }, CancellationToken.None);

            result.Should().ThrowAsync<NotFoundException>();
        }

        [Fact]
        public async Task WhenUpdateMaterialContainsDeletedMaterialId_ThrowsNotFoundException()
        {
            Func<Task> result = async () =>
                await _handler.Handle(new Request { Id = UpdateMaterialCommandTestFixture.DeletedMaterialId }, CancellationToken.None);

            await result.Should().ThrowAsync<NotFoundException>();

            var deletedMaterial = await _context.Materials.IgnoreQueryFilters()
                .FirstOrDefaultAsync(x => x.Id == UpdateMaterialCommandTestFixture.DeletedMaterialId);
            deletedMaterial.Should().NotBeNull();
            deletedMaterial.Id.Should().Be(UpdateMaterialCommandTestFixture.DeletedMaterialId);
        }

        [Fact]
        public async Task WhenUpdateMaterialCommandIsValid_ReturnsIdOfUpdatedMaterial()
        {
            var materialToUpdate = await _context.Materials.FirstAsync();
            var oldTitle = materialToUpdate.Title;
            var oldBrief = materialToUpdate.Brief;

            var materialCommand = new Fixture().Customize(new UpdateMaterialCommandCustomization())
                .Create<Request>();
            materialCommand.Id = UpdateMaterialCommandTestFixture.Materials[0].Id;
            materialCommand.CategoryId = MaterialCategorySeeder.SecondCategoryId;

            var result = await _handler.Handle(materialCommand, CancellationToken.None);

            result.Should().NotBeNull();
            result.Id.Should().BeGreaterThan(0);

            var updatedEntity = await _context.Materials.FirstOrDefaultAsync(x => x.Id == result.Id);

            updatedEntity.Should().NotBeNull();
            updatedEntity.Id.Should().Be(result.Id);
            updatedEntity.Title.Should().NotBe(oldTitle);
            updatedEntity.Brief.Should().NotBe(oldBrief);
            updatedEntity.CategoryName.Should().Be(MaterialCategorySeeder.SecondCategoryName);
        }
    }
}
