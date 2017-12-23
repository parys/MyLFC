using System;
using System.Collections.Generic;
using System.Linq;
using FluentAssertions;
using Microsoft.EntityFrameworkCore;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Business.Services.Tests.Helpers;
using MyLiverpool.Common.Mappings;
using MyLiverpool.Common.Utilities.Extensions;
using MyLiverpool.Data.Common;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess;
using Xunit;

namespace MyLiverpool.Business.Services.Tests
{
    public class WishServiceTests : IDisposable
    {
        private static readonly IWishService _wishService;

        static WishServiceTests()
        {
            _wishService = new WishService(MapperConfig.GetConfiration.CreateMapper(), new FakeIEmailSender(), new GenericRepository<Wish>(GetFakeContextWithWishes()));
        }

		[Theory, ClassData(typeof(WishCreateTestData))]
        public async void CreateWish(WishDto toCreate, WishDto expected)
		{
		    var result = await _wishService.CreateAsync(toCreate);
            
            Assert.True(result.Id > 0);
		    expected.Id = result.Id;
			result.ShouldBeEquivalentTo(expected);
		}

		[Theory, ClassData(typeof(WishGetTestData))]
        public async void GetWish(int wishId, WishDto expected)
		{
		    var result = await _wishService.GetAsync(wishId);

            result.ShouldBeEquivalentTo(expected);
		}

        [Theory, ClassData(typeof(WishGetListTestData))]
        public async void GetListWish(int page, List<WishDto> expected, int expectedCount, int? typeId = null, string filterText = null)
        {
            var result = await _wishService.GetListAsync(page, typeId, filterText);

            Assert.Equal(expectedCount, result.TotalItems);//bug list gets initial with created count
            Assert.Equal(page, result.PageNo);

            result.List.ShouldBeEquivalentTo(expected);
        }

        [Theory, ClassData(typeof(WishDeleteTestData))]
        public async void DeleteWish(int wishId, bool expected)
		{
		    var wishToDelete = await _wishService.GetAsync(wishId);
		    var result = await _wishService.DeleteAsync(wishId);
		    if (wishToDelete != null)
		    {
		        wishToDelete = await _wishService.GetAsync(wishId);
                wishToDelete.ShouldBeEquivalentTo(null);
		    }
            result.ShouldBeEquivalentTo(expected);
		}

        public void Dispose()
        {
            Console.WriteLine("WishServiceTests.Dispose()");
        }
        
        private static LiverpoolContext GetFakeContextWithWishes()
        {
            
            var context = new FakeContext(new DbContextOptions<LiverpoolContext>());
            {
                context.Wishes.AddRange(WishDataGenerator.GetWishes());
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
                new WishDto() { Message = "mes 1", Type = 1, Title = "title 1", TypeName = "Баг", StateName = WishStateEnum.Default.GetNameAttribute()},
            },
            new object[]
            {
                new WishDto() { Message = "mes 2", Type = 2, Title = "title 2"},
                new WishDto() { Message = "mes 2", Type = 2, Title = "title 2", TypeName = "Баг оформления", StateName = WishStateEnum.Default.GetNameAttribute() },
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
                WishDataGenerator.GetWishDtos()[1]
            },
            new object[]
            {
                3,
                WishDataGenerator.GetWishDtos()[2]
            },
            new object[]
            {
                10,
                null
            },
        };
    }
    public class WishGetListTestData : ClassTestData
    {
        protected override List<object[]> TestData => new List<object[]>
        {
            new object[]
            {
                1,
                WishDataGenerator.GetWishDtos(),
                5
            },
            new object[]
            {
                5,
                new List<WishDto>(),
                5
            },
            new object[]
            {
                10,
                new List<WishDto>(),
                5
            },
            new object[]
            {
                1,
                WishDataGenerator.GetWishDtos().Where(w => w.Type == 3).ToList(),
                3,
                3
            },
            new object[]
            {
                1,
                WishDataGenerator.GetWishDtos().Where(w => w.Message.Contains("help")).ToList(),
                3,
                null,
                "help"
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
