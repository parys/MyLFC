using System.Threading;
using System.Threading.Tasks;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;
using MyLiverpool.Data.Common;

namespace MyLfc.Application.HelpEntities
{
    public class GetEntityQuery
    {
        public class Request : IRequest<Response>
        {
            public HelperEntityType Type { get; set; }
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
            
            public Handler(ILiverpoolContext context)
            {
                _context = context;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var entity = await _context.HelpEntities.AsNoTracking()
                    .FirstOrDefaultAsync(x => x.Type == request.Type, cancellationToken);
                
                if (entity == null)
                {
                    throw new NotFoundException(nameof(HelpEntity), request.Type);
                }

                return new Response {Type = entity.Type, Value = entity.Value};
            }
        }


        public class Response
        {
            public HelperEntityType Type { get; set; }

            public string Value { get; set; }
        }
    }
}
