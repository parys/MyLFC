using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using MyLfc.Domain;

namespace MyLfc.Application.Matches
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
            
            public Handler(ILiverpoolContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var match = _mapper.Map<Match>(request);

                _context.Matches.Add(match);
                await _context.SaveChangesAsync(cancellationToken);

                return new Response {Id = match.Id};
            }
        }


        public class Response
        {
            public int Id { get; set; }
        }
    }
}
