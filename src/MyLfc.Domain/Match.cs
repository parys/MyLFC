using System;
using System.Collections.Generic;
using MyLfc.Data.Common;

namespace MyLfc.Domain;

public class Match : IEntity
{
    public int Id { get; set; }

    public bool IsHome { get; set; }

    public int ClubId { get; set; }

    public Club Club { get; set; }

    public DateTimeOffset DateTime { get; set; }

    public MatchTypeEnum MatchType { get; set; }

    public Season Season { get; set; }

    public int SeasonId { get; set; }

    public string Score { get; set; } //should be removed in future todo

    public string ReportUrl { get; set; }

    public string PhotoUrl { get; set; }

    public string VideoUrl { get; set; }

    public int? PreviewId { get; set; }

    public int? ReportId { get; set; }

    public int StadiumId { get; set; }

    public bool HideTeams { get; set; }

    public bool Postponed { get; set; }

    public Stadium Stadium { get; set; }

    public ICollection<MatchEvent> Events { get; set; } = new HashSet<MatchEvent>();

    public ICollection<MatchPerson> Persons { get; set; } = new HashSet<MatchPerson>();

    public ICollection<Comment> Comments { get; set; } = new HashSet<Comment>();
}