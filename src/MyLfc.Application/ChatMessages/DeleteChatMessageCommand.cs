using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;

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
            private readonly ILiverpoolContext _context;

            public Handler(ILiverpoolContext context)
            {
                _context = context;
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
