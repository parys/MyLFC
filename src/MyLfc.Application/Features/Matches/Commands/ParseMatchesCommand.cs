using MediatR;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Seasons.Queries;
using MyLfc.Common.Utilities;
using MyLfc.Data.Common;
using MyLfc.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading;
using System.Threading.Tasks;

namespace MyLfc.Application.Matches.Commands;

public class ParseMatchesCommand
{
    public class Request : IRequest<Unit>
    {

    }

    public class Handler : IRequestHandler<Request, Unit>
    {
        private const string Address = "https://www.sports.ru/liverpool/calendar/";
        private const string XpathTableRows = "/html/body/div/div/div/div/div/div/div/table/tbody//tr";

        private readonly ILiverpoolContext _context;
        private readonly IMediator _mediator;

        public Handler(ILiverpoolContext context, IMediator mediator)
        {
            _context = context;
            _mediator = mediator;
        }

        public async Task<Unit> Handle(Request request, CancellationToken cancellationToken)
        {
//            var matches = JsonSerializer.Deserialize<List<Match>>(@"
//[{""Id"":0,""IsHome"":false,""ClubId"":55,""Club"":null,""DateTime"":""2022-08-06T14:30:00+03:00"",""MatchType"":1,""Season"":null,""SeasonId"":6,""Score"":null,""ReportUrl"":null,""PhotoUrl"":null,""VideoUrl"":null,""PreviewId"":null,""ReportId"":null,""StadiumId"":58,""HideTeams"":false,""Stadium"":null,""Events"":[],""Persons"":[],""Comments"":[]},{""Id"":0,""IsHome"":true,""ClubId"":14,""Club"":null,""DateTime"":""2022-08-13T17:00:00+03:00"",""MatchType"":1,""Season"":null,""SeasonId"":6,""Score"":null,""ReportUrl"":null,""PhotoUrl"":null,""VideoUrl"":null,""PreviewId"":null,""ReportId"":null,""StadiumId"":1,""HideTeams"":false,""Stadium"":null,""Events"":[],""Persons"":[],""Comments"":[]},{""Id"":0,""IsHome"":false,""ClubId"":16,""Club"":null,""DateTime"":""2022-08-20T17:00:00+03:00"",""MatchType"":1,""Season"":null,""SeasonId"":6,""Score"":null,""ReportUrl"":null,""PhotoUrl"":null,""VideoUrl"":null,""PreviewId"":null,""ReportId"":null,""StadiumId"":3,""HideTeams"":false,""Stadium"":null,""Events"":[],""Persons"":[],""Comments"":[]},{""Id"":0,""IsHome"":true,""ClubId"":11,""Club"":null,""DateTime"":""2022-08-27T17:00:00+03:00"",""MatchType"":1,""Season"":null,""SeasonId"":6,""Score"":null,""ReportUrl"":null,""PhotoUrl"":null,""VideoUrl"":null,""PreviewId"":null,""ReportId"":null,""StadiumId"":1,""HideTeams"":false,""Stadium"":null,""Events"":[],""Persons"":[],""Comments"":[]},{""Id"":0,""IsHome"":true,""ClubId"":45,""Club"":null,""DateTime"":""2022-08-31T22:00:00+03:00"",""MatchType"":1,""Season"":null,""SeasonId"":6,""Score"":null,""ReportUrl"":null,""PhotoUrl"":null,""VideoUrl"":null,""PreviewId"":null,""ReportId"":null,""StadiumId"":1,""HideTeams"":false,""Stadium"":null,""Events"":[],""Persons"":[],""Comments"":[]},{""Id"":0,""IsHome"":false,""ClubId"":3,""Club"":null,""DateTime"":""2022-09-03T17:00:00+03:00"",""MatchType"":1,""Season"":null,""SeasonId"":6,""Score"":null,""ReportUrl"":null,""PhotoUrl"":null,""VideoUrl"":null,""PreviewId"":null,""ReportId"":null,""StadiumId"":8,""HideTeams"":false,""Stadium"":null,""Events"":[],""Persons"":[],""Comments"":[]},{""Id"":0,""IsHome"":true,""ClubId"":38,""Club"":null,""DateTime"":""2022-09-10T17:00:00+03:00"",""MatchType"":1,""Season"":null,""SeasonId"":6,""Score"":null,""ReportUrl"":null,""PhotoUrl"":null,""VideoUrl"":null,""PreviewId"":null,""ReportId"":null,""StadiumId"":1,""HideTeams"":false,""Stadium"":null,""Events"":[],""Persons"":[],""Comments"":[]},{""Id"":0,""IsHome"":false,""ClubId"":25,""Club"":null,""DateTime"":""2022-09-17T17:00:00+03:00"",""MatchType"":1,""Season"":null,""SeasonId"":6,""Score"":null,""ReportUrl"":null,""PhotoUrl"":null,""VideoUrl"":null,""PreviewId"":null,""ReportId"":null,""StadiumId"":7,""HideTeams"":false,""Stadium"":null,""Events"":[],""Persons"":[],""Comments"":[]},{""Id"":0,""IsHome"":true,""ClubId"":44,""Club"":null,""DateTime"":""2022-10-01T17:00:00+03:00"",""MatchType"":1,""Season"":null,""SeasonId"":6,""Score"":null,""ReportUrl"":null,""PhotoUrl"":null,""VideoUrl"":null,""PreviewId"":null,""ReportId"":null,""StadiumId"":1,""HideTeams"":false,""Stadium"":null,""Events"":[],""Persons"":[],""Comments"":[]},{""Id"":0,""IsHome"":false,""ClubId"":2,""Club"":null,""DateTime"":""2022-10-08T17:00:00+03:00"",""MatchType"":1,""Season"":null,""SeasonId"":6,""Score"":null,""ReportUrl"":null,""PhotoUrl"":null,""VideoUrl"":null,""PreviewId"":null,""ReportId"":null,""StadiumId"":4,""HideTeams"":false,""Stadium"":null,""Events"":[],""Persons"":[],""Comments"":[]},{""Id"":0,""IsHome"":true,""ClubId"":4,""Club"":null,""DateTime"":""2022-10-15T17:00:00+03:00"",""MatchType"":1,""Season"":null,""SeasonId"":6,""Score"":null,""ReportUrl"":null,""PhotoUrl"":null,""VideoUrl"":null,""PreviewId"":null,""ReportId"":null,""StadiumId"":1,""HideTeams"":false,""Stadium"":null,""Events"":[],""Persons"":[],""Comments"":[]},{""Id"":0,""IsHome"":true,""ClubId"":13,""Club"":null,""DateTime"":""2022-10-19T22:00:00+03:00"",""MatchType"":1,""Season"":null,""SeasonId"":6,""Score"":null,""ReportUrl"":null,""PhotoUrl"":null,""VideoUrl"":null,""PreviewId"":null,""ReportId"":null,""StadiumId"":1,""HideTeams"":false,""Stadium"":null,""Events"":[],""Persons"":[],""Comments"":[]},{""Id"":0,""IsHome"":false,""ClubId"":3146,""Club"":null,""DateTime"":""2022-10-22T17:00:00+03:00"",""MatchType"":1,""Season"":null,""SeasonId"":6,""Score"":null,""ReportUrl"":null,""PhotoUrl"":null,""VideoUrl"":null,""PreviewId"":null,""ReportId"":null,""StadiumId"":4160,""HideTeams"":false,""Stadium"":null,""Events"":[],""Persons"":[],""Comments"":[]},{""Id"":0,""IsHome"":true,""ClubId"":36,""Club"":null,""DateTime"":""2022-10-29T17:00:00+03:00"",""MatchType"":1,""Season"":null,""SeasonId"":6,""Score"":null,""ReportUrl"":null,""PhotoUrl"":null,""VideoUrl"":null,""PreviewId"":null,""ReportId"":null,""StadiumId"":1,""HideTeams"":false,""Stadium"":null,""Events"":[],""Persons"":[],""Comments"":[]},{""Id"":0,""IsHome"":false,""ClubId"":22,""Club"":null,""DateTime"":""2022-11-05T18:00:00+03:00"",""MatchType"":1,""Season"":null,""SeasonId"":6,""Score"":null,""ReportUrl"":null,""PhotoUrl"":null,""VideoUrl"":null,""PreviewId"":null,""ReportId"":null,""StadiumId"":9,""HideTeams"":false,""Stadium"":null,""Events"":[],""Persons"":[],""Comments"":[]},{""Id"":0,""IsHome"":true,""ClubId"":19,""Club"":null,""DateTime"":""2022-11-12T18:00:00+03:00"",""MatchType"":1,""Season"":null,""SeasonId"":6,""Score"":null,""ReportUrl"":null,""PhotoUrl"":null,""VideoUrl"":null,""PreviewId"":null,""ReportId"":null,""StadiumId"":1,""HideTeams"":false,""Stadium"":null,""Events"":[],""Persons"":[],""Comments"":[]},{""Id"":0,""IsHome"":false,""ClubId"":1090,""Club"":null,""DateTime"":""2022-12-26T18:00:00+03:00"",""MatchType"":1,""Season"":null,""SeasonId"":6,""Score"":null,""ReportUrl"":null,""PhotoUrl"":null,""VideoUrl"":null,""PreviewId"":null,""ReportId"":null,""StadiumId"":24,""HideTeams"":false,""Stadium"":null,""Events"":[],""Persons"":[],""Comments"":[]},{""Id"":0,""IsHome"":true,""ClubId"":15,""Club"":null,""DateTime"":""2022-12-31T18:00:00+03:00"",""MatchType"":1,""Season"":null,""SeasonId"":6,""Score"":null,""ReportUrl"":null,""PhotoUrl"":null,""VideoUrl"":null,""PreviewId"":null,""ReportId"":null,""StadiumId"":1,""HideTeams"":false,""Stadium"":null,""Events"":[],""Persons"":[],""Comments"":[]},{""Id"":0,""IsHome"":false,""ClubId"":2149,""Club"":null,""DateTime"":""2023-01-02T18:00:00+03:00"",""MatchType"":1,""Season"":null,""SeasonId"":6,""Score"":null,""ReportUrl"":null,""PhotoUrl"":null,""VideoUrl"":null,""PreviewId"":null,""ReportId"":null,""StadiumId"":2163,""HideTeams"":false,""Stadium"":null,""Events"":[],""Persons"":[],""Comments"":[]},{""Id"":0,""IsHome"":false,""ClubId"":44,""Club"":null,""DateTime"":""2023-01-14T18:00:00+03:00"",""MatchType"":1,""Season"":null,""SeasonId"":6,""Score"":null,""ReportUrl"":null,""PhotoUrl"":null,""VideoUrl"":null,""PreviewId"":null,""ReportId"":null,""StadiumId"":25,""HideTeams"":false,""Stadium"":null,""Events"":[],""Persons"":[],""Comments"":[]},{""Id"":0,""IsHome"":true,""ClubId"":25,""Club"":null,""DateTime"":""2023-01-21T18:00:00+03:00"",""MatchType"":1,""Season"":null,""SeasonId"":6,""Score"":null,""ReportUrl"":null,""PhotoUrl"":null,""VideoUrl"":null,""PreviewId"":null,""ReportId"":null,""StadiumId"":1,""HideTeams"":false,""Stadium"":null,""Events"":[],""Persons"":[],""Comments"":[]},{""Id"":0,""IsHome"":false,""ClubId"":38,""Club"":null,""DateTime"":""2023-02-04T18:00:00+03:00"",""MatchType"":1,""Season"":null,""SeasonId"":6,""Score"":null,""ReportUrl"":null,""PhotoUrl"":null,""VideoUrl"":null,""PreviewId"":null,""ReportId"":null,""StadiumId"":29,""HideTeams"":false,""Stadium"":null,""Events"":[],""Persons"":[],""Comments"":[]},{""Id"":0,""IsHome"":true,""ClubId"":3,""Club"":null,""DateTime"":""2023-02-11T18:00:00+03:00"",""MatchType"":1,""Season"":null,""SeasonId"":6,""Score"":null,""ReportUrl"":null,""PhotoUrl"":null,""VideoUrl"":null,""PreviewId"":null,""ReportId"":null,""StadiumId"":1,""HideTeams"":false,""Stadium"":null,""Events"":[],""Persons"":[],""Comments"":[]},{""Id"":0,""IsHome"":false,""ClubId"":45,""Club"":null,""DateTime"":""2023-02-18T18:00:00+03:00"",""MatchType"":1,""Season"":null,""SeasonId"":6,""Score"":null,""ReportUrl"":null,""PhotoUrl"":null,""VideoUrl"":null,""PreviewId"":null,""ReportId"":null,""StadiumId"":5,""HideTeams"":false,""Stadium"":null,""Events"":[],""Persons"":[],""Comments"":[]},{""Id"":0,""IsHome"":false,""ClubId"":14,""Club"":null,""DateTime"":""2023-02-25T18:00:00+03:00"",""MatchType"":1,""Season"":null,""SeasonId"":6,""Score"":null,""ReportUrl"":null,""PhotoUrl"":null,""VideoUrl"":null,""PreviewId"":null,""ReportId"":null,""StadiumId"":16,""HideTeams"":false,""Stadium"":null,""Events"":[],""Persons"":[],""Comments"":[]},{""Id"":0,""IsHome"":true,""ClubId"":16,""Club"":null,""DateTime"":""2023-03-04T18:00:00+03:00"",""MatchType"":1,""Season"":null,""SeasonId"":6,""Score"":null,""ReportUrl"":null,""PhotoUrl"":null,""VideoUrl"":null,""PreviewId"":null,""ReportId"":null,""StadiumId"":1,""HideTeams"":false,""Stadium"":null,""Events"":[],""Persons"":[],""Comments"":[]},{""Id"":0,""IsHome"":false,""ClubId"":11,""Club"":null,""DateTime"":""2023-03-11T18:00:00+03:00"",""MatchType"":1,""Season"":null,""SeasonId"":6,""Score"":null,""ReportUrl"":null,""PhotoUrl"":null,""VideoUrl"":null,""PreviewId"":null,""ReportId"":null,""StadiumId"":21,""HideTeams"":false,""Stadium"":null,""Events"":[],""Persons"":[],""Comments"":[]},{""Id"":0,""IsHome"":true,""ClubId"":55,""Club"":null,""DateTime"":""2023-03-18T18:00:00+03:00"",""MatchType"":1,""Season"":null,""SeasonId"":6,""Score"":null,""ReportUrl"":null,""PhotoUrl"":null,""VideoUrl"":null,""PreviewId"":null,""ReportId"":null,""StadiumId"":1,""HideTeams"":false,""Stadium"":null,""Events"":[],""Persons"":[],""Comments"":[]},{""Id"":0,""IsHome"":false,""ClubId"":4,""Club"":null,""DateTime"":""2023-04-01T17:00:00+03:00"",""MatchType"":1,""Season"":null,""SeasonId"":6,""Score"":null,""ReportUrl"":null,""PhotoUrl"":null,""VideoUrl"":null,""PreviewId"":null,""ReportId"":null,""StadiumId"":2,""HideTeams"":false,""Stadium"":null,""Events"":[],""Persons"":[],""Comments"":[]},{""Id"":0,""IsHome"":true,""ClubId"":2,""Club"":null,""DateTime"":""2023-04-08T17:00:00+03:00"",""MatchType"":1,""Season"":null,""SeasonId"":6,""Score"":null,""ReportUrl"":null,""PhotoUrl"":null,""VideoUrl"":null,""PreviewId"":null,""ReportId"":null,""StadiumId"":1,""HideTeams"":false,""Stadium"":null,""Events"":[],""Persons"":[],""Comments"":[]},{""Id"":0,""IsHome"":false,""ClubId"":36,""Club"":null,""DateTime"":""2023-04-15T17:00:00+03:00"",""MatchType"":1,""Season"":null,""SeasonId"":6,""Score"":null,""ReportUrl"":null,""PhotoUrl"":null,""VideoUrl"":null,""PreviewId"":null,""ReportId"":null,""StadiumId"":31,""HideTeams"":false,""Stadium"":null,""Events"":[],""Persons"":[],""Comments"":[]},{""Id"":0,""IsHome"":true,""ClubId"":3146,""Club"":null,""DateTime"":""2023-04-22T17:00:00+03:00"",""MatchType"":1,""Season"":null,""SeasonId"":6,""Score"":null,""ReportUrl"":null,""PhotoUrl"":null,""VideoUrl"":null,""PreviewId"":null,""ReportId"":null,""StadiumId"":1,""HideTeams"":false,""Stadium"":null,""Events"":[],""Persons"":[],""Comments"":[]},{""Id"":0,""IsHome"":false,""ClubId"":13,""Club"":null,""DateTime"":""2023-04-25T21:45:00+03:00"",""MatchType"":1,""Season"":null,""SeasonId"":6,""Score"":null,""ReportUrl"":null,""PhotoUrl"":null,""VideoUrl"":null,""PreviewId"":null,""ReportId"":null,""StadiumId"":10,""HideTeams"":false,""Stadium"":null,""Events"":[],""Persons"":[],""Comments"":[]},{""Id"":0,""IsHome"":true,""ClubId"":22,""Club"":null,""DateTime"":""2023-04-29T17:00:00+03:00"",""MatchType"":1,""Season"":null,""SeasonId"":6,""Score"":null,""ReportUrl"":null,""PhotoUrl"":null,""VideoUrl"":null,""PreviewId"":null,""ReportId"":null,""StadiumId"":1,""HideTeams"":false,""Stadium"":null,""Events"":[],""Persons"":[],""Comments"":[]},{""Id"":0,""IsHome"":true,""ClubId"":2149,""Club"":null,""DateTime"":""2023-05-06T17:00:00+03:00"",""MatchType"":1,""Season"":null,""SeasonId"":6,""Score"":null,""ReportUrl"":null,""PhotoUrl"":null,""VideoUrl"":null,""PreviewId"":null,""ReportId"":null,""StadiumId"":1,""HideTeams"":false,""Stadium"":null,""Events"":[],""Persons"":[],""Comments"":[]},{""Id"":0,""IsHome"":false,""ClubId"":15,""Club"":null,""DateTime"":""2023-05-13T17:00:00+03:00"",""MatchType"":1,""Season"":null,""SeasonId"":6,""Score"":null,""ReportUrl"":null,""PhotoUrl"":null,""VideoUrl"":null,""PreviewId"":null,""ReportId"":null,""StadiumId"":13,""HideTeams"":false,""Stadium"":null,""Events"":[],""Persons"":[],""Comments"":[]},{""Id"":0,""IsHome"":true,""ClubId"":1090,""Club"":null,""DateTime"":""2023-05-20T17:00:00+03:00"",""MatchType"":1,""Season"":null,""SeasonId"":6,""Score"":null,""ReportUrl"":null,""PhotoUrl"":null,""VideoUrl"":null,""PreviewId"":null,""ReportId"":null,""StadiumId"":1,""HideTeams"":false,""Stadium"":null,""Events"":[],""Persons"":[],""Comments"":[]},{""Id"":0,""IsHome"":false,""ClubId"":19,""Club"":null,""DateTime"":""2023-05-28T18:00:00+03:00"",""MatchType"":1,""Season"":null,""SeasonId"":6,""Score"":null,""ReportUrl"":null,""PhotoUrl"":null,""VideoUrl"":null,""PreviewId"":null,""ReportId"":null,""StadiumId"":12,""HideTeams"":false,""Stadium"":null,""Events"":[],""Persons"":[],""Comments"":[]}]
//                ");
            
            var matches = await ParseMatchesAsync(cancellationToken);            

            await AddOrUpdateAsync(matches, cancellationToken);

            return Unit.Value;
        }

