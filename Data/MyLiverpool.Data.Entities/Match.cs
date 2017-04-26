using System;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Data.Entities
{
    public class Match : IEntity
    {
        public int Id { get; set; }

        public bool IsHome { get; set; }

        public int ClubId { get; set; }

        public virtual Club Club { get; set; }

        public DateTimeOffset DateTime { get; set; }

        public MatchTypeEnum MatchType { get; set; }

        public string Score { get; set; }

        public virtual Season Season { get; set; }

        public int SeasonId { get; set; }

        public string ReportUrl { get; set; }

        public string PhotoUrl { get; set; }

        public string VideoUrl { get; set; }
    }
}