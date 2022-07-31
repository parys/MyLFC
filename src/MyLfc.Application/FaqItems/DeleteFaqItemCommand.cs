using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;

namespace MyLfc.Application.FaqItems;

public class DeleteFaqItemCommand
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
            var faqItem = await _context.FaqItems
                .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);
            
            if (faqItem == null)
            {
                throw new NotFoundException(nameof(FaqItem), request.Id);
            }

            _context.FaqItems.Remove(faqItem);
            await _context.SaveChangesAsync(cancellationToken);

            return new Response {Id = faqItem.Id};
        }
    }


    public class Response
    {
        public int Id { get; set; }
    }
}
