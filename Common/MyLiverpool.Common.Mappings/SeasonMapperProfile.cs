using AutoMapper;
using MyLiverpool.Business.DtoNext;
using MyLiverpool.Data.Entities;

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
        }
    }
}
