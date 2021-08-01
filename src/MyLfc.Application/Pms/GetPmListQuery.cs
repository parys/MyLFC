using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure;

namespace MyLfc.Application.Pms
{
    public class GetPmListQuery
    {
        public class Request : IRequest<Response>
        {
        }


        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly ILiverpoolContext _context;

            private readonly RequestContext _requestContext;

            private readonly IMapper _mapper;

            public Handler(ILiverpoolContext context, RequestContext requestContext, IMapper mapper)
            {
                _context = context;
                _requestContext = requestContext;
                _mapper = mapper;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var messages = await _context.PrivateMessages
                    .AsNoTracking()
                    .Where(x => x.ReceiverId == _requestContext.UserId || x.SenderId == _requestContext.UserId)
                    .OrderByDescending(x => x.SentTime)
                    .ProjectTo<PmListDto>(_mapper.ConfigurationProvider)
                    .ToListAsync(cancellationToken);

                return new Response
                {
                    Received = messages.Where(x => x.ReceiverId == _requestContext.UserId),
                    Sent = messages.Where(x => x.SenderId == _requestContext.UserId)
                };
            }
        }

        [Serializable]
        public class Response
        {
            public IEnumerable<PmListDto> Received { get; set; }
            public IEnumerable<PmListDto> Sent { get; set; }
        }

        [Serializable]
        public class PmListDto
        {
            public int Id { get; set; }

            public int SenderId { get; set; }

            public string Sender { get; set; }

            public int ReceiverId { get; set; }

            public string Receiver { get; set; }

            public string Title { get; set; }

            public DateTimeOffset SentTime { get; set; }

            public bool IsRead { get; set; }
        }
    }
}
