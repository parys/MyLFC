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
            MatchPersonType.Competitor => !isHome ? MatchPersonType.Team : MatchPersonType.Competitor,
            MatchPersonType.CompetitorBench =>
                !isHome ? MatchPersonType.TeamBench : MatchPersonType.CompetitorBench,
            MatchPersonType.BanCompetitor => !isHome ? MatchPersonType.Ban : MatchPersonType.BanCompetitor,
            MatchPersonType.InjuryCompetitor => !isHome ? MatchPersonType.Injury : MatchPersonType.InjuryCompetitor,
            MatchPersonType.CompetitorCoach => !isHome ? MatchPersonType.Coach : MatchPersonType.CompetitorCoach,
            MatchPersonType.MainReferee => MatchPersonType.MainReferee,
            MatchPersonType.AdditionalReferee => MatchPersonType.AdditionalReferee,
            MatchPersonType.SubReferee => MatchPersonType.SubReferee,
            MatchPersonType.FourthReferee => MatchPersonType.FourthReferee,
            _ => throw new ArgumentOutOfRangeException()
        };
    }
}
