using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Matches.Queries;
using MyLfc.Domain;

namespace MyLfc.Application.MatchEvents
{
    public class CreateMatchEventCommand
    {
        public class Request : UpsertMatchEventCommand.Request, IRequest<Response>
        {
        }


        public class Validator : UpsertMatchEventCommand.Validator<Request>
        {
            public Validator()
            {
            }
        }


        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly ILiverpoolContext _context;

            private readonly IMapper _mapper;

            private readonly IMediator _mediator;
            
            public Handler(ILiverpoolContext context, IMapper mapper, IMediator mediator)
            {
                _context = context;
                _mapper = mapper;
                _mediator = mediator;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var entity = _mapper.Map<MatchEvent>(request);

                _context.MatchEvents.Add(entity);
                await _context.SaveChangesAsync(cancellationToken);

                var result = await _context.MatchEvents
                    .ProjectTo<UpsertMatchEventCommand.Response>(_mapper.ConfigurationProvider)
                    .FirstAsync(x => x.Id == entity.Id, cancellationToken);

                var match = await _mediator.Send(new GetMatchDetailQuery.Request { Id = entity.MatchId }, cancellationToken);

                return new Response { MatchEvent = result , Match = match };
            }
        }
        
        public class Response
        {
            public UpsertMatchEventCommand.Response MatchEvent { get; set; }
            public GetMatchDetailQuery.Response Match { get; set; }
        }
    }
}
