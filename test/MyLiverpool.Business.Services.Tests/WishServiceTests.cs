using System;
using System.Collections.Generic;
using FluentAssertions.Common;
using Microsoft.EntityFrameworkCore;
using MyLfc.Domain;
using MyLfc.Persistence;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Business.Services.Tests.Helpers;
using MyLiverpool.Common.Mappings;
using MyLiverpool.Common.Utilities.Extensions;
using MyLiverpool.Data.Common;
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
			result.IsSameOrEqualTo(expected);
		}

		[Theory, ClassData(typeof(WishGetTestData))]
        public async void GetWish(int wishId, WishDto expected)
		{
		    var result = await _wishService.GetAsync(wishId);

            result.IsSameOrEqualTo(expected);
		}

        [Theory, ClassData(typeof(WishDeleteTestData))]
        public async void DeleteWish(int wishId, bool expected)
		{
		    var wishToDelete = await _wishService.GetAsync(wishId);
		    var result = await _wishService.DeleteAsync(wishId);
		    if (wishToDelete != null)
		    {
		        wishToDelete = await _wishService.GetAsync(wishId);
                wishToDelete.IsSameOrEqualTo(null);
		    }
            result.IsSameOrEqualTo(expected);
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
