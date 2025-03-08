using System.Threading;
using System.Threading.Tasks;
using AutoFixture;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Data.Common;
using Xunit;
using Handler = MyLfc.Application.Materials.Commands.CreateMaterialCommand.Handler;
using Request = MyLfc.Application.Materials.Commands.CreateMaterialCommand.Request;
using Response = MyLfc.Application.Materials.Commands.CreateMaterialCommand.Response;
using MyLfc.Application.Tests.Infrastructure.Seeds;
using Shouldly;

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

        result.ShouldNotBeNull();
        result.Id.ShouldBeGreaterThan(0);

        var createdEntity = await _context.Materials.FirstOrDefaultAsync(x => x.Id == result.Id);

        //todo add check by props
        createdEntity.ShouldNotBeNull();
        createdEntity.Id.ShouldBe(result.Id);
        createdEntity.Type.ShouldBe(result.Type);
        createdEntity.Type.ShouldNotBe(MaterialType.Both);
        createdEntity.UserName.ShouldBe(UserSeeder.AdminUserName);
        createdEntity.CategoryName.ShouldBe(MaterialCategorySeeder.DefaultCategoryName);

    }

    [Fact]
    public async Task WhenExamCommandIsValid_ReturnsGuidOfNewExam()
    {
        var matCommand = new Fixture()
            .Create<Request>();
        matCommand.Type = MaterialType.News;

        var result = await _handler.Handle(matCommand, CancellationToken.None);

        result.ShouldNotBeNull();
        result.Id.ShouldBeGreaterThan(0);

        var createdEntity = await _context.Materials.FirstOrDefaultAsync(x => x.Id == result.Id);

        //todo add check by props
        createdEntity.ShouldNotBeNull();
        createdEntity.Id.ShouldBe(result.Id);
        createdEntity.Type.ShouldBe(result.Type);
        createdEntity.Type.ShouldNotBe(MaterialType.Both);
    }

}
