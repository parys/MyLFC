using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;
using MyLfc.Persistence;

namespace MyLfc.Application.Transfers
{
    public class DeleteTransferCommand
    {
        public class Request : IRequest<Response>
        {
            public int Id { get; set; }
        }


        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly LiverpoolContext _context;
            
            public Handler(LiverpoolContext context)
            {
                _context = context;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var transfer = await _context.Transfers
                    .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);
                
                if (transfer == null)
                {
                    throw new NotFoundException(nameof(Transfer), request.Id);
                }

                _context.Transfers.Remove(transfer);
                await _context.SaveChangesAsync(cancellationToken);

                return new Response(transfer.Id);
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
