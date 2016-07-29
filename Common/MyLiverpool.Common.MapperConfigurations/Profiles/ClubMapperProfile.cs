using AutoMapper;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpool.Common.MapperConfigurations.Profiles
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
