using AutoMapper;
using MyLiverpool.Business.Dto;
using MyLiverpool.Data.Entities;

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
                .ForMember(dest => dest.PersonName, src => src.MapFrom(x => x.Person.RussianName));

            CreateMap<InjuryDto, Injury>();
        }
    }
}
