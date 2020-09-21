using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;
using MyLfc.Persistence;

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
            private readonly LiverpoolContext _context;

            private readonly IMapper _mapper;
            
            public Handler(LiverpoolContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
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
                
                return _mapper.Map<Response>(matchEvent);
            }
        }

        public class Response : UpsertMatchEventCommand.Response
        {
        }
    }
}
