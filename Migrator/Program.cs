using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using MyLiverpoolSite.Data.DataAccessLayer;
using MyLiverpoolSite.Data.Entities;
using MyLiverpoolSite.Common.Utilities;

namespace Migrator
{
    class Program
    {
        private static readonly IUnitOfWork UnitOfWork = new UnitOfWork();
        private static string path = @"D:\\example\";
        private static int maxChars = 20000;
        private static bool useLimit = true;

        static void Main()
        {
            UpdateFromFiles();
            UpdateDb();
            Console.WriteLine("END");
            Console.ReadKey();
        }

        public static void UpdateFromFiles()
        {
            UpdateUsers();
            UpdateUsersId();
            UpdateBlogCategory();
            UpdateNewsCategory();
            UpdateBlogItems();
            UpdateNewsItems();
            UpdateComments();
            UpdateForumThemes();
            UpdateForumSections();
            UpdateForumComments();
        }

        public static void UpdateDb()
        {
            //UpdateBlogCategoryAndBlogItem();
            //UpdateNewsCategoryAndNewsItem();
            UpdateCommentsForum();
            UpdateForumSectionAndSubsection();
            UpdateForumSubSectionAndTheme();
            //UpdateComments();
            UpdateCommentsLinks();
           // UpdateCommentsLinksToNewsAndBlogs();
        }

        #region Update from files to DB
        private static void Example()
        {
            Console.WriteLine("Start ");
            using (FileStream fs = new FileStream(path + path + ".txt", FileMode.Open))
            {
                byte[] data = new byte[fs.Length];
                fs.Read(data, 0, Convert.ToInt32(fs.Length));

                char[] chars = Encoding.UTF8.GetString(data).ToCharArray();
                for (int i = 0; i < chars.Length; i++)
                {
                    User user = new User();
                    // login
                    while (chars[i] != '|')
                    {
                        user.UserName += chars[i];
                        i++;
                    }
                    // gender
                    while (chars[i] != '|')
                    {
                        if (chars[i] == 1)
                            user.Gender = true;
                        i++;
                    }
                    i++;
                    // last modified
                    string lastDate = null;
                    while (chars[i] != '|')
                    {
                        lastDate += chars[i];
                        i++;
                    }
                    user.LastModified = DateTimeHelpers.ConvertUtcToLocalTime(long.Parse(lastDate));
                    UnitOfWork.UserRepository.Add(user);
                    while (chars[i] != 10)
                    {
                        i++;
                    }
                }
                UnitOfWork.Save();
            }

        }

        private static void UpdateUsers()
        {
            Console.WriteLine("Start UpdateUsers");
            using (FileStream fs = new FileStream(path + @"users.txt", FileMode.Open))
            {
                byte[] data = new byte[fs.Length];
                fs.Read(data, 0, Convert.ToInt32(fs.Length));

                char[] chars = Encoding.UTF8.GetString(data).ToCharArray();
                var limit = chars.Length;
                if (useLimit && maxChars < chars.Length)
                {
                    limit = maxChars;
                }
                for (int i = 0; i < limit; i++)
                {
                    User user = new User()
                    {
                        //Id = Guid.NewGuid().ToString(),
                    };
                    // login
                    while (chars[i] != '|')
                    {
                        user.UserName += chars[i];
                        i++;
                    }
                    i++;
                    // uid 
                    while (chars[i] != '|')
                    {
                        i++;
                    }
                    i++;
                    // pass
                    while (chars[i] != '|')
                    {
                        i++;
                    }
                    i++;
                    // photopath
                    while (chars[i] != '|')
                    {
                        i++;
                    }
                    i++;
                    // flags ???
                    string flags = null;
                    while (chars[i] != '|')
                    {
                        flags += chars[i];
                        i++;
                    }
                    i++;
                    // fullname
                    while (chars[i] != '|')
                    {
                        user.FullName += chars[i];
                        i++;
                    }
                    i++;
                    // gender
                    while (chars[i] != '|')
                    {
                        if (chars[i] == 1)
                            user.Gender = true;
                        i++;
                    }
                    i++;
                    // email
                    while (chars[i] != '|')
                    {
                        user.Email += chars[i];
                        i++;
                    }
                    i++;
                    // homepage
                    while (chars[i] != '|')
                    {
                        user.Homepage += chars[i];
                        i++;
                    }
                    i++;
                    // icq
                    while (chars[i] != '|')
                    {
                        i++;
                    }
                    i++;
                    // counry
                    while (chars[i] != '|')
                    {
                        user.Country += chars[i];
                        i++;
                    }
                    i++;
                    // state
                    while (chars[i] != '|')
                    {
                        i++;
                    }
                    i++;
                    // city
                    while (chars[i] != '|')
                    {
                        user.City += chars[i];
                        i++;
                    }
                    i++;
                    // signature
                    while (chars[i] != '|')
                    {
                        i++;
                    }
                    i++;
                    // title
                    while (chars[i] != '|')
                    {
                        user.Title += chars[i];
                        i++;
                    }
                    i++;
                    // regdate
                    string regdate = null;
                    while (chars[i] != '|')
                    {
                        regdate += chars[i];
                        i++;
                    }
                    user.RegistrationDate = DateTimeHelpers.ConvertUtcToLocalTime(long.Parse(regdate));
                    i++;
                    // ip
                    while (chars[i] != '|')
                    {
                        user.Ip += chars[i];
                        i++;
                    }
                    i++;
                    // o ld-field
                    string hz = null;
                    while (chars[i] != '|')
                    {
                        hz += chars[i];
                        i++;
                    }
                    i++;
                    // aol
                    while (chars[i] != '|')
                    {
                        i++;
                    }
                    i++;
                    // msn
                    while (chars[i] != '|')
                    {
                        i++;
                    }
                    i++;
                    // yahoo
                    while (chars[i] != '|')
                    {
                        i++;
                    }
                    i++;
                    // ispm
                    string ispm = null;
                    while (chars[i] != '|')
                    {
                        ispm += chars[i];
                        i++;
                    }
                    i++;
                    // birthday
                    string birthday = null;
                    while (chars[i] != '|')
                    {
                        birthday += chars[i];
                        i++;
                    }
                    if (birthday != null)
                    {
                        user.Birthday = DateTime.Parse(birthday);
                    }
                    i++;
                    // verify
                    string fv = null;
                    while (chars[i] != '|')
                    {

                        fv += chars[i];
                        if (chars[i] == '0')
                        {
                            user.Verify = true;
                        }
                        i++;
                    }
                    i++;
                    // options
                    string fe = null;
                    while (chars[i] != '|')
                    {
                        fe += chars[i];
                        i++;
                    }
                    i++;
                    // last modified
                    string lastDate = null;

                    while (chars[i] != '|')
                    {
                        if (char.IsDigit(chars[i]) && chars[i + 1] == '\\')
                        {
                            i += 3;
                        }

                        lastDate += chars[i];
                        i++;
                    }
                    user.LastModified = DateTimeHelpers.ConvertUtcToLocalTime(long.Parse(lastDate));
                    UnitOfWork.UserRepository.Add(user);
                    while (chars[i] != 10)
                    {
                        i++;
                    }
                }
                UnitOfWork.Save();
            }
        }

