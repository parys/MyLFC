using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;

namespace MyLfc.Application.Wishes;

public class DeleteWishCommand
{
    public class Request : IRequest<Response>
    {
        public int Id { get; set; }
    }


    public class Handler : IRequestHandler<Request, Response>
    {
        private readonly ILiverpoolContext _context;
        
        public Handler(ILiverpoolContext context)
        {
            _context = context;
        }

        public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
        {
            var wish = await _context.Wishes
                .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);
            
            if (wish == null)
            {
                throw new NotFoundException(nameof(Transfer), request.Id);
            }

            _context.Wishes.Remove(wish);
            await _context.SaveChangesAsync(cancellationToken);

            return new Response { Id = wish.Id };
        }
    }


    public class Response
    {
        public int Id { get; set; }
    }
}
