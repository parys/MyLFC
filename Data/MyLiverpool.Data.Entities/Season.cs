using System.Collections.Generic;

namespace MyLiverpool.Data.Entities
{
    public class Season : IEntity
    {
        public Season()
        {
            Matches = new HashSet<Match>();
        }
        public int Id { get; set; }

        public int StartSeasonYear { get; set; }

        public virtual ICollection<Match> Matches { get; set; }
    }
}