        private static void UpdateBlogItems()
        {
            Console.WriteLine("Start UpdateBlogItems");
            using (FileStream fs = new FileStream(path + "blog.txt", FileMode.Open))
            {
                byte[] data = new byte[fs.Length];
                fs.Read(data, 0, Convert.ToInt32(fs.Length));

                char[] chars = Encoding.UTF8.GetString(data).ToCharArray();
                var limit = chars.Length;
                if (useLimit && maxChars < chars.Length)
                {
                    limit = maxChars;
                }

                var categories = UnitOfWork.BlogCategoryRepository.Get().Result.ToList();

                for (int i = 0; i < limit; i++)
                {
                    BlogItem blogItem = new BlogItem();
                    // id
                    string id = null;
                    while (chars[i] != '|')
                    {
                        id += chars[i];
                        i++;
                    }
                    blogItem.OldId = int.Parse(id);
                    i++;
                    // Category id
                    string categoryId = null;
                    while (chars[i] != '|')
                    {
                        categoryId += chars[i];
                        i++;
                    }
                   // blogItem.CategoryId = int.Parse(categoryId);

                    i++;
                    // year
                    string year = null;
                    while (chars[i] != '|')
                    {
                        year += chars[i];
                        i++;
                    }
                    blogItem.Year = int.Parse(year);
                    i++;
                    // month
                    string month = null;
                    while (chars[i] != '|')
                    {
                        month += chars[i];
                        i++;
                    }
                    blogItem.Month = int.Parse(month);
                    i++;
                    // day
                    string day = null;
                    while (chars[i] != '|')
                    {
                        day += chars[i];
                        i++;
                    }
                    blogItem.Day = int.Parse(day);
                    i++;
                    // pending
                    while (chars[i] != '|')
                    {
                        if (chars[i] == '1')
                            blogItem.Pending = true;
                        i++;
                    }
                    i++;
                    // onTop
                    while (chars[i] != '|')
                    {
                        if (chars[i] == '1')
                            blogItem.OnTop = true;
                        i++;
                    }
                    i++;
                    //commentary_may
                    while (chars[i] != '|')
                    {
                        if (chars[i] == '1')
                            blogItem.CanCommentary = true;
                        i++;
                    }
                    i++;
                    //add time
                    string addTime = null;
                    while (chars[i] != '|')
                    {
                        addTime += chars[i];
                        i++;
                    }
                    i++;
                    blogItem.AdditionTime = DateTimeHelpers.ConvertUtcToLocalTime(long.Parse(addTime));
                    // commentary Number
                    string numberCommentary = null;
                    while (chars[i] != '|')
                    {
                        numberCommentary += chars[i];
                        i++;
                    }
                    i++;
                    blogItem.NumberCommentaries = int.Parse(numberCommentary);
                    //author
                    string userName = null;
                    while (chars[i] != '|')
                    {
                        userName += chars[i];
                        i++;
                    }
                    i++;

                    blogItem.Author = UnitOfWork.UserRepository.Get(u => u.UserName == userName).Result.FirstOrDefault();
                         
                    //title
                    string title = null;
                    while (chars[i] != '|')
                    {
                        title += chars[i];
                        i++;
                    }
                    i++;

                    blogItem.Title = title;
                    //brief
                    string brief = null;
                    while (chars[i] != '|')
                    {
                        brief += chars[i];
                        i++;
                    }
                    i++;

                    blogItem.Brief = brief;
                    // message
                    string message = null;
                    while (chars[i] != '|')
                    {
                        message += chars[i];
                        i++;
                    }
                    i++;

                    blogItem.Message = message;
                    // attach
                    while (chars[i] != '|')
                    {
                        id += chars[i];
                        i++;
                    }
                    i++;

                    // files
                    while (true)
                    {
                        if (chars[i] == '\\' && chars[i + 1] == '|' && chars[i + 2] == '|')
                        {
                            break;
                        }
                        i++;
                    }
                    i += 3;
                    //i++;

                    // reads
                    string reads = null;


                    while (chars[i] != '|')
                    {
                        reads += chars[i];
                        i++;
                    }
                    i++;

                    blogItem.Reads = int.Parse(reads);
                    // rating
                    string rating = null;
                    while (chars[i] != '|')
                    {
                        rating += chars[i];
                        i++;
                    }
                    i++;

                    blogItem.Rating = float.Parse(rating);
                    // rate_num
                    string ratingNumbers = null;
                    while (chars[i] != '|')
                    {
                        ratingNumbers += chars[i];
                        i++;
                    }
                    i++;

                    blogItem.RatingNumbers = int.Parse(ratingNumbers);
                    // rate sum
                    string ratingSumm = null;
                    while (chars[i] != '|')
                    {
                        ratingSumm += chars[i];
                        i++;
                    }
                    i++;

                    blogItem.RatingSumm = int.Parse(ratingSumm);
                    //rate ip
                    while (chars[i] != '|')
                    {
                        reads += chars[i];
                        i++;
                    }
                    i++;

                    // other 1
                    while (chars[i] != '|')
                    {
                        reads += chars[i];
                        i++;
                    }
                    i++;

                    // other 2 SOURCE
                    string source = null;
                    while (chars[i] != '|')
                    {
                        source += chars[i];
                        i++;
                    }
                    blogItem.Source = source;
                    i++;

                    // other 3
                    while (chars[i] != '|')
                    {
                        reads += chars[i];
                        i++;
                    }
                    i++;

                    // other 4
                    while (chars[i] != '|')
                    {
                        reads += chars[i];
                        i++;
                    }
                    i++;

                    // other 5
                    while (chars[i] != '|')
                    {
                        reads += chars[i];
                        i++;
                    }
                    i++;
                    // other6
                    while (chars[i] != '|')
                    {
                        // reads += chars[i];
                        i++;
                    }
                    i++;

                    // uid
                    while (chars[i] != '|')
                    {
                        // reads += chars[i];
                        i++;
                    }
                    i++;

                    // subscr
                    while (chars[i] != '|')
                    {
                        // reads += chars[i];
                        i++;
                    }
                    i++;

                    // last modified
                    string lastDate = null;
                    while (char.IsDigit(chars[i]))// != '|' || chars[i] != '\\'))
                    {
                        lastDate += chars[i];
                        i++;
                    }
                    //i++;

                    blogItem.LastModified = DateTimeHelpers.ConvertUtcToLocalTime(long.Parse(lastDate));

                    if (useLimit && blogItem.Author == null)
                    {
                    }
                    else
                    {
                        var category = categories.First(x => x.Id == int.Parse(categoryId));
                        blogItem.BlogCategory = category;
                        category.BlogItems.Add(blogItem);
                        UnitOfWork.BlogItemRepository.Add(blogItem);
                    }
                    // while (chars[i] != 10)
                    //  {
                    //       i++;
                    //  }
                }
                UnitOfWork.Save();
            }
        }

