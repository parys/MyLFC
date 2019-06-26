using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using FluentAssertions;
using MediatR;
using MyLfc.Persistence;
using Xunit;
using Handler = MyLfc.Application.Materials.GetMaterialListQuery.Handler;
using Request = MyLfc.Application.Materials.GetMaterialListQuery.Request;
using Response = MyLfc.Application.Materials.GetMaterialListQuery.Response;

namespace MyLfc.Application.Tests.Materials.GetMaterialListQuery
{
    [Collection(nameof(MaterialQueryCollection))]
    public class HandlerTests
    {
        private readonly LiverpoolContext _context;
        private readonly IRequestHandler<Request, Response> _handler;

        public HandlerTests(MaterialQueryTestFixture fixture)
        {
            _context = fixture.Context;
            _handler = new Handler(fixture.Context, fixture.Mapper);
        }

        [Fact]
        public async Task GetExamList_ReturnPagedResultOfExamListDto()
        {
            var result = await _handler.Handle(new Request { PageSize = 10, CurrentPage = 1 },
                CancellationToken.None);

            result.Should().NotBeNull();
            result.Should().BeOfType<Response>();
        }

        [Fact]
        public async Task GetMaterialList_WhenTakeMoreThanExist_ReturnAllMaterials()
        {
            var page = 1;
            var pageSize = 51;

            var result = await _handler.Handle(new Request { PageSize = pageSize, CurrentPage = page }, CancellationToken.None);

            var expectedCount = _context.Materials.Skip(1 - page).Take(pageSize).Count();

            result.Should().NotBeNull();
            result.Should().BeOfType<Response>();
            result.Results.Count.Should().BeGreaterThan(0);
            result.Results.Count.Should().Be(expectedCount);
            result.Results.All(x => x.UserId == MaterialQueryTestFixture.UserId).Should().BeTrue();
            result.Results.All(x => x.CategoryId == MaterialQueryTestFixture.MaterialCategoryId).Should().BeTrue();
            var resultMaterial = result.Results.First(x => x.Id == MaterialQueryTestFixture.MaterialWithComments);

            resultMaterial.CommentsCount.Should().Be(MaterialQueryTestFixture.Comments.Count);
        }
    }
}
