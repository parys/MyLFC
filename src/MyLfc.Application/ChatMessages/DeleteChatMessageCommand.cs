using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;
using MyLfc.Persistence;
using MyLiverpool.Data.Common;

namespace MyLfc.Application.ChatMessages
{
    public class DeleteChatMessageCommand
    {
        public class Request : IRequest<Response>
        {
            public int Id { get; set; }
        }


        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly LiverpoolContext _context;

            private readonly RequestContext _requestContext;
            
            public Handler(LiverpoolContext context, RequestContext requestContext)
            {
                _context = context;
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

                _context.ChatMessages.Remove(chatMessage);
                await _context.SaveChangesAsync(cancellationToken);

                return new Response {Id = request.Id};
            }
        }


        public class Response
        {
            public int Id { get; set; }
        }
    }
}
