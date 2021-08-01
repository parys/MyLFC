using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;

namespace MyLfc.Application.Matches
{
    public class DeleteMatchCommand
    {
        public class Request : IRequest<Response>
        {
            public int Id { get; set; }
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
                var match = await _context.Matches
                    .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);
                
                if (match == null)
                {
                    throw new NotFoundException(nameof(Match), request.Id);
                }

                _context.Matches.Remove(match);

                await _context.SaveChangesAsync(cancellationToken);
                return new Response {Id = match.Id};
            }
        }

        public class Response
        {
            public int Id { get; set; }
        }
    }
}
