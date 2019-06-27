using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;
using MyLfc.Persistence;

namespace MyLfc.Application.Transfers
{
    public class UpdateTransferCommand
    {
        public class Request : UpsertTransferCommand.Request, IRequest<Response>
        {
            public int Id { get; set; }
        }

        public class Validator : UpsertTransferCommand.Validator<Request>
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
                var transfer = await _context.Transfers
                    .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

                if (transfer == null)
                {
                    throw new NotFoundException(nameof(Transfer), request.Id);
                }

                transfer = _mapper.Map(request, transfer);

                await _context.SaveChangesAsync(cancellationToken);

                return new Response(transfer.Id);
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
