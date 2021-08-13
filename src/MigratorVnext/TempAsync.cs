//using System;
//using System.Collections.Generic;
//using System.IO;
//using System.Linq;
//using System.Text;
//using System.Text.RegularExpressions;
//using System.Threading.Tasks;
//using Microsoft.AspNetCore.Builder;
//using Microsoft.AspNetCore.Identity;
//using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
//using Microsoft.EntityFrameworkCore;
//using Microsoft.Extensions.Options;
//using MyLiverpool.Common.Utilities;
//using MyLiverpool.Data.Common;
//using MyLiverpool.Data.Entities;
//using MyLiverpool.Data.ResourceAccess;
//using MyLiverpool.Data.ResourceAccess.Interfaces;
//using MyLiverpool.Data.ResourceAccess.Repositories;

//namespace MigratorVnext
//{
//    public class Program22
//    {
//        private static IForumMessageRepository _forumMessageRepository;
//        private static IForumSectionRepository _forumSectionRepository;
//        private static IForumSubsectionRepository _forumSubsectionRepository;
//        private static IForumThemeRepository _forumThemeRepository;
//        private static IMaterialRepository _materialRepository;
//        private static IMaterialCategoryRepository _materialCategoryRepository;
//        private static IMaterialCommentRepository _materialCommentRepository;
//        private static IUserRepository _userRepository;
//        private const string Path = @"d:\\downloads\siteUnpacked\_s1\";
//        private const int MaxChars = 20000;
//        private const bool UseLimit = false;

//        private static readonly List<ForumSubsection> Subsections = new List<ForumSubsection>();
//        private static readonly List<ForumTheme> Themes = new List<ForumTheme>();

//        private static User _deleted;

//        static void Main()
//        {
//            MainAsync();
//            Console.ReadKey();
//        }

//        private static async Task Initialize()
//        {
//            ILiverpoolContext db = GetNewContext();
//            var initTask = Task.Run(() =>
//            {
//                db.Database.Migrate();
//                new DatabaseInitializer(db).Seed(true);
//            });
//            await Task.WhenAll(initTask);

//            var dbForUsers = GetNewContext();
//            var store = new UserStore<User, Role, ILiverpoolContext, int>(dbForUsers);

//            IPasswordHasher<User> hasher = new PasswordHasher<User>();
//            //var provider = new MachineKeyProtectionProvider();
//            //var userStore = new UserStore<User, Role, int, UserLogin, UserRole, UserClaim>(_context);
//            IOptions<IdentityOptions> options = Options.Create(new IdentityOptions());
//            ILookupNormalizer normalizer = new UpperInvariantLookupNormalizer();
//            options.Value.User.AllowedUserNameCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._@!#$&?";
//            options.Value.Lockout.AllowedForNewUsers = true;
//            var userManager = new UserManager<User>(store, options, hasher, null, null, normalizer, null, null, null);

//            _userRepository = new UserRepository(GetNewContext(), userManager);
//            _forumMessageRepository = new ForumMessageRepository(GetNewContext());
//            _forumSectionRepository = new ForumSectionRepository(GetNewContext());
//            _forumSubsectionRepository = new ForumSubsectionRepository(GetNewContext());
//            _forumThemeRepository = new ForumThemeRepository(GetNewContext());
//            _materialRepository = new MaterialRepository(GetNewContext());
//            _materialCategoryRepository = new MaterialCategoryRepository(GetNewContext());
//            _materialCommentRepository = new MaterialCommentRepository(GetNewContext());
//            /*          
//            UserRepository = new UserRepository(db, userManager);
//            ForumMessageRepository = new ForumMessageRepository(db);
//            ForumSectionRepository = new ForumSectionRepository(db);
//            ForumSubsectionRepository = new ForumSubsectionRepository(db);
//            ForumThemeRepository = new ForumThemeRepository(db);
//            MaterialRepository = new MaterialRepository(db);
//            MaterialCategoryRepository = new MaterialCategoryRepository(db);
//            MaterialCommentRepository = new MaterialCommentRepository(db);
//            */
//        }

//        private static async void MainAsync()
//        {
//            await Initialize();
//            await UpdateFromFiles();
//            await UpdateDb();
//        }

//        public static async Task UpdateFromFiles()
//        {
//            //UpdateUsers();
//            //UpdateUsersId();
//            //UpdateBlogCategory();
//            //UpdateNewsCategory();
//            //UpdateBlogItems();
//            //UpdateNewsItems();
//            //UpdateComments();
//            //UpdateForumSectionsAndPopulateSubsectionList();
//            //UpdateForumSubsectionsFromList();
//            //UpdateForumThemes();
//            //UpdateForumComments();


//            var users = Task.Run(async () => await UpdateUsers()); //1
//            var blogsC = Task.Run(async () => await UpdateBlogCategory()); //1
//            var newsC = Task.Run(async () => await UpdateNewsCategory()); //1
//            var forumS = Task.Run(async () => await UpdateForumSectionsAndPopulateSubsectionList()); //1


//            await Task.WhenAll(blogsC, newsC);
//            await _materialCategoryRepository.SaveChangesAsync();

//            await Task.WhenAll(users, forumS);
//            Console.WriteLine("End 1");

//            _deleted = await _userRepository.FindByNameAsync("deleted"); // added creating delete uzver

//            var usersU = Task.Run(async () => await UpdateUsersId()); //2
//            var forumSubs = Task.Run(async () => await UpdateForumSubsectionsFromList()); //2

//            await Task.WhenAll(usersU, forumSubs);
//            //await Task.WhenAll(forumSubs);
//            Console.WriteLine("End 2");

//            var blogs = Task.Run(async () => await UpdateBlogItems()); //3
//            var forumT = Task.Run(async () => await UpdateForumThemes()); //3

//            await Task.WhenAll(blogs, forumT);
//            var news = Task.Run(async () => await UpdateNewsItems()); //3
//            await Task.WhenAll(news);
//            await _materialRepository.SaveChangesAsync();
//            Console.WriteLine("End 3");

//            var matComm = Task.Run(async () => await UpdateComments()); //4
//            var forumMes = Task.Run(async () => await UpdateForumComments()); //4

//            await Task.WhenAll(matComm, forumMes);
//            Console.WriteLine("End 4");
//        }

//        public static async Task UpdateDb()
//        {
//            //   UpdateCategoryAndBlogItem();
//            //    UpdateNewsCategoryAndNewsItem();
//            await UpdateCommentsForum();
//            await UpdateForumSectionAndSubsection();
//            await UpdateForumSubSectionAndTheme();
//            await UpdateComments();
//            UpdateCommentsLinks();
//            UpdateCommentsLinksToNewsAndBlogs();
//        }

//        #region Update from files to DB
//        private static async void Example()
//        {
//            Console.WriteLine("Start ");
//            using (FileStream fs = new FileStream(Path + Path + ".txt", FileMode.Open))
//            {
//                byte[] data = new byte[fs.Length];
//                fs.Read(data, 0, Convert.ToInt32(fs.Length));

//                char[] chars = Encoding.UTF8.GetString(data).ToCharArray();
//                for (int i = 0; i < chars.Length; i++)
//                {
//                    User user = new User();
//                    // login
//                    while (chars[i] != '|')
//                    {
//                        user.UserName += chars[i];
//                        i++;
//                    }
//                    // gender
//                    while (chars[i] != '|')
//                    {
//                        if (chars[i] == 1)
//                            user.Gender = true;
//                        i++;
//                    }
//                    i++;
//                    // last modified
//                    string lastDate = null;
//                    while (chars[i] != '|')
//                    {
//                        lastDate += chars[i];
//                        i++;
//                    }
//                    user.LastModified = DateTimeHelpers.ConvertUtcToLocalTime(long.Parse(lastDate));
//                    await _userRepository.AddAsync(user);
//                    while (chars[i] != 10)
//                    {
//                        i++;
//                    }
//                }
//            }
//        }

