using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;
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
                InitializeRoles(context);
                InitializeAdmin(context);

            }
        }

        private void InitializeRoles(LiverpoolContext context)
        {
            var roles = new List<Role>()
            {
                new Role()
                {
                    Name = RolesEnum.Admin.ToString()
                },
                new Role()
                {
                    Name = RolesEnum.User.ToString()
                },
                new Role()
                {
                    Name = RolesEnum.AdminAssistance.ToString()
                },
                new Role()
                {
                    Name = RolesEnum.MainNewsmaker.ToString()
                },
                new Role()
                {
                    Name = RolesEnum.Newsmaker.ToString()
                },
            };
            roles.ForEach(x => context.Roles.Add(x));
            context.SaveChanges();
        }

        private async void InitializeAdmin(LiverpoolContext context)
        {
            const string email = "admin@admin.com";
            const string password = "Admin@123456";
            const string roleName = "Admin";

            var manager = new ApplicationUserManager(new UserStore<User, Role, int, UserLogin, UserRole, UserClaim>(context));

            var user = new User
            {
                UserName = "admin",
                Email = email,
               // Password = password,
                PasswordHash = "AGGiU1NKWK8rnv/982kqHjWXJTa+Iw5UXV/iYEuWAAyWmieeXACECroeFoY3aRQRQg==",
                SecurityStamp = "3f94995b-bf44-4883-8db5-c915035a9742",
                Verify = true,
                LastModified = DateTime.Now,
                RegistrationDate = DateTime.Now

            };
            //var result = await manager.CreateAsync(user, password);
             context.Users.Add(user);
              context.SaveChanges();
            var savedUser = context.Users.First(x => x.UserName == user.UserName);
            var adminRole = context.Roles.First(x => x.Name == roleName);
            var userRole = new UserRole()
            {
                RoleId = adminRole.Id,
                UserId = savedUser.Id
            };

            //await manager.AddToRoleAsync(savedUser.Id, adminRole.Name);

            savedUser.Roles.Add(userRole);
            adminRole.Users.Add(userRole);
            context.Users.AddOrUpdate(savedUser);
            context.Roles.AddOrUpdate(adminRole);
            context.SaveChanges();
        }
    }

    public enum RolesEnum
    {
        Admin = 1,
        User = 2,
        AdminAssistance = 3,
        MainNewsmaker = 4,
        Newsmaker = 5,


    }
}
