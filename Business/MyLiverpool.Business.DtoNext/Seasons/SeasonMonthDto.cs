using System.Collections.Generic;

namespace MyLiverpool.Business.Dto.Seasons
{
    public class SeasonMonthDto : IDto
    {
        public string Name { get; set; }

        public bool Collapsed { get; set; }

        public IEnumerable<MatchDto> Matches { get; set; } = new HashSet<MatchDto>();
    }
}
