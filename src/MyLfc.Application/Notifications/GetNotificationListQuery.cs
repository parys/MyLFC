using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure;
using MyLfc.Application.Infrastructure.Extensions;
using MyLfc.Domain;
using MyLiverpool.Data.Common;

namespace MyLfc.Application.Notifications
{
    public class GetNotificationListQuery
    {
        public class Request : PagedQueryBase, IRequest<Response>
        {
        }


        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly ILiverpoolContext _context;

            private readonly IMapper _mapper;

            private readonly RequestContext _requestContext;
            
            public Handler(ILiverpoolContext context, IMapper mapper, RequestContext requestContext)
            {
                _context = context;
                _mapper = mapper;
                _requestContext = requestContext;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var transfersQuery = _context.Notifications.AsNoTracking()
                    .Where(x => x.UserId == _requestContext.UserId);

                request.SortDirection = "Desc";
                request.SortOn = nameof(Notification.DateTime);
                request.PageSize = 20;

                return await transfersQuery.GetPagedAsync<Response, Notification, NotificationListDto>(request, _mapper);
            }
        }


        [Serializable]
        public class Response : PagedResult<NotificationListDto>
        {
        }


        [Serializable]
        public class NotificationListDto
        {
            public int Id { get; set; }

            public NotificationType Type { get; set; }

            public string TypeName { get; set; }

            public int? EntityId { get; set; }

            public int UserId { get; set; }

            public int CommentId { get; set; }

            public string Text { get; set; }

            public bool IsRead { get; set; }

            public DateTimeOffset DateTime { get; set; }
        }
    }
}