//        private static async Task UpdateUsers()
//        {
//            var deleteUser = new User()
//            {
//                UserName = "delete"
//            };
//            await _userRepository.AddAsync(deleteUser);
//            await _userRepository.SaveChangesAsync();
//            Console.WriteLine("Start UpdateUsers");
//            using (FileStream fs = new FileStream(Path + @"users.txt", FileMode.Open))
//            {
//                byte[] data = new byte[fs.Length];
//                fs.Read(data, 0, Convert.ToInt32(fs.Length));

//                char[] chars = Encoding.UTF8.GetString(data).ToCharArray();
//                var limit = chars.Length;
//                if (UseLimit && MaxChars < chars.Length)
//                {
//                    limit = MaxChars;
//                }
//                for (int i = 0; i < limit; i++)
//                {
//                    User user = new User()
//                    {
//                        //Id = Guid.NewGuid().ToString(),
//                    };
//                    // login
//                    while (chars[i] != '|')
//                    {
//                        user.UserName += chars[i];
//                        i++;
//                    }
//                    i++;
//                    // uid 
//                    while (chars[i] != '|')
//                    {
//                        i++;
//                    }
//                    i++;
//                    // pass
//                    while (chars[i] != '|')
//                    {
//                        i++;
//                    }
//                    i++;
//                    // photopath
//                    while (chars[i] != '|')
//                    {
//                        i++;
//                    }
//                    i++;
//                    // flags ???
//                    //string flags = null;
//                    while (chars[i] != '|')
//                    {
//                        //     flags += chars[i];
//                        i++;
//                    }
//                    i++;
//                    // fullname
//                    while (chars[i] != '|')
//                    {
//                        user.FullName += chars[i];
//                        i++;
//                    }
//                    i++;
//                    // gender
//                    while (chars[i] != '|')
//                    {
//                        if (chars[i] == 1)
//                            user.Gender = true;
//                        i++;
//                    }
//                    i++;
//                    // email
//                    while (chars[i] != '|')
//                    {
//                        user.Email += chars[i];
//                        i++;
//                    }
//                    i++;
//                    // homepage
//                    while (chars[i] != '|')
//                    {
//                        user.Homepage += chars[i];
//                        i++;
//                    }
//                    i++;
//                    // icq
//                    while (chars[i] != '|')
//                    {
//                        i++;
//                    }
//                    i++;
//                    // counry
//                    while (chars[i] != '|')
//                    {
//                        user.Country += chars[i];
//                        i++;
//                    }
//                    i++;
//                    // state
//                    while (chars[i] != '|')
//                    {
//                        i++;
//                    }
//                    i++;
//                    // city
//                    while (chars[i] != '|')
//                    {
//                        user.City += chars[i];
//                        i++;
//                    }
//                    i++;
//                    // signature
//                    while (chars[i] != '|')
//                    {
//                        i++;
//                    }
//                    i++;
//                    // title
//                    while (chars[i] != '|')
//                    {
//                        user.Title += chars[i];
//                        i++;
//                    }
//                    i++;
//                    // regdate
//                    string regdate = null;
//                    while (chars[i] != '|')
//                    {
//                        regdate += chars[i];
//                        i++;
//                    }
//                    user.RegistrationDate = DateTimeHelpers.ConvertUtcToLocalTime(long.Parse(regdate));
//                    i++;
//                    // ip
//                    while (chars[i] != '|')
//                    {
//                        user.Ip += chars[i];
//                        i++;
//                    }
//                    i++;
//                    // o ld-field
//                    // string hz = null;
//                    while (chars[i] != '|')
//                    {
//                        //   hz += chars[i];
//                        i++;
//                    }
//                    i++;
//                    // aol
//                    while (chars[i] != '|')
//                    {
//                        i++;
//                    }
//                    i++;
//                    // msn
//                    while (chars[i] != '|')
//                    {
//                        i++;
//                    }
//                    i++;
//                    // yahoo
//                    while (chars[i] != '|')
//                    {
//                        i++;
//                    }
//                    i++;
//                    // ispm
//                    string ispm = null;
//                    while (chars[i] != '|')
//                    {
//                        ispm += chars[i];
//                        i++;
//                    }
//                    i++;
//                    // birthday
//                    string birthday = null;
//                    while (chars[i] != '|')
//                    {
//                        birthday += chars[i];
//                        i++;
//                    }
//                    if (birthday != null)
//                    {
//                        user.Birthday = DateTimeOffset.Parse(birthday);
//                    }
//                    i++;
//                    // verify
//                    //  string fv = null;
//                    while (chars[i] != '|')
//                    {

//                        //   fv += chars[i];
//                        if (chars[i] == '0')
//                        {
//                            user.EmailConfirmed = true;
//                        }
//                        i++;
//                    }
//                    i++;
//                    // options
//                    //  string fe = null;
//                    while (chars[i] != '|')
//                    {
//                        //     fe += chars[i];
//                        i++;
//                    }
//                    i++;
//                    // last modified
//                    string lastDate = null;

//                    while (chars[i] != '|')
//                    {
//                        if (char.IsDigit(chars[i]) && chars[i + 1] == '\\')
//                        {
//                            i += 3;
//                        }

//                        lastDate += chars[i];
//                        i++;
//                    }
//                    user.LastModified = DateTimeHelpers.ConvertUtcToLocalTime(long.Parse(lastDate));
//                    user.RoleGroupId = (int)RoleGroupsEnum.Simple;
//                    user.Photo = "/content/avatars/default.png";
//                    await _userRepository.AddAsync(user);
//                    while (chars[i] != 10)
//                    {
//                        i++;
//                    }
//                }
//            }
//            Console.WriteLine("End UpdateUsers");
//        }

//        private static async Task UpdateUsersId()
//        {
//            Console.WriteLine("Start UpdateUsersId");
//            using (FileStream fs = new FileStream(Path + "ugen.txt", FileMode.Open))
//            {
//                byte[] data = new byte[fs.Length];
//                fs.Read(data, 0, Convert.ToInt32(fs.Length));

//                char[] chars = Encoding.UTF8.GetString(data).ToCharArray();
//                var limit = chars.Length;
//                if (UseLimit && MaxChars < chars.Length)
//                {
//                    limit = MaxChars;
//                }
//                for (int i = 0; i < limit; i++)
//                {

//                    // id
//                    string id = null;
//                    while (chars[i] != '|')
//                    {
//                        id += chars[i];
//                        i++;
//                    }
//                    i++;
//                    // login
//                    string userLogin = null;
//                    while (chars[i] != '|')
//                    {
//                        userLogin += chars[i];
//                        i++;
//                    }
//                    i++;
//                    User user = await _userRepository.FindByNameAsync(userLogin);
//                    if (user != null)
//                    {
//                        user.OldId = int.Parse(id);
//                        var result = await _userRepository.UpdateAsync(user);
//                    }

//                    while (chars[i] != 10)
//                    {
//                        i++;
//                    }
//                }
//            }
//            Console.WriteLine("End UpdateUsersId");
//        }

