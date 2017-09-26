using System;
using System.Collections.Generic;

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

        public string StadiumName { get; set; }

        public string StadiumCity { get; set; }

        public int StadiumId { get; set; }

        public string ScoreHome { get; set; }

        public int? ScorePenaltyHome { get; set; }

        public string ScoreAway { get; set; }

        public int? ScorePenaltyAway { get; set; }

        public int SeasonId { get; set; }

        public string SeasonName { get; set; }

        public string ReportUrl { get; set; }

        public string PhotoUrl { get; set; }

        public string VideoUrl { get; set; }

        public virtual IEnumerable<MatchEventDto> Events { get; set; } = new HashSet<MatchEventDto>();

        public int CommentCount { get; set; }
}
}
