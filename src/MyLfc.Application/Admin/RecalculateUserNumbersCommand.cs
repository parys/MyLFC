using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure;
using MyLfc.Common.Web.Hubs;
using MyLfc.Persistence;
using MyLiverpool.Data.Common;

namespace MyLfc.Application.Admin
{
    public class RecalculateUserNumbersCommand
    {
        private static bool _started;

        public class Request : IRequest
        {

        }

        public class Handler : IRequestHandler<Request>
        {
            private readonly LiverpoolContext _context;
            private readonly ISignalRHubAggregator _signalRHubAggregator;
            private readonly RequestContext _requestContext;

            public Handler(LiverpoolContext context, ISignalRHubAggregator signalRHubAggregator,
                RequestContext requestContext)
            {
                _context = context;
                _signalRHubAggregator = signalRHubAggregator;
                _requestContext = requestContext;
            }

            public async Task<Unit> Handle(Request request, CancellationToken cancellationToken)
            {
                var usersCount = await _context.Users.CountAsync(cancellationToken);
                if (_started)
                {
                    return Unit.Value;
                }

                _started = true;
                var count = 0;

                foreach (var user in _context.Users)
                {
                    user.CommentsCount =
                        await _context.MaterialComments.CountAsync(x => x.AuthorId == user.Id && !x.Deleted,
                            cancellationToken);

                    user.BlogsCount =
                        await _context.Materials.CountAsync(x => x.AuthorId == user.Id && x.Type == MaterialType.Blogs && !x.Deleted,
                            cancellationToken);

                    user.NewsCount =
                        await _context.Materials.CountAsync(x => x.AuthorId == user.Id && x.Type == MaterialType.News && !x.Deleted,
                            cancellationToken);

                    _signalRHubAggregator.SendToUser(HubEndpointConstants.UpdateUserNumbers, (++count / 1.0 / usersCount).ToString("P"),
                        _requestContext.UserId.GetValueOrDefault());
                }

                await _context.SaveChangesAsync(cancellationToken); 
                _started = false;
                return Unit.Value;
            }
        }
    }
}
