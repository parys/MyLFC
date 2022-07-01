using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Application.Seasons.Queries;
using MyLfc.Domain;
using ValidationException = MyLfc.Application.Infrastructure.Exceptions.ValidationException;

namespace MyLfc.Application.Matches.Commands
{
    public class UpdateMatchCommand
    {
        public class Request : UpsertMatchCommand.Request, IRequest<Response>
        {
            public int Id { get; set; }
        }

        public class Validator : UpsertMatchCommand.Validator<Request>
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

                var match = await _context.Matches
                    .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

                if (match == null)
                {
                    throw new NotFoundException(nameof(Match), request.Id);
                }

                match = _mapper.Map(request, match);

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
