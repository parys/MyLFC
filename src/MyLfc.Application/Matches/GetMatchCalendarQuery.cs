using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Clubs;
using MyLfc.Domain;
using MyLfc.Persistence;

namespace MyLfc.Application.Matches
{
    public class GetMatchCalendarQuery
    {
        public class Request : IRequest<Response>
        {
            public int Id { get; set; }
        }


        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly LiverpoolContext _context;

            private readonly IMapper _mapper;

            private readonly IMediator _mediator;

            public Handler(LiverpoolContext context, IMapper mapper, IMediator mediator)
            {
                _context = context;
                _mapper = mapper;
                _mediator = mediator;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var liverpoolClub = await _mediator.Send(new GetLiverpoolClubQuery.Request(), cancellationToken);
                if (liverpoolClub == null)
                {
                    return null;
                }
                var lastMatch = await GetLastMatchAsync();
                var nextMatch = await GetNextMatchAsync();
                var dtos = new List<CalendarMatchDto>();
                var matches = new List<Match>();
                if (lastMatch != null)
                {
                    matches.Add(lastMatch);
                }
                if (nextMatch != null)
                {
                    matches.Add(nextMatch);
                }
                foreach (var match in matches)
                {
                    var dto = _mapper.Map<CalendarMatchDto>(match);
                    if (match.IsHome)
                    {
                        FillClubsFields(dto, liverpoolClub, match.Club);
                    }
                    else
                    {
                        FillClubsFields(dto, match.Club, liverpoolClub);
                    }
                    dtos.Add(dto);
                }
                var response = new Response
                {
                    Last = dtos[0],
                    Next = dtos[1]
                };
                return response;
            }

            private static void FillClubsFields(CalendarMatchDto dto, Club homeClub, Club awayClub)
            {
                dto.HomeClubId = homeClub.Id;
                dto.HomeClubName = homeClub.Name;
                dto.HomeClubLogo = homeClub.Logo;
                dto.AwayClubId = awayClub.Id;
                dto.AwayClubName = awayClub.Name;
                dto.AwayClubLogo = awayClub.Logo;
            }

            private async Task<Match> GetLastMatchAsync()
            {
                return await _context.Matches.AsNoTracking()
                .Include(m => m.Club)
                .Include(m => m.Events)
                .OrderBy(x => x.DateTime)
                .LastOrDefaultAsync(m => m.DateTime <= DateTimeOffset.Now.AddHours(0.5));
            }

            private async Task<Match> GetNextMatchAsync()
            {
                return await _context.Matches.AsNoTracking()
                    .Include(m => m.Club)
                    .Include(m => m.Stadium)
                    .Include(m => m.Events)
                    .OrderBy(x => x.DateTime)
                    .FirstOrDefaultAsync(m => m.DateTime >= DateTimeOffset.Now.AddHours(0.5));
            }
        }


        [Serializable]
        public class Response
        {
            public CalendarMatchDto Last { get; set; }

            public CalendarMatchDto Next { get; set; }
        }

        [Serializable]
        public class CalendarMatchDto
        {
            public int Id { get; set; }

            public bool IsHome { get; set; }

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
}
