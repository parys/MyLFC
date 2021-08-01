using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure;
using MyLfc.Common.Web.Hubs;

namespace MyLfc.Application.Admin
{
    public class CalculateCommentVotesCommand
    {
        private static bool _started;

        public class Request : IRequest
        {

        }

        public class Handler : IRequestHandler<Request>
        {
            private readonly ILiverpoolContext _context;
            private readonly ISignalRHubAggregator _signalRHubAggregator;
            private readonly RequestContext _requestContext;

            public Handler(ILiverpoolContext context, ISignalRHubAggregator signalRHubAggregator,
                RequestContext requestContext)
            {
                _context = context;
                _signalRHubAggregator = signalRHubAggregator;
                _requestContext = requestContext;
            }

            public async Task<Unit> Handle(Request request, CancellationToken cancellationToken)
            {
                if (_started)
                {
                    return Unit.Value;
                }
                _started = true;
                var commentsCount = await _context.MaterialComments.CountAsync(cancellationToken);
                
                var count = 0;

                foreach (var comment in _context.MaterialComments)
                {
                    comment.PositiveCount =
                        await _context.CommentVotes.CountAsync(x => x.CommentId == comment.Id && x.Positive,
                            cancellationToken);

                    comment.NegativeCount =
                        await _context.CommentVotes.CountAsync(x => x.CommentId == comment.Id && !x.Positive,
                            cancellationToken);

                    _signalRHubAggregator.SendToUser(HubEndpointConstants.UpdateCommentVotes, (++count / 1.0 / commentsCount).ToString("P"),
                        _requestContext.UserId.GetValueOrDefault());
                }

                await _context.SaveChangesAsync(cancellationToken); 
                _started = false;
                return Unit.Value;
            }
        }
    }
}
