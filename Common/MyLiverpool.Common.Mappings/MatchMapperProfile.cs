using System;
using System.Linq;
using AutoMapper;
using MyLiverpool.Business.Dto;
using MyLiverpool.Common.Utilities.Extensions;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Common.Mappings
{
    public class MatchMapperProfile : Profile
    {
        public MatchMapperProfile()
        {
            RegisterMatchMapper();
        }

        private void RegisterMatchMapper()
        {
            CreateMap<Match, MatchDto>()
                .ForMember(x => x.ClubId, src => src.MapFrom(x => x.ClubId))
                .ForMember(x => x.ClubName, src => src.MapFrom(x => x.Club.Name))
                .ForMember(x => x.DateTime, src => src.MapFrom(x => x.DateTime))
                .ForMember(x => x.Id, src => src.MapFrom(x => x.Id))
                .ForMember(x => x.IsHome, src => src.MapFrom(x => x.IsHome))
                .ForMember(x => x.TypeId, src => src.MapFrom(x => x.MatchType))
                .ForMember(x => x.TypeName, src => src.MapFrom(x => x.MatchType.GetNameAttribute()))
              //  .ForMember(x => x.ScoreAway, src => src.MapFrom(x => GetScores(x, false)))
             //   .ForMember(x => x.ScoreHome, src => src.MapFrom(x => GetScores(x, true)))
                .ForMember(x => x.PhotoUrl, src => src.MapFrom(x => x.PhotoUrl))
                .ForMember(x => x.StadiumName, src => src.MapFrom(x => x.Stadium.Name))
                .ForMember(x => x.ReportUrl, src => src.MapFrom(x => x.ReportUrl))
                .ForMember(x => x.VideoUrl, src => src.MapFrom(x => x.VideoUrl));

            CreateMap<MatchDto, Match>()
                .ForMember(x => x.ClubId, src => src.MapFrom(x => x.ClubId))
                .ForMember(x => x.DateTime, src => src.MapFrom(x => x.DateTime))
                .ForMember(x => x.Id, src => src.MapFrom(x => x.Id))
                .ForMember(x => x.IsHome, src => src.MapFrom(x => x.IsHome))
                .ForMember(x => x.MatchType, src => src.MapFrom(x => x.TypeId))
               // .ForMember(x => x.Score, src => src.MapFrom(x => GetScores(x.ScoreHome,x.ScoreAway)))
                .ForMember(x => x.PhotoUrl, src => src.MapFrom(x => x.PhotoUrl))
                .ForMember(x => x.ReportUrl, src => src.MapFrom(x => x.ReportUrl))
                .ForMember(x => x.VideoUrl, src => src.MapFrom(x => x.VideoUrl));
        }

        //private static int GetScores(Match match, bool scoreHome) //todo duplicate at matchService
        //{
        //    if (string.IsNullOrWhiteSpace(scoreHome) || string.IsNullOrWhiteSpace(scoreAway))
        //    {
        //        return null;
        //    }
        //    return $"{scoreHome}-{scoreAway}";
        //}
    }
}
