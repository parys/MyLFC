using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Common.Web.Hubs;
using MyLfc.Data.Common;

namespace MyLfc.Application.ChatMessages
{
    public class GetChatMessageDetailQuery
    {
        public class Request : IRequest<Response>
        {
            public int Id { get; set; }
        }


        public class Handler : IRequestHandler<Request, Response>
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
            
            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var message = await _context.ChatMessages.AsNoTracking()
                    .ProjectTo<Response>(_mapper.ConfigurationProvider)
                    .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

                _signalRHub.Send(HubEndpointConstants.ChatEndpoint, message);

                return message;
            }
        }


        [Serializable]
        public class Response
        {
            public int Id { get; set; }

            public int AuthorId { get; set; }

            public string UserName { get; set; }

            public string Message { get; set; }

            public DateTimeOffset AdditionTime { get; set; }

            public ChatMessageTypeEnum Type { get; set; }
        }
    }
}
