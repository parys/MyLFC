using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;

namespace MyLfc.Application.FaqCategories
{
    public class DeleteFaqCategoryCommand
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
                var faqCategory = await _context.FaqCategories
                    .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);
                
                if (faqCategory == null)
                {
                    throw new NotFoundException(nameof(FaqCategory), request.Id);
                }

                _context.FaqCategories.Remove(faqCategory);
                await _context.SaveChangesAsync(cancellationToken);

                return new Response {Id = faqCategory.Id};
            }
        }


        public class Response
        {
            public int Id { get; set; }
        }
    }
}
