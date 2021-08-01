﻿using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;

namespace MyLfc.Application.Transfers
{
    public class DeleteTransferCommand
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
                var transfer = await _context.Transfers
                    .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);
                
                if (transfer == null)
                {
                    throw new NotFoundException(nameof(Transfer), request.Id);
                }

                _context.Transfers.Remove(transfer);
                await _context.SaveChangesAsync(cancellationToken);

                return new Response { Id = transfer.Id };
            }
        }


        public class Response
        {
            public int Id { get; set; }
        }
    }
}
