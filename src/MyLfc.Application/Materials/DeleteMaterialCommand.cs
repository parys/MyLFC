using System;
using System.Security.Claims;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;
using MyLfc.Persistence;
using MyLiverpool.Common.Utilities.Extensions;
using MyLiverpool.Data.Common;

namespace MyLfc.Application.Materials
{
    public class DeleteMaterialCommand
    {
        public class Request : IRequest
        {
            public int Id { get; set; }
            public ClaimsPrincipal Claims { get; set; } //todo think about it
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
                var material = await _context.Materials
                    .Include(x => x.Comments)
                    .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);
                
                if ((!request.Claims.IsInRole(nameof(RolesEnum.NewsFull)) && material.Type == MaterialType.News) ||
                    (!request.Claims.IsInRole(nameof(RolesEnum.BlogFull)) && material.Type == MaterialType.Blogs))
                {
                    throw new UnauthorizedAccessException($"Current user {request.Claims.GetIdSafe()} cannot delete material {request.Id}");
                }

                if (material == null)
                {
                    throw new NotFoundException(nameof(Material), request.Id);
                }

                material.Deleted = true;
                foreach (var comment in material.Comments)
                {
                    comment.Deleted = true;
                }

                await _context.SaveChangesAsync(cancellationToken);
                return Unit.Value;
            }
        }
    }
}