//        private static async Task UpdateBlogItems()
//        {
//            Console.WriteLine("Start UpdateBlogItems");
//            using (FileStream fs = new FileStream(Path + "blog.txt", FileMode.Open))
//            {
//                byte[] data = new byte[fs.Length];
//                fs.Read(data, 0, Convert.ToInt32(fs.Length));

//                char[] chars = Encoding.UTF8.GetString(data).ToCharArray();
//                var limit = chars.Length;
//                if (UseLimit && MaxChars < chars.Length)
//                {
//                    limit = MaxChars;
//                }
//                var categories = await _materialCategoryRepository.GetAsync(x => x.MaterialType == MaterialType.Blog);

//                for (int i = 0; i < limit; i++)
//                {
//                    Material blogItem = new Material()
//                    {
//                        Type = MaterialType.Blog
//                    };
//                    // id
//                    string id = null;
//                    while (chars[i] != '|')
//                    {
//                        id += chars[i];
//                        i++;
//                    }
//                    blogItem.OldId = int.Parse(id);
//                    i++;
//                    // Category id
//                    string categoryId = null;
//                    while (chars[i] != '|')
//                    {
//                        categoryId += chars[i];
//                        i++;
//                    }
//                    // blogItem.CategoryId = int.Parse(categoryId);

//                    i++;
//                    // year
//                    string year = null;
//                    while (chars[i] != '|')
//                    {
//                        year += chars[i];
//                        i++;
//                    }
//                    //blogItem.Year = int.Parse(year);
//                    i++;
//                    // month
//                    string month = null;
//                    while (chars[i] != '|')
//                    {
//                        month += chars[i];
//                        i++;
//                    }
//                    // blogItem.Month = int.Parse(month);
//                    i++;
//                    // day
//                    string day = null;
//                    while (chars[i] != '|')
//                    {
//                        day += chars[i];
//                        i++;
//                    }
//                    // blogItem.Day = int.Parse(day);
//                    i++;
//                    // pending
//                    while (chars[i] != '|')
//                    {
//                        if (chars[i] == '1')
//                            blogItem.Pending = true;
//                        i++;
//                    }
//                    i++;
//                    // onTop
//                    while (chars[i] != '|')
//                    {
//                        if (chars[i] == '1')
//                            blogItem.OnTop = true;
//                        i++;
//                    }
//                    i++;
//                    //commentary_may
//                    while (chars[i] != '|')
//                    {
//                        if (chars[i] == '1')
//                            blogItem.CanCommentary = true;
//                        i++;
//                    }
//                    i++;
//                    //add time
//                    string addTime = null;
//                    while (chars[i] != '|')
//                    {
//                        addTime += chars[i];
//                        i++;
//                    }
//                    i++;
//                    blogItem.AdditionTime = DateTimeHelpers.ConvertUtcToLocalTime(long.Parse(addTime));
//                    // commentary Number
//                    string numberCommentary = null;
//                    while (chars[i] != '|')
//                    {
//                        numberCommentary += chars[i];
//                        i++;
//                    }
//                    i++;
//                    //   blogItem.NumberCommentaries = int.Parse(numberCommentary);

//                    //author
//                    string userName = null;
//                    while (chars[i] != '|')
//                    {
//                        userName += chars[i];
//                        i++;
//                    }
//                    i++;

//                    blogItem.Author = await _userRepository.FindByNameAsync(userName);
//                    if (blogItem.Author == null)
//                    {
//                        blogItem.AuthorId = _deleted.Id;
//                    }
//                    //title
//                    string title = null;
//                    while (chars[i] != '|')
//                    {
//                        title += chars[i];
//                        i++;
//                    }
//                    i++;

//                    blogItem.Title = title;
//                    //brief
//                    string brief = null;
//                    while (chars[i] != '|')
//                    {
//                        brief += chars[i];
//                        i++;
//                    }
//                    i++;

//                    if (brief != null)
//                    {
//                        brief = Regex.Replace(brief, "<!--IMG1-->", "");
//                        var matches = Regex.Matches(brief, "src\\s*=\\s*['\"](?<src>[^'\"]*)['\"]", RegexOptions.IgnoreCase);
//                        if (matches.Count > 0)
//                        {
//                            var path1 = Regex.Replace(matches[0].Value, "src=", "");
//                            var path2 = Regex.Replace(path1, "\"", "");
//                            blogItem.PhotoPath = path2;
//                        }
//                        brief = Regex.Replace(brief, "<img([\\w\\W]+?)/>", "");
//                    }
//                    blogItem.Brief = brief;
//                    // message
//                    string message = null;
//                    while (chars[i] != '|')
//                    {
//                        message += chars[i];
//                        i++;
//                    }
//                    i++;

//                    blogItem.Message = message;
//                    // attach
//                    while (chars[i] != '|')
//                    {
//                        id += chars[i];
//                        i++;
//                    }
//                    i++;

//                    // files
//                    while (true)
//                    {
//                        if (chars[i] == '\\' && chars[i + 1] == '|' && chars[i + 2] == '|')
//                        {
//                            break;
//                        }
//                        i++;
//                    }
//                    i += 3;
//                    //i++;

//                    // reads
//                    string reads = null;


//                    while (chars[i] != '|')
//                    {
//                        reads += chars[i];
//                        i++;
//                    }
//                    i++;

//                    blogItem.Reads = int.Parse(reads);
//                    // rating
//                    string rating = null;
//                    while (chars[i] != '|')
//                    {
//                        rating += chars[i];
//                        i++;
//                    }
//                    i++;

//                    blogItem.Rating = float.Parse(rating);
//                    // rate_num
//                    string ratingNumbers = null;
//                    while (chars[i] != '|')
//                    {
//                        ratingNumbers += chars[i];
//                        i++;
//                    }
//                    i++;

//                    blogItem.RatingNumbers = int.Parse(ratingNumbers);
//                    // rate sum
//                    string ratingSumm = null;
//                    while (chars[i] != '|')
//                    {
//                        ratingSumm += chars[i];
//                        i++;
//                    }
//                    i++;

//                    blogItem.RatingSumm = int.Parse(ratingSumm);
//                    //rate ip
//                    while (chars[i] != '|')
//                    {
//                        reads += chars[i];
//                        i++;
//                    }
//                    i++;

//                    // other 1
//                    while (chars[i] != '|')
//                    {
//                        reads += chars[i];
//                        i++;
//                    }
//                    i++;

//                    // other 2 SOURCE
//                    string source = null;
//                    while (chars[i] != '|')
//                    {
//                        source += chars[i];
//                        i++;
//                    }
//                    blogItem.Source = source;
//                    i++;

//                    // other 3
//                    while (chars[i] != '|')
//                    {
//                        reads += chars[i];
//                        i++;
//                    }
//                    i++;

//                    // other 4
//                    while (chars[i] != '|')
//                    {
//                        reads += chars[i];
//                        i++;
//                    }
//                    i++;

//                    // other 5
//                    while (chars[i] != '|')
//                    {
//                        reads += chars[i];
//                        i++;
//                    }
//                    i++;
//                    // other6
//                    while (chars[i] != '|')
//                    {
//                        // reads += chars[i];
//                        i++;
//                    }
//                    i++;

//                    // uid
//                    while (chars[i] != '|')
//                    {
//                        // reads += chars[i];
//                        i++;
//                    }
//                    i++;

//                    // subscr
//                    while (chars[i] != '|')
//                    {
//                        // reads += chars[i];
//                        i++;
//                    }
//                    i++;

