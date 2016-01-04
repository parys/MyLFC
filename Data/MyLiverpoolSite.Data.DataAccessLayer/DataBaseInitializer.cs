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
                    Name = RoleGroupsEnum.Simple.ToString(),
                    RussianName = RolesMessages.Simple
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
                new RoleGroup()
                {
                    Name = RoleGroupsEnum.Author.ToString(),
                    RussianName = RolesMessages.Author
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
            var news = new List<NewsItem>();
            var randomizer = new Random(44);
            var counterMax = 100;
            for (int i = 0; i < counterMax; i++)
            {
                news.Add(new NewsItem()
                {
                    NewsCategoryId = i/2==0 ? 1 : 2,
                    AdditionTime = DateTime.Now.AddHours(randomizer.NextDouble() * -counterMax),
                    AuthorId = 1,
                    Brief = "brief" + i,
                    CanCommentary = i/2 == 0,
                    LastModified = DateTime.Now.AddDays(randomizer.NextDouble()*-counterMax),
                    Message = @"У ""Красных"" шансы были немногочисленными в первые 45 минут матча на ""Стадионе Света"". Ближе всех был к успеху Роберто Фирмино, но голкипер ""котов"" Вито Манноне ""потянул"" удар. 

Зато уже через считанные секунды после перерыва,
                    Кристиан Бентеке отлично отреагировал на пас вперед Натаниэля Клайна и нанес точный удар в нижний угол.

Клопп сказал после матча: 

“Лучше,
                    если вы решаете игру раньше,
                    и получаете преимущество,
                    но мы не живем в стране чудес.Нам пришлось ждать особого момента и работать ради него"".

""Мы сделали нужные выводы после первой половины игры,
                    и постарались активно начать второй тайм.Мы стали прессинговать с первой минуты на всех участках поля"". 

“Это всегда самая трудная вещь в игре...Если что - то не клеится,
                    то первое,
                    что нужно сделать,
                    это бороться за мяч,
                    чтобы найти подходящий момент для творческого футбола и неустанно поджимать соперника.Это не так просто"". 

“В первом тайме,
                    конечно,
                    мы много владели мячом,
                    и не оставили ""Сандерленду"" реального шанса диктовать нам свою игру.Они имели пару стандартов и одну контратаку,
                    и думаю,
                    что мы свою задачу выполнили"". 

“После перерыва мы забили такой нужный гол и могли забить ещё один,
                    сняв все вопросы,
                    но этого сделать не удалось.Так что,
                    нам пришлось оставаться сосредоточенным до конца.В этом мы не оплошали и это была заслуженная победа”. 

В результате двух побед - в боксинг - дэй над ""Лестером"" и нынешней над ""котами"" с одинаковым результатом,
                    ""Ливерпуль"" поднялся до седьмого места в Премьер - лиге.

“Мы будем праздновать успех всю дорогу до аэропорта,
                    хорошенько выспимся дома и начнем готовиться к ""Вест Хэму"",
                    -продолжил менеджер.

“30 очков гораздо лучше,
                    чем 27,
                    и дело даже не в трех очках разницы,
                    честно говоря.Вы можете видеть,
                    насколько это важно - лучшие команды Лиги после 19 игр имеют лишь на шесть очков больше,
                    чем у нас,
                    так что это не так уж много,
                    но к сожалению и не мало...",
                    OnTop = i / counterMax-2 == 0,
                    PhotoPath = "123",
                    Pending = i / 5 == 0,
                    Reads = 1110,
                    Source = "123",
                    Title = "news" + i
                });
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
