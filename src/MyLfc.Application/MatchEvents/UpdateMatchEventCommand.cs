using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Application.Matches;
using MyLfc.Domain;

namespace MyLfc.Application.MatchEvents
{
    public class UpdateMatchEventCommand
    {
        public class Request : UpsertMatchEventCommand.Request, IRequest<Response>
        {
            public int Id { get; set; }
        }

        public class Validator : UpsertMatchEventCommand.Validator<Request>
        {
            public Validator()
            {
                RuleFor(v => v.Id).NotEmpty();
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
                var matchEvent = await _context.MatchEvents
                    .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

                if (matchEvent == null)
                {
                    throw new NotFoundException(nameof(MatchEvent), request.Id);
                }

                matchEvent = _mapper.Map(request, matchEvent);

                await _context.SaveChangesAsync(cancellationToken);

                var result = await _context.MatchEvents
                    .ProjectTo<UpsertMatchEventCommand.Response>(_mapper.ConfigurationProvider)
                    .FirstAsync(x => x.Id == matchEvent.Id, cancellationToken);

                var match = await _mediator.Send(new GetMatchDetailQuery.Request { Id = matchEvent.MatchId }, cancellationToken);

                return new Response { MatchEvent = result, Match = match };
            }
        }

        public class Response
        {
            public UpsertMatchEventCommand.Response MatchEvent { get; set; }
            public GetMatchDetailQuery.Response Match { get; set; }
        }
    }
}
