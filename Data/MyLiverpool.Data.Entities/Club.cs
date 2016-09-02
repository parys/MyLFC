using System.Collections.Generic;

namespace MyLiverpool.Data.Entities
{
    public class Club : IEntity
    {
        public Club()
        {
            Matches = new List<Match>();
        }

        public int Id { get; set; }

        public string Name { get; set; }

        public string EnglishName { get; set; }

        public string Stadium { get; set; }

        public string Logo { get; set; }

        public virtual ICollection<Match> Matches { get; set; }
    }
}