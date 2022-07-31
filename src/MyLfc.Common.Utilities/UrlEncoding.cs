using System.Text;
using Microsoft.AspNetCore.WebUtilities;

namespace MyLfc.Common.Utilities;

public static class UrlEncoding
{
    public static string Base64ForUrlEncode(this string str)
    {
        byte[] tokenGeneratedBytes = Encoding.UTF8.GetBytes(str);
        return WebEncoders.Base64UrlEncode(tokenGeneratedBytes);
    }

    public static string Base64ForUrlDecode(this string str)
    {
        var codeDecodedBytes = WebEncoders.Base64UrlDecode(str);
        return Encoding.UTF8.GetString(codeDecodedBytes);
    }
}
