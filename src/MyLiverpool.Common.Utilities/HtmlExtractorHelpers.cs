using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using HtmlAgilityPack;

namespace MyLiverpool.Common.Utilities
{
    public static class HtmlExtractorHelpers
    {
        public static async Task<HtmlNodeCollection> GetHtmlRowsAsync(string url, string xpath)
        {
            using var http = new HttpClient();
            var response = await http.GetByteArrayAsync(url);
            var source = Encoding.GetEncoding("utf-8").GetString(response, 0, response.Length - 1);
            source = WebUtility.HtmlDecode(source);
            var htmlDocument = new HtmlDocument();
            htmlDocument.LoadHtml(source);

            var trNodes = htmlDocument.DocumentNode.SelectNodes(xpath);
            return trNodes;
        }
    }
}
