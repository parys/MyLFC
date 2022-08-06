using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure;
using MyLfc.Common.Web.Hubs;
using MyLfc.Domain;
using MyLfc.Business.Contracts;
using MyLfc.Common.Utilities;

namespace MyLfc.Application.Features.Pms.Commands;

public class CreatePmCommand
{
    public class Request : IRequest<Response>
    {
        public int ReceiverId { get; set; }

        public string Title { get; set; }

        public string Message { get; set; }
    }


    public class Validator : AbstractValidator<Request>
    {
        public Validator()
        {
            RuleFor(x => x.Title)
                .NotEmpty()
                .MaximumLength(50);

            RuleFor(x => x.Message)
                .NotEmpty()
                .MaximumLength(2500);
        }
    }


    public class Handler : IRequestHandler<Request, Response>
    {
        private readonly ILiverpoolContext _context;

        private readonly IMapper _mapper;

        private readonly RequestContext _requestContext;

        private readonly IEmailSender _messageService;

        private readonly ISignalRHubAggregator _signalRHub;

        public Handler(ILiverpoolContext context, IMapper mapper, RequestContext requestContext,
            IEmailSender messageService, ISignalRHubAggregator signalRHub)
        {
            _context = context;
            _mapper = mapper;
            _requestContext = requestContext;
            _messageService = messageService;
            _signalRHub = signalRHub;
        }

        public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
        {
            await RemoveOldMessagesAsync(request.ReceiverId, cancellationToken);
            await RemoveOldMessagesAsync(_requestContext.UserId.Value, cancellationToken);

            var entity = _mapper.Map<PrivateMessage>(request);

            entity.SentTime = DateTimeOffset.UtcNow;
            entity.SenderId = _requestContext.UserId.Value;

            _context.PrivateMessages.Add(entity);
            await _context.SaveChangesAsync(cancellationToken);

            await _messageService.SendNewPmToEmailAsync(entity.ReceiverId, entity.Message, entity.Id);
            _signalRHub.SendToUser(HubEndpointConstants.NewPmEndpoint, entity, request.ReceiverId);

            return new Response { Id = entity.Id };
        }

        private async Task RemoveOldMessagesAsync(int userId, CancellationToken cancellationToken)
        {
            var countUserMessages = await _context.PrivateMessages
                .CountAsync(x => x.ReceiverId == userId || x.SenderId == userId, cancellationToken);

            if (countUserMessages > GlobalConstants.PmsPerUser)
            {
                var messages =
                    _context.PrivateMessages.OrderBy(x => x.SentTime)
                        .Take(GlobalConstants.PmsPerUser / 2);

                _context.PrivateMessages.RemoveRange(messages);
                await _context.SaveChangesAsync(cancellationToken);
            }
        }
    }


    public class Response
    {
        public int Id { get; set; }
    }
}
