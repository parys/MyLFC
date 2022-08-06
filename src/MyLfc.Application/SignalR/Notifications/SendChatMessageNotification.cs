using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Common.Web.Hubs;
using MyLfc.Data.Common;
using MyLfc.Domain;

namespace MyLfc.Application.SignalR.Notifications;

public class SendChatMessageNotification
{
    public class Request : INotification
    {
        public int Id { get; set; }
    }


    public class Handler : INotificationHandler<Request>
    {
        private readonly ILiverpoolContext _context;
        private readonly IMapper _mapper;

        private readonly ISignalRHubAggregator _signalRHub;

        public Handler(ILiverpoolContext context, IMapper mapper, ISignalRHubAggregator signalRHub)
        {
            _context = context;
            _mapper = mapper;
            _signalRHub = signalRHub;
        }

        public async Task Handle(Request request, CancellationToken cancellationToken)
        {
            var message = await _context.ChatMessages.AsNoTracking()
                .ProjectTo<MessageDto>(_mapper.ConfigurationProvider)
                .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

            if (message is null)
            {
                throw new NotFoundException(nameof(ChatMessage), request.Id);
            }

            _signalRHub.Send(HubEndpointConstants.ChatEndpoint, message);
        }
    }


    [Serializable]
    public class MessageDto
    {
        public int Id { get; set; }

        public int AuthorId { get; set; }

        public string UserName { get; set; }

        public string Message { get; set; }

        public DateTimeOffset AdditionTime { get; set; }

        public ChatMessageTypeEnum Type { get; set; }
    }
}
