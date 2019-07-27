using System.Text.RegularExpressions;

namespace MyLiverpool.Common.Utilities.Extensions
{
    public static class StringExtensions
    {
        public static string SanitizeComment(this string message)
        {
            message = Regex.Replace(Regex.Replace(message, "&.*?;", string.Empty), "<.*?>", string.Empty);
            if (message.Length > GlobalConstants.LastCommentMessageSymbolCount)
            {
                message = message.Substring(0, GlobalConstants.LastCommentMessageSymbolCount) +
                          "...";
            }

            return message;
        }
    }
}
