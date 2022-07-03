using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using HtmlAgilityPack;

namespace MyLfc.Common.Utilities
{
    public static class HtmlExtractorHelpers
    {
        public static async Task<HtmlNode> GetHtmlNodeAsync(string url)
        {
            using var handler = new HttpClientHandler
            {
                ClientCertificateOptions = ClientCertificateOption.Manual, //todo https://github.com/parys/MyLFC/issues/382
                ServerCertificateCustomValidationCallback =
                    (httpRequestMessage, cert, cetChain, policyErrors) => true
            };
            using var http = new HttpClient(handler); // TODO switch to HttpClientFactory
            var response = await http.GetByteArrayAsync(url);
            var source = Encoding.GetEncoding("utf-8").GetString(response, 0, response.Length - 1);
            source = WebUtility.HtmlDecode(source);
            var htmlDocument = new HtmlDocument();
            htmlDocument.LoadHtml(source);

            return htmlDocument.DocumentNode;
        }

        public static async Task<HtmlNodeCollection> GetHtmlRowsAsync(string url, string xpath)
        {
            var documentNode = await GetHtmlNodeAsync(url);
            var trNodes = documentNode.SelectNodes(xpath);
            return trNodes;
        }
    }
}
