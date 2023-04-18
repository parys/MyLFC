using AutoFixture;
using AutoMapper;
using FluentAssertions;
using Microsoft.EntityFrameworkCore;
using Moq;
using MyLfc.Application.Features.Clubs.Commands;
using MyLfc.Domain;
using MyLfc.Persistence;
using System.Threading;
using System.Threading.Tasks;
using Xunit;

namespace MyLfc.Application.Tests.Features.Clubs.Commands;

public class CreateClubCommandHandlerTests
{
    private readonly Fixture _fixture;
    private readonly FullLiverpoolContext _context;
    private readonly IMapper _mapper;

    public CreateClubCommandHandlerTests()
    {
        _fixture = new Fixture();

        var options = new DbContextOptionsBuilder<FullLiverpoolContext>()
            .UseInMemoryDatabase(databaseName: "TestDatabase")
            .Options;

        _context = new FullLiverpoolContext(options);

        _mapper = new MapperConfiguration(cfg =>
        {
            cfg.CreateMap<CreateClubCommandRequest, Club>();
        }).CreateMapper();
    }

    [Fact]
    public async Task Handle_ShouldAddClubToDatabase()
    {
        // Arrange
        var request = _fixture.Create<CreateClubCommandRequest>();
        var handler = new CreateClubCommand.Handler(_context, _mapper);

        // Act
        var response = await handler.Handle(request, CancellationToken.None);

        // Assert
        response.Id.Should().NotBe(0);
        var club = await _context.Clubs.FindAsync(response.Id);
        club.Should().NotBeNull();
        _context.SaveChanges();
        club = await _context.Clubs.FindAsync(response.Id);
        club.Should().NotBeNull();
    }
}
