using System;

namespace MyLiverpool.Business.Dto
{
    public class MatchDto : IDto
    {
        public int Id { get; set; }

        public bool IsHome { get; set; }

        public int ClubId { get; set; }

        public string ClubName { get; set; }

        public int HomeClubId { get; set; }

        public string HomeClubName { get; set; }

        public string HomeClubLogo { get; set; }

        public int AwayClubId { get; set; }

        public string AwayClubName { get; set; }

        public string AwayClubLogo { get; set; }

        public DateTimeOffset DateTime { get; set; }

        public int TypeId { get; set; }

        public string TypeName { get; set; }

        public string Stadium { get; set; }

        public int StadiumId { get; set; }

        public string ScoreHome { get; set; }

        public string ScoreAway { get; set; }

        public int SeasonId { get; set; }

        public string ReportUrl { get; set; }

        public string PhotoUrl { get; set; }

        public string VideoUrl { get; set; }
    }
}
