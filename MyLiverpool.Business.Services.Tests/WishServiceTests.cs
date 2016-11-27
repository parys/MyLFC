using System;
using System.Collections.Generic;
using FluentAssertions;
using Microsoft.EntityFrameworkCore;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.DTO;
using MyLiverpool.Business.Services.Services;
using MyLiverpool.Common.Mappings;
using MyLiverpool.Common.Utilities.Extensions;
using MyLiverpool.Data.Entities;
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
			expected.ShouldBeEquivalentTo(result);
		}

		[Theory, ClassData(typeof(WishGetTestData))]
        public async void GetTest(int wishId, WishDto expected)
		{
		    var result = await _wishService.GetAsync(wishId);

			expected.ShouldBeEquivalentTo(result);
		}

		//[Theory, ClassData(typeof(WishGetListTestData))]
  //      public async void GetListTest(int wishId, WishDto expected)
		//{
		//    var result = await _wishService.GetListAsync(1);

		//	expected.ShouldBeEquivalentTo(result);
		//}

		[Theory, ClassData(typeof(WishDeleteTestData))]
        public async void DeleteTest(int wishId, bool expected)
		{
		    var result = await _wishService.DeleteAsync(wishId);

			expected.ShouldBeEquivalentTo(result);
		}

        public void Dispose()
        {
            // TestFixture Teardown attributes
            Console.WriteLine("WishServiceTests.Dispose()");
        }

        private LiverpoolContext GetFakeContextWithWishes()
        {
            var context = new FakeContext(new DbContextOptions<LiverpoolContext>());
            context.Wishs.AddRange(
                new Wish()
                {
                    Type = WishType.Bug,
                    Message = "mes 1",
                    Title = "title 1"
                },
                new Wish()
                {
                    Type = WishType.BugUi,
                    Message = "mes 2",
                    Title = "title 2"
                },
                new Wish()
                {
                    Type = WishType.Feature,
                    Message = "mes 3",
                    Title = "title 3"
                });
            context.SaveChanges();
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
                new WishDto()
                {
                    Id = 2,
                    Type = (int)WishType.BugUi,
                    TypeName = WishType.BugUi.GetNameAttribute(),
                    Message = "mes 2",
                    Title = "title 2"
                }
            },
            new object[]
            {
                3,
                new WishDto()
                {
                    Id = 3,
                    Type = (int)WishType.Feature,
                    TypeName = WishType.Feature.GetNameAttribute(),
                    Message = "mes 3",
                    Title = "title 3"
                }
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
                2,
                new WishDto()
                {
                    Id = 2,
                    Type = (int)WishType.BugUi,
                    TypeName = WishType.BugUi.GetNameAttribute(),
                    Message = "mes 2",
                    Title = "title 2"
                }
            },
            new object[]
            {
                3,
                new WishDto()
                {
                    Id = 3,
                    Type = (int)WishType.Feature,
                    TypeName = WishType.Feature.GetNameAttribute(),
                    Message = "mes 3",
                    Title = "title 3"
                }
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
