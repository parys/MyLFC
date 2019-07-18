using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;
using MyLfc.Persistence;

namespace MyLfc.Application.Matches
{
    public class UpdateMatchCommand
    {
        public class Request : UpsertMatchCommand.Request, IRequest<Response>
        {
            public int Id { get; set; }
        }

        public class Validator : UpsertMatchCommand.Validator<Request>
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
                var match = await _context.Matches
                    .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

                if (match == null)
                {
                    throw new NotFoundException(nameof(Match), request.Id);
                }

                match = _mapper.Map(request, match);

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
