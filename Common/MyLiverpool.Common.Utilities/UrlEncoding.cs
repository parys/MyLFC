using System;
using System.Text;

namespace MyLiverpool.Common.Utilities
{
    public static class UrlEncoding
    {
        public static string Base64ForUrlEncode(this string str)
        {
            throw new NotImplementedException();
            byte[] buffer = Encoding.UTF8.GetBytes(str);
         //   return HttpServerUtility.UrlTokenEncode(buffer);
        }

        public static string Base64ForUrlDecode(this string str)
        {
            throw new NotImplementedException();
            // byte[] buffer = HttpServerUtility.UrlTokenDecode(str);
            // return Encoding.UTF8.GetString(buffer);
        }
    }
}
