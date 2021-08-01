using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Common.Web.Hubs;
using MyLfc.Domain;
using MyLfc.Persistence;

namespace MyLfc.Application.Pms
{
    public class GetPmDetailQuery
    {
        public class Request : IRequest<Response>
        {
            public int Id { get; set; }
        }

        public class Validator : AbstractValidator<Request>
        {
            public Validator()
            {
                RuleFor(x => x.Id).GreaterThan(0);
            }
        }


        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly LiverpoolContext _context;

            private readonly RequestContext _requestContext;

            private readonly IMapper _mapper;

            private readonly ISignalRHubAggregator _signalRHub;

            public Handler(LiverpoolContext context, RequestContext requestContext, IMapper mapper, ISignalRHubAggregator signalRHub)
            {
                _context = context;
                _requestContext = requestContext;
                _mapper = mapper;
                _signalRHub = signalRHub;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var message = await _context.PrivateMessages
                    .Include(m => m.Receiver)
                    .Include(m => m.Sender)
                    .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

                if (message == null || message.ReceiverId != _requestContext.UserId && message.SenderId != _requestContext.UserId)
                {
                    throw new NotFoundException(nameof(PrivateMessage), request.Id);
                }

                if (!message.IsRead && message.ReceiverId == _requestContext.UserId)
                {
                    message.IsRead = true;
                    await _context.SaveChangesAsync(cancellationToken);

                    _signalRHub.SendToUser(HubEndpointConstants.PmReadEndpoint, true, _requestContext.UserId.Value);
                }

                return _mapper.Map<Response>(message);
            }
        }


        public class Response
        {
            public int Id { get; set; }

            public int SenderId { get; set; }

            public string Sender { get; set; }

            public int ReceiverId { get; set; }

            public string Receiver { get; set; }

            public string Title { get; set; }

            public string Message { get; set; }
        }
    }
}
