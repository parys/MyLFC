using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoFixture;
using FluentAssertions;
using MediatR;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Application.Tests.Infrastructure.Extensions;
using MyLfc.Application.Tests.Infrastructure.Seeds;
using Xunit;
using Handler = MyLfc.Application.Features.Persons.Queries.GetPersonDetailQuery.Handler;
using Request = MyLfc.Application.Features.Persons.Queries.GetPersonDetailQuery.Request;
using Response = MyLfc.Application.Features.Persons.Queries.GetPersonDetailQuery.Response;

namespace MyLfc.Application.Tests.Features.Persons.GetPersonDetailQuery;

[Collection(nameof(PersonQueryCollection))]
public class HandlerTests
{
    private readonly IRequestHandler<Request, Response> _handler;
    private readonly ILiverpoolContext _context;

    public HandlerTests(PersonQueryTestFixture fixture)
    {
        _context = fixture.Context;
        _handler = new Handler(fixture.Context, fixture.Mapper);
    }

    [Fact]
    public async Task GetPersonDetails_WhenPersonExists_ReturnsPerson()
    {
        var request = new Fixture()
            .Create<Request>();

        request.Id = PersonsSeeder.PersonIdWithNickname;

        var result = await _handler.Handle(request, CancellationToken.None);
        
        result.Id.Should().Be(request.Id);
        result.ArePublicInstancePropertiesEqual(request);

        var objectInDb = _context.Persons.First(x => x.Id == request.Id);
        result.ArePublicInstancePropertiesEqual(objectInDb);
    }


    [Fact]
    public void GetPersonDetails_WhenPersonDoesNotExist_ThrowsNotFoundException()
    {
        var request = new Fixture()
            .Create<Request>();
        request.Id = 111111;


        Func<Task> result = async () =>  await _handler.Handle(request, CancellationToken.None);

        result.Should().ThrowAsync<NotFoundException>();
    }

}
