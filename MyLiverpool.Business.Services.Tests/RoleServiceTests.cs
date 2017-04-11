using System;
using System.Collections.Generic;
using FluentAssertions;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.DtoNext;
using MyLiverpool.Business.Services.Tests.Helpers;
using MyLiverpool.Common.Mappings;
using MyLiverpool.Data.Common;
using MyLiverpool.Data.Entities;
using MyLiverpool.Data.ResourceAccess;
using MyLiverpool.Data.ResourceAccess.Repositories;
using Xunit;

namespace MyLiverpool.Business.Services.Tests
{
    public class RoleServiceTests : IDisposable
    {
        private static readonly LiverpoolContext Context = new FakeContext(new DbContextOptions<LiverpoolContext>());
        private static readonly IRoleService RoleService;

        static RoleServiceTests()
        {
            RoleService = new RoleService(new RoleGroupRepository(GetFakeContextWithRolesAndRoleGroups()),
                MapperConfig.GetConfiration.CreateMapper(), new UserRepository(Context, GetUserManager()));
        }


        [Theory, ClassData(typeof(GetUserRolesTestData))]
        public async void GetUserRolesAsync(int userId, string expected)
        {
            var result = await RoleService.GetUserRolesAsync(userId);
            
            result.ShouldBeEquivalentTo(expected);
        }

        public void Dispose()
        {
            Console.WriteLine("RoleServiceTests.Dispose()");
        }

        private static LiverpoolContext GetFakeContextWithRolesAndRoleGroups()
        {
            //   if (!DbFilled)
            {
                Context.RoleGroups.AddRange(RoleDataGenerator.GetRoleGroups());
                Context.SaveChanges();
                //      DbFilled = true;
            }
            return Context;
        }

        private static LiverpoolContext GetFakeContextWithUsers()
        {
            //   if (!DbFilled)
            {
                Context.RoleGroups.AddRange(RoleDataGenerator.GetRoleGroups());
                Context.SaveChanges();
                //      DbFilled = true;
            }
            return Context;
        }

        private static UserManager<User> GetUserManager()
        {
            return new UserManager<User>(new UserStore<User, Role, LiverpoolContext, int>(Context),
                new OptionsManager<IdentityOptions>(new IConfigureOptions<IdentityOptions>[0]),
                new PasswordHasher<User>(), new IUserValidator<User>[0],
                new IPasswordValidator<User>[0], null, new IdentityErrorDescriber(), null, null);
        }
    }


    public class GetUserRolesTestData : ClassTestData
    {
        protected override List<object[]> TestData => new List<object[]>
        {
            new object[]
            {
                112,
                string.Empty,
            },
            new object[]
            {
                3,
                string.Join(", ", RolesEnum.Simple.ToString(), RolesEnum.NewsFull.ToString(), RolesEnum.AdminFull.ToString())
            },
            new object[]
            {
                1,
                string.Join(", ", RolesEnum.Simple.ToString())
            },
            new object[]
            {
                2,
                string.Join(", ", RolesEnum.Simple.ToString(), RolesEnum.NewsFull.ToString())
            },
        };
    }
}
