using System;
using MyLfc.Data.Common;

namespace MyLfc.Domain;

[Serializable]
public class MatchEvent : IEntity
{
    public int Id { get; set; }

    public int PersonId { get; set; }

    public Person Person { get; set; }

    public MatchEventType Type { get; set; }

    public int SeasonId { get; set; }//todo think does it need

    public Season Season { get; set; }

    public int MatchId { get; set; }

    public Match Match { get; set; }

    public byte? Minute { get; set; }

    public byte? AddMinutes { get; set; }

    public bool Home { get; set; }

    public bool IsOur { get; set; }
}
