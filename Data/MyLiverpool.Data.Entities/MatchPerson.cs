namespace MyLiverpool.Data.Entities
{
    public class MatchPerson
    {
        public int MatchId { get; set; }

        public Match Match { get; set; }

        public int PersonId { get; set; }

        public Person Person { get; set; }
    }
}
