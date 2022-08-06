using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Features.Clubs.Queries;
using MyLfc.Application.Infrastructure.Pagination;
using MyLfc.Domain;

namespace MyLfc.Application.Matches.Queries;

public class GetMatchListQuery
{
    public class Request : PagedQueryBase, IRequest<Response>
    {
        public int? SeasonId { get; set; }
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
            var matchesQuery = _context.Matches.AsNoTracking();

            if (request.SeasonId.HasValue)
            {
                matchesQuery = matchesQuery.Where(m => m.SeasonId == request.SeasonId);
            }
            var liverpoolClub = await _mediator.Send(new GetLiverpoolClubQuery.Request(), cancellationToken);

            matchesQuery = matchesQuery.AsNoTracking()
                .Include(m => m.Club)
                .Include(m => m.Stadium)
                .Include(m => m.Events)
                .OrderByDescending(m => m.DateTime);

            var matches = await matchesQuery
                .Skip(request.SkipCount())
                .Take(request.PageSize)
                .ToListAsync(cancellationToken);

            var results = new List<MatchListDto>();
            foreach (var match in matches)
            {
                var dto = _mapper.Map<MatchListDto>(match);
                if (match.IsHome)
                {
                    FillClubsFields(dto, liverpoolClub, match.Club);
                }
                else
                {
                    FillClubsFields(dto, match.Club, liverpoolClub);
                }
                results.Add(dto);
            }

            return new Response
            {
                PageSize = request.PageSize,
                CurrentPage = request.CurrentPage,
                Results = results,
                RowCount = await matchesQuery.CountAsync(cancellationToken)
            };
        }

        private static void FillClubsFields(MatchListDto dto, Club homeClub, Club awayClub)
        {
            dto.HomeClubId = homeClub.Id;
            dto.HomeClubName = homeClub.Name;
            dto.HomeClubLogo = homeClub.Logo;
            dto.AwayClubId = awayClub.Id;
            dto.AwayClubName = awayClub.Name;
            dto.AwayClubLogo = awayClub.Logo;
        }
    }


    [Serializable]
    public class Response : PagedResult<MatchListDto>
    {
    }


    [Serializable]
    public class MatchListDto
    {
        public int Id { get; set; }

        public bool IsHome { get; set; }

        public int ClubId { get; set; }

        public string ClubName { get; set; }

        public int HomeClubId { get; set; }

        public string HomeClubName { get; set; }

        public string HomeClubLogo { get; set; }

        public int AwayClubId { get; set; }

        public string AwayClubName { get; set; }

        public string AwayClubLogo { get; set; }

        public DateTimeOffset DateTime { get; set; }

        public int TypeId { get; set; }

        public string TypeName { get; set; }

        public string StadiumName { get; set; }

        public string StadiumCity { get; set; }

        public int StadiumId { get; set; }

        public string ScoreHome { get; set; }

        public int? ScorePenaltyHome { get; set; }

        public string ScoreAway { get; set; }

        public int? ScorePenaltyAway { get; set; }

        public int SeasonId { get; set; }

        public string SeasonName { get; set; }

        public string ReportUrl { get; set; }

        public string PhotoUrl { get; set; }

        public string VideoUrl { get; set; }

        public int? PreviewId { get; set; }

        public int? ReportId { get; set; }

        public int CommentCount { get; set; }
    }
}
