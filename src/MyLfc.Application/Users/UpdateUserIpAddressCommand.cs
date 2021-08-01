using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;

namespace MyLfc.Application.Users
{
    public class UpdateUserIpAddressCommand
    {
        public class Request : IRequest<Response>
        {
            public string Ip { get; set; }

            public int UserId { get; set; }
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
                if (!string.IsNullOrWhiteSpace(request.Ip))
                {
                    var user = await _context.Users
                        .FirstOrDefaultAsync(x => x.Id == request.UserId, cancellationToken);

                    if (user == null)
                    {
                        throw new NotFoundException(nameof(User), request.UserId);
                    }

                    user.Ip = request.Ip;
                    user.LastModified = DateTimeOffset.UtcNow;


                    await _context.SaveChangesAsync(cancellationToken);
                }

                return new Response();
            }
        }

        public class Response
        {
            
        }
    }
}
