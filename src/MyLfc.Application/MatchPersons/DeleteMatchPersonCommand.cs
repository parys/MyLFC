using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;
using MyLfc.Persistence;

namespace MyLfc.Application.MatchPersons
{
    public class DeleteMatchPersonCommand
    {
        public class Request : IRequest<Response>
        {
            public int PersonId { get; set; }

            public int MatchId { get; set; }
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
                var matchPerson = await _context.MatchPersons
                    .FirstOrDefaultAsync(x => x.MatchId == request.MatchId && x.PersonId == request.PersonId, cancellationToken);
                
                if (matchPerson == null)
                {
                    throw new NotFoundException(nameof(MatchPerson), new {request.PersonId, request.MatchId});
                }

                _context.MatchPersons.Remove(matchPerson);

                await _context.SaveChangesAsync(cancellationToken);
                return new Response {PersonId = matchPerson.PersonId, MatchId = matchPerson.PersonId};
            }
        }

        public class Response
        {
            public int PersonId { get; set; }

            public int MatchId { get; set; }
        }
    }
}
