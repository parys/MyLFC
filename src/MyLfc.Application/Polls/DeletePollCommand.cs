using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain.Polls;
using MyLfc.Persistence;

namespace MyLfc.Application.Polls
{
    public class DeletePollCommand
    {
        public class Request : IRequest<Response>
        {
            public int Id { get; set; }
        }


        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly LiverpoolContext _context;
            
            public Handler(LiverpoolContext context)
            {
                _context = context;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var poll = await _context.Polls
                    .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);
                
                if (poll == null)
                {
                    throw new NotFoundException(nameof(Poll), request.Id);
                }

                _context.Polls.Remove(poll);
                await _context.SaveChangesAsync(cancellationToken);

                return new Response {Id = poll.Id};
            }
        }


        public class Response
        {
            public int Id { get; set; }
        }
    }
}
