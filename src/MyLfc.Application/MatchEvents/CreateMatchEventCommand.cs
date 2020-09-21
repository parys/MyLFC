using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using MyLfc.Domain;
using MyLfc.Persistence;

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
            private readonly LiverpoolContext _context;

            private readonly IMapper _mapper;
            
            public Handler(LiverpoolContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var entity = _mapper.Map<MatchEvent>(request);

                _context.MatchEvents.Add(entity);
                await _context.SaveChangesAsync(cancellationToken);

                return _mapper.Map<Response>(entity);
            }
        }


        public class Response : UpsertMatchEventCommand.Response
        {
        }
    }
}
