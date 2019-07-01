using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;
using MyLfc.Persistence;

namespace MyLfc.Application.Injuries
{
    public class DeleteInjuryCommand
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
                var injury = await _context.Injuries
                    .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);
                
                if (injury == null)
                {
                    throw new NotFoundException(nameof(Injury), request.Id);
                }

                _context.Injuries.Remove(injury);
                await _context.SaveChangesAsync(cancellationToken);

                return new Response(injury.Id);
            }
        }


        public class Response
        {
            public Response(int id)
            {
                Id = id;
            }

            public int Id { get; set; }
        }
    }
}
