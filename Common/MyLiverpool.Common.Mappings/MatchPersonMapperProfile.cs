using AutoMapper;
using MyLiverpool.Business.Dto;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Common.Mappings
{
    public class MatchPersonMapperProfile : Profile
    {
        public MatchPersonMapperProfile()
        {
            Map();
        }

        private void Map()
        {
            CreateMap<MatchPerson, MatchPersonDto>()
                .ForMember(x => x.Number, src => src.MapFrom(x => x.Person.Number));
            CreateMap<MatchPersonDto, MatchPerson>();
        }
    }
}
