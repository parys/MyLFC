using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLiverpool.Data.Common;

namespace MyLfc.Application.HelpEntities
{
    public class SanitizeRudWordsCommand
    {
        private static List<Regex> _rudWordsRegexes;
        public class Request : IRequest<Response>
        {
            public string InputText { get; set; }
        }


        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly ILiverpoolContext _context;

            public Handler(ILiverpoolContext context)
            {
                _context = context;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {

                if (_rudWordsRegexes == null)
                {
                    await LoadRudWordsAsync();
                }

                foreach (var regex in _rudWordsRegexes)
                {
                    request.InputText = regex.Replace(request.InputText, string.Empty);
                }

                return new Response { Result = request.InputText };
            }

            private async Task LoadRudWordsAsync()
            {
                _rudWordsRegexes = new List<Regex>();
                var words = (await _context.HelpEntities
                        .FirstOrDefaultAsync(x => x.Type == HelperEntityType.RudWords))?.Value?
                    .Replace(" ", "")?.Split(",", StringSplitOptions.RemoveEmptyEntries);
                if (words != null)
                {
                    foreach (var word in words)
                    {
                        _rudWordsRegexes.Add(new Regex($"/{word}/igm", RegexOptions.Compiled));
                    }
                }
            }
        }



        public class Response
        {
            public string Result { get; set; }
        }
    }
}