//                    // last modified
//                    string lastDate = null;
//                    while (char.IsDigit(chars[i]))// != '|' || chars[i] != '\\'))
//                    {
//                        lastDate += chars[i];
//                        i++;
//                    }
//                    //i++;

//                    blogItem.LastModified = DateTimeHelpers.ConvertUtcToLocalTime(long.Parse(lastDate));

//                    //if (useLimit && blogItem.Author == null)
//                    //{
//                    //}
//                    //else
//                    //{
//                    var category = categories.First(x => x.OldId == int.Parse(categoryId));
//                    blogItem.CategoryId = category.Id;
//                    //   category.BlogItems.Add(blogItem);
//                    var result = await _materialRepository.AddAsync(blogItem);
//                    //  }
//                    // while (chars[i] != 10)
//                    //  {
//                    //       i++;
//                    //  }
//                }
//                // await MaterialRepository.SaveChangesAsync();
//            }
//            Console.WriteLine("End UpdateBlogItems");
//        }

//        private static async Task UpdateNewsItems()
//        {
//            Console.WriteLine("Start UpdateNewsItems");
//            using (FileStream fs = new FileStream(Path + "news.txt", FileMode.Open))
//            {
//                byte[] data = new byte[fs.Length];
//                fs.Read(data, 0, Convert.ToInt32(fs.Length));

//                char[] chars = Encoding.UTF8.GetString(data).ToCharArray();
//                var limit = chars.Length;
//                if (UseLimit && MaxChars < chars.Length)
//                {
//                    limit = MaxChars * 10;
//                }

//                var categories = await _materialCategoryRepository.GetAsync(x => x.MaterialType == MaterialType.News);

//                for (int i = 0; i < limit; i++)
//                {
//                    Material newsItem = new Material()
//                    {
//                        Type = MaterialType.News
//                    };
//                    // id
//                    string id = null;
//                    while (chars[i] != '|')
//                    {
//                        id += chars[i];
//                        i++;
//                    }
//                    newsItem.OldId = int.Parse(id);
//                    i++;
//                    // Category id
//                    string categoryId = "";
//                    while (chars[i] != '|')
//                    {
//                        categoryId += chars[i];
//                        i++;
//                    }
//                    //  newsItem.CategoryId = int.Parse(categoryId);


//                    i++;
//                    // year
//                    string year = null;
//                    while (chars[i] != '|')
//                    {
//                        year += chars[i];
//                        i++;
//                    }
//                    // newsItem.Year = int.Parse(year);
//                    i++;
//                    // month
//                    string month = null;
//                    while (chars[i] != '|')
//                    {
//                        month += chars[i];
//                        i++;
//                    }
//                    // newsItem.Month = int.Parse(month);
//                    i++;
//                    // day
//                    string day = null;
//                    while (chars[i] != '|')
//                    {
//                        day += chars[i];
//                        i++;
//                    }
//                    //newsItem.Day = int.Parse(day);
//                    i++;
//                    // pending
//                    while (chars[i] != '|')
//                    {
//                        if (chars[i] == '1')
//                            newsItem.Pending = true;
//                        i++;
//                    }
//                    i++;
//                    // onTop
//                    while (chars[i] != '|')
//                    {
//                        if (chars[i] == '1')
//                            newsItem.OnTop = true;
//                        i++;
//                    }
//                    i++;
//                    //commentary_may
//                    while (chars[i] != '|')
//                    {
//                        if (chars[i] == '1')
//                            newsItem.CanCommentary = true;
//                        i++;
//                    }
//                    i++;
//                    //add time
//                    string addTime = null;
//                    while (chars[i] != '|')
//                    {
//                        addTime += chars[i];
//                        i++;
//                    }
//                    i++;
//                    newsItem.AdditionTime = DateTimeHelpers.ConvertUtcToLocalTime(long.Parse(addTime));
//                    // commentary Number
//                    string numberCommentary = null;
//                    while (chars[i] != '|')
//                    {
//                        numberCommentary += chars[i];
//                        i++;
//                    }
//                    i++;
//                    //      newsItem.NumberCommentaries = int.Parse(numberCommentary);
//                    //author
//                    string userName = null;
//                    while (chars[i] != '|')
//                    {
//                        userName += chars[i];
//                        i++;
//                    }
//                    i++;

//                    newsItem.Author = await _userRepository.FindByNameAsync(userName);
//                    if (newsItem.Author == null)
//                    {
//                        newsItem.AuthorId = _deleted.Id;
//                    }
//                    //title
//                    string title = null;
//                    while (chars[i] != '|')
//                    {
//                        title += chars[i];
//                        i++;
//                    }
//                    i++;

//                    newsItem.Title = title;
//                    //brief
//                    string brief = null;
//                    while (chars[i] != '|')
//                    {
//                        brief += chars[i];
//                        i++;
//                    }
//                    i++;
//                    if (brief != null)
//                    {
//                        brief = Regex.Replace(brief, "<!--IMG1-->", "");
//                        var matches = Regex.Matches(brief, "src\\s*=\\s*['\"](?<src>[^'\"]*)['\"]", RegexOptions.IgnoreCase);
//                        if (matches.Count > 0)
//                        {
//                            var path1 = Regex.Replace(matches[0].Value, "src=", "");
//                            var path2 = Regex.Replace(path1, "\"", "");
//                            newsItem.PhotoPath = path2;
//                        }
//                        brief = Regex.Replace(brief, "<img([\\w\\W]+?)/>", "");
//                    }
//                    newsItem.Brief = brief;
//                    // message
//                    string message = null;
//                    while (chars[i] != '|')
//                    {
//                        message += chars[i];
//                        i++;
//                    }
//                    i++;

//                    newsItem.Message = message;

//                    //while (true)
//                    //{
//                    //    if ( chars[i] == '|' && char.IsDigit(chars[i + 1]))
//                    //    {
//                    //        break;
//                    //    }
//                    //    i++;
//                    //}
//                    //i += 3;
//                    // attach
//                    while (chars[i] != '|')
//                    {
//                        //id += chars[i];
//                        i++;
//                    }
//                    i++;

//                    // files
//                    while (chars[i] != '|')
//                    {
//                        i++;
//                    }
//                    i += 1;
//                    i++;
//                    if (chars[i] == '|')
//                        i++;

//                    // reads
//                    string reads = null;


//                    while (chars[i] != '|')
//                    {
//                        reads += chars[i];
//                        i++;
//                    }
//                    i++;

//                    newsItem.Reads = int.Parse(reads);
//                    // rating
//                    string rating = null;
//                    while (chars[i] != '|')
//                    {
//                        rating += chars[i];
//                        i++;
//                    }
//                    i++;

//                    newsItem.Rating = float.Parse(rating);
//                    // rate_num
//                    string ratingNumbers = null;
//                    while (chars[i] != '|')
//                    {
//                        ratingNumbers += chars[i];
//                        i++;
//                    }
//                    i++;

//                    newsItem.RatingNumbers = int.Parse(ratingNumbers);
//                    // rate sum
//                    string ratingSumm = null;
//                    while (chars[i] != '|')
//                    {
//                        ratingSumm += chars[i];
//                        i++;
//                    }
//                    i++;

//                    newsItem.RatingSumm = int.Parse(ratingSumm);
//                    //rate ip
//                    while (chars[i] != '|')
//                    {
//                        reads += chars[i];
//                        i++;
//                    }
//                    i++;

//                    // other 1
//                    while (chars[i] != '|')
//                    {
//                        reads += chars[i];
//                        i++;
//                    }
//                    i++;

