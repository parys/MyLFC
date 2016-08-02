using AutoMapper;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Common.Utilities.Extensions;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpool.Common.MapperConfigurations.Profiles
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
                .ForMember(x => x.TypeName, src => src.MapFrom(x => x.MatchType.GetNameAttribute()));

            CreateMap<MatchDto, Match>()
                .ForMember(x => x.ClubId, src => src.MapFrom(x => x.ClubId))
                .ForMember(x => x.DateTime, src => src.MapFrom(x => x.DateTime))
                .ForMember(x => x.Id, src => src.MapFrom(x => x.Id))
                .ForMember(x => x.IsHome, src => src.MapFrom(x => x.IsHome))
                .ForMember(x => x.MatchType, src => src.MapFrom(x => x.TypeId));
        }
    }
}
