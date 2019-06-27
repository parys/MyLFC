using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using MyLfc.Domain;
using MyLfc.Persistence;

namespace MyLfc.Application.Transfers
{
    public class CreateTransferCommand
    {
        public class Request : UpsertTransferCommand.Request, IRequest<Response>
        {
        }


        public class Validator : UpsertTransferCommand.Validator<Request>
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
                var entity = _mapper.Map<Transfer>(request);

                _context.Transfers.Add(entity);
                await _context.SaveChangesAsync(cancellationToken);

                return new Response(entity.Id);
            }
        }


        public class Response
        {
            public Response(int id)
            {
                Id = id;
            }

            public int Id { get; set; }
        }
    }
}
