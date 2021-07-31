using System.Collections.Generic;
using System.Text.RegularExpressions;

namespace MyLiverpool.Business.Services.Helpers
{
    public static class UserMessageHelpers
    {
        private static readonly List<Regex> Regexes = new();

        static UserMessageHelpers()
        {
            Regexes.Add(new Regex("[нахуй|хуй|блять|бля|пизда|пиздец|охуеть|сука|сучара|гнида|мудак|нахер|хер|мудень|мудло|]", RegexOptions.Compiled));
        }

        public static string SanitizeCommentByRudeWords(this string message)
        {
            foreach (var regex in Regexes)
            {
                message = regex.Replace(message, "");
            }
            return message;
        }
    }
}
