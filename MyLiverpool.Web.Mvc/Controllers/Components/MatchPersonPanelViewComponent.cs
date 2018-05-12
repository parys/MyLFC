using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using MyLfc.Business.ViewModels;
using MyLiverpool.Business.Contracts;
using MyLiverpool.Business.Dto;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Web.Mvc.Controllers.Components
{
    public class MatchPersonPanelViewComponent : ViewComponent
    {
        private readonly IMatchPersonService _matchPersonService;
        private readonly IMemoryCache _cache;

        public MatchPersonPanelViewComponent(IMatchPersonService matchPersonService, IMemoryCache cache)
        {
            _matchPersonService = matchPersonService;
            _cache = cache;
        }

        public async Task<IViewComponentResult> InvokeAsync(int matchId, bool isHome)
        {
            var list = await _matchPersonService.GetListByMatchIdAsync(matchId);
            var result = Parse(list, isHome);
            return View(result);
        }

        private static MatchPersonPanelVm Parse(IEnumerable<MatchPersonDto> persons, bool isHome)
        {
            return new MatchPersonPanelVm
            {
                HomeCoach = persons.FirstOrDefault(x =>
                    x.PersonType == (isHome ? MatchPersonType.Coach : MatchPersonType.CompetitorCoach)),
                AwayCoach = persons.FirstOrDefault(x =>
                    x.PersonType == (isHome ? MatchPersonType.CompetitorCoach : MatchPersonType.Coach)),
                HomeTeam = persons.Where(x =>
                    x.PersonType == (isHome ? MatchPersonType.Team : MatchPersonType.Competitor)),
                AwayTeam = persons.Where(x =>
                    x.PersonType == (isHome ? MatchPersonType.Competitor : MatchPersonType.Team)),
                HomeBench = persons.Where(x =>
                    x.PersonType == (isHome ? MatchPersonType.TeamBench : MatchPersonType.CompetitorBench)),
                AwayBench = persons.Where(x =>
                    x.PersonType == (isHome ? MatchPersonType.CompetitorBench : MatchPersonType.TeamBench)),
                HomeBan = persons.Where(x =>
                    x.PersonType == (isHome ? MatchPersonType.Ban : MatchPersonType.BanCompetitor)),
                AwayBan = persons.Where(x =>
                    x.PersonType == (isHome ? MatchPersonType.BanCompetitor : MatchPersonType.Ban)),
                HomeInjury = persons.Where(x =>
                    x.PersonType == (isHome ? MatchPersonType.Injury : MatchPersonType.InjuryCompetitor)),
                AwayInjury = persons.Where(x =>
                    x.PersonType == (isHome ? MatchPersonType.InjuryCompetitor : MatchPersonType.Injury)),
                MainRef = persons.FirstOrDefault(x => x.PersonType == MatchPersonType.MainReferee),
                AssistantRef = persons.Where(x => x.PersonType == MatchPersonType.SubReferee),
                AdditionalRef = persons.Where(x => x.PersonType == MatchPersonType.AdditionalReferee),
                FourthRef = persons.FirstOrDefault(x => x.PersonType == MatchPersonType.FourthReferee)

            };
        }
    }
}
