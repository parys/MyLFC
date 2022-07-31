using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;

namespace MyLfc.Application.Contracts;

public class DeleteContractCommand
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
            var contract = await _context.Contracts
                .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);
            
            if (contract == null)
            {
                throw new NotFoundException(nameof(Contract), request.Id);
            }

            _context.Contracts.Remove(contract);
            await _context.SaveChangesAsync(cancellationToken);

            return new Response { Id = contract.Id };
        }
    }


    public class Response
    {
        public int Id { get; set; }
    }
}
