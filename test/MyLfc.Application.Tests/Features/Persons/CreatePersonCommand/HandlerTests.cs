using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoFixture;
using FluentAssertions;
using MediatR;
using Moq;
using MyLfc.Application.Tests.Infrastructure.Extensions;
using MyLfc.Application.Tests.Pms.CreatePmCommand;
using MyLfc.Common.Web.Hubs;
using MyLiverpool.Business.Contracts;
using Xunit;
using Handler = MyLfc.Application.Persons.CreatePersonCommand.Handler;
using Request = MyLfc.Application.Persons.CreatePersonCommand.Request;
using Response = MyLfc.Application.Persons.CreatePersonCommand.Response;

namespace MyLfc.Application.Tests.Features.Persons.CreatePersonCommand
{
    [Collection(nameof(CreatePersonCommandCollection))]
    public class HandlerTests
    {
        private readonly ILiverpoolContext _context;
        private readonly IRequestHandler<Request, Response> _handler;

        public HandlerTests(CreatePersonCommandTestFixture fixture)
        {
            _context = fixture.Context;
            _handler = new Handler(fixture.Context, fixture.Mapper);
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
}
