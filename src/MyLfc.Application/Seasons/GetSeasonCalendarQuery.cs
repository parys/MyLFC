using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;
using MyLiverpool.Common.Utilities;
using MyLiverpool.Data.Common;

namespace MyLfc.Application.Seasons
{
    public class GetSeasonCalendarQuery
    {
        public class Request : IRequest<Response>
        {
            public int SeasonId { get; set; }
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
                if (request.SeasonId == 0)
                {
                    request.SeasonId = await GetCurrentSeasonIdAsync();
                }
                var season = await _context.Seasons.AsNoTracking()
                    .FirstOrDefaultAsync(x => x.Id == request.SeasonId, cancellationToken);

                if (season == null)
                {
                    throw new NotFoundException(nameof(Season), request.SeasonId);
                }
                var seasonDto = _mapper.Map<Response>(season);
                seasonDto.Months = GetMonthsWithMatches(await GetMatchesAsync(season.Id));
                return seasonDto;
            }


            private async Task<IEnumerable<MatchCalendarDto>> GetMatchesAsync(int seasonId)
            {
                var liverpoolClub = await _context.Clubs.AsNoTracking()
                    .FirstAsync(x => x.EnglishName.Contains(GlobalConstants.LiverpoolClubEnglishName));
                var matches = _context.Matches.AsNoTracking()
                    .Where(x => x.SeasonId == seasonId)
                    .Include(m => m.Club)
                    .Include(m => m.Stadium)
                    .Include(m => m.Events)
                    .OrderBy(m => m.DateTime);
                var dtos = new List<MatchCalendarDto>();
                foreach (var match in matches)
                {
                    var dto = _mapper.Map<MatchCalendarDto>(match);
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
                return dtos;
            }

            private static void FillClubsFields(MatchCalendarDto dto, Club homeClub, Club awayClub)
            {
                dto.HomeClubId = homeClub.Id;
                dto.HomeClubName = homeClub.Name;
                dto.HomeClubLogo = homeClub.Logo;
                dto.AwayClubId = awayClub.Id;
                dto.AwayClubName = awayClub.Name;
                dto.AwayClubLogo = awayClub.Logo;
            }

            //todo duplicates
            private async Task<int> GetCurrentSeasonIdAsync()
            {
                return int.Parse((await _context.HelpEntities.AsNoTracking()
                                     .FirstOrDefaultAsync(x => x.Type == HelperEntityType.CurrentSeason)).Value ??
                                 DateTime.Today.Year.ToString());
            }


            private List<SeasonCalendarMonthDto> GetMonthsWithMatches(IEnumerable<MatchCalendarDto> matches)
            {
                return new List<SeasonCalendarMonthDto>
                {
                    GetMonth("Июль", 7, matches),
                    GetMonth("Август", 8, matches),
                    GetMonth("Сентябрь", 9, matches),
                    GetMonth("Октябрь", 10, matches),
                    GetMonth("Ноябрь", 11, matches),
                    GetMonth("Декабрь", 12, matches),
                    GetMonth("Январь", 1, matches),
                    GetMonth("Февраль", 2, matches),
                    GetMonth("Март", 3, matches),
                    GetMonth("Апрель", 4, matches),
                    GetMonth("Май", 5, matches),
                    GetMonth("Июнь", 6, matches)
                };
            }

            private SeasonCalendarMonthDto GetMonth(string name, int monthCount, IEnumerable<MatchCalendarDto> matches)
            {
                var matchesForMonth = matches.Where(x => x.DateTime.Month == monthCount);
                return new SeasonCalendarMonthDto
                {
                    Name = name,
                    Matches = matchesForMonth,
                    Collapsed = matchesForMonth.All(x => x.DateTime < DateTimeOffset.Now)
                };
            }
        }


        [Serializable]
        public class Response
        {
            public int Id { get; set; }

            public int StartSeasonYear { get; set; }

            public int EndSeasonYear => StartSeasonYear + 1;

            public List<SeasonCalendarMonthDto> Months = new();
        }

        [Serializable]
        public class SeasonCalendarMonthDto
        {
            public string Name { get; set; }

            public bool Collapsed { get; set; }

            public IEnumerable<MatchCalendarDto> Matches { get; set; } = new HashSet<MatchCalendarDto>();
        }

        [Serializable]
        public class MatchCalendarDto
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
}
