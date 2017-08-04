using System;

namespace MyLiverpool.Business.Dto
{
    public class InjuryDto : IDto
    {
        public int Id { get; set; }

        public int PersonId { get; set; }

        public string PersonName { get; set; }

        public string PersonPhoto { get; set; }

        public DateTime StartTime { get; set; }

        public DateTime EndTime { get; set; }

        public string Description { get; set; }
    }
}
