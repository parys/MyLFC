using System.Collections.Generic;
using MyLfc.Application.Matches;
using MyLfc.Application.Persons;

namespace MyLfc.Business.ViewModels
{
    public class MatchPersonPanelVm
    {
        public IEnumerable<GetMatchPersonListQuery.MatchPersonListDto> HomeTeam { get; set; }
        public IEnumerable<GetMatchPersonListQuery.MatchPersonListDto> HomeBench { get; set; }
        public GetMatchPersonListQuery.MatchPersonListDto HomeCoach { get; set; }
        public IEnumerable<GetMatchPersonListQuery.MatchPersonListDto> HomeInjury { get; set; }
        public IEnumerable<GetMatchPersonListQuery.MatchPersonListDto> HomeBan { get; set; }
        public IEnumerable<GetMatchPersonListQuery.MatchPersonListDto> AwayTeam { get; set; }
        public IEnumerable<GetMatchPersonListQuery.MatchPersonListDto> AwayBench { get; set; }
        public GetMatchPersonListQuery.MatchPersonListDto AwayCoach { get; set; }
        public IEnumerable<GetMatchPersonListQuery.MatchPersonListDto> AwayInjury { get; set; }
        public IEnumerable<GetMatchPersonListQuery.MatchPersonListDto> AwayBan { get; set; }
        public GetMatchPersonListQuery.MatchPersonListDto MainRef { get; set; }
        public IEnumerable<GetMatchPersonListQuery.MatchPersonListDto> AssistantRef  { get; set; }
        public IEnumerable<GetMatchPersonListQuery.MatchPersonListDto> AdditionalRef  { get; set; }
        public GetMatchPersonListQuery.MatchPersonListDto FourthRef { get; set; }
    }
}