        private static void UpdateNewsItems()
        {
            Console.WriteLine("Start UpdateNewsItems");
            using (FileStream fs = new FileStream(path + "news.txt", FileMode.Open))
            {
                byte[] data = new byte[fs.Length];
                fs.Read(data, 0, Convert.ToInt32(fs.Length));

                char[] chars = Encoding.UTF8.GetString(data).ToCharArray();
                var limit = chars.Length;
                if (useLimit && maxChars < chars.Length)
                {
                    limit = maxChars * 10;
                }

                var categories = UnitOfWork.NewsCategoryRepository.Get().Result.ToList();

                for (int i = 0; i < limit; i++)
                {
                    NewsItem newsItem = new NewsItem();
                    // id
                    string id = null;
                    while (chars[i] != '|')
                    {
                        id += chars[i];
                        i++;
                    }
                    newsItem.OldId = int.Parse(id);
                    i++;
                    // Category id
                    string categoryId = null;
                    while (chars[i] != '|')
                    {
                        categoryId += chars[i];
                        i++;
                    }
                  //  newsItem.CategoryId = int.Parse(categoryId);


                    i++;
                    // year
                    string year = null;
                    while (chars[i] != '|')
                    {
                        year += chars[i];
                        i++;
                    }
                    newsItem.Year = int.Parse(year);
                    i++;
                    // month
                    string month = null;
                    while (chars[i] != '|')
                    {
                        month += chars[i];
                        i++;
                    }
                    newsItem.Month = int.Parse(month);
                    i++;
                    // day
                    string day = null;
                    while (chars[i] != '|')
                    {
                        day += chars[i];
                        i++;
                    }
                    newsItem.Day = int.Parse(day);
                    i++;
                    // pending
                    while (chars[i] != '|')
                    {
                        if (chars[i] == '1')
                            newsItem.Pending = true;
                        i++;
                    }
                    i++;
                    // onTop
                    while (chars[i] != '|')
                    {
                        if (chars[i] == '1')
                            newsItem.OnTop = true;
                        i++;
                    }
                    i++;
                    //commentary_may
                    while (chars[i] != '|')
                    {
                        if (chars[i] == '1')
                            newsItem.CanCommentary = true;
                        i++;
                    }
                    i++;
                    //add time
                    string addTime = null;
                    while (chars[i] != '|')
                    {
                        addTime += chars[i];
                        i++;
                    }
                    i++;
                    newsItem.AdditionTime = DateTimeHelpers.ConvertUtcToLocalTime(long.Parse(addTime));
                    // commentary Number
                    string numberCommentary = null;
                    while (chars[i] != '|')
                    {
                        numberCommentary += chars[i];
                        i++;
                    }
                    i++;
                    newsItem.NumberCommentaries = int.Parse(numberCommentary);
                    //author
                    string userName = null;
                    while (chars[i] != '|')
                    {
                        userName += chars[i];
                        i++;
                    }
                    i++;

                    newsItem.Author = UnitOfWork.UserRepository.Get(u => u.UserName == userName).Result.FirstOrDefault();
                    //title
                    string title = null;
                    while (chars[i] != '|')
                    {
                        title += chars[i];
                        i++;
                    }
                    i++;

                    newsItem.Title = title;
                    //brief
                    string brief = null;
                    while (chars[i] != '|')
                    {
                        brief += chars[i];
                        i++;
                    }
                    i++;

                    newsItem.Brief = brief;
                    // message
                    string message = null;
                    while (chars[i] != '|')
                    {
                        message += chars[i];
                        i++;
                    }
                    i++;

                    newsItem.Message = message;

                    //while (true)
                    //{
                    //    if ( chars[i] == '|' && char.IsDigit(chars[i + 1]))
                    //    {
                    //        break;
                    //    }
                    //    i++;
                    //}
                    //i += 3;
                    // attach
                    while (chars[i] != '|')
                    {
                        //id += chars[i];
                        i++;
                    }
                    i++;

                    // files
                    while (chars[i] != '|')
                    {
                        i++;
                    }
                    i += 1;
                    i++;
                    if (chars[i] == '|')
                        i++;

                    // reads
                    string reads = null;


                    while (chars[i] != '|')
                    {
                        reads += chars[i];
                        i++;
                    }
                    i++;

                    newsItem.Reads = int.Parse(reads);
                    // rating
                    string rating = null;
                    while (chars[i] != '|')
                    {
                        rating += chars[i];
                        i++;
                    }
                    i++;

                    newsItem.Rating = float.Parse(rating);
                    // rate_num
                    string ratingNumbers = null;
                    while (chars[i] != '|')
                    {
                        ratingNumbers += chars[i];
                        i++;
                    }
                    i++;

                    newsItem.RatingNumbers = int.Parse(ratingNumbers);
                    // rate sum
                    string ratingSumm = null;
                    while (chars[i] != '|')
                    {
                        ratingSumm += chars[i];
                        i++;
                    }
                    i++;

                    newsItem.RatingSumm = int.Parse(ratingSumm);
                    //rate ip
                    while (chars[i] != '|')
                    {
                        reads += chars[i];
                        i++;
                    }
                    i++;

                    // other 1
                    while (chars[i] != '|')
                    {
                        reads += chars[i];
                        i++;
                    }
                    i++;

                    // other 2 SOURCE
                    string source = null;
                    while (chars[i] != '|')
                    {
                        source += chars[i];
                        i++;
                    }
                    newsItem.Source = source;
                    i++;

                    // other 3
                    while (chars[i] != '|')
                    {
                        reads += chars[i];
                        i++;
                    }
                    i++;

                    // other 4
                    while (chars[i] != '|')
                    {
                        reads += chars[i];
                        i++;
                    }
                    i++;

                    // other 5
                    while (chars[i] != '|')
                    {
                        reads += chars[i];
                        i++;
                    }
                    i++;
                    // other6
                    while (chars[i] != '|')
                    {
                        // reads += chars[i];
                        i++;
                    }
                    i++;

                    // uid
                    while (chars[i] != '|')
                    {
                        // reads += chars[i];
                        i++;
                    }
                    i++;

                    // subscr
                    while (chars[i] != '|')
                    {
                        // reads += chars[i];
                        i++;
                    }
                    i++;

                    // last modified
                    string lastDate = null;
                    while (char.IsDigit(chars[i]))// != '|' || chars[i] != '\\'))
                    {
                        lastDate += chars[i];
                        i++;
                    }
                    //i++;

                    newsItem.LastModified = DateTimeHelpers.ConvertUtcToLocalTime(long.Parse(lastDate));

                    if (useLimit && newsItem.Author == null)
                    {
                    }
                    else
                    {
                        var category = categories.FirstOrDefault(x => x.Id == int.Parse(categoryId)) ??
                                       categories.First(x => x.Id == 4);
                        newsItem.NewsCategory = category;
                        category.NewsItems.Add(newsItem);
                        UnitOfWork.NewsItemRepository.Add(newsItem);
                    }
                    // while (chars[i] != 10)
                    //  {
                    //       i++;
                    //  }
                }
                UnitOfWork.Save();
            }
        }