//                    // other 2 SOURCE
//                    string source = null;
//                    while (chars[i] != '|')
//                    {
//                        source += chars[i];
//                        i++;
//                    }
//                    newsItem.Source = source;
//                    i++;

//                    // other 3
//                    while (chars[i] != '|')
//                    {
//                        reads += chars[i];
//                        i++;
//                    }
//                    i++;

//                    // other 4
//                    while (chars[i] != '|')
//                    {
//                        reads += chars[i];
//                        i++;
//                    }
//                    i++;

//                    // other 5
//                    while (chars[i] != '|')
//                    {
//                        reads += chars[i];
//                        i++;
//                    }
//                    i++;
//                    // other6
//                    while (chars[i] != '|')
//                    {
//                        // reads += chars[i];
//                        i++;
//                    }
//                    i++;

//                    // uid
//                    while (chars[i] != '|')
//                    {
//                        // reads += chars[i];
//                        i++;
//                    }
//                    i++;

//                    // subscr
//                    while (chars[i] != '|')
//                    {
//                        // reads += chars[i];
//                        i++;
//                    }
//                    i++;

//                    // last modified
//                    string lastDate = null;
//                    while (char.IsDigit(chars[i]))// != '|' || chars[i] != '\\'))
//                    {
//                        lastDate += chars[i];
//                        i++;
//                    }
//                    //i++;

//                    newsItem.LastModified = DateTimeHelpers.ConvertUtcToLocalTime(long.Parse(lastDate));

//                    //if (useLimit && newsItem.Author == null)
//                    //{
//                    //}
//                    //else
//                    //{
//                    var category = categories.FirstOrDefault(x => x.OldId == int.Parse(categoryId)) ?? categories.First(x => x.OldId == 5); //old new doesn't contain category
//                    newsItem.CategoryId = category.Id;

//                    //  category.Materials.Add(newsItem);
//                    await _materialRepository.AddAsync(newsItem);
//                    // }
//                    // while (chars[i] != 10)
//                    //  {
//                    //       i++;
//                    //  }
//                }
//                // await MaterialRepository.SaveChangesAsync();
//            }
//            Console.WriteLine("End UpdateNewsItems");
//        }

//        private static async Task UpdateBlogCategory()
//        {
//            Console.WriteLine("Start UpdateBlogCategory");
//            using (FileStream fs = new FileStream(Path + "bl_bl.txt", FileMode.Open))
//            {
//                byte[] data = new byte[fs.Length];
//                fs.Read(data, 0, Convert.ToInt32(fs.Length));

//                char[] chars = Encoding.UTF8.GetString(data).ToCharArray();
//                var limit = chars.Length;
//                if (UseLimit && MaxChars < chars.Length)
//                {
//                    limit = MaxChars;
//                }
//                for (int i = 0; i < limit; i++)
//                {
//                    MaterialCategory blogCategory = new MaterialCategory()
//                    {
//                        MaterialType = MaterialType.Blog
//                    };
//                    // id
//                    string id = null;
//                    while (chars[i] != '|')
//                    {
//                        id += chars[i];
//                        i++;
//                    }
//                    i++;
//                    blogCategory.OldId = int.Parse(id);
//                    // position
//                    //   string position = null;
//                    while (chars[i] != '|')
//                    {
//                        //       position += chars[i];
//                        i++;
//                    }
//                    i++;
//                    //  blogCategory.Position = int.Parse(position);
//                    // count
//                    //  string count = null;
//                    while (chars[i] != '|')
//                    {
//                        //     count += chars[i];
//                        i++;
//                    }
//                    i++;
//                    //   blogCategory.ItemsCount = int.Parse(count);

//                    // name
//                    while (chars[i] != '|')
//                    {
//                        blogCategory.Name += chars[i];
//                        i++;
//                    }
//                    i++;
//                    // description
//                    i++;
//                    // url
//                    // var urlPath = "";
//                    if (chars[i] != '|')
//                    {
//                        while (chars[i] != '|')
//                        {
//                            //      urlPath += chars[i];
//                            i++;
//                        }
//                    }
//                    i++;

//                    var result = await _materialCategoryRepository.AddAsync(blogCategory);
//                }
//                // await  MaterialCategoryRepository.SaveChangesAsync();
//            }
//            Console.WriteLine("End UpdateBlogCategory");
//        }

//        private static async Task UpdateNewsCategory()
//        {
//            Console.WriteLine("Start UpdateNewsCategory");
//            using (FileStream fs = new FileStream(Path + "nw_nw.txt", FileMode.Open))
//            {
//                byte[] data = new byte[fs.Length];
//                fs.Read(data, 0, Convert.ToInt32(fs.Length));

//                char[] chars = Encoding.UTF8.GetString(data).ToCharArray();
//                var limit = chars.Length;
//                if (UseLimit && MaxChars < chars.Length)
//                {
//                    limit = MaxChars;
//                }
//                for (int i = 0; i < limit; i++)
//                {
//                    MaterialCategory newsCategory = new MaterialCategory()
//                    {
//                        MaterialType = MaterialType.News
//                    };
//                    // id
//                    string id = string.Empty;
//                    while (chars[i] != '|')
//                    {
//                        id += chars[i];
//                        i++;
//                    }
//                    i++;
//                    newsCategory.OldId = int.Parse(id);
//                    // position
//                    string position = string.Empty;
//                    while (chars[i] != '|')
//                    {
//                        position += chars[i];
//                        i++;
//                    }
//                    i++;
//                    //   newsCategory.Position = int.Parse(position);
//                    // count
//                    // string count = string.Empty;
//                    while (chars[i] != '|')
//                    {
//                        //    count += chars[i];
//                        i++;
//                    }
//                    i++;
//                    // newsCategory.ItemsCount = int.Parse(count);

//                    // name
//                    while (chars[i] != '|')
//                    {
//                        newsCategory.Name += chars[i];
//                        i++;
//                    }
//                    i++;

//                    // url
//                    //   var urlPath = "";
//                    if (chars[i] == '|')
//                    {
//                        i++;
//                        while (chars[i] != '|')
//                        {
//                            //   urlPath += chars[i];
//                            i++;
//                        }
//                        i++;
//                    }
//                    await _materialCategoryRepository.AddAsync(newsCategory);
//                }
//                // await MaterialCategoryRepository.SaveChangesAsync();
//            }
//            Console.WriteLine("End UpdateNewsCategory");
//        }

//        private static async Task UpdateComments()
//        {
//            Console.WriteLine("Start UpdateComments");
//            using (FileStream fs = new FileStream(Path + "comments.txt", FileMode.Open))
//            {
//                byte[] data = new byte[fs.Length];
//                fs.Read(data, 0, Convert.ToInt32(fs.Length));

//                char[] chars = Encoding.UTF8.GetString(data).ToCharArray();
//                var limit = chars.Length;
//                if (UseLimit && MaxChars < chars.Length)
//                {
//                    limit = MaxChars * 10;
//                }

//                var news = await _materialRepository.GetListAsync();//(n => n.NumberCommentaries > 0);

//                for (int i = 0; i < limit; i++)
//                {

//                    // id
//                    string id = null;
//                    while (chars[i] != '|')
//                    {
//                        id += chars[i];
//                        i++;
//                    }
//                    i++;

//                    // module id
//                    string moduleIdRead = null;
//                    while (chars[i] != '|')
//                    {
//                        moduleIdRead += chars[i];
//                        i++;
//                    }
//                    i++;
//                    var moduleId = int.Parse(moduleIdRead);


