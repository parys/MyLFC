using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Application.Seasons.Queries;
using MyLfc.Domain;

namespace MyLfc.Application.Matches.Commands
{
    public class CreateMatchCommand
    {
        public class Request : UpsertMatchCommand.Request, IRequest<Response>
        {
        }


        public class Validator : UpsertMatchCommand.Validator<Request>
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
                if (request.SeasonId is null)
                {
                    request.SeasonId = (await _mediator.Send(new GetCurrentSeasonQuery.Request(), cancellationToken)).Id;
                }

                if (request.StadiumId is null)
                {
                    var club = await _context.Clubs.AsNoTracking()
                        .FirstOrDefaultAsync(x => x.Id == (request.IsHome ? 1 : request.ClubId), cancellationToken);

                    if (club is null)
                    {
                        throw new ValidationException(nameof(request.ClubId), $"Club with id={request.ClubId} has not been found.");
                    }

                    request.StadiumId = club.StadiumId;
                }

                var match = _mapper.Map<Match>(request);

                _context.Matches.Add(match);
                await _context.SaveChangesAsync(cancellationToken);

                return new Response { Id = match.Id };
            }
        }


        public class Response
        {
            public int Id { get; set; }
        }
    }
}