        private static void UpdateBlogCategory()
        {
            Console.WriteLine("Start UpdateBlogCategory");
            using (FileStream fs = new FileStream(path + "bl_bl.txt", FileMode.Open))
            {
                byte[] data = new byte[fs.Length];
                fs.Read(data, 0, Convert.ToInt32(fs.Length));

                char[] chars = Encoding.UTF8.GetString(data).ToCharArray();
                var limit = chars.Length;
                if (useLimit && maxChars < chars.Length)
                {
                    limit = maxChars;
                }
                for (int i = 0; i < limit; i++)
                {
                    BlogCategory blogCategory = new BlogCategory();
                    // id
                    string id = null;
                    while (chars[i] != '|')
                    {
                        id += chars[i];
                        i++;
                    }
                    i++;
                    blogCategory.OldId = int.Parse(id);
                    // position
                    string position = null;
                    while (chars[i] != '|')
                    {
                        position += chars[i];
                        i++;
                    }
                    i++;
                    blogCategory.Position = int.Parse(position);
                    // count
                    string count = null;
                    while (chars[i] != '|')
                    {
                        count += chars[i];
                        i++;
                    }
                    i++;
                    blogCategory.ItemsCount = int.Parse(count);

                    // name
                    while (chars[i] != '|')
                    {
                        blogCategory.Name += chars[i];
                        i++;
                    }
                    i++;
                    // description
                    i++;
                    // url
                    if (chars[i] != '|')
                    {
                        while (chars[i] != '|')
                        {
                            blogCategory.UrlPath += chars[i];
                            i++;
                        }
                    }
                    i++;

                    UnitOfWork.BlogCategoryRepository.Add(blogCategory);
                }
                UnitOfWork.Save();
            }
        }

