using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;
using MyLfc.Persistence;

namespace MyLfc.Application.Stadiums
{
    public class UpdateStadiumCommand
    {
        public class Request : UpsertStadiumCommand.Request, IRequest<Response>
        {
            public int Id { get; set; }
        }

        public class Validator : UpsertStadiumCommand.Validator<UpsertStadiumCommand.Request>
        {
            public Validator() : base()
            {
              //  RuleFor(v => v.Id).NotEmpty();
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
                var stadium = await _context.Stadiums
                    .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

                if (stadium == null)
                {
                    throw new NotFoundException(nameof(Stadium), request.Id);
                }
                stadium = _mapper.Map(request, stadium);

                await _context.SaveChangesAsync(cancellationToken);

                return _mapper.Map<Response>(stadium.Id);
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
