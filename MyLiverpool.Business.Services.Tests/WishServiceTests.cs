using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.DTO;
using MyLiverpool.Business.Services.Services;
using MyLiverpool.Common.Mappings;
using MyLiverpool.Data.ResourceAccess;
using MyLiverpool.Data.ResourceAccess.Repositories;
using Xunit;

namespace MyLiverpool.Business.Services.Tests
{
    public class WishServiceTests : IDisposable
    {
        private readonly IWishService _wishService;

        public WishServiceTests()
        {
            _wishService = new WishService(MapperConfig.GetConfiration.CreateMapper(), new FakeIEmailSender(), new WishRepository(new FakeContext(new DbContextOptions<LiverpoolContext>())));
        }

		[Theory, ClassData(typeof(WishCreateTestData))]
        public async void CreateTest(WishDto toCreate, WishDto expected)
		{
		    var result = await _wishService.CreateAsync(toCreate);

			Assert.Equal(expected, result);
		//	Assert.True(expected.Equals(result));
		}

        public void Dispose()
        {
            // TestFixture Teardown attributes
            Console.WriteLine("WishServiceTests.Dispose()");
        }
    }

    public class WishCreateTestData : ClassTestData
    {
        protected override List<object[]> TestData => new List<object[]>
        {
            new object[]
            {
                new WishDto() {Message = "mes 1", Type = 1, Title = "title 1", TypeName = "Баг"},
                new WishDto() {Id = 1, Message = "mes 1", Type = 1, Title = "title 1", TypeName = "Баг"},
            },
        };
    }
}
