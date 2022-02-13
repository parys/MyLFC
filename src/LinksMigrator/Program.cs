// See https://aka.ms/new-console-template for more information


using System.Net;
using System.Text.RegularExpressions;
using Microsoft.EntityFrameworkCore;
using MyLfc.Domain;
using MyLfc.Persistence;

Console.WriteLine("Started!");

var replaceDictionary = new Dictionary<string, string>
{
    //{ "http://placeholderURL/smile/smile3.gif" , "/src/plugins/customEmoticons/img/good.gif" },
    //{ "http://placeholderURL/smile/KidRock_01.gif" , "/src/plugins/customEmoticons/img/crazy.gif" },
    //{ "http://placeholderURL/smile/KidRock_04.gif" , "/src/plugins/customEmoticons/img/stop.gif" },
    //{ "http://placeholderURL/smile/KidRock_06.gif" , "/src/plugins/customEmoticons/img/stop.gif" },
    //{ "http://placeholderURL/smile/ac.gif" , "/src/plugins/customEmoticons/img/sad.gif" },
    //{ "http://placeholderURL/smile/ad.gif" , "/src/plugins/customEmoticons/img/wink.gif" },
    //{ "http://placeholderURL/smile/ae.gif" , "/src/plugins/customEmoticons/img/tease.gif" },
    //{ "http://placeholderURL/smile/ag.gif" , "/src/plugins/customEmoticons/img/lol.gif" },
    //{ "http://placeholderURL/smile/aj.gif" , "/src/plugins/customEmoticons/img/yahoo.gif" },
    //{ "http://placeholderURL/smile/ak.gif" , "/src/plugins/customEmoticons/img/sad.gif" },
    //{ "http://placeholderURL/smile/am.gif" , "/src/plugins/customEmoticons/img/сool.gif" },
    //{ "http://placeholderURL/smile/an.gif" , "/src/plugins/customEmoticons/img/fool.gif" },
    //{ "http://placeholderURL/smile/aq.gif" , "/src/plugins/customEmoticons/img/diablo.gif" },
    //{ "http://placeholderURL/smile/ay.gif" , "/src/plugins/customEmoticons/img/thumbup.gif" },
    //{ "http://placeholderURL/smile/az.gif" , "/src/plugins/customEmoticons/img/drinks.gif" },
    //{ "http://placeholderURL/smile/ba.gif" , "/src/plugins/customEmoticons/img/good.gif" },
    //{ "http://placeholderURL/smile/banned.gif" , "/src/plugins/customEmoticons/img/stop.gif" },
    //{ "http://placeholderURL/smile/be.gif" , "/src/plugins/customEmoticons/img/wacko.gif" },
    //{ "http://placeholderURL/smile/ck.gif" , "/src/plugins/customEmoticons/img/drinks.gif" },
    //{ "http://placeholderURL/smile/co.gif" , "/src/plugins/customEmoticons/img/friends.gif" },
    //{ "http://placeholderURL/smile/connie_eatingpopcorn.gif" , "/src/plugins/customEmoticons/img/popcorn.gif" },
    //{ "http://placeholderURL/smile/cj.gif" , "/src/plugins/customEmoticons/img/drinks.gif" },
    //{ "http://placeholderURL/smile/declare.gif" , "/src/plugins/customEmoticons/img/dance.gif" },
    //{ "http://placeholderURL/smile/dj.gif" , "/src/plugins/customEmoticons/img/diablo.gif" },
    //{ "http://placeholderURL/smile/e0887c31c8df17948217f7a7dcc522d1.gif" , "/src/plugins/customEmoticons/img/wacko.gif" },
    //{ "http://placeholderURL/smile/eb.gif" , "/src/plugins/customEmoticons/img/popcorn.gif" },
    //{ "http://placeholderURL/smile/ev.gif" , "/src/plugins/customEmoticons/img/stop.gif" },
    //{ "http://placeholderURL/smile/ew.gif" , "/src/plugins/customEmoticons/img/no.gif" },
    //{ "http://placeholderURL/smile/fans.gif" , "/src/plugins/customEmoticons/img/friends.gif" },
    //{ "http://placeholderURL/smile/flag_britain.gif" , "/src/plugins/customEmoticons/img/good.gif" },
    //{ "http://placeholderURL/smile/flag_russia.gif" , "/src/plugins/customEmoticons/img/good.gif" },
    //{ "http://placeholderURL/smile/JC-goalie.gif" , "/src/plugins/customEmoticons/img/goal.gif" },
    //{ "http://placeholderURL/smile/JC_goodpost.gif" , "/src/plugins/customEmoticons/img/goodpost.gif" },
    //{ "http://placeholderURL/smile/JC_OMG_sign.gif" , "/src/plugins/customEmoticons/img/omg.gif" },
    //{ "http://placeholderURL/smile/JC_ThankYou.gif" , "/src/plugins/customEmoticons/img/thankyou.gif" },
    //{ "http://placeholderURL/smile/laie_please.gif" , "/src/plugins/customEmoticons/img/writer.gif" },
    //{ "http://placeholderURL/smile/new_laugh.gif" , "/src/plugins/customEmoticons/img/lol.gif" },
    //{ "http://placeholderURL/smile/pardon.gif" , "/src/plugins/customEmoticons/img/blush.gif" },
    //{ "http://placeholderURL/smile/unknw.gif" , "/src/plugins/customEmoticons/img/unknw.gif" },
    //{ "http://placeholderURL/smile/01.gif" , "/src/plugins/customEmoticons/img/liverpool.gif" },
    //{ "http://placeholderURL/smile/02.gif" , "/src/plugins/customEmoticons/img/goal.gif" },
    //{ "http://placeholderURL/smile/03.gif" , "/src/plugins/customEmoticons/img/goal.gif" },
    //{ "http://placeholderURL/smile/0479579.gif" , "/src/plugins/customEmoticons/img/wacko.gif" },
    //{ "http://placeholderURL/smile/1372536.gif" , "/src/plugins/customEmoticons/img/no.gif" },
    //{ "http://placeholderURL/_fr/8/2684817.gif" , "/src/plugins/customEmoticons/img/bravo.gif" },
    //{ "http://placeholderURL/smile/2981047.gif" , "/src/plugins/customEmoticons/img/liverpool.gif" },
    //{ "http://placeholderURL/smile/3040665.gif" , "/src/plugins/customEmoticons/img/ynwa.gif" },
    //{ "http://placeholderURL/smile/5476265.gif" , "/src/plugins/customEmoticons/img/yes.gif" },
    //{ "http://placeholderURL/smile/6699692.gif" , "/src/plugins/customEmoticons/img/liverpool.gif" },
    //{ "http://placeholderURL/smile/6754035.gif" , "/src/plugins/customEmoticons/img/shout.gif" },
    //{ "http://placeholderURL/smile/6783596.gif" , "/src/plugins/customEmoticons/img/no.gif" },
    //{ "http://placeholderURL/smile/7835616.gif" , "/src/plugins/customEmoticons/img/liverpool.gif" },
    //{ "http://placeholderURL/smile/9953351.gif" , "/src/plugins/customEmoticons/img/hi.gif" },
    //{ "http://placeholderURL/smile/ge.gif", "/src/plugins/customEmoticons/img/yahoo.gif" },
    //{ "http://placeholderURL/smile/ex.gif", "/src/plugins/customEmoticons/img/thumbup.gif" },
    //{ "http://placeholderURL/smile/spam_light.gif", "/src/plugins/customEmoticons/img/stop.gif" },
    //{ "http://placeholderURL/smile/KidRock_05.gif", "/src/plugins/customEmoticons/img/stop.gif" },
    //{ "http://placeholderURL/smile/gd.gif", "/src/plugins/customEmoticons/img/shout.gif" },
    //{ "http://placeholderURL/_fr/16/3195778.gif", "/src/plugins/customEmoticons/img/bravo.gif" },
    //{ "http://placeholderURL/_fr/8/9705291.gif", "/src/plugins/customEmoticons/img/bravo.gif" },
    //{ "http://placeholderURL/news", "brokenDomain/news" },
    //{ "http://placeholderURL/blog", "brokenDomain/blog" },
    //{ "http://placeholderURL/content/images/", "/content/images/" },
    //{ "http://placeholderURL/", "brokenDomain/" },
 
};
// MyLFC

