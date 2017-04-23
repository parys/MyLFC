using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MyLiverpool.Business.Dto
{
    public class SeasonDto : IDto
    {
        public SeasonDto()
        {
            Matches = new HashSet<MatchDto>();
        }
        public int Id { get; set; }

        [Required]
        public int StartSeasonYear { get; set; }

        public int EndSeasonYear => StartSeasonYear + 1;

        public IEnumerable<MatchDto> Matches { get; set; }
    }
}
