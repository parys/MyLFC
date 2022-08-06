using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;

namespace MyLfc.Application.Features.MaterialCategories.Commands;

public class DeleteMaterialCategoryCommand
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
            var materialCategory = await _context.MaterialCategories
                .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

            if (materialCategory == null)
            {
                throw new NotFoundException(nameof(MaterialCategory), request.Id);
            }

            _context.MaterialCategories.Remove(materialCategory);
            await _context.SaveChangesAsync(cancellationToken);

            return new Response { Id = materialCategory.Id };
        }
    }


    public class Response
    {
        public int Id { get; set; }
    }
}
