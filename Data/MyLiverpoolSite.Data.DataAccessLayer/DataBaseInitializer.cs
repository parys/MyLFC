using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data.Entity;
using System.Linq;
using System.Reflection;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using MyLiverpoolSite.Business.Services;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Data.DataAccessLayer
{
    //todo
    public class DatabaseInitializer : CreateDatabaseIfNotExists<LiverpoolContext>
    {
        protected override void Seed(LiverpoolContext context)
        {
            if (!context.Roles.Any())
            {
                InitializeRoleGroups(context);
                InitializeRoles(context);
                InitializeAdmin(context);
                InitializeDeletedUser(context);
                //    InitializeDeletedUser(context);
            }
        }

        private void InitializeRoleGroups(LiverpoolContext context)
        {
            var roleStore = new RoleStore<Role, int, UserRole>(context);
            var roleManager = new RoleManager<Role, int>(roleStore);
            var roleGroups = new List<RoleGroup>()
            {
                new RoleGroup()
                {
                    Name = RoleGroupsEnum.Admin.ToString()
                },
                new RoleGroup()
                {
                    Name = RoleGroupsEnum.User.ToString()
                },
                new RoleGroup()
                {
                    Name = RoleGroupsEnum.AdminAssistance.ToString()
                },
                new RoleGroup()
                {
                    Name = RoleGroupsEnum.MainNewsmaker.ToString()
                },
                new RoleGroup()
                {
                    Name = RoleGroupsEnum.Newsmaker.ToString()
                },
            };
            roleGroups.ForEach(x => context.RoleGroups.Add(x));
            // roles.ForEach(x => roleManager.Create(x));
            //roleManager.Create(new Role { Name = RolesEnum.User.ToString() });
            context.SaveChanges();
        }

        private void InitializeRoles(LiverpoolContext context)
        {
            var roleStore = new RoleStore<Role, int, UserRole>(context);
            var roleManager = new RoleManager<Role, int>(roleStore);

            var adminRoleGroup = context.RoleGroups.First(x => x.Name == RoleGroupsEnum.Admin.ToString());

            var roles = new List<Role>()
            {
                new Role()
                {
                    Name = RolesEnum.Simple.ToString(),
                    RoleGroups = new List<RoleGroup>()
                    {
                        adminRoleGroup
                    }
                },
                new Role()
                {
                    Name = RolesEnum.NewsFull.ToString(),
                    RoleGroups = new List<RoleGroup>()
                    {
                        adminRoleGroup
                    }
                },
                new Role()
                {
                    Name = RolesEnum.NewsStart.ToString(),
                    RoleGroups = new List<RoleGroup>()
                    {
                        adminRoleGroup
                    }
                },
                new Role()
                {
                    Name = RolesEnum.BlogsFull.ToString(),
                    RoleGroups = new List<RoleGroup>()
                    {
                        adminRoleGroup
                    }
                },
                new Role()
                {
                    Name = RolesEnum.BlogsStart.ToString(),
                    RoleGroups = new List<RoleGroup>()
                    {
                        adminRoleGroup
                    }
                },
                new Role()
                {
                    Name = RolesEnum.UsersFull.ToString(),
                    RoleGroups = new List<RoleGroup>()
                    {
                        adminRoleGroup
                    }
                },
                new Role()
                {
                    Name = RolesEnum.UsersStart.ToString(),
                    RoleGroups = new List<RoleGroup>()
                    {
                        adminRoleGroup
                    }
                },
            };
            //  roles.ForEach(x => context.Roles.Add(x));
            roles.ForEach(x => roleManager.Create(x));
            //roleManager.Create(new Role { Name = RolesEnum.User.ToString() });
            //   context.SaveChanges();
        }

        private void InitializeDeletedUser(LiverpoolContext context)
        {
            const string email = "deleted@deleted.com";

            var user = new User
            {
                Id = -1,
                UserName = "deleted",
                Email = email,
                Verify = true,
                LastModified = DateTime.Now,
                RegistrationDate = DateTime.Now,
                RoleGroupId = 1 //todo change to simple user
            };

            var userStore = new UserStore<User, Role, int, UserLogin, UserRole, UserClaim>(context);
            var userManager = new UserManager<User, int>(userStore);

            userManager.Create(user, "123456");

            userManager.AddToRole(user.Id, RolesEnum.Simple.ToString());
        }


        private void InitializeAdmin(LiverpoolContext context)
        {
            const string email = "a@a.c";

            var user = new User
            {
                UserName = "admin",
                Email = email,
                Verify = true,
                LastModified = DateTime.Now,
                RegistrationDate = DateTime.Now,
                Birthday = DateTime.Now,
                RoleGroupId = 1
            };

            var userStore = new UserStore<User, Role, int, UserLogin, UserRole, UserClaim>(context);
            var userManager = new UserManager<User, int>(userStore);

            userManager.Create(user, "123456");
            var adminRoles = context.RoleGroups.First(x => x.Name == RoleGroupsEnum.Admin.ToString()).Roles.ToList();
            foreach (var role in adminRoles)
            {
                userManager.AddToRole(user.Id, role.Name);
              //  userManager.AddToRole(user.Id, RoleGroupsEnum.Admin.ToString());
            }

            //var result = await manager.CreateAsync(user, password);
            // context.Users.Add(user);
            //  context.SaveChanges();
            //var savedUser = context.Users.First(x => x.UserName == user.UserName);
            //var adminRole = context.Roles.First(x => x.Name == roleName);
            //var userRole = new UserRole()
            //{
            //    RoleId = adminRole.Id,
            //    UserId = savedUser.Id
            //};

            //await manager.AddToRoleAsync(savedUser.Id, adminRole.Name);

            //savedUser.Roles.Add(userRole);
            //adminRole.Users.Add(userRole);
            //context.Users.AddOrUpdate(savedUser);
            //context.Roles.AddOrUpdate(adminRole);
            //context.SaveChanges();
        }

        public static string GetEnumDescription(Enum value)
        {
            FieldInfo fi = value.GetType().GetField(value.ToString());

            DescriptionAttribute[] attributes =
                (DescriptionAttribute[])fi.GetCustomAttributes(
                typeof(DescriptionAttribute),
                false);

            if (attributes != null &&
                attributes.Length > 0)
                return attributes[0].Description;
            else
                return value.ToString();
        }
    }
}
