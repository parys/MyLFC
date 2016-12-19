using AutoMapper;
using MyLiverpool.Business.DtoNext;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Common.Mappings
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
