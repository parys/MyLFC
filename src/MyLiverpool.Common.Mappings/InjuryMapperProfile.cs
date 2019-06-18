using AutoMapper;
using MyLfc.Domain;
using MyLiverpool.Business.Dto;

namespace MyLiverpool.Common.Mappings
{
    public class InjuryMapperProfile : Profile
    {
        public InjuryMapperProfile()
        {
            Map();
        }

        private void Map()
        {
            CreateMap<Injury, InjuryDto>()
                .ForMember(dest => dest.PersonName, src => src.MapFrom(x => x.Person.RussianName))
                .ForMember(dest => dest.PersonPhoto, src => src.MapFrom(x => x.Person.Photo));

            CreateMap<InjuryDto, Injury>();
        }
    }
}