//                    //material id
//                    string materialId = null;
//                    while (chars[i] != '|')
//                    {
//                        materialId += chars[i];
//                        i++;
//                    }
//                    i++;

//                    // pending
//                    char pending = '0';
//                    while (chars[i] != '|')
//                    {
//                        pending = chars[i];
//                        i++;
//                    }
//                    i++;
//                    // add time
//                    string additionTime = null;
//                    while (chars[i] != '|')
//                    {
//                        additionTime += chars[i];
//                        i++;
//                    }
//                    i++;

//                    //author
//                    string userName = null;
//                    while (chars[i] != '|')
//                    {
//                        userName += chars[i];
//                        i++;
//                    }
//                    i++;

//                    //name
//                    while (chars[i] != '|')
//                    {
//                        i++;
//                    }
//                    i++;
//                    //email
//                    while (chars[i] != '|')
//                    {
//                        i++;
//                    }
//                    i++;
//                    //www
//                    while (chars[i] != '|')
//                    {
//                        i++;
//                    }
//                    i++;
//                    //ip
//                    while (chars[i] != '|')
//                    {
//                        i++;
//                    }
//                    i++;
//                    // message
//                    string message = null;
//                    while (chars[i] != '|')
//                    {
//                        message += chars[i];
//                        i++;
//                    }
//                    i++;

//                    // answer
//                    string answer = null;
//                    while (chars[i] != '|')
//                    {
//                        answer += chars[i];
//                        i++;
//                    }
//                    i++;


//                    // user id
//                    string userId = null;
//                    while (chars[i] != '|')
//                    {
//                        userId += chars[i];
//                        i++;
//                    }
//                    i++;
//                    // parent id
//                    string parentId = null;
//                    while (chars[i] != '|')
//                    {
//                        parentId += chars[i];
//                        i++;
//                    }
//                    i++;


//                    while (chars[i] != 10)
//                    {
//                        i++;
//                    }

//                    // user id
//                    //string rate = null;
//                    //while (chars[i] != '|')
//                    //{
//                    //    rate += chars[i];
//                    //    i++;
//                    //}
//                    //i++;
//                    //// rate
//                    //string rateId = null;
//                    //while (chars[i] != '|')
//                    //{
//                    //    rateId += chars[i];
//                    //    i++;
//                    //}
//                    //i++;




//                    //foreach (var comment in newsComments)
//                    //{
//                    //    foreach (var item in news.Where(newsItem => comment.MaterialId == newsItem.Id))
//                    //    {
//                    //        if (item.Children == null)
//                    //        {
//                    //            item.Children = new List<NewsComment>();
//                    //        }
//                    //        item.Children.Add(comment);
//                    //        comment.MaterialId = item.Id;
//                    //    }
//                    //}
//                    if (moduleId != 1 && moduleId != 2)
//                    {
//                        continue;
//                        //moduleID (1=>'blog',2=>'news',3=>'publ',4=>'photo',5=>'load',6=>'dir',7=>'board')
//                    }
//                    var materialType = MaterialType.Error;
//                    if (moduleId == 2)
//                    {
//                        materialType = MaterialType.News;
//                    }
//                    else if (moduleId == 1)
//                    {
//                        materialType = MaterialType.Blog;
//                    }
//                    MaterialComment comment = new MaterialComment()
//                    {
//                        MaterialType = materialType,
//                        MaterialId = int.Parse(materialId),
//                        OldId = int.Parse(id),
//                    };

//                    comment.Material = news.FirstOrDefault(newsItem => comment.MaterialId == newsItem.OldId && comment.MaterialType == materialType);
//                    if (comment.Material == null)
//                    {
//                        continue;
//                    }
//                    if (comment.Material.Comments == null)
//                    {
//                        comment.Material.Comments = new List<MaterialComment>();
//                    }
//                    comment.Material.Comments.Add(comment);
//                    if (pending == '1')
//                        comment.Pending = true;
//                    comment.AdditionTime = DateTimeHelpers.ConvertUtcToLocalTime(long.Parse(additionTime));
//                    if (!string.IsNullOrEmpty(userName))
//                    {
//                        comment.Author = await _userRepository.FindByNameAsync(userName);
//                    }
//                    if (comment.Author == null)
//                    {
//                        comment.AuthorId = _deleted.Id;
//                    }
//                    comment.Answer = answer;
//                    comment.Message = message;
//                    var parId = int.Parse(parentId);
//                    if (parId > 0)
//                    {
//                        comment.Parent = await _materialCommentRepository.GetByIdAsync(parId);
//                    }
//                    //comment.ParentId = int.Parse(parentId);

//                    var result = await _materialCommentRepository.AddAsync(comment);
//                }
//                await _materialCommentRepository.SaveChangesAsync();
//            }
//            Console.WriteLine("End UpdateComments");
//        }

//        private static async Task UpdateForumSectionsAndPopulateSubsectionList()
//        {
//            Console.WriteLine("Start UpdateForumSections");
//            using (FileStream fs = new FileStream(Path + "fr_fr.txt", FileMode.Open))
//            {
//                byte[] data = new byte[fs.Length];
//                fs.Read(data, 0, Convert.ToInt32(fs.Length));

//                char[] chars = Encoding.UTF8.GetString(data).ToCharArray();
//                var limit = chars.Length;
//                var forumSubsections = new List<ForumSubsection>();
//                if (UseLimit && MaxChars < chars.Length)
//                {
//                    limit = MaxChars;
//                }
//                for (int i = 0; i < limit; i++)
//                {
//                    if (chars[i + 2] == '0' || chars[i + 3] == '0')
//                    {
//                        ForumSection forumSection = new ForumSection();
//                        string id = null;
//                        while (chars[i] != '|')
//                        {
//                            id += chars[i];
//                            i++;
//                        }
//                        i++;
//                        forumSection.IdOld = int.Parse(id);
//                        // section id
//                        while (chars[i] != '|')
//                        {
//                            i++;
//                        }
//                        i++;
//                        // is section
//                        while (chars[i] != '|')
//                        {
//                            i++;
//                        }
//                        i++;
//                        // sequence
//                        while (chars[i] != '|')
//                        {
//                            i++;
//                        }
//                        i++;
//                        // time creation
//                        while (chars[i] != '|')
//                        {
//                            i++;
//                        }
//                        i++;
//                        // name
//                        while (chars[i] != '|')
//                        {
//                            forumSection.Name += chars[i];
//                            i++;
//                        }
//                        await _forumSectionRepository.AddAsync(forumSection);
//                        while (chars[i] != 10)
//                        {
//                            i++;
//                        }
//                    }
//                    else
//                    {
//                        ForumSubsection forumSubsection = new ForumSubsection();
//                        // id
//                        string id = null;
//                        while (chars[i] != '|')
//                        {
//                            id += chars[i];
//                            i++;
//                        }
//                        i++;
//                        forumSubsection.IdOld = int.Parse(id);
//                        // section id
//                        string sectionId = null;
//                        while (chars[i] != '|')
//                        {
//                            sectionId += chars[i];
//                            i++;
//                        }
//                        i++;

//                        forumSubsection.SectionId = int.Parse(sectionId);
//                        // is section
//                        while (chars[i] != '|')
//                        {
//                            i++;
//                        }
//                        i++;
//                        // sequence
//                        while (chars[i] != '|')
//                        {
//                            i++;
//                        }
//                        i++;
//                        // sequence
//                        while (chars[i] != '|')
//                        {
//                            i++;
//                        }
//                        i++;
//                        // name 
//                        while (chars[i] != '|')
//                        {
//                            forumSubsection.Name += chars[i];
//                            i++;
//                        }
//                        i++;
//                        // description 
//                        while (chars[i] != '|')
//                        {
//                            forumSubsection.Description += chars[i];
//                            i++;
//                        }
//                        i++;
//                        // last modified

