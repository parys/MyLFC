using MyLiverpool.Data.Common;

namespace MyLiverpool.Data.Entities
{
    public class MatchEvent
    {
        public int Id { get; set; }

        public int? PersonId { get; set; }

        public virtual Person Person { get; set; }

        public string PersonName { get; set; }

        public MatchEventType Type { get; set; }

        public int SeasonId { get; set; }

        public virtual Season Season { get; set; }

        public int MatchId { get; set; }

        public virtual Match Match { get; set; }

        public string Minute { get; set; }

        public bool Home { get; set; }
    }
}
