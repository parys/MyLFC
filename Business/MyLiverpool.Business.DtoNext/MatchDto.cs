using System;

namespace MyLiverpool.Business.DtoNext
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

        public DateTime DateTime { get; set; }

        public int TypeId { get; set; }

        public string TypeName { get; set; }

        public string Stadium { get; set; }

        public string Score { get; set; }

        public int SeasonId { get; set; }
    }
}
