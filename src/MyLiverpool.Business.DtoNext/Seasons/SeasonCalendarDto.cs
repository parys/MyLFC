using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MyLiverpool.Business.Dto.Seasons
{
    public class SeasonCalendarDto : IDto
    {
        public int Id { get; set; }

        [Required]
        public int StartSeasonYear { get; set; }

        public int EndSeasonYear => StartSeasonYear + 1;

        public List<SeasonMonthDto> Months = new List<SeasonMonthDto>();
    }
}
