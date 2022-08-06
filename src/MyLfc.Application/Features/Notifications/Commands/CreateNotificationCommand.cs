using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure;
using MyLfc.Domain;
using MyLfc.Common.Utilities;
using MyLfc.Data.Common;

namespace MyLfc.Application.Features.Notifications.Commands;

public class CreateNotificationCommand
{
    public class Request : IRequest<Response>
    {
        public NotificationType Type { get; set; }

        public int? EntityId { get; set; }

        public int? UserId { get; set; }

        public int CommentId { get; set; }

        public string Text { get; set; }

        public DateTimeOffset DateTime { get; set; }
    }


    public class Validator : AbstractValidator<Request>
    {
        public Validator()
        {
            RuleFor(x => x.Type).IsInEnum();
        }
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
            await RemoveOldNotificationsAsync(_requestContext.UserId.Value, cancellationToken);
            var model = _mapper.Map<Notification>(request);
            if (model.Text.Length > 5000)
            {
                model.Text = model.Text[..4997] + "...";
            }

            _context.Notifications.Add(model);
            await _context.SaveChangesAsync(cancellationToken);

            return _mapper.Map<Response>(model);
        }

        private async Task RemoveOldNotificationsAsync(int userId, CancellationToken cancellationToken)
        {
            var count = await _context.Notifications.CountAsync(x => x.UserId == userId, cancellationToken);
            if (count >= GlobalConstants.NotificationsCount)
            {
                var list = await _context.Notifications.Where(x => x.IsRead).ToListAsync(cancellationToken);

                _context.Notifications.RemoveRange(list);
                await _context.SaveChangesAsync(cancellationToken);
            }
        }
    }


    public class Response
    {
        public int Id { get; set; }

        public string TypeName { get; set; }

        public int? EntityId { get; set; }

        public int CommentId { get; set; }
    }
}
