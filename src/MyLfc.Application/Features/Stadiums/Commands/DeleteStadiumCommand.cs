using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;

namespace MyLfc.Application.Features.Stadiums.Commands;

public class DeleteStadiumCommand
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
            var stadium = await _context.Stadiums
                .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

            if (stadium == null)
            {
                throw new NotFoundException(nameof(Stadium), request.Id);
            }

            _context.Stadiums.Remove(stadium);
            await _context.SaveChangesAsync(cancellationToken);

            return new Response(stadium.Id);
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
