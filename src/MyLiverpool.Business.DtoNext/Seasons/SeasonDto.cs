using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MyLiverpool.Business.Dto.Seasons
{
    public class SeasonDto : IDto
    {
        public int Id { get; set; }

        [Required]
        public int StartSeasonYear { get; set; }

        public int EndSeasonYear => StartSeasonYear + 1;

        public IEnumerable<MatchDto> Matches { get; set; } = new HashSet<MatchDto>();
    }
}
