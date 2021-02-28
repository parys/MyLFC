using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;
using MyLfc.Persistence;
using MyLiverpool.Data.Common;

namespace MyLfc.Application.Comments
{
    public class DeleteCommentCommand
    {
        public class Request : IRequest<Response>
        {
            public int Id { get; set; }
        }


        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly LiverpoolContext _context;

            private readonly RequestContext _requestContext;
            
            public Handler(LiverpoolContext context, RequestContext requestContext)
            {
                _context = context;
                _requestContext = requestContext;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var comment = await _context.MaterialComments
                    .Include(x => x.Children)
                    .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);
                
                if (comment == null)
                {
                    throw new NotFoundException(nameof(MaterialComment), request.Id);
                }

                if(!_requestContext.UserId.HasValue
                   || (!_requestContext.User.IsInRole(nameof(RolesEnum.UserStart))
                       && _requestContext.UserId.Value != comment.AuthorId))
                {
                    throw new UnauthorizedAccessException($"Current user {_requestContext.UserId} cannot delete comment {request.Id}");
                }


                var user = await _context.Users.FirstOrDefaultAsync(x => x.Id == comment.AuthorId, cancellationToken);
                user.CommentsCount--;

                if (comment.MaterialId.HasValue)
                {
                    var material = await _context.Materials.FirstOrDefaultAsync(x => x.Id == comment.MaterialId.Value,
                        cancellationToken);
                    material.CommentsCount--;
                }

                comment.Deleted = true;
                foreach (var item in comment.Children)
                {
                    item.Parent = comment.Parent;
                }

                await _context.SaveChangesAsync(cancellationToken);
                return new Response { Id = request.Id };
            }
        }


        public class Response
        {
            public int Id { get; set; }
        }
    }
}
