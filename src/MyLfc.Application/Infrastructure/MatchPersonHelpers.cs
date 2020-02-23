using System;
using MyLiverpool.Data.Common;

namespace MyLfc.Application.Infrastructure
{
    public static class MatchPersonHelpers
    {
        public static MatchPersonType GetMatchPlaceholderType(this MatchPersonType personType, bool isHome)
        {
            switch (personType)
            {
                case MatchPersonType.Team:
                    {
                        return isHome ? MatchPersonType.Team : MatchPersonType.Competitor;
                    }
                case MatchPersonType.TeamBench:
                    {
                        return isHome ? MatchPersonType.TeamBench : MatchPersonType.CompetitorBench;
                    }
                case MatchPersonType.Ban:
                    {
                        return isHome ? MatchPersonType.Ban : MatchPersonType.BanCompetitor;
                    }
                case MatchPersonType.Injury:
                    {
                        return isHome ? MatchPersonType.Injury : MatchPersonType.InjuryCompetitor;
                    }
                case MatchPersonType.Coach:
                    {
                        return isHome ? MatchPersonType.Coach : MatchPersonType.CompetitorCoach;
                    }
                case MatchPersonType.Competitor:
                    {
                        return !isHome ? MatchPersonType.Team : MatchPersonType.Competitor;
                    }
                case MatchPersonType.CompetitorBench:
                    {
                        return !isHome ? MatchPersonType.TeamBench : MatchPersonType.CompetitorBench;
                    }
                case MatchPersonType.BanCompetitor:
                    {
                        return !isHome ? MatchPersonType.Ban : MatchPersonType.BanCompetitor;
                    }
                case MatchPersonType.InjuryCompetitor:
                    {
                        return !isHome ? MatchPersonType.Injury : MatchPersonType.InjuryCompetitor;
                    }
                case MatchPersonType.CompetitorCoach:
                    {
                        return !isHome ? MatchPersonType.Coach : MatchPersonType.CompetitorCoach;
                    }
                case MatchPersonType.MainReferee:
                    {
                        return MatchPersonType.MainReferee;
                    }
                case MatchPersonType.AdditionalReferee:
                    {
                        return MatchPersonType.AdditionalReferee;
                    }
                case MatchPersonType.SubReferee:
                    {
                        return MatchPersonType.SubReferee;
                    }
                case MatchPersonType.FourthReferee:
                    {
                        return MatchPersonType.FourthReferee;
                    }
                default:
                    throw new ArgumentOutOfRangeException();
            }
        }
    }
}
