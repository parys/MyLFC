using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;

namespace MyLfc.Application.Clubs
{
    public class DeleteClubCommand
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
                var club = await _context.Clubs
                    .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);
                
                if (club == null)
                {
                    throw new NotFoundException(nameof(Club), request.Id);
                }

                _context.Clubs.Remove(club);
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
