using AutoMapper;
using MyLfc.Domain;
using MyLiverpool.Business.Dto.Seasons;

namespace MyLiverpool.Common.Mappings
{
    public class SeasonMapperProfile : Profile
    {
        public SeasonMapperProfile()
        {
            Map();
        }

        private void Map()
        {
            CreateMap<Season, SeasonDto>();
            CreateMap<SeasonDto, Season>();
            CreateMap<Season, SeasonCalendarDto>();
        }
    }
}
