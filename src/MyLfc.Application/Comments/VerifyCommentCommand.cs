using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.HelpEntities;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;
using MyLfc.Persistence;

namespace MyLfc.Application.Comments
{
    public class VerifyCommentCommand
    {
        public class Request : IRequest<Response>
        {
            public int Id { get; set; }
        }


        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly LiverpoolContext _context;

            private readonly IMediator _mediator;
            
            public Handler(LiverpoolContext context, IMediator mediator)
            {
                _context = context;
                _mediator = mediator;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var comment = await _context.MaterialComments.FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

                if (comment == null)
                {
                    throw new NotFoundException(nameof(MaterialComment), request.Id);
                }

                comment.IsVerified = true;
                await _context.SaveChangesAsync(cancellationToken);

                await _mediator.Send(
                    new UpdateCommentsNumberCommand.Request
                        { DiffAllNumbers = 0, DiffUnverifiedNumbers = -1 },
                    cancellationToken);

                return new Response(comment.Id);
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
