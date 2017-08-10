using System.Collections.Generic;

namespace MyLiverpool.Data.Entities
{
    public class Season : IEntity
    {
        public Season()
        {
            Matches = new HashSet<Match>();
            Events = new HashSet<MatchEvent>();
        }
        public int Id { get; set; }

        public int StartSeasonYear { get; set; }

        public virtual ICollection<Match> Matches { get; set; }

        public virtual ICollection<MatchEvent> Events { get; set; }
    }
}
