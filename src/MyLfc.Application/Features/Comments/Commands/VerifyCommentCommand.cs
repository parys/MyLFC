using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Features.HelpEntities.Commands;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;

namespace MyLfc.Application.Features.Comments.Commands;

public class VerifyCommentCommand
{
    public class Request : IRequest<Response>
    {
        public int Id { get; set; }
    }


    public class Handler : IRequestHandler<Request, Response>
    {
        private readonly ILiverpoolContext _context;

        private readonly IMediator _mediator;

        public Handler(ILiverpoolContext context, IMediator mediator)
        {
            _context = context;
            _mediator = mediator;
        }

        public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
        {
            var comment = await _context.MaterialComments.FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

            if (comment == null)
            {
                throw new NotFoundException(nameof(Comment), request.Id);
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
