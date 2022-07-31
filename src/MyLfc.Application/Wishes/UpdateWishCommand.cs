using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;

namespace MyLfc.Application.Wishes;

public class UpdateWishCommand
{
    public class Request : UpsertWishCommand.Request, IRequest<Response>
    {
        public int Id { get; set; }
    }

    public class Validator : UpsertWishCommand.Validator<Request>
    {
        public Validator()
        {
            RuleFor(v => v.Id).NotEmpty();
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
            var wish = await _context.Wishes
                .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

            if (wish == null)
            {
                throw new NotFoundException(nameof(Wish), request.Id);
            }

            wish = _mapper.Map(request, wish);

            await _context.SaveChangesAsync(cancellationToken);

            return new Response { Id = wish.Id };
        }
    }

    public class Response
    {
        public int Id { get; set; }
    }
}