        private async Task AddOrUpdateAsync(List<Match> matches, CancellationToken cancellationToken)
        {
            var futureMatches = matches.Where(x => x.DateTime >= DateTime.UtcNow).ToList();

            foreach (var match in futureMatches)
            {
                var existingMatch = await _context.Matches
                    .FirstOrDefaultAsync(x => x.MatchType == match.MatchType
                    && x.ClubId == match.ClubId
                    && x.IsHome == match.IsHome
                    && x.SeasonId == match.SeasonId
                    , cancellationToken);

                if (existingMatch is null)
                {
                    _context.Matches.Add(match);
                }
                else
                {
                    existingMatch.DateTime = match.DateTime;
                }

                await _context.SaveChangesAsync(cancellationToken);
            }
        }

        private async Task<List<Match>> ParseMatchesAsync(CancellationToken cancellationToken)
        {
            var trNodes = await HtmlExtractorHelpers.GetHtmlRowsAsync(Address, XpathTableRows);
            var matches = new List<Match>(trNodes.Count);

            foreach (var trNode in trNodes)
            {
                var clubName = trNode.ChildNodes[5].InnerText.Trim();
                var club = await _context.Clubs.AsNoTracking()
                    .FirstOrDefaultAsync(x => x.Name.Contains(clubName));
                var isHome = trNode.ChildNodes[6].InnerText.Trim() == "Дома";

                if (club is null) continue; // TODO return back list of missed clubs

                var match = new Match
                {
                    ClubId = club.Id,
                    MatchType = GetMatchType(trNode.ChildNodes[3].InnerText.Trim()),
                    StadiumId = isHome ? Season.LiverpoolStadiumId : club.StadiumId,
                    IsHome = isHome,
                    SeasonId = (await _mediator.Send(new GetCurrentSeasonQuery.Request())).Id,
                    DateTime = GetDateTime(trNode.ChildNodes[1].InnerText.Trim())
                };

                matches.Add(match);
            }

            return matches;
        }

