using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;
using MyLfc.Persistence;

namespace MyLfc.Application.Clubs
{
    public class UpdateClubCommand
    {
        public class Request : UpsertClubCommand.Request, IRequest<Response>
        {
            public int Id { get; set; }
        }

        public class Validator : UpsertClubCommand.Validator<Request>
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
                var club = await _context.Clubs
                    .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

                if (club == null)
                {
                    throw new NotFoundException(nameof(Club), request.Id);
                }

                club = _mapper.Map(request, club);

                await _context.SaveChangesAsync(cancellationToken);

                return new Response {Id = club.Id};
            }
        }

        public class Response
        {
            public int Id { get; set; }
        }
    }
}