        private static void UpdateNewsCategory()
        {
            Console.WriteLine("Start UpdateNewsCategory");
            using (FileStream fs = new FileStream(path + "nw_nw.txt", FileMode.Open))
            {
                byte[] data = new byte[fs.Length];
                fs.Read(data, 0, Convert.ToInt32(fs.Length));

                char[] chars = Encoding.UTF8.GetString(data).ToCharArray();
                var limit = chars.Length;
                if (useLimit && maxChars < chars.Length)
                {
                    limit = maxChars;
                }
                for (int i = 0; i < limit; i++)
                {
                    NewsCategory newsCategory = new NewsCategory();
                    // id
                    string id = null;
                    while (chars[i] != '|')
                    {
                        id += chars[i];
                        i++;
                    }
                    i++;
                    newsCategory.OldId = int.Parse(id);
                    // position
                    string position = null;
                    while (chars[i] != '|')
                    {
                        position += chars[i];
                        i++;
                    }
                    i++;
                    newsCategory.Position = int.Parse(position);
                    // count
                    string count = null;
                    while (chars[i] != '|')
                    {
                        count += chars[i];
                        i++;
                    }
                    i++;
                    newsCategory.ItemsCount = int.Parse(count);

                    // name
                    while (chars[i] != '|')
                    {
                        newsCategory.Name += chars[i];
                        i++;
                    }
                    i++;

                    // url
                    if (chars[i] == '|')
                    {
                        i++;
                        while (chars[i] != '|')
                        {
                            newsCategory.UrlPath += chars[i];
                            i++;
                        }
                        i++;
                    }
                    UnitOfWork.NewsCategoryRepository.Add(newsCategory);

                }
                UnitOfWork.Save();
            }
        }

        private static void UpdateComments()
        {
            Console.WriteLine("Start UpdateComments");
            using (FileStream fs = new FileStream(path + "comments.txt", FileMode.Open))
            {
                byte[] data = new byte[fs.Length];
                fs.Read(data, 0, Convert.ToInt32(fs.Length));

                char[] chars = Encoding.UTF8.GetString(data).ToCharArray();
                var limit = chars.Length;
                if (useLimit && maxChars < chars.Length)
                {
                    limit = maxChars*10;
                }

                var news = UnitOfWork.NewsItemRepository.Get();//n => n.NumberCommentaries > 0);
                var blogs = UnitOfWork.BlogItemRepository.Get();//n => n.NumberCommentaries > 0);

                for (int i = 0; i < limit; i++)
                {

                    // id
                    string id = null;
                    while (chars[i] != '|')
                    {
                        id += chars[i];
                        i++;
                    }
                    i++;

                    // module id
                    string moduleId = null;
                    while (chars[i] != '|')
                    {
                        moduleId += chars[i];
                        i++;
                    }
                    i++;
                    var ModuleId = int.Parse(moduleId);


                    //material id
                    string materialId = null;
                    while (chars[i] != '|')
                    {
                        materialId += chars[i];
                        i++;
                    }
                    i++;

                    // pending
                    char pending = '0';
                    while (chars[i] != '|')
                    {
                        pending = chars[i];
                        i++;
                    }
                    i++;
                    // add time
                    string additionTime = null;
                    while (chars[i] != '|')
                    {
                        additionTime += chars[i];
                        i++;
                    }
                    i++;

                    //author
                    string userName = null;
                    while (chars[i] != '|')
                    {
                        userName += chars[i];
                        i++;
                    }
                    i++;

                    //name
                    while (chars[i] != '|')
                    {
                        i++;
                    }
                    i++;
                    //email
                    while (chars[i] != '|')
                    {
                        i++;
                    }
                    i++;
                    //www
                    while (chars[i] != '|')
                    {
                        i++;
                    }
                    i++;
                    //ip
                    while (chars[i] != '|')
                    {
                        i++;
                    }
                    i++;
                    // message
                    string message = null;
                    while (chars[i] != '|')
                    {
                        message += chars[i];
                        i++;
                    }
                    i++;

                    // answer
                    string answer = null;
                    while (chars[i] != '|')
                    {
                        answer += chars[i];
                        i++;
                    }
                    i++;


                    // user id
                    string userId = null;
                    while (chars[i] != '|')
                    {
                        userId += chars[i];
                        i++;
                    }
                    i++;
                    // parent id
                    string parentId = null;
                    while (chars[i] != '|')
                    {
                        parentId += chars[i];
                        i++;
                    }
                    i++;

                    while (chars[i] != 10)
                    {
                        i++;
                    }

                    // user id
                    //string rate = null;
                    //while (chars[i] != '|')
                    //{
                    //    rate += chars[i];
                    //    i++;
                    //}
                    //i++;
                    //// rate
                    //string rateId = null;
                    //while (chars[i] != '|')
                    //{
                    //    rateId += chars[i];
                    //    i++;
                    //}
                    //i++;



                    
                //foreach (var comment in newsComments)
                //{
                //    foreach (var item in news.Where(newsItem => comment.MaterialId == newsItem.Id))
                //    {
                //        if (item.Comments == null)
                //        {
                //            item.Comments = new List<NewsComment>();
                //        }
                //        item.Comments.Add(comment);
                //        comment.MaterialId = item.Id;
                //    }
                //}

                    if (ModuleId == 2)
                    {
                        NewsComment comment = new NewsComment();
                        comment.OldId = int.Parse(id);
                        comment.MaterialId = int.Parse(materialId);
                        comment.NewsItem = news.Result.FirstOrDefault(newsItem => comment.MaterialId == newsItem.OldId);
                        if (comment.NewsItem == null)
                        {
                            continue;
                        }
                        if (comment.NewsItem.Comments == null)
                        {
                            comment.NewsItem.Comments = new List<NewsComment>();
                        }
                        comment.NewsItem.Comments.Add(comment);
                        if (pending == '1')
                            comment.Pending = true;
                        comment.AdditionTime = DateTimeHelpers.ConvertUtcToLocalTime(long.Parse(additionTime));
                        comment.Author = UnitOfWork.UserRepository.Get(u => u.UserName == userName).Result.FirstOrDefault();
                        comment.Answer = answer;
                        comment.Message = message;
                        comment.ParentCommentId = int.Parse(parentId);
                        UnitOfWork.NewsCommentRepository.Add(comment);
                        //comment.Type = CommentType.News;
                    }
                    else if (ModuleId == 1)
                    {
                        BlogComment comment = new BlogComment(); // { Type = CommentType.Blog };
                        comment.OldId = int.Parse(id);
                        comment.MaterialId = int.Parse(materialId);
                        comment.BlogItem = blogs.Result.FirstOrDefault(newsItem => comment.MaterialId == newsItem.OldId);
                        if (comment.BlogItem == null)
                        {
                            continue;
                        }
                        if (comment.BlogItem.Comments == null)
                        {
                            comment.BlogItem.Comments = new List<BlogComment>();
                        }
                        comment.BlogItem.Comments.Add(comment);
                        if (pending == '1')
                            comment.Pending = true;
                        comment.AdditionTime = DateTimeHelpers.ConvertUtcToLocalTime(long.Parse(additionTime));
                        comment.Author = UnitOfWork.UserRepository.Get(u => u.UserName == userName).Result.FirstOrDefault();
                        comment.Answer = answer;
                        comment.Message = message;
                        comment.ParentCommentId = int.Parse(parentId);
                        UnitOfWork.BlogCommentRepository.Add(comment);
                        // comment.Type = CommentType.Blog;
                    }
                }
                UnitOfWork.Save();
            }
        }

