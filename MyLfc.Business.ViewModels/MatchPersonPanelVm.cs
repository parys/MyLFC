using System;
using System.Collections.Generic;
using System.Text;
using MyLiverpool.Business.Dto;

namespace MyLfc.Business.ViewModels
{
    public class MatchPersonPanelVm
    {
        public IEnumerable<MatchPersonDto> HomeTeam { get; set; }
        public IEnumerable<MatchPersonDto> HomeBench { get; set; }
        public MatchPersonDto HomeCoach { get; set; }
        public IEnumerable<MatchPersonDto> HomeInjury { get; set; }
        public IEnumerable<MatchPersonDto> HomeBan { get; set; }
        public IEnumerable<MatchPersonDto> AwayTeam { get; set; }
        public IEnumerable<MatchPersonDto> AwayBench { get; set; }
        public MatchPersonDto AwayCoach { get; set; }
        public IEnumerable<MatchPersonDto> AwayInjury { get; set; }
        public IEnumerable<MatchPersonDto> AwayBan { get; set; }
        public MatchPersonDto MainRef { get; set; }
        public IEnumerable<MatchPersonDto> AssistantRef  { get; set; }
        public IEnumerable<MatchPersonDto> AdditionalRef  { get; set; }
        public MatchPersonDto FourthRef { get; set; }
    }
}
