using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
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

                var result = await _context.MatchEvents
                    .ProjectTo<Response>(_mapper.ConfigurationProvider)
                    .FirstAsync(x => x.Id == entity.Id, cancellationToken);

                return result;
            }
        }


        public class Response : UpsertMatchEventCommand.Response
        {
        }
    }
}