        private static void UpdateForumThemes()
        {
            Console.WriteLine("Start UpdateForumThemes");
            using (FileStream fs = new FileStream(path + "forum.txt", FileMode.Open))
            {
                byte[] data = new byte[fs.Length];
                fs.Read(data, 0, Convert.ToInt32(fs.Length));

                char[] chars = Encoding.UTF8.GetString(data).ToCharArray();
                var limit = chars.Length;
                if (useLimit && maxChars < chars.Length)
                {
                    limit = maxChars;
                }
                for (int i = 0; i < limit; i++)
                {
                    ForumTheme forumTheme = new ForumTheme();
                    // id
                    string id = null;
                    while (chars[i] != '|')
                    {
                        id += chars[i];
                        i++;
                    }
                    i++;
                    forumTheme.IdOld = int.Parse(id);
                    // section id
                    string sectionId = null;
                    while (chars[i] != '|')
                    {
                        sectionId += chars[i];
                        i++;
                    }
                    i++;
                    forumTheme.SectionId = int.Parse(sectionId);
                    // isPoll
                    while (chars[i] != '|')
                    {
                        if (chars[i] == '1')
                            forumTheme.IsPool = true;
                        i++;
                    }
                    i++;
                    // on top
                    while (chars[i] != '|')
                    {
                        if (chars[i] == '1')
                            forumTheme.OnTop = true;
                        i++;
                    }
                    i++;
                    // last modified
                    string lastDateMessage = null;
                    while (chars[i] != '|')
                    {
                        lastDateMessage += chars[i];
                        i++;
                    }
                    i++;
                    forumTheme.LastMessageAdditionTime = DateTimeHelpers.ConvertUtcToLocalTime(long.Parse(lastDateMessage));
                    // is CLosed
                    while (chars[i] != '|')
                    {
                        if (chars[i] == '1')
                            forumTheme.IsClosed = true;
                        i++;
                    }
                    i++;
                    // answers
                    string answers = null;
                    while (chars[i] != '|')
                    {
                        answers += chars[i];
                        i++;
                    }
                    i++;
                    forumTheme.Answers = int.Parse(answers);
                    // views
                    string views = null;
                    while (chars[i] != '|')
                    {
                        views += chars[i];
                        i++;
                    }
                    i++;
                    forumTheme.Views = int.Parse(views);
                    // name
                    while (chars[i] != '|')
                    {
                        forumTheme.Name += chars[i];
                        i++;
                    }
                    i++;
                    // Description
                    while (chars[i] != '|')
                    {
                        forumTheme.Description += chars[i];
                        i++;
                    }
                    i++;
                    // author
                    string author = null;
                    while (chars[i] != '|')
                    {
                        author += chars[i];
                        i++;
                    }
                    i++;
                    forumTheme.Author = UnitOfWork.UserRepository.Get(u => u.UserName == author).Result.FirstOrDefault();
                    // user reg????
                    while (chars[i] != '|')
                    {
                        //author += chars[i];
                        i++;
                    }
                    i++;
                    // author last answer
                    string authorLastMessage = null;
                    while (chars[i] != '|')
                    {
                        authorLastMessage += chars[i];
                        i++;
                    }
                    i++;
                    forumTheme.LastAnswerUser = UnitOfWork.UserRepository.Get(u => u.UserName == authorLastMessage).Result.FirstOrDefault();



                    UnitOfWork.ForumThemeRepository.Add(forumTheme);
                    while (chars[i] != 10)
                    {
                        i++;
                    }
                }
                UnitOfWork.Save();
            }
        }

