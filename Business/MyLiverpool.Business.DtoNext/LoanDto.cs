using System;

namespace MyLiverpool.Business.Dto
{
    public class LoanDto : IDto
    {
        public int Id { get; set; }

        public int PersonId { get; set; }

        public string PersonName { get; set; }

        public DateTime StartTime { get; set; }

        public DateTime EndTime { get; set; }

        public bool Came { get; set; }

        public int ClubId { get; set; }

        public string ClubName { get; set; }
    }
}
