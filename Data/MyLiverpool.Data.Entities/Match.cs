using System;
using System.Collections.Generic;
using MyLiverpool.Data.Common;

namespace MyLiverpool.Data.Entities
{
    public class Match : IEntity
    {
        public Match()
        {
            Events = new HashSet<MatchEvent>();
        }

        public int Id { get; set; }

        public bool IsHome { get; set; }

        public int ClubId { get; set; }

        public virtual Club Club { get; set; }

        public DateTimeOffset DateTime { get; set; }

        public MatchTypeEnum MatchType { get; set; }

        public virtual Season Season { get; set; }

        public int SeasonId { get; set; }

        public string Score { get; set; } //should be removed in future todo

        public string ReportUrl { get; set; }

        public string PhotoUrl { get; set; }

        public string VideoUrl { get; set; }

        public int StadiumId { get; set; }

        public virtual Stadium Stadium { get; set; }

        public virtual ICollection<MatchEvent> Events { get; set; }
    }
}