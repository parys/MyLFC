using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Seasons.Queries;
using MyLfc.Data.Common;

namespace MyLfc.Application.Transfers;

public class GetCurrentTransferListQuery
{
    public class Request : IRequest<Response>
    {
    }


    public class Handler : IRequestHandler<Request, Response>
    {
        private readonly ILiverpoolContext _context;

        private readonly IMapper _mapper;

        private readonly IMediator _mediator;

        public Handler(ILiverpoolContext context, IMapper mapper, IMediator mediator)
        {
            _context = context;
            _mapper = mapper;
            _mediator = mediator;
        }

        public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
        {
            var transfersQuery = _context.Transfers.AsNoTracking();

            var currentSeasonId = (await _mediator.Send(new GetCurrentSeasonQuery.Request(), cancellationToken)).StartSeasonYear;
            transfersQuery = transfersQuery
                .Where(x => x.SeasonId == currentSeasonId);


            var result = await transfersQuery
                .OrderByDescending(x => x.StartDate)
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
                .FirstOrDefaultAsync(x => x.Type == HelperEntityType.CurrentSeason)).Value ?? DateTimeOffset.UtcNow.Year.ToString());
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
