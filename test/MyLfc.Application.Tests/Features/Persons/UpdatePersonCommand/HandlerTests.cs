using System;
using System.Threading;
using System.Threading.Tasks;
using AutoFixture;
using FluentAssertions;
using MediatR;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Application.Tests.Infrastructure.Extensions;
using Xunit;
using Handler = MyLfc.Application.Persons.UpdatePersonCommand.Handler;
using Request = MyLfc.Application.Persons.UpdatePersonCommand.Request;
using Response = MyLfc.Application.Persons.UpdatePersonCommand.Response;

namespace MyLfc.Application.Tests.Features.Persons.UpdatePersonCommand
{
    [Collection(nameof(UpdatePersonCommandCollection))]
    public class HandlerTests
    {
        private readonly IRequestHandler<Request, Response> _handler;

        public HandlerTests(UpdatePersonCommandTestFixture fixture)
        {
            _handler = new Handler(fixture.Context, fixture.Mapper, fixture.Environment);
        }

        [Fact]
        public async Task UpdatePerson_WhenObjectIsCorrect_ReturnsUpdatedPerson()
        {
            var request = new Fixture()
                .Create<Request>();
            request.Photo = null;
            request.Id = UpdatePersonCommandTestFixture.PersonId;

            var result = await _handler.Handle(request, CancellationToken.None);
            
            result.Id.Should().Be(request.Id);
            result.ArePublicInstancePropertiesEqual(request);
        }


        [Fact]
        public void UpdatePerson_WhenObjectIsNotExist_ThrowsNotFoundException()
        {
            var request = new Fixture()
                .Create<Request>();
            request.Photo = null;
            request.Id = 111111;


            Func<Task> result = async () =>  await _handler.Handle(request, CancellationToken.None);

            result.Should().ThrowAsync<NotFoundException>();
        }

    }
}
