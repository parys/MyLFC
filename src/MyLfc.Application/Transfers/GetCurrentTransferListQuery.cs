using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Persistence;
using MyLiverpool.Data.Common;

namespace MyLfc.Application.Transfers
{
    public class GetCurrentTransferListQuery
    {
        public class Request : IRequest<Response>
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
                var transfersQuery = _context.Transfers.AsNoTracking();

                var currentSeason = await GetCurrentSeasonIdAsync();
                transfersQuery = transfersQuery
                    .Where(x => x.SeasonId == currentSeason);

                var result = await transfersQuery
                    .ProjectTo<TransferListDto>(_mapper.ConfigurationProvider)
                    .ToListAsync(cancellationToken);

                return new Response
                {
                    Results = result
                };
            }

            private async Task<int> GetCurrentSeasonIdAsync()
            {
                return int.Parse((await _context.HelpEntities
                    .FirstOrDefaultAsync(x => x.Type == HelperEntityType.CurrentSeason)).Value ?? DateTime.Today.Year.ToString());
            }
    }


        [Serializable]
        public class Response
        {
            public List<TransferListDto> Results { get; set; } = new List<TransferListDto>();
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
