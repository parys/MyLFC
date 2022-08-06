using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure;

namespace MyLfc.Application.Features.Pms.Queries;

public class GetUnreadPmCountQuery
{
    public class Request : IRequest<Response>
    {

    }


    public class Handler : IRequestHandler<Request, Response>
    {
        private readonly ILiverpoolContext _context;

        private readonly RequestContext _requestContext;

        public Handler(ILiverpoolContext context, RequestContext requestContext)
        {
            _context = context;
            _requestContext = requestContext;
        }


        public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
        {
            var count = await _context.PrivateMessages
                .CountAsync(x => !x.IsRead && x.ReceiverId == _requestContext.UserId, cancellationToken);
            return new Response { Result = count };
        }
    }


    public class Response
    {
        public int Result { get; set; }
    }
}
