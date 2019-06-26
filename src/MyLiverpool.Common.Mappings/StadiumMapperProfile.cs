using AutoMapper;
using MyLiverpool.Business.Dto;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Common.Mappings
{
    public class StadiumMapperProfile : Profile
    {
        public StadiumMapperProfile()
        {
            Map();
        }

        private void Map()
        {
            CreateMap<Stadium, StadiumDto>();
            CreateMap<StadiumDto, Stadium>();
        }
    }
}
