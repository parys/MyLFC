using AutoMapper;
using MyLiverpool.Business.DTO;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Common.MapperConfigs
{
    public class ClubMapperProfile : Profile
    {
        public ClubMapperProfile()
        {
            RegisterClubMap();
        }

        private void RegisterClubMap()
        {
            CreateMap<Club, ClubDto>();

            CreateMap<ClubDto, Club>();
        }
    }
}
