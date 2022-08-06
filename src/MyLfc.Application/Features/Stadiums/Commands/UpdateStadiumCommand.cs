using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;

namespace MyLfc.Application.Features.Stadiums.Commands;

public class UpdateStadiumCommand
{
    public class Request : UpsertStadiumCommand.Request, IRequest<Response>
    {
        public int Id { get; set; }
    }

    public class Validator : UpsertStadiumCommand.Validator<Request>
    {
        public Validator()
        {
            RuleFor(v => v.Id).GreaterThan(0);
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
            var stadium = await _context.Stadiums
                .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

            if (stadium == null)
            {
                throw new NotFoundException(nameof(Stadium), request.Id);
            }
            stadium = _mapper.Map(request, stadium);

            await _context.SaveChangesAsync(cancellationToken);

            return new Response { Id = stadium.Id };
        }
    }

    public class Response
    {
        public int Id { get; set; }
    }
}
