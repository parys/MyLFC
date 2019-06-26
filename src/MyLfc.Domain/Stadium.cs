using System.Collections.Generic;
using MyLfc.Domain;

namespace MyLiverpool.Data.Entities
{
    public class Stadium : IEntity
    {
        public Stadium()
        {
            Matches = new HashSet<Match>();
            Clubs = new List<Club>();
        }

        public int Id { get; set; }

        public string Name { get; set; }

        public string City { get; set; }

        public virtual ICollection<Club> Clubs { get; set; }

        public virtual ICollection<Match> Matches { get; set; }
    }
}
