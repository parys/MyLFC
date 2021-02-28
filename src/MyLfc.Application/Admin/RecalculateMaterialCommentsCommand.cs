using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure;
using MyLfc.Common.Web.Hubs;
using MyLfc.Persistence;

namespace MyLfc.Application.Admin
{
    public class RecalculateMaterialCommentsCommand
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
                var materialCount = await _context.Materials.CountAsync(cancellationToken);
                if (_started)
                {
                    return Unit.Value;
                }

                _started = true;
                var count = 0;

                foreach (var material in _context.Materials)
                {
                    material.CommentsCount =
                        await _context.MaterialComments.CountAsync(x => x.MaterialId == material.Id && !x.Deleted,
                            cancellationToken);

                    _signalRHubAggregator.SendToUser(HubEndpointConstants.UpdateMatCommentsCount, (++count / 1.0 / materialCount).ToString("P"),
                        _requestContext.UserId.GetValueOrDefault());
                }

                await _context.SaveChangesAsync(cancellationToken);
                _started = false;
                return Unit.Value;
            }
        }
    }
}
