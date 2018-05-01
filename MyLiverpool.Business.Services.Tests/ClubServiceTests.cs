using System;
using System.Collections.Generic;
using FluentAssertions.Common;
using Microsoft.EntityFrameworkCore;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Business.Services.Tests.Helpers;
using MyLiverpool.Common.Mappings;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess;
using Xunit;

namespace MyLiverpool.Business.Services.Tests
{
    public class ClubServiceTests : IDisposable
    {
        private static readonly IClubService _clubService;

        static ClubServiceTests()
        {
            _clubService = new ClubService(new GenericRepository<Club>(GetFakeContextWithClubs()), MapperConfig.GetConfiration.CreateMapper());
        }

        [Theory, ClassData(typeof(ClubCreateTestData))]
        public async void CreateClub(ClubDto toCreate, ClubDto expected)
        {
            var result = await _clubService.CreateAsync(toCreate);

            Assert.True(result.Id > 0);
            expected.Id = result.Id;
            result.IsSameOrEqualTo(expected);
        }

        [Theory, ClassData(typeof(ClubGetTestData))]
        public async void GetClub(int wishId, ClubDto expected)
        {
            var result = await _clubService.GetByIdAsync(wishId);

            result.IsSameOrEqualTo(expected);
        }

        [Theory, ClassData(typeof(ClubGetListTestData))]
        public async void GetListClub(int page, List<ClubDto> expected)
        {
            var result = await _clubService.GetListAsync(page);

            Assert.Equal(3, result.TotalItems);//bug list gets initial with created count
            Assert.Equal(page, result.PageNo);

            result.List.IsSameOrEqualTo(expected);
        } 

        [Theory, ClassData(typeof(ClubDeleteTestData))]
        public async void DeleteClub(int wishId, bool expected)
        {
            var wishToDelete = await _clubService.GetByIdAsync(wishId);
            var result = await _clubService.DeleteAsync(wishId);
            if (wishToDelete != null)
            {
                wishToDelete = await _clubService.GetByIdAsync(wishId);
                wishToDelete.IsSameOrEqualTo(null);
            }
            result.IsSameOrEqualTo(expected);
        }

        public void Dispose()
        {
            Console.WriteLine("ClubServiceTests.Dispose()");
        }

        //private static bool DbFilled = false;
        private static LiverpoolContext GetFakeContextWithClubs()
        {
            var context = new FakeContext(new DbContextOptions<LiverpoolContext>());
            //   if (!DbFilled)
            {
                context.Clubs.AddRange(ClubDataGenerator.Get3Clubs());
                context.SaveChanges();
                //      DbFilled = true;
            }
            return context;
        }
    }

    public class ClubCreateTestData : ClassTestData
    {
        protected override List<object[]> TestData => new List<object[]>
        {
            new object[]
            {
                new ClubDto() {Logo = "mes 1", EnglishName = "name 1", Name = "title 1", StadiumId = 1 },
                new ClubDto() {Logo = "mes 1", EnglishName = "name 1", Name = "title 1", StadiumId = 1 },
            },
            new object[]
            {
                new ClubDto() {Logo = "mes 2", EnglishName = "name 2", Name = "title 2", StadiumId = 2},
                new ClubDto() {Logo = "mes 2", EnglishName = "name 2", Name = "title 2", StadiumId = 2},
            },
        };
    }

    public class ClubGetTestData : ClassTestData
    {
        protected override List<object[]> TestData => new List<object[]>
        {
            new object[]
            {
                2,
                ClubDataGenerator.Get3ClubDtos()[1]
            },
            new object[]
            {
                3,
                ClubDataGenerator.Get3ClubDtos()[2]
            },
            new object[]
            {
                100,
                null
            }
        };
    }

    public class ClubGetListTestData : ClassTestData
    {
        protected override List<object[]> TestData => new List<object[]>
        {
            new object[]
            {
                1,
                ClubDataGenerator.Get3ClubDtos()
            },
            new object[]
            {
                5,
                new List<ClubDto>()
            },
            new object[]
            {
                100,
                new List<ClubDto>()
            }
        };
    }

    public class ClubDeleteTestData : ClassTestData
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
                1,
                true,
            },
        };

    }
}