var optionsBuilder = new DbContextOptionsBuilder<FullLiverpoolContext>();
optionsBuilder.UseSqlServer(
    "");

var context = new FullLiverpoolContext(optionsBuilder.Options);

//await ReplaceInComment();

 //await ReplaceInForumMessages();

await ReplaceInMaterial();


     //await DownloadImages();


const string searchString = "";

async Task ReplaceInComment()
{
    var count = await context.MaterialComments.CountAsync(x => x.Message.Contains(searchString));

    WriteGreenNewLine($"comments count: {count}");

    var id = 0;
    Comment comment;
    do
    {
        comment = await context.MaterialComments.FirstOrDefaultAsync(x =>
            x.Message.Contains(searchString) && x.Id > id);

        if (comment != null)
        {
            id = comment.Id + 1;
            WriteRed($"CommentId={comment.Id} ");
            var indexOf = comment.Message.IndexOf(searchString, StringComparison.InvariantCultureIgnoreCase);
            Console.Write($"Message={comment.Message[..indexOf]}");
            WriteRed($"{comment.Message.Substring(indexOf, searchString.Length)}");
            Console.WriteLine($"{comment.Message[(indexOf + searchString.Length)..]}");

            foreach (var (key, value) in replaceDictionary)
            {
                var before = comment.Message.Length;
                comment.Message = comment.Message.Replace(key, value);
                comment.Message = comment.Message.Replace(key.Replace("www.", ""), value);

                if (comment.Message.Length != before)
                {
                    await context.SaveChangesAsync();
                    WriteYellow($"UPDATED CommentId={comment.Id} ");
                    Console.WriteLine();
                    break;
                }
            }
        }
    } while (comment != null);

}

