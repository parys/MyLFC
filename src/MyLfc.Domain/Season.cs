using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyLfc.Domain
{
    public class Season : IEntity
    {

        public const int LiverpoolStadiumId = 1;

        public int Id { get; set; }

        public int StartSeasonYear { get; set; }

        public ICollection<Match> Matches { get; set; } = new HashSet<Match>();

        public ICollection<MatchEvent> Events { get; set; } = new HashSet<MatchEvent>();

        [NotMapped]
        public int EndSeasonYear => StartSeasonYear + 1;
    }
}
