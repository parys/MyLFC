using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;

namespace MyLfc.Application.Contracts;

public class UpdateContractCommand
{
    public class Request : UpsertContractCommand.Request, IRequest<Response>
    {
        public int Id { get; set; }
    }

    public class Validator : UpsertContractCommand.Validator<Request>
    {
        public Validator()
        {
            RuleFor(v => v.Id).NotEmpty();
        }
    }


    public class Handler : IRequestHandler<Request, Response>
    {
        private readonly ILiverpoolContext _context;

        private readonly IMapper _mapper;
        
        public Handler(ILiverpoolContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
        {
            var contract = await _context.Contracts
                .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

            if (contract == null)
            {
                throw new NotFoundException(nameof(Contract), request.Id);
            }

            contract = _mapper.Map(request, contract);

            await _context.SaveChangesAsync(cancellationToken);

            return new Response {Id = contract.Id};
        }
    }

    public class Response
    {
        public int Id { get; set; }
    }
}