async Task ReplaceInMaterial()
{
    var count = await context.Materials.CountAsync(x => x.Message.Contains(searchString)
                                                       //        || x.Brief.Contains(searchString)
                                                        //       || x.Title.Contains(searchString)
                                                       );

    WriteGreenNewLine($"materials count: {count}");

    var id = 0;
    Material material;
    do
    {
        material = await context.Materials.FirstOrDefaultAsync(x =>
            x.Message.Contains(searchString) && x.Id > id);

        if (material != null)
        {
            id = material.Id + 1;
            WriteRed($"MaterialId={material.Id} ");
            var indexOf = material.Message.IndexOf(searchString, StringComparison.InvariantCultureIgnoreCase);
            Console.Write($"Title={material.Message[..indexOf]}");
            WriteRed($"{material.Message.Substring(indexOf, searchString.Length)}");
            Console.WriteLine($"{material.Message[(indexOf + searchString.Length)..]}");

            foreach (var (key, value) in replaceDictionary)
            {
                var before = material.Message.Length;
                material.Message = material.Message.Replace(key, value);
                material.Message = material.Message.Replace(key.Replace("www.", ""), value);

                if (material.Message.Length != before)
                {
                    await context.SaveChangesAsync();
                    WriteYellow($"UPDATED MaterialId={material.Id} ");
                    Console.WriteLine();
                    break;
                }
            }
        }
    } while (material != null);

}

async Task ReplaceInForumMessages()
{
    var count = await context.ForumThemes.CountAsync(x => x.Description.Contains(searchString));

    WriteGreenNewLine($"ForumMessages count: {count}");

    var id = 0;
    ForumTheme forumMessage;
    do
    {
        forumMessage = await context.ForumThemes.FirstOrDefaultAsync(x =>
            x.Description.Contains(searchString) && x.Id > id);

        if (forumMessage != null)
        {
            id = forumMessage.Id + 1;
            WriteRed($"CommentId={forumMessage.Id} ");
            var indexOf = forumMessage.Description.IndexOf(searchString, StringComparison.InvariantCultureIgnoreCase);
            Console.Write($"Message={forumMessage.Description[..indexOf]}");
            WriteRed($"{forumMessage.Description.Substring(indexOf, searchString.Length)}");
            Console.WriteLine($"{forumMessage.Description[(indexOf + searchString.Length)..]}");

            foreach (var (key, value) in replaceDictionary)
            {
                var before = forumMessage.Description.Length;
                forumMessage.Description = forumMessage.Description.Replace(key, value);
                forumMessage.Description = forumMessage.Description.Replace(key.Replace("www.", ""), value);

                if (forumMessage.Description.Length != before)
                {
                    await context.SaveChangesAsync();
                    WriteYellow($"UPDATED CommentId={forumMessage.Id} ");
                    Console.WriteLine();
                    break;
                }
            }
        }
    } while (forumMessage != null);

}


