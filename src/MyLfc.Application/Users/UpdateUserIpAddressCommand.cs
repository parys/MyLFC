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
        public class Request : IRequest<Unit>
        {
            public string Ip { get; set; }

            public int UserId { get; set; }
        }


        public class Handler : IRequestHandler<Request, Unit>
        {
            private readonly ILiverpoolContext _context;

            public Handler(ILiverpoolContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Request request, CancellationToken cancellationToken)
            {
                if (!string.IsNullOrWhiteSpace(request.Ip))
                {
                    await _context.Database.ExecuteSqlInterpolatedAsync(
                        $"UPDATE AspNetUsers SET Ip={request.Ip}, LastModified={DateTimeOffset.UtcNow} WHERE Id={request.UserId}", cancellationToken);
                }

                return Unit.Value;
            }
        }
    }
}
