using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;
using MyLfc.Persistence;

namespace MyLfc.Application.Persons
{
    public class UpdatePersonCommand
    {
        public class Request : UpsertPersonCommand.Request, IRequest<Response>
        {
            public int Id { get; set; }
        }

        public class Validator : UpsertPersonCommand.Validator<Request>
        {
            public Validator()
            {
                RuleFor(v => v.Id).NotEmpty();
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
                var person = await _context.Persons
                    .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

                if (person == null)
                {
                    throw new NotFoundException(nameof(Person), request.Id);
                }

                person = _mapper.Map(request, person);

                await _context.SaveChangesAsync(cancellationToken);

                return new Response {Id = person.Id};
            }
        }

        public class Response
        {
            public int Id { get; set; }
        }
    }
}