#region console colors

static void WriteGreenNewLine(string value)
{
    Console.ForegroundColor = ConsoleColor.Green;
    Console.WriteLine(value);
    Console.ForegroundColor = ConsoleColor.White;
}

static void WriteRed(string value)
{
    Console.ForegroundColor = ConsoleColor.Red;
    Console.Write(value);
    Console.ForegroundColor = ConsoleColor.White;
}

static void WriteYellow(string value)
{
    Console.ForegroundColor = ConsoleColor.Yellow;
    Console.Write(value);
    Console.ForegroundColor = ConsoleColor.White;
}

#endregion

//static void WriteToConsoleInitial(int value)
//{
//    WriteToConsoleInitial(value.ToString());
//}

async Task DownloadImages()
{
    var count = await context.Materials.CountAsync(x => x.Brief.Contains(searchString));

    WriteGreenNewLine($"materials count: {count}");

    var id = 0;
    Material material;
    do
    {
        material = await context.Materials.FirstOrDefaultAsync(x =>
            x.Brief.Contains(searchString) && x.Id > id);

        if (material != null)
        {
            id = material.Id + 1;
            WriteRed($"Id={material.Id} ");
            var indexOf = material.Brief.IndexOf(searchString, StringComparison.InvariantCultureIgnoreCase);
            Console.Write($"PhotoPath={material.Brief[..indexOf]}");
            WriteRed($"{material.Brief.Substring(indexOf, searchString.Length)}");
            Console.WriteLine($"{material.Brief[(indexOf + searchString.Length)..]}");


           
            var result = DownloadImage(GetFirstImagePath(material.Brief));

            const string basePath = "/content/images/";
            material.Brief = material.Brief.Replace(basePath, "")
                .Replace("http://placeholder.ru", basePath)
                .Replace("http://placeholderURL", basePath);
            
            //foreach (var (key, value) in replaceDictionary)
            //{
            //    var before = material.Message.Length;
            //    material.Message = material.Message.Replace(key, value);
            //    material.Message = material.Message.Replace(key.Replace("www.", ""), value);

            //    if (material.Message.Length != before)
            //    {
                    await context.SaveChangesAsync();
                    WriteYellow($"UPDATED  Id={material.Id} ");
                    Console.WriteLine();
            //        break;
            //    }
            //}
        }
    } while (material != null);

}

//placeholderURL_nw/34/16211884.jpg
string DownloadImage(string path)
{
    var baseD = @"D:\files";
    const string basePath = "/content/images";
    path = path.Replace(basePath, "");
    var fileName = path.Split('/').Last(); //16211884.jpg
    var folder = path.Replace("http://placeholderURL/", "")
        .Replace("placeholderURL", "")
        .Replace(fileName, ""); // _nw/34/
    if (!Directory.Exists(Path.Combine(baseD, folder)))
    {
        Directory.CreateDirectory(Path.Combine(baseD, folder));
    }

    try
    {
        using WebClient client = new();
        client.DownloadFile(new Uri(path), Path.Combine(baseD, folder, fileName));
    }

    catch
    {
        Console.ForegroundColor = ConsoleColor.Magenta;
        Console.WriteLine($"File does not exist {path}");
        Console.ForegroundColor = ConsoleColor.White;
        return "placeholder";
    }

    return (basePath + "/" + folder + "/" + fileName).Replace("//","/");

}

static string GetFirstImagePath(string message)
{
    var result = GetImagesPath(message)[1].Value;
    return result;
}

static GroupCollection GetImagesPath(string message)
{
    var result = Regex.Match(message, "<[img|a].+?[src|href]=[\"'](.+?)[\"'].+?>", RegexOptions.IgnoreCase).Groups;
    return result;
}