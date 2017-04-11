using System.Collections.Generic;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using MyLiverpool.Data.Common;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Business.Services.Tests.Helpers
{
    public class RoleDataGenerator
    {
        public static List<RoleGroup> GetRoleGroups()
        {
            var simpleUser = new User()
            {
                Email = "asd",
                UserName = "simple",
                Roles =
                {
                    new IdentityUserRole<int>()
                    {
                        RoleId = 2,
                        UserId = 1
                    },
                }
            };
            var editorUser = new User
            {
                Email = "as2d",
                UserName = "editor",
                Roles =
                {
                    new IdentityUserRole<int>()
                    {
                        RoleId = 2,
                        UserId = 2
                    },
                    new IdentityUserRole<int>()
                    {
                        RoleId = 4,
                        UserId = 2
                    },
                }
            };
            var adminUser = new User()
            {
                Email = "asd3",
                UserName = "admin",
                Roles =
                {
                    new IdentityUserRole<int>()
                    {
                        RoleId = 2,
                        UserId = 3
                    },
                    new IdentityUserRole<int>()
                    {
                        RoleId = 4,
                        UserId = 3
                    },
                    new IdentityUserRole<int>()
                    {
                        RoleId = 6,
                        UserId = 3
                    }
                }
            };
            var simpleRole = new Role()
            {
                Name = RolesEnum.Simple.ToString()
            };
            var editorRole = new Role()
            {
                Name = RolesEnum.NewsFull.ToString(),
            };
            var adminRole = new Role()
            {
                Name = RolesEnum.AdminFull.ToString()
            };
            return new List<RoleGroup>()
            {
                new RoleGroup()
                {
                    Name =  RoleGroupsEnum.Simple.ToString(),
                    RussianName = "пользователь",
                    RoleGroups = new List<RoleRoleGroup>()
                    {
                        new RoleRoleGroup()
                        {
                            Role = simpleRole
                        }
                    },
                    Users = new List<User>()
                    {
                        simpleUser
                    }
                },
                new RoleGroup()
                {
                    Name =  RoleGroupsEnum.Editor.ToString(),
                    RussianName = "редактор",
                    RoleGroups = new List<RoleRoleGroup>()
                    {
                        new RoleRoleGroup()
                        {
                            Role = simpleRole
                        },
                        new RoleRoleGroup()
                        {
                            Role = editorRole
                        }
                    },
                    Users = new List<User>()
                    {
                        editorUser
                    }
                },
                new RoleGroup()
                {
                    Name = RoleGroupsEnum.Admin.ToString(),
                    RussianName = "админ",
                    RoleGroups = new List<RoleRoleGroup>()
                    {
                        new RoleRoleGroup()
                        {
                            Role = simpleRole
                        },
                        new RoleRoleGroup()
                        {
                            Role = editorRole
                        },
                        new RoleRoleGroup()
                        {
                            Role = adminRole
                        }
                    },
                    Users = new List<User>()
                    {
                        adminUser
                    }
                }
            };
        }
    }
}
