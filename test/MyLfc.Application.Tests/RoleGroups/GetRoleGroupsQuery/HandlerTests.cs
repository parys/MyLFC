using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using FluentAssertions;
using MediatR;
using Xunit;
using Handler = MyLfc.Application.RoleGroups.GetRoleGroupsQuery.Handler;
using Request = MyLfc.Application.RoleGroups.GetRoleGroupsQuery.Request;
using Response = MyLfc.Application.RoleGroups.GetRoleGroupsQuery.Response;

namespace MyLfc.Application.Tests.RoleGroups.GetRoleGroupsQuery
{
    [Collection(nameof(RoleGroupQueryCollection))]
    public class HandlerTests
    {
        private readonly IRequestHandler<Request, Response> _handler;

        public HandlerTests(RoleGroupQueryTestFixture fixture)
        {
            _handler = new Handler(fixture.Context, fixture.Mapper);
        }
    
        [Fact]
        public async Task GivenValidRequest_WhenIncludeRolesFalse_ReturnsListsOfRoleGroupsWithRoles()
        {
            var result = await _handler.Handle(new Request{IncludeRoles = true}, CancellationToken.None);

            result.Should().NotBeNull();
            result.Results.Count().Should().BeGreaterThan(0);
            result.Results.ToList().ForEach(x => x.Roles.Count().Should().BeGreaterThan(0));
        }
    }
}
