using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;
using MyLfc.Persistence;

namespace MyLfc.Application.Injuries
{
    public class UpdateInjuryCommand
    {
        public class Request : UpsertInjuryCommand.Request, IRequest<Response>
        {
            public int Id { get; set; }
        }

        public class Validator : UpsertInjuryCommand.Validator<Request>
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
                var injury = await _context.Injuries
                    .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

                if (injury == null)
                {
                    throw new NotFoundException(nameof(Injury), request.Id);
                }

                injury = _mapper.Map(request, injury);

                await _context.SaveChangesAsync(cancellationToken);

                return new Response(injury.Id);
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
