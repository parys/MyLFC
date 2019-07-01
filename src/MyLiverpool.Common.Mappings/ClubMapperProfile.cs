using AutoMapper;
using MyLfc.Domain;
using MyLiverpool.Business.Dto;

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
            CreateMap<Club, ClubDto>()
                .ForMember(dest => dest.StadiumName, src => src.MapFrom(c => c.Stadium.Name));

            CreateMap<ClubDto, Club>();
        }
    }
}
