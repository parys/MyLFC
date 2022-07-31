using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;

namespace MyLfc.Application.Comments;

public class UpdateCommentVoteCommand
{
    public class Request : IRequest<Response>
    {
        public int CommentId { get; set; }

        public bool Positive { get; set; }
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
            var comment = await _context.MaterialComments
                .FirstOrDefaultAsync(x => x.Id == request.CommentId, cancellationToken);
            if (comment == null)
            {
                throw new NotFoundException(nameof(Comment), request.CommentId);
            }

            var vote = await _context.CommentVotes
                .FirstOrDefaultAsync(x => x.CommentId == request.CommentId
                                          && x.UserId == _requestContext.UserId, cancellationToken);

            if (vote != null)
            {
                if (vote.Positive != request.Positive)
                {
                    vote.Positive = request.Positive;

                    if (vote.Positive != request.Positive)
                    {
                        if (request.Positive)
                        {
                            comment.PositiveCount++;
                            comment.NegativeCount--;
                        }
                        else
                        {
                            comment.PositiveCount--;
                            comment.NegativeCount++;
                        }
                    }
                }
            }
            else
            {
                if (comment.AuthorId == _requestContext.UserId)
                {
                    throw new UnauthorizedAccessException("User can't vote for himself.");
                }
                vote = new CommentVote
                {
                    UserId = _requestContext.UserId.Value,
                    CommentId = request.CommentId,
                    Positive = request.Positive,
                    EntityId = comment.MaterialId ?? comment.MatchId ?? 0 //TODO switch to entityId ?
                };

                if (request.Positive)
                {
                    comment.PositiveCount++;
                }
                else
                {
                    comment.NegativeCount++;
                }

                _context.CommentVotes.Add(vote);
            }

            await _context.SaveChangesAsync(cancellationToken);
            return new Response();
        }
    }


    public class Response
    {
        
    }
}
