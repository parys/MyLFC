using System;

namespace MyLfc.Domain
{
    public class Loan
    {
        public int Id { get; set; }

        public int PersonId { get; set; }

        public Person Person { get; set; }

        public DateTime StartTime { get; set; }

        public DateTime EndTime { get; set; }

        public bool Came { get; set; }

        public int ClubId { get; set; }

        public Club Club { get; set; }

    //    public int SeasonId { get; set; }

    //    public Season Season { get; set; }
    }
}
