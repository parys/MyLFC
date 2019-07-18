using System;
using System.Threading;
using System.Threading.Tasks;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;
using MyLfc.Persistence;
using MyLiverpool.Data.Common;

namespace MyLfc.Application.ChatMessages
{
    public class UpdateChatMessageCommand
    {
        public class Request : UpsertChatMessageCommand.Request, IRequest<Response>
        {
            public int Id { get; set; }
        }

        public class Validator : UpsertChatMessageCommand.Validator<Request>
        {
            public Validator()
            {
                RuleFor(v => v.Id).NotEmpty();
            }
        }


        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly LiverpoolContext _context;

            private readonly RequestContext _requestContext;

            private readonly IMediator _mediator;
            
            public Handler(LiverpoolContext context, IMediator mediator, RequestContext requestContext)
            {
                _context = context;
                _mediator = mediator;
                _requestContext = requestContext;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var chatMessage = await _context.ChatMessages
                    .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

                if (chatMessage == null)
                {
                    throw new NotFoundException(nameof(ChatMessage), request.Id);
                }

                if (!_requestContext.User.IsInRole(nameof(RolesEnum.UserStart))
                    || chatMessage.AuthorId != _requestContext.UserId.Value)
                {
                    throw new UnauthorizedAccessException("User cannot change message");
                }

                await _mediator.Send(new GetChatMessageDetailQuery.Request { Id = chatMessage.Id }, cancellationToken);

                chatMessage.Message = request.Message;

                await _context.SaveChangesAsync(cancellationToken);

                return new Response {Id = chatMessage.Id};
            }
        }

        public class Response
        {
            public int Id { get; set; }
        }
    }
}
