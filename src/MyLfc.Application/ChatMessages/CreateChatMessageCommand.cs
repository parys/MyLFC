using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using MyLfc.Application.Infrastructure;
using MyLfc.Common.Web.Hubs;
using MyLfc.Domain;
using MyLfc.Persistence;
using MyLiverpool.Data.Common;

namespace MyLfc.Application.ChatMessages
{
    public class CreateChatMessageCommand
    {
        public class Request : UpsertChatMessageCommand.Request, IRequest<Response>
        {
            public ChatMessageTypeEnum Type { get; set; }

            public string Ip { get; set; }
        }


        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly LiverpoolContext _context;

            private readonly IMapper _mapper;

            private readonly RequestContext _requestContext;

            private readonly IMediator _mediator;

            public Handler(LiverpoolContext context, IMapper mapper, RequestContext requestContext, ISignalRHubAggregator signalRHub, IMediator mediator)
            {
                _context = context;
                _mapper = mapper;
                _requestContext = requestContext;
                _mediator = mediator;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var chatMessage = _mapper.Map<ChatMessage>(request);
                chatMessage.AdditionTime = DateTime.Now;
                chatMessage.AuthorId = _requestContext.UserId.Value;

                _context.ChatMessages.Add(chatMessage);
                await _context.SaveChangesAsync(cancellationToken);

                await _mediator.Send(new GetChatMessageDetailQuery.Request {Id = chatMessage.Id}, cancellationToken);

                return new Response {Id = chatMessage.Id};
            }
        }


        public class Response
        {
            public int Id { get; set; }
        }
    }
}
