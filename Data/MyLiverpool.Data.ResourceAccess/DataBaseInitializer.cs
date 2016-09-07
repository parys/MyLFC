using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Data.ResourceAccess
{
    public class DatabaseInitializer
    {
        private static readonly LiverpoolContext context = LiverpoolContext.Create();
        private const int CountNews = 100;
        private const int CountBlog = 100;
        private const int CountNewsComments = 100;
        private const int CountBlogComments = 100;
        private const int CountUsers = 3;
        private const MaterialType NewsType = MaterialType.News;
        private const MaterialType BlogType = MaterialType.Blog;

        public async void Seed()
        {
                await InitializeRoles();
            await InitializeRoleGroups();

            await InitUsers();

            await InitializeNewsCategories();
            await InitializeNews();
            await InitializeNewsComments();

            await InitializeBlogCategories();
            await InitializeBlog();
            await InitializeBlogComments();

            await InitializePrivateMessages();

            await InitializeForumSections();
            await InitializeForumSubsections();
            await InitializeForumThemes();
            
        }

        #region roles
        private async Task InitializeRoleGroups()
        {
            if(context.RoleGroups.Any()) return;
            
            var adminRole = context.Roles.First(x => x.Name == RolesEnum.AdminFull.ToString()); //1
            var adminAssistanceRole = context.Roles.First(x => x.Name == RolesEnum.AdminStart.ToString());
            var moderatorRole = context.Roles.First(x => x.Name == RolesEnum.UserStart.ToString());//3
            var mainModeratorRole = context.Roles.First(x => x.Name == RolesEnum.UserFull.ToString());
            var authorRole = context.Roles.First(x => x.Name == RolesEnum.BlogStart.ToString());//5
            var mainAuthorRole = context.Roles.First(x => x.Name == RolesEnum.BlogFull.ToString());
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
                    RussianName = "Админ",
                    Roles = new List<Role>()
                    {
                        adminRole,
                        adminAssistanceRole,
                        moderatorRole,
                        mainModeratorRole,
                        authorRole,
                        internRole,
                        mainAuthorRole,
                      //  editorRole,
                        mainNewsmakeRole,
                        newsmakerRole
                    }
                },
                new RoleGroup()
                {
                    Name = RoleGroupsEnum.AdminAssistance.ToString(),//2
                    RussianName = "Ассист админа",
                    Roles = new List<Role>()
                    {
                        adminAssistanceRole,
                        moderatorRole,
                        mainModeratorRole,
                        authorRole,
                        internRole,
                        mainAuthorRole,
                    //    mainEditorRole,
                     //   editorRole,
                        mainNewsmakeRole,
                        newsmakerRole
                    }
                },
                new RoleGroup()
                {
                    Name = RoleGroupsEnum.Simple.ToString(),
                    RussianName = "Юзверь",
                    Roles = new List<Role>()
                    {

                    }
                },

                new RoleGroup()
                {
                    Name = RoleGroupsEnum.MainNewsmaker.ToString(),
                    RussianName = "главноый ньюс",
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
                    RussianName = "Ньюс",
                    Roles = new List<Role>()
                    {
                        internRole,
                        newsmakerRole
                    }
                },
                new RoleGroup()
                {
                    Name = RoleGroupsEnum.Editor.ToString(),//6
                    RussianName = "Редактор",
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
                    RussianName = "Главный редактор",
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
                    RussianName = "Стажер",
                    Roles = new List<Role>()
                    {
                        internRole,
                    }
                },
                new RoleGroup()
                {
                    Name = RoleGroupsEnum.Moderator.ToString(),//9
                    RussianName = "Модератор",
                    Roles = new List<Role>()
                    {
                        moderatorRole,
                    }
                },
                new RoleGroup()
                {
                    Name = RoleGroupsEnum.MainModerator.ToString(),
                    RussianName = "Главный модаратор",
                    Roles = new List<Role>()
                    {
                        moderatorRole,
                        mainModeratorRole,
                    }
                },
                new RoleGroup()
                {
                    Name = RoleGroupsEnum.Author.ToString(),//11
                    RussianName = "Автор",
                    Roles = new List<Role>()
                    {
                        authorRole,
                    }
                },
            };
            roleGroups.ForEach(x => context.RoleGroups.Add(x));
            // roles.ForEach(x => roleManager.Create(x));
            //roleManager.Create(new Role { Name = RolesEnum.User.ToString() });
            await context.SaveChangesAsync();
        }

        private async Task InitializeRoles()
        {
            if (context.Roles.Any()) return;
            var roleStore = new RoleStore<Role, LiverpoolContext, int>(context);
            var roleManager = new RoleManager<Role>(roleStore, null, null, null, null, new HttpContextAccessor());

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
                    Name = RolesEnum.BlogFull.ToString(),
                },
                new Role()//5
                {
                    Name = RolesEnum.BlogStart.ToString(),
                },
                new Role()
                {
                    Name = RolesEnum.UserFull.ToString(),
                },
                new Role()//7
                {
                    Name = RolesEnum.UserStart.ToString(),
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
            foreach (var role in roles)
            {
                await roleManager.CreateAsync(role);
            }
           // roles.ForEach(x => new Task(() => roleManager.CreateAsync(x)));
            //roleManager.Create(new Role { Name = RolesEnum.User.ToString() });
                await  context.SaveChangesAsync();
        }
        #endregion

        private async Task InitUsers()
        {
               if (context.Users.Any()) return ;

            await   InitializeAdmin();
            await InitializeDeletedUser();
            await InitializeSimpleUser();
            await InitializeModerator();
            await InitializeAuthor();
            await InitializeIntern();
            await InitializeEditor();
           await InitializeNewsmaker();
        }

        #region users 
        private async Task InitializeDeletedUser()
        {
            const string email = "deleted@deleted.com";

            var user = new User
            {
               // Id = -1,
                UserName = "deleted",
                Email = email,
                LastModified = DateTime.Now,
                RegistrationDate = DateTime.Now,
                RoleGroupId = (int)RoleGroupsEnum.Simple,
                LockoutEnabled = true,
                Photo = string.Empty,
                EmailConfirmed = true,
            };

            var userManager = GetUserManager();

            await userManager.CreateAsync(user, "123456");
            await userManager.AddToRoleAsync(user, RolesEnum.Simple.ToString());
        }

        private async Task InitializeSimpleUser()
        {
            const string email = "user@user.com";

            var user = new User
            {
                UserName = "user",
                Email = email,
                LastModified = DateTime.Now,
                RegistrationDate = DateTime.Now,
                RoleGroupId = (int)RoleGroupsEnum.Simple,
                LockoutEnabled = true,
                Photo = string.Empty,
                EmailConfirmed = true,
            };

            var userManager = GetUserManager();

            await userManager.CreateAsync(user, "123456");
            await userManager.AddToRoleAsync(user, RolesEnum.Simple.ToString());
        }

        private async Task InitializeAdmin()
        {
            const string email = "a@a.c";

            var user = new User
            {
                UserName = "admin",
                Email = email,
                LastModified = DateTime.Now,
                RegistrationDate = DateTime.Now,
                Birthday = DateTime.Now,
                RoleGroupId = (int)RoleGroupsEnum.Admin,
              //  RoleGroup = context.RoleGroups.First(x => x.Id == (int)RoleGroupsEnum.Admin),
                Photo = "content/avatars/0/755939.jpeg",
                EmailConfirmed = true,
            };

            var userManager = GetUserManager();

            await userManager.CreateAsync(user, "123qwe");
            var adminRoles = await context.RoleGroups.FirstAsync(x => x.Name == RoleGroupsEnum.Admin.ToString());

            await userManager.AddToRolesAsync(user, adminRoles.Roles.Select(x => x.Name));

        }

        private async Task InitializeModerator()
        {
            const string email = "moderator@a.c";

            var user = new User
            {
                UserName = "moderator",
                Email = email,
                LastModified = DateTime.Now,
                RegistrationDate = DateTime.Now,
                Birthday = DateTime.Now,
                RoleGroupId = (int)RoleGroupsEnum.Moderator,
                LockoutEnabled = true,
                Photo = string.Empty,
                EmailConfirmed = true,
            };

            var userManager = GetUserManager();

            await userManager.CreateAsync(user, "123456");
            var adminRoles = context.RoleGroups.First(x => x.Id == user.RoleGroupId).Roles.Select(r => r.Name).ToList();

            await userManager.AddToRolesAsync(user, adminRoles);

        }

        private async Task InitializeAuthor()
        {
            const string email = "author@a.c";

            var user = new User
            {
                UserName = "author",
                Email = email,
                LastModified = DateTime.Now,
                RegistrationDate = DateTime.Now,
                Birthday = DateTime.Now,
                RoleGroupId = (int)RoleGroupsEnum.Author,
                LockoutEnabled = true,
                Photo = string.Empty,
                EmailConfirmed = true,
            };

            var userManager = GetUserManager();

            await userManager.CreateAsync(user, "123456");
            var adminRoles = context.RoleGroups.First(x => x.Id == user.RoleGroupId).Roles.Select(r => r.Name).ToList();
            await userManager.AddToRolesAsync(user, adminRoles);
        }

        private async Task InitializeIntern()
        {
            const string email = "Intern@a.c";

            var user = new User
            {
                UserName = "Intern",
                Email = email,
                LastModified = DateTime.Now,
                RegistrationDate = DateTime.Now,
                Birthday = DateTime.Now,
                RoleGroupId = (int)RoleGroupsEnum.Intern,
                LockoutEnabled = true,
                Photo = string.Empty,
                EmailConfirmed = true,
            };

            var userManager = GetUserManager();

            await userManager.CreateAsync(user, "123456");
            var adminRoles = context.RoleGroups.First(x => x.Id == user.RoleGroupId).Roles.Select(r=> r.Name).ToList();

            await userManager.AddToRolesAsync(user, adminRoles);
            
        }

        private async Task InitializeEditor()
        {
            const string email = "Editor@a.c";

            var user = new User
            {
                UserName = "Editor",
                Email = email,
                LastModified = DateTime.Now,
                RegistrationDate = DateTime.Now,
                Birthday = DateTime.Now,
                RoleGroupId = (int)RoleGroupsEnum.Editor,
                LockoutEnabled = true,
                Photo = string.Empty,
                EmailConfirmed = true,
            };

            var userManager = GetUserManager();

            await userManager.CreateAsync(user, "123456");
            var adminRoles = context.RoleGroups.First(x => x.Id == user.RoleGroupId).Roles.Select(r => r.Name).ToList();
            await userManager.AddToRolesAsync(user, adminRoles);
            
        }

        private async Task InitializeNewsmaker()
        {
            const string email = "Newsmaker@a.c";

            var user = new User
            {
                UserName = "newsmaker",
                Email = email,
                LastModified = DateTime.Now,
                RegistrationDate = DateTime.Now,
                Birthday = DateTime.Now,
                RoleGroupId = (int)RoleGroupsEnum.Newsmaker,
                LockoutEnabled = true,
                Photo = string.Empty,
                EmailConfirmed = true,
            };
            
            var userManager = GetUserManager();

            await userManager.CreateAsync(user, "123456");
            var adminRoles = context.RoleGroups.First(x => x.Id == user.RoleGroupId).Roles.Select(r => r.Name).ToList();
            await userManager.AddToRolesAsync(user, adminRoles);
            
        }
        #endregion

        #region forum
        private async Task InitializeForumSections()
        {
            if (context.ForumSections.Any()) return;
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
            await context.SaveChangesAsync();
        }

        private async Task InitializeForumSubsections()
        {
            if (context.ForumSubsections.Any()) return;
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
            await context.SaveChangesAsync();
        }

        private async Task InitializeForumThemes()
        {
            if (context.ForumThemes.Any()) return;
            var themes = new List<ForumTheme>();
            for (int i = 0; i < 16; i++)
            {
                var messages = new List<ForumMessage>();
                for (int j = 0; j < 23; j++)
                {
                    var message = new ForumMessage()
                    {
                        Message = "message" + i,
                        AdditionTime = DateTime.Now.AddHours(-20 + i),
                        AuthorId = new Random().Next(context.Users.First().Id, context.Users.Last().Id),
                        LastModifiedTime = DateTime.Now.AddHours(-20 + i),
                        ThemeId = 1,
                    };
                    messages.Add(message);
                }
                var userId = new Random().Next(context.Users.First().Id, context.Users.Last().Id);
                var forumTheme = new ForumTheme()
                {
                    Name = "theme " + i,
                    Description = "theme description " + i,
                    SubsectionId = 1,
                    LastMessageAdditionTime = DateTime.Today,
                    Messages = messages,
                    AuthorId = userId,
                    LastAnswerUserId = userId
                };
                themes.Add(forumTheme);
            }
        
            themes.ForEach(x => context.ForumThemes.Add(x));
            await context.SaveChangesAsync();
        }
        #endregion

        #region news
        private async Task InitializeNewsCategories()
        {
            if (context.MaterialCategories.Any()) return;
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
            await context.SaveChangesAsync();
        }

        private async Task InitializeNews()
        {
            if (context.Materials.Any()) return;
            var news = new List<Material>();
            var randomizer = new Random(44);

            for (int i = 0; i < CountNews; i++)
            {
                news.Add(new Material()
                {
                    CategoryId = i % 2 == 0 ? 1 : 2,
                    AdditionTime = DateTime.Now.AddHours(randomizer.NextDouble() * -CountNews),
                    AuthorId = new Random().Next(context.Users.First().Id, context.Users.Last().Id),
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
            }

            news.ForEach(x => context.Materials.Add(x));
            await context.SaveChangesAsync();
        }

        private async Task InitializeNewsComments()
        {
            if (context.MaterialComments.Any()) return;
            var newsComments = new List<MaterialComment>();
            var random = new Random((int)DateTime.UtcNow.Ticks);
            for (int i = 0; i < CountNewsComments; i++)
            {
                var comment = new MaterialComment()
                {
                    MaterialId = new Random().Next(context.Materials.First(x => x.Type == NewsType).Id, context.Materials.Last(x => x.Type == NewsType).Id),
                    AdditionTime = DateTime.Now.AddDays(random.NextDouble() * 10),
                    Answer = i % 5 == 0 ? "answer" : string.Empty,
                    AuthorId = new Random().Next(context.Users.First().Id, context.Users.Last().Id),
                    Message = "message " + i,
                    Pending = (i + 3) % 5 == 0,
                    MaterialType = NewsType,
                    LastModified = DateTime.Now,
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
                    AuthorId = new Random().Next(context.Users.First().Id, context.Users.Last().Id),
                            Message = "comment inside",
                            MaterialType = NewsType,
                            LastModified = DateTime.Now,
                        }
                    };
                    i += 1;
                }
                newsComments.Add(comment);
            }

            newsComments.ForEach(x => context.MaterialComments.Add(x));
            await context.SaveChangesAsync();

            var commentFirstNews = new MaterialComment()
            {
                Pending = false,
                MaterialId = context.Materials.First(x => x.Type == NewsType).Id,
                AdditionTime = DateTime.Now,
                AuthorId = new Random().Next(context.Users.First().Id, context.Users.Last().Id),
                Message = "comment first",
                MaterialType = NewsType,
                LastModified = DateTime.Now,
                Children = new List<MaterialComment>()
                {
                    new MaterialComment()
                    {
                        ParentId = CountNews + 1,
                        Pending = false,
                                MaterialId = context.Materials.First(x => x.Type == NewsType).Id,
                        AdditionTime = DateTime.Now,
                    AuthorId = new Random().Next(context.Users.First().Id, context.Users.Last().Id),
                        Message = "comment second inside",
                        MaterialType = NewsType,
                        LastModified = DateTime.Now,
                        Children = new List<MaterialComment>()
                        {
                            new MaterialComment()
                            {
                                ParentId = CountNews + 2,
                                Pending = false,
                                MaterialId = context.Materials.First(x => x.Type == NewsType).Id,
                                AdditionTime = DateTime.Now,
                    AuthorId = new Random().Next(context.Users.First().Id, context.Users.Last().Id),
                                Message = "comment three inside",
                                MaterialType = NewsType,
                                LastModified = DateTime.Now,
                            }
                        }
                    }
                }
            };

            context.MaterialComments.Add(commentFirstNews);
            await context.SaveChangesAsync();
        }
        #endregion


        #region blog //todo not initing
        private async Task InitializeBlogCategories()
        {
            var type = BlogType;
            var categories = new List<MaterialCategory>()
            {
                new MaterialCategory()
                {
                    Name = "blog category 1",
                    Description = "new category description 1",
                    MaterialType = type,
                },
                new MaterialCategory()
                {
                    Name = "blog category 2",
                    Description = "new category description 2",
                    MaterialType = type,
                },
                new MaterialCategory()
                {
                    Name = "blog category 3",
                    Description = "new category description 3",
                    MaterialType = type,
                },
            };
            categories.ForEach(x => context.MaterialCategories.Add(x));
            await context.SaveChangesAsync();
        }

        private async Task InitializeBlog()
        {
            var type = BlogType;
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
                    Type = type,
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
                    Title = "blog" + i
                });
            }

            news.ForEach(x => context.Materials.Add(x));
            await context.SaveChangesAsync();
        }

        private async Task InitializeBlogComments()
        {
            var type = BlogType;
            var newsComments = new List<MaterialComment>();
            var random = new Random((int)DateTime.UtcNow.Ticks);
            for (int i = 0; i < CountNewsComments; i++)
            {
                var comment = new MaterialComment()
                {
                    MaterialId = context.Materials.First(x => x.Type == NewsType).Id,
                    AdditionTime = DateTime.Now.AddDays(random.NextDouble() * 10),
                    Answer = i % 5 == 0 ? "answer" : string.Empty,
                    AuthorId = random.Next(1, CountUsers),
                    Message = "message " + i,
                    Pending = (i + 3) % 5 == 0,
                    MaterialType = type,
                    LastModified = DateTime.Now,
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
                            MaterialType = type,
                            LastModified = DateTime.Now,
                        }
                    };
                    i += 1;
                }
                newsComments.Add(comment);
            }

            newsComments.ForEach(x => context.MaterialComments.Add(x));
            await context.SaveChangesAsync();

            var commentFirstNews = new MaterialComment()
            {
                Pending = false,
                MaterialId = context.Materials.First(x => x.Type == NewsType).Id,
                AdditionTime = DateTime.Now,
                AuthorId = 1,
                Message = "comment first",
                MaterialType = type,
                LastModified = DateTime.Now,
                Children = new List<MaterialComment>()
                {
                    new MaterialComment()
                    {
                        ParentId = CountNews + 1,
                        Pending = false,
                                MaterialId = context.Materials.First(x => x.Type == NewsType).Id,
                        AdditionTime = DateTime.Now,
                        AuthorId = 2,
                        Message = "comment second inside",
                        MaterialType = type,
                        LastModified = DateTime.Now,
                        Children = new List<MaterialComment>()
                        {
                            new MaterialComment()
                            {
                                ParentId = CountNews + 2,
                                Pending = false,
                                MaterialId = context.Materials.First(x => x.Type == NewsType).Id,
                                AdditionTime = DateTime.Now,
                                AuthorId = 3,
                                Message = "comment three inside",
                                MaterialType = type,
                                LastModified = DateTime.Now,
                            }
                        }
                    }
                }
            };

            context.MaterialComments.Add(commentFirstNews);
            await context.SaveChangesAsync();
        }
        #endregion // not inititng

        private async Task InitializePrivateMessages()
        {
            if (context.PrivateMessages.Any()) return;
            var pms = new List<PrivateMessage>()
            {
                new PrivateMessage()
                {
                    SenderId = new Random().Next(context.Users.First().Id, context.Users.Last().Id),
                    ReceiverId = new Random().Next(context.Users.First().Id, context.Users.Last().Id),
                    IsRead = false,
                    SentTime = DateTime.Now.AddDays(-5),
                    Title = "title 1",
                    Message = "mess 1"
                },
                new PrivateMessage()
                {
                    SenderId = new Random().Next(context.Users.First().Id, context.Users.Last().Id),
                    ReceiverId = new Random().Next(context.Users.First().Id, context.Users.Last().Id),
                    IsRead = true,
                    SentTime = DateTime.Now.AddDays(-3),
                    Title = "title 2",
                    Message = "mess 2"
                },
                new PrivateMessage()
                {
                    SenderId = new Random().Next(context.Users.First().Id, context.Users.Last().Id),
                    ReceiverId =new Random().Next(context.Users.First().Id, context.Users.Last().Id),
                    IsRead = false,
                    SentTime = DateTime.Now.AddDays(-5),
                    Title = "title 3",
                    Message = "mess 3"
                },
                new PrivateMessage()
                {
                    SenderId = new Random().Next(context.Users.First().Id, context.Users.Last().Id),
                    ReceiverId = new Random().Next(context.Users.First().Id, context.Users.Last().Id),
                    IsRead = true,
                    SentTime = DateTime.Now.AddDays(-3),
                    Title = "title 4",
                    Message = "mess 4"
                },
            };

            pms.ForEach(x => context.PrivateMessages.Add(x));
            await context.SaveChangesAsync();
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

        private static UserManager<User> GetUserManager()
        {
            var userStore = new UserStore<User, Role, LiverpoolContext, int>(context);
            return new UserManager<User>(userStore, null, new PasswordHasher<User>(), null, null, null, null, null, null);
        }

        
    }
}
