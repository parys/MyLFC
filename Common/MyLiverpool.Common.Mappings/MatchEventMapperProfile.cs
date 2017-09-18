using AutoMapper;
using MyLiverpool.Business.Dto;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Common.Mappings
{
    public class MatchEventMapperProfile: Profile
    {
        public MatchEventMapperProfile()
        {
            Map();
        }

        private void Map()
        {
            CreateMap<MatchEvent, MatchEventDto>()
                .ForMember(dest => dest.PersonName, src => src.MapFrom(x => x.Person.RussianName))
                .ForMember(dest => dest.SeasonName, src => src.MapFrom(x => x.Season.StartSeasonYear));

            CreateMap<MatchEventDto, MatchEvent>();
        }
    }
}
