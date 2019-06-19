using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;
using MyLfc.Persistence;

namespace MyLfc.Application.Materials
{
    public class AddMaterialReadCommand
    {
        public class Request : IRequest
        {
            public int Id { get; set; }
        }


        public class Handler : IRequestHandler<Request, Unit>
        {
            private readonly LiverpoolContext _context;
            
            public Handler(LiverpoolContext context)
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

                material.Reads++;
                await _context.SaveChangesAsync(cancellationToken);
                return Unit.Value;
            }
        }
    }
}
