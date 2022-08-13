using System;
using MyLfc.Data.Common;

namespace MyLfc.Application.Infrastructure;

public static class MatchPersonHelpers
{
    public static MatchPersonType GetMatchPlaceholderType(this MatchPersonType personType, bool isHome)
    {
        return personType switch
        {
            MatchPersonType.Team => isHome ? MatchPersonType.Team : MatchPersonType.Competitor,
            MatchPersonType.TeamBench => isHome ? MatchPersonType.TeamBench : MatchPersonType.CompetitorBench,
            MatchPersonType.Ban => isHome ? MatchPersonType.Ban : MatchPersonType.BanCompetitor,
            MatchPersonType.Injury => isHome ? MatchPersonType.Injury : MatchPersonType.InjuryCompetitor,
            MatchPersonType.Coach => isHome ? MatchPersonType.Coach : MatchPersonType.CompetitorCoach,
            MatchPersonType.Competitor => isHome ? MatchPersonType.Competitor : MatchPersonType.Team,
            MatchPersonType.CompetitorBench => isHome ? MatchPersonType.CompetitorBench : MatchPersonType.TeamBench,
            MatchPersonType.BanCompetitor => isHome ? MatchPersonType.BanCompetitor : MatchPersonType.Ban,
            MatchPersonType.InjuryCompetitor => isHome ? MatchPersonType.InjuryCompetitor : MatchPersonType.Injury,
            MatchPersonType.CompetitorCoach => isHome ? MatchPersonType.CompetitorCoach : MatchPersonType.Coach,
            _ => personType
        };
    }
}
