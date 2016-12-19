using System;

namespace MyLiverpool.Business.DtoNext
{
    public class MatchDto : IDto
    {
        public int Id { get; set; }

        public bool IsHome { get; set; }

        public int ClubId { get; set; }

        public string ClubName { get; set; }

        public DateTime DateTime { get; set; }

        public int TypeId { get; set; }

        public string TypeName { get; set; }
    }
}
