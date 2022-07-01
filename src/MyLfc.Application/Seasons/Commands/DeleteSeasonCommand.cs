using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;

namespace MyLfc.Application.Seasons.Commands
{
    public class DeleteSeasonCommand
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
                var season = await _context.Seasons
                    .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

                if (season == null)
                {
                    throw new NotFoundException(nameof(Season), request.Id);
                }

                _context.Seasons.Remove(season);
                await _context.SaveChangesAsync(cancellationToken);

                return new Response(season.Id);
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
