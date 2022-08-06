using System.Threading;
using System.Threading.Tasks;
using AutoFixture;
using FluentAssertions;
using MediatR;
using MyLfc.Application.Tests.Infrastructure.Extensions;
using Xunit;
using Handler = MyLfc.Application.Features.Persons.Commands.CreatePersonCommand.Handler;
using Request = MyLfc.Application.Features.Persons.Commands.CreatePersonCommand.Request;
using Response = MyLfc.Application.Features.Persons.Commands.CreatePersonCommand.Response;

namespace MyLfc.Application.Tests.Features.Persons.CreatePersonCommand;

[Collection(nameof(CreatePersonCommandCollection))]
public class HandlerTests
{
    private readonly IRequestHandler<Request, Response> _handler;

    public HandlerTests(CreatePersonCommandTestFixture fixture)
    {
        _handler = new Handler(fixture.Context, fixture.Mapper, fixture.Environment);
    }

    [Fact]
    public async Task CreatePerson_WhenObjectIsCorrect_ReturnsCreatedPerson()
    {
        var request = new Fixture()
            .Create<Request>();
       
        var result = await _handler.Handle(request, CancellationToken.None);

        result.Id.Should().BeGreaterThan(0);

        result.ArePublicInstancePropertiesEqual(request);
    }

}
