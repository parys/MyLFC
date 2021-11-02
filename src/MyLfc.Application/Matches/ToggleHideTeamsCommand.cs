using System.Threading;
using System.Threading.Tasks;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;

namespace MyLfc.Application.Matches
{
    public class ToggleHideTeamsCommand
    {
        public class Request : IRequest<Response>
        {
            public int MatchId { get; set; } 
        }


        public class Validator : AbstractValidator<Request>
        {
            public Validator()
            {
                RuleFor(x => x.MatchId).NotEmpty();
            }
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
                var match = await _context.Matches.FirstOrDefaultAsync(x => x.Id == request.MatchId, cancellationToken);

                if (match == null)
                {
                    throw new NotFoundException(nameof(Match), request.MatchId);
                }

                match.HideTeams = !match.HideTeams;

                await _context.SaveChangesAsync(cancellationToken);

                return new Response { Result = match.HideTeams };
            }
        }


        public class Response
        {
            public bool Result { get; set; }
        }
    }
}
