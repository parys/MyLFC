using System;
using MyLiverpool.Data.Common;

namespace MyLfc.Domain
{
    public class MatchPerson
    {
        public int MatchId { get; set; }

        public Match Match { get; set; }

        public int PersonId { get; set; }

        public Person Person { get; set; }

        public byte? Number { get; set; }

        public MatchPersonType PersonType { get; set; }

        public DateTimeOffset Created { get; set; }
    }
}
