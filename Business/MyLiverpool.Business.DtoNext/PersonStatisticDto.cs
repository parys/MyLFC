
namespace MyLiverpool.Business.Dto
{
    public class PersonStatisticDto : IDto
    {
        public int PersonId { get; set; }

        public string PersonName { get; set; }

        public StatisticsDto Goals { get; set; }

        public StatisticsDto Assists { get; set; }

        public StatisticsDto Yellows { get; set; }

        public StatisticsDto Reds { get; set; }
    }

    public class StatisticsDto : IDto
    {
        public int Epl { get; set; }

        public int Ec { get; set; }

        public int Lc { get; set; }

        public int El { get; set; }

        public int Cl { get; set; }

        public int Total { get; set; }
    }
}
