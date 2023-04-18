using System;
using System.Threading.Tasks;
using AutoFixture;
using AutoFixture.AutoMoq;
using AutoMapper;
using FluentAssertions;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Features.Clubs;
using MyLfc.Application.Features.Clubs.Commands;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;
using MyLfc.Persistence;
using Xunit;


namespace MyLfc.Application.Tests.Features.Clubs.Commands;
public class UpdateClubCommandHandlerTests : IDisposable
{
    private readonly FullLiverpoolContext _context;
    private readonly IMapper _mapper;
    private readonly Fixture _fixture;

    public UpdateClubCommandHandlerTests()
    {
        var options = new DbContextOptionsBuilder<FullLiverpoolContext>()
            .UseInMemoryDatabase(Guid.NewGuid().ToString())
            .Options;

        _context = new FullLiverpoolContext(options);

        _mapper = new MapperConfiguration(cfg =>
        {
            cfg.AddProfile<ClubProfile>();
        }).CreateMapper();

        _fixture = new Fixture();
        _fixture.Customize(new AutoMoqCustomization());
    }

    [Fact]
    public async Task Handle_ShouldThrowNotFoundException_WhenClubDoesNotExist()
    {
        // Arrange
        var request = _fixture.Create<UpdateClubCommandRequest>();
        var handler = new UpdateClubCommand.Handler(_context, _mapper);

        // Act & Assert
        await Assert.ThrowsAsync<NotFoundException>(() => handler.Handle(request, default));
    }

    [Fact]
    public async Task Handle_ShouldUpdateClub_WhenClubExists()
    {
        // Arrange
        var club = new Club { Id = 1, Name = "Test Club" };
        _context.Clubs.Add(club);
        _context.SaveChanges();

        var request = _fixture.Build<UpdateClubCommandRequest>()
            .With(r => r.Id, club.Id)
            .Create();

        var handler = new UpdateClubCommand.Handler(_context, _mapper);

        // Act
        var response = await handler.Handle(request, default);

        // Assert
        response.Id.Should().Be(club.Id);
        club.Name.Should().Be(request.Name);
    }

    public void Dispose()
    {
        _context.Database.EnsureDeleted();
        _context.Dispose();
    }
}