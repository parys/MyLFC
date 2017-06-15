using System;

namespace MyLiverpool.Business.Dto
{
    public class TransferDto: IDto
    {
        public int Id { get; set; }

        public bool Coming { get; set; }

        public DateTimeOffset StartDate { get; set; }

        public bool OnLoan { get; set; }

        public DateTimeOffset? FinishDate { get; set; }

        public int Amount { get; set; }

        public int? ClubId { get; set; }

        public string ClubName { get; set; }

        public int PersonId { get; set; }

        public string PersonName { get; set; }
    }
}
