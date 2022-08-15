using System.Threading;
using System.Threading.Tasks;
using AutoFixture;
using FluentAssertions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Persistence;
using MyLfc.Data.Common;
using Xunit;
using Handler = MyLfc.Application.Materials.Commands.CreateMaterialCommand.Handler;
using Request = MyLfc.Application.Materials.Commands.CreateMaterialCommand.Request;
using Response = MyLfc.Application.Materials.Commands.CreateMaterialCommand.Response;
using MyLfc.Application.Tests.Infrastructure.Seeds;

namespace MyLfc.Application.Tests.Materials.CreateMaterialCommand;

[Collection(nameof(CreateMaterialCommandCollection))]
public class HandlerTests
{
    private readonly ILiverpoolContext _context;
    private readonly IRequestHandler<Request, Response> _handler;

    public HandlerTests(CreateMaterialCommandTestFixture fixture)
    {
        _handler = new Handler(fixture.Context, fixture.AdminRequestContext, fixture.Mapper);
        _context = fixture.Context;
    }

    [Fact]
    public async Task WhenMaterialCommandIsValid_ReturnsNewMaterial()
    {
        var matCommand = new Fixture()
            .Create<Request>();
        matCommand.Type = MaterialType.News;
        matCommand.UserId = UserSeeder.AdminUserId;
        matCommand.CategoryId = MaterialCategorySeeder.DefaultCategoryId;

        var result = await _handler.Handle(matCommand, CancellationToken.None);

        result.Should().NotBeNull();
        result.Id.Should().BeGreaterThan(0);

        var createdEntity = await _context.Materials.FirstOrDefaultAsync(x => x.Id == result.Id);

        //todo add check by props
        createdEntity.Should().NotBeNull();
        createdEntity.Id.Should().Be(result.Id);
        createdEntity.Type.Should().Be(result.Type);
        createdEntity.Type.Should().NotBe(MaterialType.Both);
        createdEntity.UserName.Should().Be(UserSeeder.AdminUserName);
        createdEntity.CategoryName.Should().Be(MaterialCategorySeeder.DefaultCategoryName);

    }

    [Fact]
    public async Task WhenExamCommandIsValid_ReturnsGuidOfNewExam()
    {
        var matCommand = new Fixture()
            .Create<Request>();
        matCommand.Type = MaterialType.News;

        var result = await _handler.Handle(matCommand, CancellationToken.None);

        result.Should().NotBeNull();
        result.Id.Should().BeGreaterThan(0);

        var createdEntity = await _context.Materials.FirstOrDefaultAsync(x => x.Id == result.Id);

        //todo add check by props
        createdEntity.Should().NotBeNull();
        createdEntity.Id.Should().Be(result.Id);
        createdEntity.Type.Should().Be(result.Type);
        createdEntity.Type.Should().NotBe(MaterialType.Both);
    }

}
