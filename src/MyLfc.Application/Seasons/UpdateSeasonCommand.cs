using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;
using MyLfc.Persistence;

namespace MyLfc.Application.Seasons
{
    public class UpdateSeasonCommand
    {
        public class Request : UpsertSeasonCommand.Request, IRequest<Response>
        {
            public int Id { get; set; }
        }

        public class Validator : UpsertSeasonCommand.Validator<Request>
        {
            public Validator() : base()
            {
                RuleFor(v => v.Id).GreaterThan(0);
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
                var season = await _context.Seasons
                    .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

                if (season == null)
                {
                    throw new NotFoundException(nameof(Season), request.Id);
                }
                season = _mapper.Map(request, season);

                await _context.SaveChangesAsync(cancellationToken);

                return new Response {Id = season.Id};
            }
        }

        public class Response
        {
            public int Id { get; set; }
        }
    }
}
