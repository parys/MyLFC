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
        private const int CountNews = 100;
        private const int CountNewsComments = 100;
        private const int CountUsers = 3;
        private const MaterialType NewsType = MaterialType.News;

        protected override void Seed(LiverpoolContext context)
        {
            if (!context.PrivateMessages.Any())
            {
                InitializeRoles(context);
                InitializeRoleGroups(context);

                InitializeAdmin(context);
                InitializeDeletedUser(context);
                InitializeSimpleUser(context);
                InitializeModerator(context);
                InitializeAuthor(context);
                InitializeIntern(context);
                InitializeEditor(context);
                InitializeNewsmaker(context);

                InitializeForumSections(context);
                InitializeForumSubsections(context);
                InitializeForumThemes(context);

                InitializeNewsCategories(context);
                InitializeNews(context);
                InitializeNewsComments(context);

                InitializePrivateMessages(context);

            }
        }

        #region roles
        private void InitializeRoleGroups(LiverpoolContext context)
        {
            var adminRole = context.Roles.First(x => x.Name == RolesEnum.AdminFull.ToString()); //1
            var adminAssistanceRole = context.Roles.First(x => x.Name == RolesEnum.AdminStart.ToString());
            var moderatorRole = context.Roles.First(x => x.Name == RolesEnum.UsersStart.ToString());//3
            var mainModeratorRole = context.Roles.First(x => x.Name == RolesEnum.UsersFull.ToString());
            var authorRole = context.Roles.First(x => x.Name == RolesEnum.BlogsStart.ToString());//5
            var internRole = context.Roles.First(x => x.Name == RolesEnum.Intern.ToString());
           // var mainEditorRole = context.Roles.First(x => x.Name == RolesEnum..ToString());//7
          //  var editorRole = context.Roles.First(x => x.Name == RolesEnum..ToString());
            var mainNewsmakeRole = context.Roles.First(x => x.Name == RolesEnum.NewsFull.ToString());//9
            var newsmakerRole = context.Roles.First(x => x.Name == RolesEnum.NewsStart.ToString());

            var roleGroups = new List<RoleGroup>()
            {
                new RoleGroup()
                {
                    Name = RoleGroupsEnum.Admin.ToString(),//1
                    RussianName = RolesMessages.Administrator,
                    Roles = new List<Role>()
                    {
                        adminRole,
                        adminAssistanceRole,
                        moderatorRole,
                        mainModeratorRole,
                        authorRole,
                        internRole,
                       // mainEditorRole,
                      //  editorRole,
                        mainNewsmakeRole,
                        newsmakerRole
                    }
                },
                new RoleGroup()
                {
                    Name = RoleGroupsEnum.AdminAssistance.ToString(),//2
                    RussianName = RolesMessages.AdminAssistance,
                    Roles = new List<Role>()
                    {
                        adminAssistanceRole,
                        moderatorRole,
                        mainModeratorRole,
                        authorRole,
                        internRole,
                    //    mainEditorRole,
                     //   editorRole,
                        mainNewsmakeRole,
                        newsmakerRole
                    }
                },
                new RoleGroup()
                {
                    Name = RoleGroupsEnum.Simple.ToString(),
                    RussianName = RolesMessages.Simple,
                    Roles = new List<Role>()
                    {

                    }
                },
                
                new RoleGroup()
                {
                    Name = RoleGroupsEnum.MainNewsmaker.ToString(),
                    RussianName = RolesMessages.MainNewsmaker,
                    Roles = new List<Role>()
                    {
                        internRole,
                        mainNewsmakeRole,
                        newsmakerRole
                    }
                },
                new RoleGroup()
                {
                    Name = RoleGroupsEnum.Newsmaker.ToString(),//5
                    RussianName = RolesMessages.Newsmaker,
                    Roles = new List<Role>()
                    {
                        internRole,
                        newsmakerRole
                    }
                },
                new RoleGroup()
                {
                    Name = RoleGroupsEnum.Editor.ToString(),//6
                    RussianName = RolesMessages.Editor,
                    Roles = new List<Role>()
                    {
                        authorRole,
                        internRole,
                     //   editorRole,
                        mainNewsmakeRole,
                        newsmakerRole
                    }
                },
                new RoleGroup()
                {
                    Name = RoleGroupsEnum.MainEditor.ToString(),//7
                    RussianName = RolesMessages.MainEditor,
                    Roles = new List<Role>()
                    {
                        authorRole,
                        internRole,
                    //    mainEditorRole,
                    //    editorRole,
                        mainNewsmakeRole,
                        newsmakerRole
                    }
                },
                new RoleGroup()
                {
                    Name = RoleGroupsEnum.Intern.ToString(),//8
                    RussianName = RolesMessages.Intern,
                    Roles = new List<Role>()
                    {
                        internRole,
                    }
                },
                new RoleGroup()
                {
                    Name = RoleGroupsEnum.Moderator.ToString(),//9
                    RussianName = RolesMessages.Moderator,
                    Roles = new List<Role>()
                    {
                        moderatorRole,
                    }
                },
                new RoleGroup()
                {
                    Name = RoleGroupsEnum.MainModerator.ToString(),
                    RussianName = RolesMessages.MainModerator,
                    Roles = new List<Role>()
                    {
                        moderatorRole,
                        mainModeratorRole,
                    }
                },
                new RoleGroup()
                {
                    Name = RoleGroupsEnum.Author.ToString(),//11
                    RussianName = RolesMessages.Author,
                    Roles = new List<Role>()
                    {
                        authorRole,
                    }
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

            var roles = new List<Role>()
            {
                new Role() //1
                {
                    Name = RolesEnum.Simple.ToString(),
                },
                new Role()
                {
                    Name = RolesEnum.NewsFull.ToString(),
                },
                new Role()//3
                {
                    Name = RolesEnum.NewsStart.ToString(),
                },
                new Role()
                {
                    Name = RolesEnum.BlogsFull.ToString(),
                },
                new Role()//5
                {
                    Name = RolesEnum.BlogsStart.ToString(),
                },
                new Role()
                {
                    Name = RolesEnum.UsersFull.ToString(),
                },
                new Role()//7
                {
                    Name = RolesEnum.UsersStart.ToString(),
                },
                new Role()
                {
                    Name = RolesEnum.AdminFull.ToString(),
                },
                new Role()//9
                {
                    Name = RolesEnum.AdminStart.ToString(),
                },
                new Role()
                {
                    Name = RolesEnum.ModeratorFull.ToString(),
                },
                new Role()//11
                {
                    Name = RolesEnum.ModeratorStart.ToString(),
                },
                new Role()//12
                {
                    Name = RolesEnum.Intern.ToString(),
                },
            };
            //  roles.ForEach(x => context.Roles.Add(x));
            roles.ForEach(x => roleManager.Create(x));
            //roleManager.Create(new Role { Name = RolesEnum.User.ToString() });
               context.SaveChanges();
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
                RoleGroupId = (int)RoleGroupsEnum.Simple,
                LockoutEnabled = true,
                Photo = string.Empty,
                EmailConfirmed = true,
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
                RoleGroupId = (int)RoleGroupsEnum.Simple,
                LockoutEnabled = true,
                Photo = string.Empty,
                EmailConfirmed = true,
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
                RoleGroupId = (int)RoleGroupsEnum.Admin,
                Photo = "content/avatars/0/755939.jpeg",
                EmailConfirmed = true,
            };

            var userStore = new UserStore<User, Role, int, UserLogin, UserRole, UserClaim>(context);
            var userManager = new UserManager<User, int>(userStore);

            userManager.Create(user, "123456");
            var adminRoles = context.RoleGroups.First(x => x.Name == RoleGroupsEnum.Admin.ToString()).Roles.ToList();
            foreach (var role in adminRoles)
            {
                userManager.AddToRole(user.Id, role.Name);
            }
        }

        private void InitializeModerator(LiverpoolContext context)
        {
            const string email = "moderator@a.c";

            var user = new User
            {
                UserName = "moderator",
                Email = email,
                Verify = true,
                LastModified = DateTime.Now,
                RegistrationDate = DateTime.Now,
                Birthday = DateTime.Now,
                RoleGroupId = (int)RoleGroupsEnum.Moderator,
                LockoutEnabled = true,
                Photo = string.Empty,
                EmailConfirmed = true,
            };

            var userStore = new UserStore<User, Role, int, UserLogin, UserRole, UserClaim>(context);
            var userManager = new UserManager<User, int>(userStore);

            userManager.Create(user, "123456");
            var adminRoles = context.RoleGroups.First(x => x.Id == user.RoleGroupId).Roles.ToList();
            foreach (var role in adminRoles)
            {
                userManager.AddToRole(user.Id, role.Name);
            }
        }

        private void InitializeAuthor(LiverpoolContext context)
        {
            const string email = "author@a.c";

            var user = new User
            {
                UserName = "author",
                Email = email,
                Verify = true,
                LastModified = DateTime.Now,
                RegistrationDate = DateTime.Now,
                Birthday = DateTime.Now,
                RoleGroupId = (int)RoleGroupsEnum.Author,
                LockoutEnabled = true,
                Photo = string.Empty,
                EmailConfirmed = true,
            };

            var userStore = new UserStore<User, Role, int, UserLogin, UserRole, UserClaim>(context);
            var userManager = new UserManager<User, int>(userStore);

            userManager.Create(user, "123456");
            var adminRoles = context.RoleGroups.First(x => x.Id == user.RoleGroupId).Roles.ToList();
            foreach (var role in adminRoles)
            {
                userManager.AddToRole(user.Id, role.Name);
            }
        }

        private void InitializeIntern(LiverpoolContext context)
        {
            const string email = "Intern@a.c";

            var user = new User
            {
                UserName = "Intern",
                Email = email,
                Verify = true,
                LastModified = DateTime.Now,
                RegistrationDate = DateTime.Now,
                Birthday = DateTime.Now,
                RoleGroupId = (int)RoleGroupsEnum.Intern,
                LockoutEnabled = true,
                Photo = string.Empty,
                EmailConfirmed = true,
            };

            var userStore = new UserStore<User, Role, int, UserLogin, UserRole, UserClaim>(context);
            var userManager = new UserManager<User, int>(userStore);

            userManager.Create(user, "123456");
            var adminRoles = context.RoleGroups.First(x => x.Id == user.RoleGroupId).Roles.ToList();
            foreach (var role in adminRoles)
            {
                userManager.AddToRole(user.Id, role.Name);
            }
        }
        private void InitializeEditor(LiverpoolContext context)
        {
            const string email = "Editor@a.c";

            var user = new User
            {
                UserName = "Editor",
                Email = email,
                Verify = true,
                LastModified = DateTime.Now,
                RegistrationDate = DateTime.Now,
                Birthday = DateTime.Now,
                RoleGroupId = (int)RoleGroupsEnum.Editor,
                LockoutEnabled = true,
                Photo = string.Empty,
                EmailConfirmed = true,
            };

            var userStore = new UserStore<User, Role, int, UserLogin, UserRole, UserClaim>(context);
            var userManager = new UserManager<User, int>(userStore);

            userManager.Create(user, "123456");
            var adminRoles = context.RoleGroups.First(x => x.Id == user.RoleGroupId).Roles.ToList();
            foreach (var role in adminRoles)
            {
                userManager.AddToRole(user.Id, role.Name);
            }
        }

        private void InitializeNewsmaker(LiverpoolContext context)
        {
            const string email = "Newsmaker@a.c";

            var user = new User
            {
                UserName = "newsmaker",
                Email = email,
                Verify = true,
                LastModified = DateTime.Now,
                RegistrationDate = DateTime.Now,
                Birthday = DateTime.Now,
                RoleGroupId = (int)RoleGroupsEnum.Newsmaker,
                LockoutEnabled = true,
                Photo = string.Empty,
                EmailConfirmed = true,
            };

            var userStore = new UserStore<User, Role, int, UserLogin, UserRole, UserClaim>(context);
            var userManager = new UserManager<User, int>(userStore);

            userManager.Create(user, "123456");
            var adminRoles = context.RoleGroups.First(x => x.Id == user.RoleGroupId).Roles.ToList();
            foreach (var role in adminRoles)
            {
                userManager.AddToRole(user.Id, role.Name);
            }
        }
        #endregion

        #region forum
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
        #endregion

        #region news
        private void InitializeNewsCategories(LiverpoolContext context)
        {
            var categories = new List<MaterialCategory>()
            {
                new MaterialCategory()
                {
                    Name = "news category 1",
                    Description = "new category description 1",
                    MaterialType = NewsType,
                },
                new MaterialCategory()
                {
                    Name = "news category 2",
                    Description = "new category description 2",
                    MaterialType = NewsType,
                },
                new MaterialCategory()
                {
                    Name = "news category 3",
                    Description = "new category description 3",
                    MaterialType = NewsType,
                },
            };
            categories.ForEach(x => context.MaterialCategories.Add(x));
            context.SaveChanges();
        }

        private void InitializeNews(LiverpoolContext context)
        {
            var news = new List<Material>();
            var randomizer = new Random(44);

            for (int i = 0; i < CountNews; i++)
            {
                news.Add(new Material()
                {
                    CategoryId = i % 2 == 0 ? 1 : 2,
                    AdditionTime = DateTime.Now.AddHours(randomizer.NextDouble() * -CountNews),
                    AuthorId = i % 3 + 1,
                    Brief = "brief" + i,
                    CanCommentary = i % 2 == 0,
                    Type = NewsType,
                    LastModified = DateTime.Now.AddDays(randomizer.NextDouble() * -CountNews),
                    Message = @"<div align='center'><img src='http://s4.hostingkartinok.com/uploads/images/2013/07/5513d5a371375d0047370d9727e4ecc2.jpg' border ='0' alt ='/></div>
<br /><br /> <b>100 дней, которые потрясли Коп</b> - это список моментов из истории ""Ливерпуля"", которые оказали значительное влияние на клуб и его болельщиков составленный самими
болельщиками клуба. <br /><br /> Фантастическая победа на ""Гудисон Парк"" в Раунде 4, Кубка Англии против ""Эвертона"" - 4:0. ""Ливерпуль"" выступает во втором дивизионе, ""Эвертон""
в первом. <br /><br /><div align='center'><img src='http://s3.hostingkartinok.com/uploads/images/2013/07/8e5d4bee9b2813244bc5c0fe10a5360c.jpg' border='0' alt=''/></div> <br /><br /> 
<i>Конная полиция пытается сдержать толпу болельщиков, после того как было объявлено что продажа билетов на кубковый матч ""Эвертон"" - ""Ливерпуль"" закончилась. </i> <br /><br /> 
Интерес к этому матчу был просто огромным.Болельщиков обоих клубов не смущал тот факт, что ""Ливерпуль"" проводил один из самых худших сезонов в своей истории, находясь ниже середины
в турнирной таблице Второго дивизиона, а ""Ириски"" на тот момент занимали 6 место в Первом дивизионе. <br /><br /> Посещаемость этого матча является рекордной для кубковых встреч 
между ""Эвертоном"" и ""Ливерпулем"" за всю историю Дерби в городе. <br /><br /> ""Сенсация сезона"". С такими заголовками вышли практически все футбольные печатные издания в Англии.
тем более что ""Ливерпуль"" под руководством Дона Уэлша до этой встречи не одержал ни одной выездной победы в сезоне. <br /><br /> <div align='center'><img 
src='http://s4.hostingkartinok.com/uploads/images/2013/07/8a7fed2ee9f513c0e7565575ca5f0936.jpg' border='0' alt=''/></div> <br /><br /> Билли ""Лидделпуль"" Лидделл,
открывший счет на 18-й минуте, называл свой забитый мяч в этой игре - самым величайшим голом из <b>228</b> забитых за карьеру в клубе. <br /> <div align='center'> <br /> 
<img src='http://s5.hostingkartinok.com/uploads/images/2013/07/43330ecc610bf23dadc3740350f0a1c1.jpg' border='' alt=''/></div> <br /><br /> <i>""Дон Уэлш, был так доволен нашей
игрой и результатом - что выдал каждому из нас по 10 шиллингов""</i> - вспоминал затем Билли Лидделл. <br /><br /> <div align='center'><b>29</b> января 1955 года. Кубок Англии.
Раунд 4. ""Гудисон Парк"" 72 000 зр. <br /><br /> ""Эвертон"" - ""Ливерпуль"" - 0:4 <br /><br /> голы:Лидделл(18)Экурт(29)Эванс(57)(75) <br /><br /> <b>""Ливерпуль""</b>:Дуг
Радхэм,Рэй Ламберт,Ронни Моран,Рой Сондерс,Лори Хьюз,Джефф Твентимен,Брайан Джексон,Эрик Андерсон,Билли Лидделл,Джон Эванс,Алан Экурт. </div> <br /><br /> <div align='center'>
<img src='http://s6.hostingkartinok.com/uploads/images/2013/07/e3e724e232b0d518e419a4baf5fbee64.jpg' border='0' alt=''/></div> <br /><br /> <div align='center'>
<img src='http://s4.hostingkartinok.com/uploads/images/2013/07/78a9a6f0f38b0d8d8641aad4dca62f5e.jpg' border='0' alt=''/></div> <br /><br /> <div align='center'>
<img src='http://s6.hostingkartinok.com/uploads/images/2013/07/642fbd99157b7b76679362ce838bf151.jpg' border='0' alt=''/></div> <br /><br /> <div align='center'>
<img src= 'http://s3.hostingkartinok.com/uploads/images/2013/07/fc66688ba1ecc06dfe20bc6688dacc52.jpg' border='0' alt=''/></div> <br /><br /> <br /><br /> Фотографии по материалам <i><b>britishpathe.com, lfchistory.net </b></i>",
                    OnTop = i % 48 == 0,
                    PhotoPath = "content/images/default.jpg",
                    Pending = i % 5 == 0,
                    Reads = 0,
                    Source = "123",
                    Title = "news" + i
                });
            };

            news.ForEach(x => context.Materials.Add(x));
            context.SaveChanges();
        }

        private void InitializeNewsComments(LiverpoolContext context)
        {
            var newsComments = new List<MaterialComment>();
            var random = new Random((int)DateTime.UtcNow.Ticks);
            for (int i = 0; i < CountNewsComments; i++)
            {
                var comment = new MaterialComment()
                {
                    MaterialId = random.Next(1, CountNews),
                    AdditionTime = DateTime.Now.AddDays(random.NextDouble() * 10),
                    Answer = i % 5 == 0 ? "answer" : string.Empty,
                    AuthorId = random.Next(1, CountUsers),
                    Message = "message " + i,
                    Pending = (i + 3) % 5 == 0,
                    MaterialType = NewsType,
                };
                if (i % 3 == 0)
                {
                    comment.Children = new List<MaterialComment>()
                    {
                        new MaterialComment()
                        {
                            ParentId = i + 1,
                            Pending = false,
                            MaterialId = comment.MaterialId,
                            AdditionTime = DateTime.Now,
                            AuthorId = random.Next(1, CountUsers),
                            Message = "comment inside",
                            MaterialType = NewsType,
                        }
                    };
                    i += 1;
                }
                newsComments.Add(comment);
            }

            newsComments.ForEach(x => context.MaterialComments.Add(x));
            context.SaveChanges();

            var commentFirstNews = new MaterialComment()
            {
                Pending = false,
                MaterialId = 1,
                AdditionTime = DateTime.Now,
                AuthorId = 1,
                Message = "comment first",
                MaterialType = NewsType,
                Children = new List<MaterialComment>()
                {
                    new MaterialComment()
                    {
                        ParentId = CountNews + 1,
                        Pending = false,
                        MaterialId = 1,
                        AdditionTime = DateTime.Now,
                        AuthorId = 2,
                        Message = "comment second inside",
                        MaterialType = NewsType,
                        Children = new List<MaterialComment>()
                        {
                            new MaterialComment()
                            {
                                ParentId = CountNews + 2,
                                Pending = false,
                                MaterialId = 1,
                                AdditionTime = DateTime.Now,
                                AuthorId = 3,
                                Message = "comment three inside",
                                MaterialType = NewsType,
                            }
                        }
                    }
                }
            };

            context.MaterialComments.Add(commentFirstNews);
            context.SaveChanges();
        }
        #endregion

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