        /// <summary>
        /// Method relies on MSK time, that's why we add +3 timezone.
        /// </summary>
        /// <param name="dateTime"></param>
        /// <returns></returns>
        private static DateTimeOffset GetDateTime(string dateTime)
        {
            return DateTimeOffset.ParseExact($"{dateTime} +03:00", "dd.MM.yyyy|HH:mm zzz", null);
        }

        private static MatchTypeEnum GetMatchType(string innerText)
        {
            return innerText switch
            {
                "Англия. Премьер-лига" => MatchTypeEnum.Epl,
                "Лига чемпионов" => MatchTypeEnum.ChampionsLeague,
                "Англия. Кубок лиги" => MatchTypeEnum.CurlingCup,
                "Англия. Кубок" => MatchTypeEnum.EnglandCup,
                "Англия. Суперкубок" => MatchTypeEnum.CommunityShield,
                "Клубный ЧМ" => MatchTypeEnum.WorldClubCup,
                "Суперкубок Европы" => MatchTypeEnum.EuropeSuperCup,
                "Лига Европы" => MatchTypeEnum.EuropeLeague,
                "Товарищеские матчи (клубы)" => MatchTypeEnum.PreSeason,
                "International Champions Cup" => MatchTypeEnum.PreSeason,
                _ => MatchTypeEnum.PreSeason,
            };
        }
    }
}
