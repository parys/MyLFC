using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using MyLfc.Domain;

namespace MyLfc.Application.Features.Stadiums.Commands;

public class CreateStadiumCommand
{
    public class Request : UpsertStadiumCommand.Request, IRequest<Response>
    {
    }


    public class Validator : UpsertStadiumCommand.Validator<Request>
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
            var entity = _mapper.Map<Stadium>(request);

            _context.Stadiums.Add(entity);
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
