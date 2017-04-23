using System.Collections.Generic;
using MyLiverpool.Business.Dto;
using MyLiverpool.Common.Utilities.Extensions;
using MyLiverpool.Data.Common;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Business.Services.Tests.Helpers
{
    public class RoleDataGenerator
    {
        public static List<RoleGroup> GetRoleGroups()
        {
            return new List<RoleGroup>()
            {
                new RoleGroup()
                {
                    Name =  RoleGroupsEnum.Simple.ToString(),
                    RussianName = RoleGroupsEnum.Simple.GetNameAttribute(),
                    RoleGroups = new List<RoleRoleGroup>()
                    {
                        new RoleRoleGroup()
                        {
                            RoleId = 1
                        }
                    }
                },
                new RoleGroup()
                {
                    Name =  RoleGroupsEnum.Editor.ToString(),
                    RussianName = RoleGroupsEnum.Editor.GetNameAttribute(),
                    RoleGroups = new List<RoleRoleGroup>()
                    {
                        new RoleRoleGroup()
                        {
                            RoleId = 1
                        },
                        new RoleRoleGroup()
                        {
                            RoleId = 2
                        }
                    }
                },
                new RoleGroup()
                {
                    Name = RoleGroupsEnum.Admin.ToString(),
                    RussianName = RoleGroupsEnum.Admin.GetNameAttribute(),
                    RoleGroups = new List<RoleRoleGroup>()
                    {
                        new RoleRoleGroup()
                        {
                            RoleId = 1
                        },
                        new RoleRoleGroup()
                        {
                            RoleId = 2
                        },
                        new RoleRoleGroup()
                        {
                            RoleId = 3
                        }
                    }
                }
            };
        }

        public static IEnumerable<RoleGroupDto> GetRoleGroupDtos()
        {
            var simpleRole = new RoleDto()
            {
                Name = RolesEnum.Simple.ToString(),
                Id = 1
            };
            var editorRole = new RoleDto()
            {
                Name = RolesEnum.NewsFull.ToString(),
                Id = 2
            };
            var adminRole = new RoleDto()
            {
                Name = RolesEnum.AdminFull.ToString(),
                Id = 3
            };
            return new List<RoleGroupDto>()
            {
                new RoleGroupDto()
                {
                    Name =  RoleGroupsEnum.Simple.GetNameAttribute(),
                    RussianName = RoleGroupsEnum.Simple.GetNameAttribute(),
                    Id = 1,
                    Roles = new List<RoleDto>() { simpleRole }
                    
                },
                new RoleGroupDto()
                {
                    Name =  RoleGroupsEnum.Editor.GetNameAttribute(),
                    RussianName = RoleGroupsEnum.Editor.GetNameAttribute(),
                    Id = 2,
                    Roles = new List<RoleDto>(){ simpleRole, editorRole}
                },
                new RoleGroupDto()
                {
                    Name = RoleGroupsEnum.Admin.GetNameAttribute(),
                    RussianName = RoleGroupsEnum.Admin.GetNameAttribute(),
                    Id = 3,
                    Roles = new List<RoleDto>(){simpleRole, editorRole, adminRole}
                }
            };
        }
    }
}
