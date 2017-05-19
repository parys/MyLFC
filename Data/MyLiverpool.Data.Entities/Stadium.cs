using System.Collections.Generic;

namespace MyLiverpool.Data.Entities
{
    public class Stadium
    {
        public Stadium()
        {
            this.Matches = new HashSet<Match>();    
        }

        public int Id { get; set; }

        public string Name { get; set; }

        public string City { get; set; }

        public virtual ICollection<Club> Clubs { get; set; }

        public virtual ICollection<Match> Matches { get; set; }
    }
}
