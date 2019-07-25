using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;
using MyLfc.Persistence;

namespace MyLfc.Application.Users
{
    public class UpdateUserIpAddressCommand
    {
        public class Request : IRequest<Response>
        {
            public string Ip { get; set; }
        }


        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly LiverpoolContext _context;

            private readonly RequestContext _requestContext;

            public Handler(LiverpoolContext context, RequestContext requestContext)
            {
                _context = context;
                _requestContext = requestContext;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var user = await _context.Users
                    .FirstOrDefaultAsync(x => x.Id == _requestContext.UserId, cancellationToken);

                if (user == null)
                {
                    throw new NotFoundException(nameof(User), _requestContext.UserId);
                }

                if (!string.IsNullOrWhiteSpace(request.Ip))
                {
                    user.Ip = request.Ip;
                    user.LastModified = DateTimeOffset.UtcNow;
                }

                await _context.SaveChangesAsync(cancellationToken);

                return new Response();
            }
        }

        public class Response
        {
            
        }
    }
}
