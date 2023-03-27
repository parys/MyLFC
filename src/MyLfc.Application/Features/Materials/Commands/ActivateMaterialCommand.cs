using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;

namespace MyLfc.Application.Materials.Commands;

public class ActivateMaterialCommand
{
    public class Request : IRequest<Unit>
    {
        public int Id { get; set; }
    }


    public class Handler : IRequestHandler<Request, Unit>
    {
        private readonly ILiverpoolContext _context;

        public Handler(ILiverpoolContext context)
        {
            _context = context;
        }

        public async Task<Unit> Handle(Request request, CancellationToken cancellationToken)
        {
            var material = await _context.Materials.FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

            if (material == null)
            {
                throw new NotFoundException(nameof(Material), request.Id);
            }

            material.Pending = false;
            await _context.SaveChangesAsync(cancellationToken);
            return Unit.Value;
        }
    }
}