//                        Subsections.Add(forumSubsection);
//                        while (chars[i] != 10)
//                        {
//                            i++;
//                        }
//                    }
//                }
//            }
//            await _forumSectionRepository.SaveChangesAsync();
//            Console.WriteLine("End UpdateForumSections");
//        }

//        private static async Task UpdateForumSubsectionsFromList()
//        {
//            Console.WriteLine("Start UpdateForumSubsections");
//            var sections = await _forumSectionRepository.GetListAsync();

//            foreach (var subsection in Subsections)
//            {
//                var sectionId = sections.First(x => x.IdOld == subsection.SectionId).Id;
//                subsection.SectionId = sectionId;
//            }

//            Subsections.ForEach(async x => await _forumSubsectionRepository.AddAsync(x));

//            await _forumSubsectionRepository.SaveChangesAsync();
//            Console.WriteLine("End UpdateForumSubsections");
//        }

//        private static async Task UpdateForumThemes()
//        {
//            Console.WriteLine("Start UpdateForumThemes");
//            var forumSubsections = await _forumSubsectionRepository.GetListAsync();
//            using (FileStream fs = new FileStream(Path + "forum.txt", FileMode.Open))
//            {
//                byte[] data = new byte[fs.Length];
//                fs.Read(data, 0, Convert.ToInt32(fs.Length));

//                char[] chars = Encoding.UTF8.GetString(data).ToCharArray();
//                var limit = chars.Length;
//                if (UseLimit && MaxChars < chars.Length)
//                {
//                    limit = MaxChars;
//                }
//                for (int i = 0; i < limit; i++)
//                {
//                    ForumTheme forumTheme = new ForumTheme();
//                    // id
//                    string id = null;
//                    while (chars[i] != '|')
//                    {
//                        id += chars[i];
//                        i++;
//                    }
//                    i++;
//                    forumTheme.IdOld = int.Parse(id);
//                    // section id
//                    string sectionId = null;
//                    while (chars[i] != '|')
//                    {
//                        sectionId += chars[i];
//                        i++;
//                    }
//                    i++;
//                    var subsection = forumSubsections.First(x => x.IdOld == int.Parse(sectionId));
//                    forumTheme.SubsectionId = subsection.Id;
//                    // isPoll
//                    while (chars[i] != '|')
//                    {
//                        if (chars[i] == '1')
//                            forumTheme.IsPool = true;
//                        i++;
//                    }
//                    i++;
//                    // on top
//                    while (chars[i] != '|')
//                    {
//                        if (chars[i] == '1')
//                            forumTheme.OnTop = true;
//                        i++;
//                    }
//                    i++;
//                    // last modified
//                    string lastDateMessage = null;
//                    while (chars[i] != '|')
//                    {
//                        lastDateMessage += chars[i];
//                        i++;
//                    }
//                    i++;
//                    forumTheme.LastMessageAdditionTime = DateTimeHelpers.ConvertUtcToLocalTime(long.Parse(lastDateMessage));
//                    // is CLosed
//                    while (chars[i] != '|')
//                    {
//                        if (chars[i] == '1')
//                            forumTheme.IsClosed = true;
//                        i++;
//                    }
//                    i++;
//                    // answers
//                    string answers = null;
//                    while (chars[i] != '|')
//                    {
//                        answers += chars[i];
//                        i++;
//                    }
//                    i++;
//                    forumTheme.Answers = int.Parse(answers);
//                    // views
//                    string views = null;
//                    while (chars[i] != '|')
//                    {
//                        views += chars[i];
//                        i++;
//                    }
//                    i++;
//                    forumTheme.Views = int.Parse(views);
//                    // name
//                    while (chars[i] != '|')
//                    {
//                        forumTheme.Name += chars[i];
//                        i++;
//                    }
//                    i++;
//                    // Description
//                    while (chars[i] != '|')
//                    {
//                        forumTheme.Description += chars[i];
//                        i++;
//                    }
//                    i++;
//                    // author
//                    string author = null;
//                    while (chars[i] != '|')
//                    {
//                        author += chars[i];
//                        i++;
//                    }
//                    i++;
//                    forumTheme.Author = await _userRepository.FindByNameAsync(author);
//                    if (forumTheme.Author == null)
//                    {
//                        forumTheme.AuthorId = _deleted.Id;
//                    }
//                    // user reg????
//                    while (chars[i] != '|')
//                    {
//                        //author += chars[i];
//                        i++;
//                    }
//                    i++;
//                    // author last answer
//                    string authorLastMessage = null;
//                    while (chars[i] != '|')
//                    {
//                        authorLastMessage += chars[i];
//                        i++;
//                    }
//                    i++;
//                    forumTheme.LastAnswerUser = await _userRepository.FindByNameAsync(authorLastMessage);
//                    if (forumTheme.LastAnswerUser == null)
//                    {
//                        forumTheme.LastAnswerUserId = _deleted.Id;
//                    }

//                    Themes.Add(forumTheme);
//                    var result = await _forumThemeRepository.AddAsync(forumTheme);
//                    while (chars[i] != 10)
//                    {
//                        i++;
//                    }
//                }
//                await _forumThemeRepository.SaveChangesAsync();
//            }
//            Console.WriteLine("End UpdateForumThemes");
//        }

//        private static async Task UpdateForumComments()
//        {
//            Console.WriteLine("Start UpdateForumComments");
//            using (FileStream fs = new FileStream(Path + "forump.txt", FileMode.Open))
//            {
//                byte[] data = new byte[fs.Length];
//                fs.Read(data, 0, Convert.ToInt32(fs.Length));

//                char[] chars = Encoding.UTF8.GetString(data).ToCharArray();
//                var limit = chars.Length;
//                if (UseLimit && MaxChars < chars.Length)
//                {
//                    limit = MaxChars;
//                }
//                for (int i = 0; i < limit; i++)
//                {
//                    ForumMessage forumMessage = new ForumMessage();
//                    // id
//                    string id = null;
//                    while (chars[i] != '|')
//                    {
//                        id += chars[i];
//                        i++;
//                    }
//                    i++;
//                    forumMessage.OldId = int.Parse(id);

//                    // module id
//                    string moduleId = null;
//                    while (chars[i] != '|')
//                    {
//                        moduleId += chars[i];
//                        i++;
//                    }
//                    i++;
//                    var theme = Themes.FirstOrDefault(x => x.IdOld == int.Parse(moduleId));
//                    if (UseLimit && theme != null)
//                    {
//                        // theme.Messages = 
//                        forumMessage.ThemeId = theme.Id;
//                    }

//                    //material id
//                    string additionTime = null;
//                    while (chars[i] != '|')
//                    {
//                        additionTime += chars[i];
//                        i++;
//                    }
//                    i++;
//                    forumMessage.AdditionTime = DateTimeHelpers.ConvertUtcToLocalTime(long.Parse(additionTime));
//                    forumMessage.LastModifiedTime = forumMessage.AdditionTime;
//                    // pending
//                    while (chars[i] != '|')
//                    {
//                        if (chars[i] == 1)
//                            forumMessage.IsFirstMessage = true;
//                        i++;
//                    }
//                    i++;
//                    // message
//                    while (chars[i] != '|')
//                    {
//                        forumMessage.Message += chars[i];
//                        i++;
//                    }
//                    i++;
//                    //user is reg
//                    while (chars[i] != '|')
//                    {
//                        i++;
//                    }
//                    i++;
//                    //author
//                    string userName = null;
//                    while (chars[i] != '|')
//                    {
//                        userName += chars[i];
//                        i++;
//                    }
//                    i++;
//                    var author = await _userRepository.FindByNameAsync(userName);
//                    forumMessage.AuthorId = author?.Id ?? _deleted.Id;