        private static void UpdateForumSections()
        {
            Console.WriteLine("Start UpdateForumSections");
            using (FileStream fs = new FileStream(path + "fr_fr.txt", FileMode.Open))
            {
                byte[] data = new byte[fs.Length];
                fs.Read(data, 0, Convert.ToInt32(fs.Length));

                char[] chars = Encoding.UTF8.GetString(data).ToCharArray();
                var limit = chars.Length;
                if (useLimit && maxChars < chars.Length)
                {
                    limit = maxChars;
                }
                for (int i = 0; i < limit; i++)
                {
                    if (chars[i + 2] == '0' || chars[i + 3] == '0')
                    {
                        ForumSection forumSection = new ForumSection();
                        string id = null;
                        while (chars[i] != '|')
                        {
                            id += chars[i];
                            i++;
                        }
                        i++;
                        forumSection.IdOld = int.Parse(id);
                        // section id
                        while (chars[i] != '|')
                        {
                            i++;
                        }
                        i++;
                        // is section
                        while (chars[i] != '|')
                        {
                            i++;
                        }
                        i++;
                        // sequence
                        while (chars[i] != '|')
                        {
                            i++;
                        }
                        i++;
                        // time creation
                        while (chars[i] != '|')
                        {
                            i++;
                        }
                        i++;
                        // name
                        while (chars[i] != '|')
                        {
                            forumSection.Name += chars[i];
                            i++;
                        }
                        UnitOfWork.ForumSectionRepository.Add(forumSection);
                        while (chars[i] != 10)
                        {
                            i++;
                        }
                    }
                    else
                    {
                        ForumSubsection forumSubsection = new ForumSubsection();
                        // id
                        string id = null;
                        while (chars[i] != '|')
                        {
                            id += chars[i];
                            i++;
                        }
                        i++;
                        forumSubsection.IdOld = int.Parse(id);
                        // section id
                        string sectionId = null;
                        while (chars[i] != '|')
                        {
                            sectionId += chars[i];
                            i++;
                        }
                        i++;

                        forumSubsection.SectionId = int.Parse(sectionId);
                        // is section
                        while (chars[i] != '|')
                        {
                            i++;
                        }
                        i++;
                        // sequence
                        while (chars[i] != '|')
                        {
                            i++;
                        }
                        i++;
                        // name 
                        while (chars[i] != '|')
                        {
                            forumSubsection.Name += chars[i];
                            i++;
                        }
                        i++;
                        // description 
                        while (chars[i] != '|')
                        {
                            forumSubsection.Description += chars[i];
                            i++;
                        }
                        i++;
                        // last modified

                        UnitOfWork.ForumSubsectionRepository.Add(forumSubsection);
                        while (chars[i] != 10)
                        {
                            i++;
                        }
                    }
                }
                UnitOfWork.Save();
            }
        }

        private static void UpdateUsersId()
        {
            Console.WriteLine("Start UpdateUsersId");
            using (FileStream fs = new FileStream(path + "ugen.txt", FileMode.Open))
            {
                byte[] data = new byte[fs.Length];
                fs.Read(data, 0, Convert.ToInt32(fs.Length));

                char[] chars = Encoding.UTF8.GetString(data).ToCharArray();
                var limit = chars.Length;
                if (useLimit && maxChars < chars.Length)
                {
                    limit = maxChars;
                }
                for (int i = 0; i < limit; i++)
                {

                    // id
                    string id = null;
                    while (chars[i] != '|')
                    {
                        id += chars[i];
                        i++;
                    }
                    i++;
                    // login
                    string userLogin = null;
                    while (chars[i] != '|')
                    {
                        userLogin += chars[i];
                        i++;
                    }
                    i++;
                    User user = UnitOfWork.UserRepository.Get(u => u.UserName == userLogin).Result.FirstOrDefault();
                    if (user != null)
                    {
                        user.OldId = int.Parse(id);
                        UnitOfWork.UserRepository.Update(user);
                    }

                    while (chars[i] != 10)
                    {
                        i++;
                    }
                }
                UnitOfWork.Save();
            }

        }

        private static void UpdateForumComments()
        {
            Console.WriteLine("Start UpdateForumComments");
            using (FileStream fs = new FileStream(path + "forump.txt", FileMode.Open))
            {
                byte[] data = new byte[fs.Length];
                fs.Read(data, 0, Convert.ToInt32(fs.Length));

                char[] chars = Encoding.UTF8.GetString(data).ToCharArray();
                var limit = chars.Length;
                if (useLimit && maxChars < chars.Length)
                {
                    limit = maxChars;
                }
                for (int i = 0; i < limit; i++)
                {
                    ForumMessage forumMessage = new ForumMessage();
                    // id
                    string id = null;
                    while (chars[i] != '|')
                    {
                        id += chars[i];
                        i++;
                    }
                    i++;
                    forumMessage.OldId = int.Parse(id);

                    // module id
                    string moduleId = null;
                    while (chars[i] != '|')
                    {
                        moduleId += chars[i];
                        i++;
                    }
                    i++;
                    forumMessage.ThemeId = int.Parse(moduleId);
                    //material id
                    string additionTime = null;
                    while (chars[i] != '|')
                    {
                        additionTime += chars[i];
                        i++;
                    }
                    i++;
                    forumMessage.AdditionTime = DateTimeHelpers.ConvertUtcToLocalTime(long.Parse(additionTime));
                    forumMessage.LastModifiedTime = forumMessage.AdditionTime;
                    // pending
                    while (chars[i] != '|')
                    {
                        if (chars[i] == 1)
                            forumMessage.IsFirstMessage = true;
                        i++;
                    }
                    i++;
                    // message
                    while (chars[i] != '|')
                    {
                        forumMessage.Message += chars[i];
                        i++;
                    }
                    i++;
                    //user is reg
                    while (chars[i] != '|')
                    {
                        i++;
                    }
                    i++;
                    //author
                    string userName = null;
                    while (chars[i] != '|')
                    {
                        userName += chars[i];
                        i++;
                    }
                    i++;
                    forumMessage.Author = UnitOfWork.UserRepository.Get(u => u.UserName == userName).Result.FirstOrDefault();


                    while (chars[i] != 10)
                    {
                        i++;
                    }

                    UnitOfWork.ForumMessageRepository.Add(forumMessage);

                }
                UnitOfWork.Save();
            }
            Console.WriteLine("End UpdateForumComments");
        }

        #endregion

