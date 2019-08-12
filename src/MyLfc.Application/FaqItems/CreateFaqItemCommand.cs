using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using MyLfc.Domain;
using MyLfc.Persistence;

namespace MyLfc.Application.FaqItems
{
    public class CreateFaqItemCommand
    {
        public class Request : UpsertFaqItemCommand.Request, IRequest<Response>
        {
        }


        public class Validator : UpsertFaqItemCommand.Validator<Request>
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
                var entity = _mapper.Map<FaqItem>(request);

                _context.FaqItems.Add(entity);
                await _context.SaveChangesAsync(cancellationToken);

                return new Response {Id = entity.Id};
            }
        }


        public class Response
        {
            public int Id { get; set; }
        }
    }
}
