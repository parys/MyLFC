using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using MyLfc.Domain;

namespace MyLfc.Application.Features.Contracts.Commands;

public class CreateContractCommand
{
    public class Request : UpsertContractCommand.Request, IRequest<Response>
    {
    }


    public class Validator : UpsertContractCommand.Validator<Request>
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
            var entity = _mapper.Map<Contract>(request);

            _context.Contracts.Add(entity);
            await _context.SaveChangesAsync(cancellationToken);

            return new Response { Id = entity.Id };
        }
    }


    public class Response
    {
        public int Id { get; set; }
    }
}
