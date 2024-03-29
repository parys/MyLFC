﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using AutoMapper;
using MyLfc.Domain;
using MyLfc.Common.Utilities.Extensions;
using MyLfc.Data.Common;
using MyLfc.Application.Seasons.Queries;
using MyLfc.Application.Seasons.Commands;

namespace MyLfc.Application.Seasons;

public class SeasonProfile : Profile
{
    public SeasonProfile()
    {
        CreateMap<CreateSeasonCommand.Request, Season>();

        CreateMap<UpdateSeasonCommand.Request, Season>();

        CreateMap<Season, GetSeasonListQuery.SeasonListDto>();

        CreateMap<Season, GetSeasonDetailQuery.Response>();

        CreateMap<Season, GetCurrentSeasonQuery.Response>();

        CreateMap<Season, GetSeasonCalendarQuery.Response>();

        CreateMap<Match, GetSeasonCalendarQuery.MatchCalendarDto>()
            .ForMember(x => x.ClubName, src => src.MapFrom(x => x.Club.Name))
            .ForMember(x => x.TypeName,
                src => src.MapFrom(x => x.MatchType.GetNameAttribute()))
            .ForMember(x => x.ScoreAway,
                src => src.MapFrom(x => GetScore(x.DateTime, x.Events, !x.IsHome, x.Score)))
            .ForMember(x => x.ScoreHome,
                src => src.MapFrom(x => GetScore(x.DateTime, x.Events, x.IsHome, x.Score)))
            .ForMember(x => x.ScorePenaltyAway,
                src => src.MapFrom(x => GetPenaltyScore(x.DateTime, x.Events, !x.IsHome)))
            .ForMember(x => x.ScorePenaltyHome,
                src => src.MapFrom(x => GetPenaltyScore(x.DateTime, x.Events, x.IsHome)));


    }


    private static string GetScore(DateTimeOffset dateTime, IEnumerable<MatchEvent> events, bool isHome, string score)
    {
        if (DateTimeOffset.UtcNow >= dateTime)
        {
            return events.Any()
                ? CalculateScore(events, isHome)
                : score == null
                    ? "0"
                    : isHome
                        ? score.Split('-', StringSplitOptions.RemoveEmptyEntries).FirstOrDefault()
                        : score.Split('-', StringSplitOptions.RemoveEmptyEntries).LastOrDefault();
        }
        return null;
    }

    private static int? GetPenaltyScore(DateTimeOffset dateTime, IEnumerable<MatchEvent> events, bool isHome)
    {
        if (DateTimeOffset.UtcNow >= dateTime)
        {
            var filteredEvents = events.Where(x => x.Type == MatchEventType.GoalPenaltySeries);
            if (filteredEvents.Any())
            {
                return isHome ? filteredEvents.Count(x => x.IsOur) : filteredEvents.Count(x => !x.IsOur);
            }
        }
        return null;
    }

    private static string CalculateScore(IEnumerable<MatchEvent> matchEvents, bool forLiverpool = true)
    {
        Expression<Func<MatchEvent, bool>> filter = x => forLiverpool ? x.IsOur : !x.IsOur;
        filter = filter.And(x =>
            x.Type == MatchEventType.Goal ||
            x.Type == MatchEventType.GoalPenalty ||
            x.Type == MatchEventType.GoalOwn);

        return matchEvents.Count(filter.Compile()).ToString();
    }
}
