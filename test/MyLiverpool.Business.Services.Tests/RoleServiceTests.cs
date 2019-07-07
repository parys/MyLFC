using System;
using System.Collections.Generic;
using System.Linq;
using FluentAssertions.Common;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using MyLfc.Domain;
using MyLfc.Persistence;
using MyLiverpool.Business.Services.Tests.Helpers;
using Xunit;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Common.Mappings;
using MyLiverpool.Data.Common;
using MyLiverpool.Data.ResourceAccess.Interfaces;
using MyLiverpool.Data.ResourceAccess.Repositories;

namespace MyLiverpool.Business.Services.Tests
{
    public class RoleServiceTests : IDisposable
    {
        private static readonly LiverpoolContext Context = new FakeContext(new DbContextOptions<LiverpoolContext>());
        private static readonly IRoleService RoleService;
        private static readonly IUserRepository UserRepository;

        static RoleServiceTests()
        {
            InitRoles();
            UserRepository = new UserRepository(Context, GetUserManager());
            RoleService = new RoleService(new GenericRepository<RoleGroup>(GetFakeContextWithRolesAndRoleGroups()),
                MapperConfig.GetConfiration.CreateMapper());
        }
        
        [Theory, ClassData(typeof(GetRoleGroupsDtoTestData))]
        public async void GetRoleGroupsDtoAsync(IEnumerable<RoleGroupDto> expected)
        {
            var result = await RoleService.GetRoleGroupsWithRolesAsync();
            
            result.Count().IsSameOrEqualTo(expected.Count());
            result.IsSameOrEqualTo(expected);
        }
        
        public void Dispose()
        {
            Console.WriteLine("RoleServiceTests.Dispose()");
        }

        private static LiverpoolContext GetFakeContextWithRolesAndRoleGroups()
        {
            Context.RoleGroups.AddRange(RoleDataGenerator.GetRoleGroups());
            Context.SaveChanges();
            var users = new List<User>()
            {
                new User()
                {
                    Email = "asd",
                    UserName = "simple",
                    Roles = 
                    {
                        new IdentityUserRole<int>()
                        {
                            RoleId = 1
                        }
                    },
                    RoleGroupId = 1
                },
                new User
                {
                    Email = "as2d",
                    UserName = "editor",
                    Roles =
                    {
                        new IdentityUserRole<int>()
                        {
                            RoleId = 1
                        },
                        new IdentityUserRole<int>()
                        {
                            RoleId = 2
                        },
                    },
                    RoleGroupId = 2
                },
                new User()
                {
                    Email = "asd3",
                    UserName = "admin",
                    Roles =
                    {
                        new IdentityUserRole<int>()
                        {
                            RoleId = 1
                        },
                        new IdentityUserRole<int>()
                        {
                            RoleId = 2
                        },
                        new IdentityUserRole<int>()
                        {
                            RoleId = 3
                        }
                    },
                    RoleGroupId = 3
                }
            };
            users.ForEach(async u => await UserRepository.CreateAsync(u, "1234asdsaS"));
           
          //  UserRepository.AddToRolesAsync(users[0], new[] {RolesEnum.Simple.ToString()}).Wait();
          //  UserRepository.AddToRolesAsync(users[1], new[] {RolesEnum.Simple.ToString(), RolesEnum.NewsFull.ToString()}).Wait();
         //   UserRepository.AddToRolesAsync(users[2], new[] {RolesEnum.Simple.ToString(), RolesEnum.NewsFull.ToString(), RolesEnum.AdminFull.ToString()}).Wait();

            return Context;
        }

        private static void InitRoles()
        {
            var roleManager = new RoleManager<Role>(
                new RoleStore<Role, LiverpoolContext, int>(Context), new IRoleValidator<Role>[0], null, new IdentityErrorDescriber(), new Logger<RoleManager<Role>>(new LoggerFactory()));
            var roles = new List<Role>()
            {
                new Role()
                {
                    Name = RolesEnum.Simple.ToString()
                },
                new Role()
                {
                    Name = RolesEnum.NewsFull.ToString()
                },
                new Role()
                {
                    Name = RolesEnum.AdminFull.ToString()
                }
            };
            roles.ForEach(async r => await roleManager.CreateAsync(r));
        }

        private static UserManager<User> GetUserManager()
        {
            var store = new UserStore<User, Role, LiverpoolContext, int>(Context);
            return new UserManager<User>(store,
                new OptionsManager<IdentityOptions>(new OptionsFactory<IdentityOptions>(new IConfigureOptions<IdentityOptions>[0],new IPostConfigureOptions<IdentityOptions>[0] )),
                new PasswordHasher<User>(), new IUserValidator<User>[0],
                new IPasswordValidator<User>[0], null, new IdentityErrorDescriber(), null, new Logger<UserManager<User>>(new LoggerFactory()));
        }
    }

    public class GetRoleGroupsDtoTestData : ClassTestData
    {
        protected override List<object[]> TestData => new List<object[]>
        {
            new object[]
            {
                RoleDataGenerator.GetRoleGroupDtos()
            }
        };
    }
}
