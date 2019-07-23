using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;
using MyLfc.Persistence;

namespace MyLfc.Application.MatchEvents
{
    public class DeleteMatchEventCommand
    {
        public class Request : IRequest<Response>
        {
            public int Id { get; set; }
        }


        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly LiverpoolContext _context;
            
            public Handler(LiverpoolContext context)
            {
                _context = context;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var matchEvent = await _context.MatchEvents
                    .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);
                
                if (matchEvent == null)
                {
                    throw new NotFoundException(nameof(MatchEvent), request.Id);
                }

                _context.MatchEvents.Remove(matchEvent);
                await _context.SaveChangesAsync(cancellationToken);

                return new Response {Id = matchEvent.Id};
            }
        }


        public class Response
        {
            public int Id { get; set; }
        }
    }
}
