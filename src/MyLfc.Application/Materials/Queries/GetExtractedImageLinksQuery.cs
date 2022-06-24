using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using MyLfc.Common.Utilities;

namespace MyLfc.Application.Materials.Queries
{
    public class GetExtractedImageLinksQuery
    {
        private const string XpathImages = "//img[contains(@class, 'media-gallery-image')]";

        public class Request : IRequest<Response>
        {
            public string Url { get; set; }
        }


        public class Handler : IRequestHandler<Request, Response>
        {
            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                if (!request.Url.Contains("://"))
                {
                    request.Url = request.Url.Replace(":/", "://");
                }

                if (request.Url.Last() == '/')
                {
                    request.Url = request.Url.Substring(0, request.Url.Length - 1);
                }
                var htmlImgTags = await HtmlExtractorHelpers.GetHtmlRowsAsync(request.Url, XpathImages);

                var result = new Response();
                result.AddRange(htmlImgTags?.Select(x => x.Attributes["data-src"].Value));
                return result;
            }
        }


        public class Response : List<string>
        {

        }
    }
}