//                    while (chars[i] != 10)
//                    {
//                        i++;
//                    }
//                    //    if (UseLimit)
//                    //     {
//                    //         theme?.Messages.Add(forumMessage);
//                    //     }
//                    if (theme != null)
//                    {
//                        var result = await _forumMessageRepository.AddAsync(forumMessage);
//                    }
//                }
//                await _forumMessageRepository.SaveChangesAsync();
//            }
//            Console.WriteLine("End UpdateForumComments");
//        }

//        #endregion

//        #region UpdateDB
//        //public static void UpdateBlogCategoryAndBlogItem()
//        //{
//        //    Console.WriteLine("Start UpdateBlogCategoryAndBlogItem");
//        //    var blogCategories = UnitOfWork.BlogCategoryRepository.Get().ToList();
//        //    var blogs = UnitOfWork.BlogItemRepository.Get().ToList();
//        //    foreach (var blogCategory in blogCategories)
//        //    {
//        //        if (blogCategory.BlogItems == null)
//        //        {
//        //            blogCategory.BlogItems = new List<BlogItem>();
//        //        }
//        //        foreach (var blog in blogs.Where(blog => blog.CategoryId == blogCategory.Id))
//        //        {
//        //            blog.BlogCategory = blogCategory;
//        //            blogCategory.BlogItems.Add(blog);
//        //        }
//        //    }
//        //    UnitOfWork.Save();
//        //}

//        //public static void UpdateNewsCategoryAndNewsItem()
//        //{
//        //    Console.WriteLine("Start UpdateNewsCategoryAndNewsItem");
//        //    var newsCategories = UnitOfWork.MaterialCategoryRepository.Get().ToList();
//        //    var news = UnitOfWork.MaterialRepository.Get().ToList();
//        //    foreach (var newsCategory in newsCategories)
//        //    {
//        //        if (newsCategory.Materials == null)
//        //        {
//        //            newsCategory.Materials = new List<Material>();
//        //        }
//        //        foreach (var newss in news.Where(newss => newss.CategoryId == newsCategory.Id))
//        //        {
//        //            newss.NewsCategory = newsCategory;
//        //            newsCategory.Materials.Add(newss);
//        //        }
//        //    }
//        //    UnitOfWork.Save();
//        //}

//        public static void UpdateCommentsLinks()
//        {
//            //Console.WriteLine("Start UpdateCommentsLinks");
//            //var blogComments = await UnitOfWork.BlogCommentRepository.Get(c => c.ParentId != 0).ToList();
//            //foreach (var comment in blogComments)
//            //{
//            //    var parentComment = await UnitOfWork.BlogCommentRepository.GetById(comment.ParentId);

//            //    if (parentComment == null) continue;
//            //    if (parentComment.Children == null)
//            //    {
//            //        parentComment.Children = new List<BlogComment>();
//            //    }
//            //   // parentComment.Children.Add(comment);
//            //    comment.ParentId = parentComment.Id;
//            //    break;
//            //}
//            //var comments = await UnitOfWork.MaterialCommentRepository.Get(c => c.ParentId != 0).ToList();
//            //foreach (var comment in comments)
//            //{
//            //    var parentComment = await UnitOfWork.MaterialCommentRepository.GetById(comment.ParentId);

//            //    if (parentComment == null) continue;
//            //    if (parentComment.Children == null)
//            //    {
//            //        parentComment.Children = new List<NewsComment>();
//            //    }
//            //    //  parentComment.Children.Add(comment);
//            //    comment.ParentId = parentComment.Id;
//            //}
//            //UnitOfWork.Save();
//        }

//        public static async Task UpdateCommentsForum()
//        {
//            Console.WriteLine("Start UpdateCommentsForum");

//            var posts = await _forumMessageRepository.GetListAsync();
//            var themes = await _forumThemeRepository.GetListAsync();
//            foreach (var theme in themes)
//            {
//                foreach (var post in posts.Where(post => theme.Id == post.ThemeId))
//                {
//                    post.Theme = theme;
//                    if (theme.Messages == null)
//                    {
//                        theme.Messages = new List<ForumMessage>();
//                    }
//                    theme.Messages.Add(post);
//                }
//            }
//        }

//        public static async Task UpdateForumSectionAndSubsection()
//        {
//            Console.WriteLine("Start UpdateForumSectionAndSubsection");
//            var sections = await _forumSectionRepository.GetListAsync();
//            var subSections = await _forumSubsectionRepository.GetListAsync();
//            foreach (var section in sections)
//            {
//                foreach (var subSection in subSections)
//                {
//                    if (subSection.SectionId == section.Id)
//                    {
//                        subSection.Section = section;
//                        if (section.Subsections == null)
//                        {
//                            section.Subsections = new List<ForumSubsection>();
//                        }
//                        section.Subsections.Add(subSection);
//                    }
//                }
//            }
//            await _forumSubsectionRepository.SaveChangesAsync(); //todo above not duplicating?

//        }

//        public static async Task UpdateForumSubSectionAndTheme()
//        {
//            Console.WriteLine("Start UpdateForumSubSectionAndTheme");
//            var themes = await _forumThemeRepository.GetListAsync();
//            var subSections = await _forumSubsectionRepository.GetListAsync();

//            foreach (var subSection in subSections)
//            {
//                foreach (var theme in themes.Where(theme => subSection.Id == theme.SubsectionId))
//                {
//                    theme.Subsection = subSection;
//                    if (subSection.Themes == null)
//                    {
//                        subSection.Themes = new List<ForumTheme>();
//                    }
//                    subSection.Themes.Add(theme);
//                }
//            }
//            await _forumSubsectionRepository.SaveChangesAsync(); //todo above not duplicating?
//        }

//        public static void UpdateCommentsLinksToNewsAndBlogs()
//        {
//            //Console.WriteLine("Start UpdateCommentsLinksToNewsAndBlogs");

//            ////var newsComments = UnitOfWork.MaterialCommentRepository.Get();

//            ////var blogComments = UnitOfWork.BlogCommentRepository.Get();
//            ////var blogs = UnitOfWork.BlogItemRepository.Get(n => n.NumberCommentaries > 0);
//            ////foreach (var comment in blogComments)
//            ////{
//            ////    foreach (var blog in blogs.Where(blog => comment.MaterialId == blog.Id))
//            ////    {
//            ////        if (blog.Children == null)
//            ////        {
//            ////            blog.Children = new List<BlogComment>();
//            ////        }
//            ////        blog.Children.Add(comment);
//            ////        comment.BlogItem = blog;
//            ////    }
//            ////}
//            //Console.WriteLine("End UpdateCommentsLinksToNewsAndBlogs");
//        }

//        #endregion

//        private static ILiverpoolContext Context;
//        private static ILiverpoolContext GetNewContext()
//        {
//            // return Context ?? (Context = new ILiverpoolContext(new DbContextOptions<LiverpoolContext>(), true));
//            return new ILiverpoolContext(new DbContextOptions<LiverpoolContext>(), true);
//        }
//    }
//}

