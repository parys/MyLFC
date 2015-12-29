using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data.Entity;
using System.Linq;
using System.Reflection;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpoolSite.Data.DataAccessLayer
{
    public class DatabaseInitializer : DropCreateDatabaseIfModelChanges<LiverpoolContext> //todo WARNING ALARM
    {

        protected override void Seed(LiverpoolContext context)
        {
            if (!context.PrivateMessages.Any())
            {
                InitializeRoleGroups(context);
                InitializeRoles(context);

                InitializeAdmin(context);
                InitializeDeletedUser(context);
                InitializeSimpleUser(context);

                InitializeForumSections(context);
                InitializeForumSubsections(context);
                InitializeForumThemes(context);

                InitializeNewsCategories(context);
                InitializeNews(context);

                InitializePrivateMessages(context);

            }
        }

        #region roles
        private void InitializeRoleGroups(LiverpoolContext context)
        {
            var roleGroups = new List<RoleGroup>()
            {
                new RoleGroup()
                {
                    Name = RoleGroupsEnum.Admin.ToString(),//1
                    RussianName = RolesMessages.Administrator
                },
                new RoleGroup()
                {
                    Name = RoleGroupsEnum.Author.ToString(),
                    RussianName = RolesMessages.Author
                },
                new RoleGroup()
                {
                    Name = RoleGroupsEnum.AdminAssistance.ToString(),//3
                    RussianName = RolesMessages.AdminAssistance
                },
                new RoleGroup()
                {
                    Name = RoleGroupsEnum.MainNewsmaker.ToString(),
                    RussianName = RolesMessages.MainNewsmaker
                },
                new RoleGroup()
                {
                    Name = RoleGroupsEnum.Newsmaker.ToString(),//5
                    RussianName = RolesMessages.Newsmaker
                },
                new RoleGroup()
                {
                    Name = RoleGroupsEnum.Editor.ToString(),
                    RussianName = RolesMessages.Editor
                },
                new RoleGroup()
                {
                    Name = RoleGroupsEnum.MainEditor.ToString(),//7
                    RussianName = RolesMessages.MainEditor
                },
                new RoleGroup()
                {
                    Name = RoleGroupsEnum.Intern.ToString(),
                    RussianName = RolesMessages.Intern
                },
                new RoleGroup()
                {
                    Name = RoleGroupsEnum.Moderator.ToString(),//9
                    RussianName = RolesMessages.Moderator
                },
                new RoleGroup()
                {
                    Name = RoleGroupsEnum.MainModerator.ToString(),
                    RussianName = RolesMessages.MainModerator
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

            var adminRoleGroup = context.RoleGroups.First(x => x.Name == RoleGroupsEnum.Admin.ToString()); //1
            var adminAssistanceRole = context.RoleGroups.First(x => x.Name == RoleGroupsEnum.AdminAssistance.ToString());
            var moderatorRole = context.RoleGroups.First(x => x.Name == RoleGroupsEnum.Moderator.ToString());//3
            var mainModeratorRole = context.RoleGroups.First(x => x.Name == RoleGroupsEnum.MainModerator.ToString());
            var authorRole = context.RoleGroups.First(x => x.Name == RoleGroupsEnum.Author.ToString());//5
            var internRole = context.RoleGroups.First(x => x.Name == RoleGroupsEnum.Intern.ToString());
            var mainEditorRole = context.RoleGroups.First(x => x.Name == RoleGroupsEnum.MainEditor.ToString());//7
            var editorRole = context.RoleGroups.First(x => x.Name == RoleGroupsEnum.Editor.ToString());
            var mainNewsmakeRole = context.RoleGroups.First(x => x.Name == RoleGroupsEnum.MainNewsmaker.ToString());//9
            var newsmakerRole = context.RoleGroups.First(x => x.Name == RoleGroupsEnum.Newsmaker.ToString());

            var roles = new List<Role>()
            {
                new Role() //1
                {
                    Name = RolesEnum.Simple.ToString(),
                    RoleGroups = new List<RoleGroup>()
                    {
                        adminRoleGroup,
                       
                    }
                },
                new Role()
                {
                    Name = RolesEnum.NewsFull.ToString(),
                    RoleGroups = new List<RoleGroup>()
                    {
                        adminRoleGroup,
                        newsmakerRole,
                        mainNewsmakeRole,
                        editorRole,
                        mainEditorRole,

                    }
                },
                new Role()//3
                {
                    Name = RolesEnum.NewsStart.ToString(),
                    RoleGroups = new List<RoleGroup>()
                    {
                        adminRoleGroup,
                        internRole,
                        newsmakerRole,
                        mainNewsmakeRole,
                        editorRole,
                        mainEditorRole,
                    }
                },
                new Role()
                {
                    Name = RolesEnum.BlogsFull.ToString(),
                    RoleGroups = new List<RoleGroup>()
                    {
                        adminRoleGroup,

                    }
                },
                new Role()//5
                {
                    Name = RolesEnum.BlogsStart.ToString(),
                    RoleGroups = new List<RoleGroup>()
                    {
                        adminRoleGroup,

                    }
                },
                new Role()
                {
                    Name = RolesEnum.UsersFull.ToString(),
                    RoleGroups = new List<RoleGroup>()
                    {
                        adminRoleGroup,

                    }
                },
                new Role()//7
                {
                    Name = RolesEnum.UsersStart.ToString(),
                    RoleGroups = new List<RoleGroup>()
                    {
                        adminRoleGroup,
                        moderatorRole,
                        mainModeratorRole,

                    }
                },
                new Role()
                {
                    Name = RolesEnum.AdminFull.ToString(),
                    RoleGroups = new List<RoleGroup>()
                    {
                        adminRoleGroup,

                    }
                },
                new Role()//9
                {
                    Name = RolesEnum.ModeratorFull.ToString(),
                    RoleGroups = new List<RoleGroup>()
                    {
                        adminRoleGroup,

                    }
                },
                new Role()
                {
                    Name = RolesEnum.ModeratorStart.ToString(),
                    RoleGroups = new List<RoleGroup>()
                    {
                        adminRoleGroup,

                    }
                },
                new Role()//11
                {
                    Name = RolesEnum.Intern.ToString(),
                    RoleGroups = new List<RoleGroup>()
                    {
                        adminRoleGroup,

                    }
                },

            };
            //  roles.ForEach(x => context.Roles.Add(x));
            roles.ForEach(x => roleManager.Create(x));
            //roleManager.Create(new Role { Name = RolesEnum.User.ToString() });
            //   context.SaveChanges();
        }
        #endregion

        #region users 
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
                RoleGroupId = 2 
            };

            var userStore = new UserStore<User, Role, int, UserLogin, UserRole, UserClaim>(context);
            var userManager = new UserManager<User, int>(userStore);

            userManager.Create(user, "123456");
            userManager.AddToRole(user.Id, RolesEnum.Simple.ToString());
        }

        private void InitializeSimpleUser(LiverpoolContext context)
        {
            const string email = "user@user.com";

            var user = new User
            {
                UserName = "user",
                Email = email,
                Verify = true,
                LastModified = DateTime.Now,
                RegistrationDate = DateTime.Now,
                RoleGroupId = 2 
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
        #endregion


        private void InitializeForumSections(LiverpoolContext context)
        {
            var forumSection1 = new ForumSection()
            {
                Name = "section 1"
            };
            var forumSection2 = new ForumSection()
            {
                Name = "section 2"
            };
            context.ForumSections.Add(forumSection1);
            context.ForumSections.Add(forumSection2);
            context.SaveChanges();
        }

        private void InitializeForumSubsections(LiverpoolContext context)
        {
            var forumSubsection1 = new ForumSubsection()
            {
                Name = "subsection 1",
                Description = "subsection description 1",
                SectionId = 1
                
            };
            var forumSubsection2 = new ForumSubsection()
            {
                Name = "subsection 2",
                Description = "subsection description 2",
                SectionId = 1
            };
            context.ForumSubsections.Add(forumSubsection1);
            context.ForumSubsections.Add(forumSubsection2);
            context.SaveChanges();
        }

        private void InitializeForumThemes(LiverpoolContext context)
        {
            var forumThemes1 = new ForumTheme()
            {
                Name = "theme 1",
                Description = "theme description 1",
                SubsectionId = 1,
                LastMessageAdditionTime = DateTime.Today,
                Messages = new List<ForumMessage>()
                {
                    new ForumMessage()
                    {
                        Message = "message 1",
                        AdditionTime = DateTime.Now.AddHours(-5),
                        AuthorId = 1,
                        LastModifiedTime = DateTime.Now,
                        ThemeId = 1,
                    },
                    new ForumMessage()
                    {
                        Message = "message 2",
                        AdditionTime = DateTime.Now.AddHours(-2),
                        AuthorId = 2,
                        LastModifiedTime = DateTime.Now,
                        ThemeId = 1,
                    },
                    new ForumMessage()
                    {
                        Message = "message 3",
                        AdditionTime = DateTime.Now.AddHours(-5),
                        AuthorId = 2,
                        LastModifiedTime = DateTime.Now,
                        ThemeId = 1,

                    },
                    new ForumMessage()
                    {
                        Message = "message 4",
                        AdditionTime = DateTime.Now.AddHours(-2),
                        AuthorId = 1,
                        LastModifiedTime = DateTime.Now,
                        ThemeId = 1,
                    },
                    new ForumMessage()
                    {
                        Message = "message 5",
                        AdditionTime = DateTime.Now.AddHours(-5),
                        AuthorId = 2,
                        LastModifiedTime = DateTime.Now,
                        ThemeId = 1,

                    },
                    new ForumMessage()
                    {
                        Message = "message 6",
                        AdditionTime = DateTime.Now.AddHours(-2),
                        AuthorId = 1,
                        LastModifiedTime = DateTime.Now,
                        ThemeId = 1,
                    },
                    new ForumMessage()
                    {
                        Message = "message 7",
                        AdditionTime = DateTime.Now.AddHours(-5),
                        AuthorId = 2,
                        LastModifiedTime = DateTime.Now,
                        ThemeId = 1,

                    },
                    new ForumMessage()
                    {
                        Message = "message 8",
                        AdditionTime = DateTime.Now.AddHours(-2),
                        AuthorId = 1,
                        LastModifiedTime = DateTime.Now,
                        ThemeId = 1,
                    },
                    new ForumMessage()
                    {
                        Message = "message 9",
                        AdditionTime = DateTime.Now.AddHours(-5),
                        AuthorId = 2,
                        LastModifiedTime = DateTime.Now,
                        ThemeId = 1,

                    },
                    new ForumMessage()
                    {
                        Message = "message 10",
                        AdditionTime = DateTime.Now.AddHours(-2),
                        AuthorId = 1,
                        LastModifiedTime = DateTime.Now,
                        ThemeId = 1,
                    },
                    new ForumMessage()
                    {
                        Message = "message 11",
                        AdditionTime = DateTime.Now.AddHours(-5),
                        AuthorId = 2,
                        LastModifiedTime = DateTime.Now,
                        ThemeId = 1,

                    },
                    new ForumMessage()
                    {
                        Message = "message 12",
                        AdditionTime = DateTime.Now.AddHours(-2),
                        AuthorId = 1,
                        LastModifiedTime = DateTime.Now,
                        ThemeId = 1,
                    }
                }
                
            };
            var forumThemes2 = new ForumTheme()
            {
                Name = "theme 2",
                Description = "theme description 2",
                SubsectionId = 1,
                LastMessageAdditionTime = DateTime.Today,
                Messages = new List<ForumMessage>()
                {
                    new ForumMessage()
                    {
                        Message = "message 1",
                        AdditionTime = DateTime.Now.AddHours(-5),
                        AuthorId = 1,
                        LastModifiedTime = DateTime.Now,
                        ThemeId = 2,
                    },
                    new ForumMessage()
                    {
                        Message = "message 2",
                        AdditionTime = DateTime.Now.AddHours(-2),
                        AuthorId = 2,
                        LastModifiedTime = DateTime.Now,
                        ThemeId = 2,
                    },
                    new ForumMessage()
                    {
                        Message = "message 3",
                        AdditionTime = DateTime.Now.AddHours(-5),
                        AuthorId = 2,
                        LastModifiedTime = DateTime.Now,
                        ThemeId = 2,
                        
                    },
                    new ForumMessage()
                    {
                        Message = "message 4",
                        AdditionTime = DateTime.Now.AddHours(-2),
                        AuthorId = 1,
                        LastModifiedTime = DateTime.Now,
                        ThemeId = 2,
                    },
                    new ForumMessage()
                    {
                        Message = "message 5",
                        AdditionTime = DateTime.Now.AddHours(-5),
                        AuthorId = 2,
                        LastModifiedTime = DateTime.Now,
                        ThemeId = 2,

                    },
                    new ForumMessage()
                    {
                        Message = "message 6",
                        AdditionTime = DateTime.Now.AddHours(-2),
                        AuthorId = 1,
                        LastModifiedTime = DateTime.Now,
                        ThemeId = 2,
                    },
                    new ForumMessage()
                    {
                        Message = "message 7",
                        AdditionTime = DateTime.Now.AddHours(-5),
                        AuthorId = 2,
                        LastModifiedTime = DateTime.Now,
                        ThemeId = 2,

                    },
                    new ForumMessage()
                    {
                        Message = "message 8",
                        AdditionTime = DateTime.Now.AddHours(-2),
                        AuthorId = 1,
                        LastModifiedTime = DateTime.Now,
                        ThemeId = 2,
                    },
                    new ForumMessage()
                    {
                        Message = "message 9",
                        AdditionTime = DateTime.Now.AddHours(-5),
                        AuthorId = 2,
                        LastModifiedTime = DateTime.Now,
                        ThemeId = 2,

                    },
                    new ForumMessage()
                    {
                        Message = "message 10",
                        AdditionTime = DateTime.Now.AddHours(-2),
                        AuthorId = 1,
                        LastModifiedTime = DateTime.Now,
                        ThemeId = 2,
                    },
                    new ForumMessage()
                    {
                        Message = "message 11",
                        AdditionTime = DateTime.Now.AddHours(-5),
                        AuthorId = 2,
                        LastModifiedTime = DateTime.Now,
                        ThemeId = 2,

                    },
                    new ForumMessage()
                    {
                        Message = "message 12",
                        AdditionTime = DateTime.Now.AddHours(-2),
                        AuthorId = 1,
                        LastModifiedTime = DateTime.Now,
                        ThemeId = 2,
                    }
                }
            };
            context.ForumThemes.Add(forumThemes1);
            context.ForumThemes.Add(forumThemes2);
            context.SaveChanges();
        }

        private void InitializeNewsCategories(LiverpoolContext context)
        {
            var categories = new List<NewsCategory>()
            {
                new NewsCategory()
                {
                    Name = "news category 1",
                    Description = "new category description 1",
                },
                new NewsCategory()
                {
                    Name = "news category 2",
                    Description = "new category description 2",
                },
                new NewsCategory()
                {
                    Name = "news category 3",
                    Description = "new category description 3",
                },
            };
            categories.ForEach(x => context.NewsCategories.Add(x));
            context.SaveChanges();
        }

        private void InitializeNews(LiverpoolContext context)
        {
            var news = new List<NewsItem>()
            {
                new NewsItem()
                {
                    NewsCategoryId = 1,
                    AdditionTime = DateTime.Now.AddHours(-24),
                    AuthorId = 1,
                    Brief = "brief 1",
                    CanCommentary = true,
                    LastModified = DateTime.Now,
                    Message = "message 1",
                    OnTop = true,
                    PhotoPath = "123",
                    Pending = true,
                    Reads = 10,
                    Source = "123",
                    Title = "news 1"
                },
                new NewsItem()
                {
                    NewsCategoryId = 2,
                    AdditionTime = DateTime.Now.AddHours(-12),
                    AuthorId = 1,
                    Brief = "brief 2",
                    CanCommentary = true,
                    LastModified = DateTime.Now,
                    Message = "message 2",
                    OnTop = true,
                    PhotoPath = "123",
                    Pending = false,
                    Reads = 10,
                    Source = "123",
                    Title = "news 2"
                },
                new NewsItem()
                {
                    NewsCategoryId = 3,
                    AdditionTime = DateTime.Now.AddHours(-10),
                    AuthorId = 1,
                    Brief = "brief 3",
                    CanCommentary = true,
                    LastModified = DateTime.Now,
                    Message = "message 3",
                    OnTop = false,
                    PhotoPath = "123",
                    Pending = false,
                    Reads = 10,
                    Source = "123",
                    Title = "news 3"
                },
                new NewsItem()
                {
                    NewsCategoryId = 1,
                    AdditionTime = DateTime.Now.AddHours(-9).AddMinutes(10),
                    AuthorId = 1,
                    Brief = "brief 4",
                    CanCommentary = true,
                    LastModified = DateTime.Now,
                    Message = "message 4",
                    OnTop = false,
                    PhotoPath = "123",
                    Pending = false,
                    Reads = 10,
                    Source = "123",
                    Title = "news 4"
                },
                new NewsItem()
                {
                    NewsCategoryId = 3,
                    AdditionTime = DateTime.Now.AddHours(-8),
                    AuthorId = 1,
                    Brief = "brief 5",
                    CanCommentary = true,
                    LastModified = DateTime.Now,
                    Message = "message 5",
                    OnTop = false,
                    PhotoPath = "123",
                    Pending = false,
                    Reads = 10,
                    Source = "123",
                    Title = "news 5"
                },
                new NewsItem()
                {
                    NewsCategoryId = 1,
                    AdditionTime = DateTime.Now.AddHours(-7).AddMinutes(10),
                    AuthorId = 1,
                    Brief = "brief 6",
                    CanCommentary = true,
                    LastModified = DateTime.Now,
                    Message = "message 6",
                    OnTop = false,
                    PhotoPath = "123",
                    Pending = false,
                    Reads = 10,
                    Source = "123",
                    Title = "news 6"
                },
                new NewsItem()
                {
                    NewsCategoryId = 3,
                    AdditionTime = DateTime.Now.AddHours(-6),
                    AuthorId = 1,
                    Brief = "brief 7",
                    CanCommentary = true,
                    LastModified = DateTime.Now,
                    Message = "message 7",
                    OnTop = false,
                    PhotoPath = "123",
                    Pending = false,
                    Reads = 10,
                    Source = "123",
                    Title = "news 7"
                },
                new NewsItem()
                {
                    NewsCategoryId = 1,
                    AdditionTime = DateTime.Now.AddHours(-5).AddMinutes(10),
                    AuthorId = 1,
                    Brief = "brief 8",
                    CanCommentary = true,
                    LastModified = DateTime.Now,
                    Message = "message 8",
                    OnTop = false,
                    PhotoPath = "123",
                    Pending = false,
                    Reads = 10,
                    Source = "123",
                    Title = "news 8"
                },
                new NewsItem()
                {
                    NewsCategoryId = 3,
                    AdditionTime = DateTime.Now.AddHours(-4),
                    AuthorId = 1,
                    Brief = "brief 9",
                    CanCommentary = true,
                    LastModified = DateTime.Now,
                    Message = "message 9",
                    OnTop = false,
                    PhotoPath = "123",
                    Pending = false,
                    Reads = 10,
                    Source = "123",
                    Title = "news 9"
                },
                new NewsItem()
                {
                    NewsCategoryId = 1,
                    AdditionTime = DateTime.Now.AddHours(-2).AddMinutes(10),
                    AuthorId = 1,
                    Brief = "brief 10",
                    CanCommentary = true,
                    LastModified = DateTime.Now,
                    Message = "message 10",
                    OnTop = false,
                    PhotoPath = "123",
                    Pending = false,
                    Reads = 10,
                    Source = "123",
                    Title = "news 10"
                },
                new NewsItem()
                {
                    NewsCategoryId = 3,
                    AdditionTime = DateTime.Now.AddHours(-1),
                    AuthorId = 1,
                    Brief = "brief 11",
                    CanCommentary = true,
                    LastModified = DateTime.Now,
                    Message = "message 11",
                    OnTop = false,
                    PhotoPath = "123",
                    Pending = false,
                    Reads = 10,
                    Source = "123",
                    Title = "news 11"
                },
                new NewsItem()
                {
                    NewsCategoryId = 1,
                    AdditionTime = DateTime.Now,
                    AuthorId = 1,
                    Brief = "brief 12",
                    CanCommentary = true,
                    LastModified = DateTime.Now,
                    Message = "message 12",
                    OnTop = false,
                    PhotoPath = "123",
                    Pending = false,
                    Reads = 10,
                    Source = "123",
                    Title = "news 12"
                },
                new NewsItem()
                {
                    NewsCategoryId = 1,
                    AdditionTime = DateTime.Now,
                    AuthorId = 1,
                    Brief = "brief 13",
                    CanCommentary = true,
                    LastModified = DateTime.Now,
                    Message = "message 13",
                    OnTop = false,
                    PhotoPath = "123",
                    Pending = false,
                    Reads = 10,
                    Source = "123",
                    Title = "news 13"
                },
                new NewsItem()
                {
                    NewsCategoryId = 1,
                    AdditionTime = DateTime.Now,
                    AuthorId = 1,
                    Brief = "brief 14",
                    CanCommentary = true,
                    LastModified = DateTime.Now,
                    Message = "message 14",
                    OnTop = false,
                    PhotoPath = "123",
                    Pending = false,
                    Reads = 10,
                    Source = "123",
                    Title = "news 14"
                },
                new NewsItem()
                {
                    NewsCategoryId = 1,
                    AdditionTime = DateTime.Now,
                    AuthorId = 1,
                    Brief = "brief 15",
                    CanCommentary = true,
                    LastModified = DateTime.Now,
                    Message = "message 15",
                    OnTop = false,
                    PhotoPath = "123",
                    Pending = false,
                    Reads = 10,
                    Source = "123",
                    Title = "news 15"
                },
                new NewsItem()
                {
                    NewsCategoryId = 1,
                    AdditionTime = DateTime.Now,
                    AuthorId = 1,
                    Brief = "brief 16",
                    CanCommentary = true,
                    LastModified = DateTime.Now,
                    Message = "message 16",
                    OnTop = false,
                    PhotoPath = "123",
                    Pending = false,
                    Reads = 10,
                    Source = "123",
                    Title = "news 16"
                },
            };

            news.ForEach(x => context.NewsItems.Add(x));
            context.SaveChanges();
        }

        private void InitializePrivateMessages(LiverpoolContext context)
        {
            var pms = new List<PrivateMessage>()
            {
                new PrivateMessage()
                {
                    SenderId = 1,
                    ReceiverId = 2,
                    IsRead = false,
                    SentTime = DateTime.Now.AddDays(-5),
                    Title = "title 1",
                    Message = "mess 1"
                },
                new PrivateMessage()
                {
                    SenderId = 1,
                    ReceiverId = 2,
                    IsRead = true,
                    SentTime = DateTime.Now.AddDays(-3),
                    Title = "title 2",
                    Message = "mess 2"
                },
                new PrivateMessage()
                {
                    SenderId = 2,
                    ReceiverId = 1,
                    IsRead = false,
                    SentTime = DateTime.Now.AddDays(-5),
                    Title = "title 3",
                    Message = "mess 3"
                },
                new PrivateMessage()
                {
                    SenderId = 2,
                    ReceiverId = 1,
                    IsRead = true,
                    SentTime = DateTime.Now.AddDays(-3),
                    Title = "title 4",
                    Message = "mess 4"
                },
            };

            pms.ForEach(x => context.PrivateMessages.Add(x));
            context.SaveChanges();
        }


        private static string GetEnumDescription(Enum value)
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
