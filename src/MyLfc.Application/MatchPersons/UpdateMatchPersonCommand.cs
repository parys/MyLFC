using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Persistence;
using MyLiverpool.Data.Common;

namespace MyLfc.Application.MatchPersons
{
    public class UpdateMatchPersonCommand
    {
        public class Request : IRequest<Response>
        {
            public int MatchId { get; set; }

            public int PersonId { get; set; }

            public MatchPersonType PersonType { get; set; }
        }


        public class Validator : AbstractValidator<Request>
        {
            public Validator()
            {
            }
        }


        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly LiverpoolContext _context;

            private readonly IMapper _mapper;
            
            public Handler(LiverpoolContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var matchPerson = await _context.MatchPersons
                    .FirstOrDefaultAsync(x => x.MatchId == request.MatchId
                                              && x.PersonId == request.PersonId, cancellationToken);

                matchPerson = _mapper.Map(request, matchPerson);

                await _context.SaveChangesAsync(cancellationToken);

                return new Response {MatchId = matchPerson.MatchId, PersonId = matchPerson.PersonId};
            }
        }

        public class Response
        {
            public int MatchId { get; set; }

            public int PersonId { get; set; }
        }
    }
}
