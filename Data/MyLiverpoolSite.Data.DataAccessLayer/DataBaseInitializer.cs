using System;
using System.Collections.Generic;
using System.Data.Entity;
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
                InitializeDeletedUser(context);
            //    InitializeDeletedUser(context);
            }
        }

        private void InitializeRoles(LiverpoolContext context)
        {
               var roleStore = new RoleStore<Role, int, UserRole>(context);
                var roleManager = new RoleManager<Role, int>(roleStore);
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
                RegistrationDate = DateTime.Now

            };

            var userStore = new UserStore<User, Role, int, UserLogin, UserRole, UserClaim>(context);
            var userManager = new UserManager<User, int>(userStore);

            userManager.Create(user, "123!Qq");

            userManager.AddToRole(user.Id, RolesEnum.User.ToString());
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
            };

            var userStore = new UserStore<User, Role, int, UserLogin, UserRole, UserClaim>(context);
            var userManager = new UserManager<User, int>(userStore);

            userManager.Create(user, "123!Qq");
            userManager.AddToRole(user.Id, RolesEnum.Admin.ToString());
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
    }
}
