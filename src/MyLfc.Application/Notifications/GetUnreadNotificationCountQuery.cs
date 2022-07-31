using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure;

namespace MyLfc.Application.Notifications;

public class GetUnreadNotificationCountQuery
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
            var count = await _context.Notifications.CountAsync(x => x.UserId == _requestContext.UserId.Value
                                                                         && !x.IsRead, cancellationToken);
            return new Response(){Result = count};
        }
    }


    [Serializable]
    public class Response
    {
        public int Result { get; set; }
    }
}
