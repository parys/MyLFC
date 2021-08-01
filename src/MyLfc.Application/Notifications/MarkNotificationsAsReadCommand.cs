using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure;
using MyLfc.Common.Web.Hubs;

namespace MyLfc.Application.Notifications
{
    public class MarkNotificationsAsReadCommand
    {
        public class Request : IRequest<Response>
        {
            public int[] Ids;
        }


        public class Validator : AbstractValidator<Request>
        {
            public Validator()
            {
                RuleFor(x => x.Ids).NotEmpty();
            }
        }


        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly ILiverpoolContext _context;

            private readonly RequestContext _requestContext;

            private readonly ISignalRHubAggregator _signalRHubAggregator;

            public Handler(ILiverpoolContext context, RequestContext requestContext, ISignalRHubAggregator signalRHubAggregator)
            {
                _context = context;
                _requestContext = requestContext;
                _signalRHubAggregator = signalRHubAggregator;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var entities = await _context.Notifications.Where(x => request.Ids.Contains(x.Id)
                                                                       && !x.IsRead
                                                                       && x.UserId == _requestContext.UserId)
                    .ToListAsync(cancellationToken);
                entities.ForEach(x => x.IsRead = true);
                await _context.SaveChangesAsync(cancellationToken);

                _signalRHubAggregator.SendToUser(HubEndpointConstants.NotifyReadEndpoint, entities.Count, _requestContext.UserId.Value);

                return new Response();
            }
        }


        public class Response
        {
        }
    }
}
