using System;
using System.Collections.Generic;
using FluentAssertions;
using Microsoft.EntityFrameworkCore;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.DTO;
using MyLiverpool.Business.Services.Tests.Helpers;
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
            _wishService = new WishService(MapperConfig.GetConfiration.CreateMapper(), new FakeIEmailSender(), new WishRepository(GetFakeContextWithWishes()));
        }

		[Theory, ClassData(typeof(WishCreateTestData))]
        public async void CreateTest(WishDto toCreate, WishDto expected)
		{
		    var result = await _wishService.CreateAsync(toCreate);
            
            Assert.True(result.Id > 0);
		    expected.Id = result.Id;
			result.ShouldBeEquivalentTo(expected);
		}

		[Theory, ClassData(typeof(WishGetTestData))]
        public async void GetTest(int wishId, WishDto expected)
		{
		    var result = await _wishService.GetAsync(wishId);

            result.ShouldBeEquivalentTo(expected);
		}

		[Theory, ClassData(typeof(WishGetListTestData))]
        public async void GetListTest(int page, List<WishDto> expected)
		{
		    var result = await _wishService.GetListAsync(page);

            Assert.Equal(3, result.TotalItems);
            Assert.Equal(page, result.PageNo);

            result.List.ShouldBeEquivalentTo(expected);
		}

		[Theory, ClassData(typeof(WishDeleteTestData))]
        public async void DeleteTest(int wishId, bool expected)
		{
		    var result = await _wishService.DeleteAsync(wishId);

            result.ShouldBeEquivalentTo(expected);
		}

        public void Dispose()
        {
            Console.WriteLine("WishServiceTests.Dispose()");
        }

        private LiverpoolContext GetFakeContextWithWishes()
        {
            var context = new FakeContext(new DbContextOptions<LiverpoolContext>());
         //   if (context.Wishs.Any())
            {
                context.Wishes.AddRange(WishDataGenerator.Get3Wish());
                context.SaveChanges();
            }
            return context;
        }
    }

    public class WishCreateTestData : ClassTestData
    {
        protected override List<object[]> TestData => new List<object[]>
        {
            new object[]
            {
                new WishDto() { Message = "mes 1", Type = 1, Title = "title 1" },
                new WishDto() { Message = "mes 1", Type = 1, Title = "title 1", TypeName = "Баг" },
            },
            new object[]
            {
                new WishDto() { Message = "mes 2", Type = 2, Title = "title 2"},
                new WishDto() { Message = "mes 2", Type = 2, Title = "title 2", TypeName = "Баг оформления" },
            },
        };
    }

    public class WishGetTestData : ClassTestData
    {
        protected override List<object[]> TestData => new List<object[]>
        {
            new object[]
            {
                2,
                WishDataGenerator.Get3WishDto()[1]
            },
            new object[]
            {
                3,
                WishDataGenerator.Get3WishDto()[2]
            },
            new object[]
            {
                10,
                null
            }
        };
    }
    public class WishGetListTestData : ClassTestData
    {
        protected override List<object[]> TestData => new List<object[]>
        {
            new object[]
            {
                1,
                WishDataGenerator.Get3WishDto()
            },
            new object[]
            {
                5,
                new List<WishDto>()
            },
            new object[]
            {
                10,
                null
            }
        };
    }

    public class WishDeleteTestData : ClassTestData
    {
        protected override List<object[]> TestData => new List<object[]>
        {
            new object[]
            {
                112,
                true,
            },
            new object[]
            {
                3,
                true,
            },
        };
    }
}
