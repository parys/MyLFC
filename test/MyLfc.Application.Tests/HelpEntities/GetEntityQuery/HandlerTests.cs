using System;
using System.Threading;
using System.Threading.Tasks;
using FluentAssertions;
using MediatR;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Application.Tests.HelpEntities.CreateOrUpdateEntityCommand;
using MyLiverpool.Data.Common;
using Xunit;
using Handler = MyLfc.Application.HelpEntities.GetEntityQuery.Handler;
using Request = MyLfc.Application.HelpEntities.GetEntityQuery.Request;
using Response = MyLfc.Application.HelpEntities.GetEntityQuery.Response;

namespace MyLfc.Application.Tests.HelpEntities.GetEntityQuery
{
    [Collection(nameof(CreateOrUpdateEntityCommandCollection))]
    public class HandlerTests
    {
        private readonly IRequestHandler<Request, Response> _handler;

        public HandlerTests(CreateOrUpdateEntityCommandTestFixture fixture)
        {
            _handler = new Handler(fixture.Context);
        }

        [Fact]
        public async Task GivenValidType_ReturnsEntity()
        {
            var entityType = HelperEntityType.BestPlayer;

            var result = await _handler.Handle(new Request { Type = entityType }, CancellationToken.None);

            result.Type.Should().Be(entityType);
            result.Value.Should().NotBeNullOrWhiteSpace();
        }

        [Fact]
        public void WhenTypeNotExist_ThrowsNotFoundException()
        {
            Func<Task> result = async () => await _handler.Handle(new Request { Type = (HelperEntityType) 144 }, CancellationToken.None);

            result.Should().ThrowAsync<NotFoundException>();
        }
    }
}
