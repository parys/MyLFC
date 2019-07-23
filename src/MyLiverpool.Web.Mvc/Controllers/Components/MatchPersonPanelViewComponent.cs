using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using MyLfc.Application.Matches;
using MyLfc.Business.ViewModels;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Web.Mvc.Controllers.Components
{
    public class MatchPersonPanelViewComponent : ViewComponent
    {
        private readonly IMediator _mediator;

        public MatchPersonPanelViewComponent(IMediator mediator)
        {
            _mediator = mediator;
        }

        public async Task<IViewComponentResult> InvokeAsync(int matchId, bool isHome)
        {
            var list = await _mediator.Send(new GetMatchPersonListQuery.Request {MatchId = matchId});
            var result = Parse(list.Results, isHome);
            return View(result);
        }

        private static MatchPersonPanelVm Parse(IEnumerable<GetMatchPersonListQuery.MatchPersonListDto> persons, bool isHome)
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
