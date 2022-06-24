using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;
using MyLfc.Data.Common;

namespace MyLfc.Application.Materials.Commands
{
    public class DeleteMaterialCommand
    {
        public class Request : IRequest<Response>
        {
            public int Id { get; set; }
        }


        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly ILiverpoolContext _context;

            private readonly RequestContext _requestContext;

            public Handler(ILiverpoolContext context, RequestContext requestContext)
            {
                _context = context;
                _requestContext = requestContext;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var material = await _context.Materials
                    .Include(x => x.Comments)
                    .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

                if (!_requestContext.User.IsInRole(nameof(RolesEnum.NewsFull)) && material.Type == MaterialType.News ||
                    !_requestContext.User.IsInRole(nameof(RolesEnum.BlogFull)) && material.Type == MaterialType.Blogs)
                {
                    throw new UnauthorizedAccessException($"Current user {_requestContext.UserId} cannot delete material {request.Id}");
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
                return new Response { Id = material.Id };
            }
        }

        public class Response
        {
            public int Id { get; set; }
        }
    }
}
