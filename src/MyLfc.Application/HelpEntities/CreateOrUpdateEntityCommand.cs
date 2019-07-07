using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Domain;
using MyLfc.Persistence;
using MyLiverpool.Data.Common;

namespace MyLfc.Application.HelpEntities
{
    public class CreateOrUpdateEntityCommand
    {
        public class Request : IRequest<Response>
        {
            public HelperEntityType Type { get; set; }

            public string Value { get; set; }
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
            private readonly LiverpoolContext _context;

            private readonly IMapper _mapper;
            
            public Handler(LiverpoolContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var entity =
                    await _context.HelpEntities.FirstOrDefaultAsync(x => x.Type == request.Type, cancellationToken);
                
                if (entity == null)
                {
                    entity = _mapper.Map<HelpEntity>(request);
                    _context.HelpEntities.Add(entity);
                }
                else
                {
                    entity = _mapper.Map(request, entity);
                    _context.HelpEntities.Update(entity);
                }

                await _context.SaveChangesAsync(cancellationToken);
                return new Response{Id = entity.Id};
            }
        }


        public class Response
        {
            public int Id { get; set; }
        }
    }
}
