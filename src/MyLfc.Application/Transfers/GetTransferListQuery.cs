using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure;
using MyLfc.Application.Infrastructure.Extensions;
using MyLfc.Domain;
using MyLfc.Persistence;

namespace MyLfc.Application.Transfers
{
    public class GetTransferListQuery
    {
        public class Request : PagedQueryBase, IRequest<Response>
        {
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
                var transfersQuery = _context.Transfers.AsNoTracking().OrderByDescending(x => x.Id);
                
                return await transfersQuery.GetPagedAsync<Response, Transfer, TransferListDto>(request, _mapper);
            }
        }


        [Serializable]
        public class Response : PagedResult<TransferListDto>
        {
        }


        [Serializable]
        public class TransferListDto
        {
            public int Id { get; set; }

            public bool Coming { get; set; }

            public DateTimeOffset StartDate { get; set; }

            public bool OnLoan { get; set; }

            public DateTimeOffset? FinishDate { get; set; }

            public int? Amount { get; set; }

            public int? ClubId { get; set; }

            public string ClubName { get; set; }

            public string ClubLogo { get; set; }

            public int PersonId { get; set; }

            public string PersonName { get; set; }
        }
    }
}