        #region UpdateDB
        //public static void UpdateBlogCategoryAndBlogItem()
        //{
        //    Console.WriteLine("Start UpdateBlogCategoryAndBlogItem");
        //    var blogCategories = UnitOfWork.BlogCategoryRepository.Get().ToList();
        //    var blogs = UnitOfWork.BlogItemRepository.Get().ToList();
        //    foreach (var blogCategory in blogCategories)
        //    {
        //        if (blogCategory.BlogItems == null)
        //        {
        //            blogCategory.BlogItems = new List<BlogItem>();
        //        }
        //        foreach (var blog in blogs.Where(blog => blog.CategoryId == blogCategory.Id))
        //        {
        //            blog.BlogCategory = blogCategory;
        //            blogCategory.BlogItems.Add(blog);
        //        }
        //    }
        //    UnitOfWork.Save();
        //}

        //public static void UpdateNewsCategoryAndNewsItem()
        //{
        //    Console.WriteLine("Start UpdateNewsCategoryAndNewsItem");
        //    var newsCategories = UnitOfWork.NewsCategoryRepository.Get().ToList();
        //    var news = UnitOfWork.NewsItemRepository.Get().ToList();
        //    foreach (var newsCategory in newsCategories)
        //    {
        //        if (newsCategory.NewsItems == null)
        //        {
        //            newsCategory.NewsItems = new List<NewsItem>();
        //        }
        //        foreach (var newss in news.Where(newss => newss.CategoryId == newsCategory.Id))
        //        {
        //            newss.NewsCategory = newsCategory;
        //            newsCategory.NewsItems.Add(newss);
        //        }
        //    }
        //    UnitOfWork.Save();
        //}

        public static async void UpdateCommentsLinks()
        {
            Console.WriteLine("Start UpdateCommentsLinks");
            //var comments = UnitOfWork.BlogCommentRepository.Get(c => c.ParentCommentId != 0).ToList();
            //foreach (var comment in comments)
            //{
            //    var parentComment = UnitOfWork.BlogCommentRepository.GetById(comment.ParentCommentId);

            //    if (parentComment == null) continue;
            //    if (parentComment.Comments == null)
            //    {
            //        parentComment.Comments = new List<BlogComment>();
            //    }
            //    parentComment.Comments.Add(comment);
            //    break;
            //}
            var comments = UnitOfWork.NewsCommentRepository.Get(c => c.ParentCommentId != 0).Result.ToList();
            foreach (var comment in comments)
            {
                var parentComment = await UnitOfWork.NewsCommentRepository.GetById(comment.ParentCommentId);

                if (parentComment == null) continue;
                if (parentComment.Comments == null)
                {
                    parentComment.Comments = new List<NewsComment>();
                }
                parentComment.Comments.Add(comment);
            }
            UnitOfWork.Save();
        }

        public static void UpdateCommentsForum()
        {
            Console.WriteLine("Start UpdateCommentsForum");

            var posts = UnitOfWork.ForumMessageRepository.Get().Result;
            var themes = UnitOfWork.ForumThemeRepository.Get().Result;
            foreach (var theme in themes)
            {
                foreach (var post in posts.Where(post => theme.Id == post.ThemeId))
                {
                    post.ForumTheme = theme;
                    if (theme.ForumMessages == null)
                    {
                        theme.ForumMessages = new List<ForumMessage>();
                    }
                    theme.ForumMessages.Add(post);
                }
            }
            UnitOfWork.Save();
        }

        public static void UpdateForumSectionAndSubsection()
        {
            Console.WriteLine("Start UpdateForumSectionAndSubsection");
            var sections = UnitOfWork.ForumSectionRepository.Get().Result;
            var subSections = UnitOfWork.ForumSubsectionRepository.Get().Result;
            foreach (var section in sections)
            {
                foreach (var subSection in subSections)
                {
                    if (subSection.SectionId == section.Id)
                    {
                        subSection.ForumSection = section;
                        if (section.ForumSubsections == null)
                        {
                            section.ForumSubsections = new List<ForumSubsection>();
                        }
                        section.ForumSubsections.Add(subSection);
                    }
                }
            }
            UnitOfWork.Save();

        }

        public static void UpdateForumSubSectionAndTheme()
        {
            Console.WriteLine("Start UpdateForumSubSectionAndTheme");
            var themes = UnitOfWork.ForumThemeRepository.Get().Result;
            var subSections = UnitOfWork.ForumSubsectionRepository.Get().Result;

            foreach (var subSection in subSections)
            {
                foreach (var theme in themes.Where(theme => subSection.Id == theme.SectionId))
                {
                    theme.ForumSubsection = subSection;
                    if (subSection.ForumThemes == null)
                    {
                        subSection.ForumThemes = new List<ForumTheme>();
                    }
                    subSection.ForumThemes.Add(theme);
                }
            }
            UnitOfWork.Save();
        }

        public static void UpdateCommentsLinksToNewsAndBlogs()
        {
            //Console.WriteLine("Start UpdateCommentsLinksToNewsAndBlogs");

            ////var newsComments = UnitOfWork.NewsCommentRepository.Get();
           
            ////var blogComments = UnitOfWork.BlogCommentRepository.Get();
            ////var blogs = UnitOfWork.BlogItemRepository.Get(n => n.NumberCommentaries > 0);
            ////foreach (var comment in blogComments)
            ////{
            ////    foreach (var blog in blogs.Where(blog => comment.MaterialId == blog.Id))
            ////    {
            ////        if (blog.Comments == null)
            ////        {
            ////            blog.Comments = new List<BlogComment>();
            ////        }
            ////        blog.Comments.Add(comment);
            ////        comment.BlogItem = blog;
            ////    }
            ////}
            //Console.WriteLine("End UpdateCommentsLinksToNewsAndBlogs");
        }

        #endregion
    }
}