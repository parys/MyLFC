using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Application.Matches.Queries;
using MyLfc.Domain;

namespace MyLfc.Application.MatchEvents;

public class DeleteMatchEventCommand
{
    public class Request : IRequest<Response>
    {
        public int Id { get; set; }
    }


    public class Handler : IRequestHandler<Request, Response>
    {
        private readonly ILiverpoolContext _context;

        private readonly IMediator _mediator;
        
        public Handler(ILiverpoolContext context, IMediator mediator)
        {
            _context = context;
            _mediator = mediator;
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

            var match = await _mediator.Send(new GetMatchDetailQuery.Request { Id = matchEvent.MatchId }, cancellationToken);

            return new Response
                {MatchEvent = new UpsertMatchEventCommand.Response {Id = matchEvent.Id}, Match = match};
        }
    }


    public class Response
    {
        public UpsertMatchEventCommand.Response MatchEvent { get; set; }
        public GetMatchDetailQuery.Response Match { get; set; }
    }
}
