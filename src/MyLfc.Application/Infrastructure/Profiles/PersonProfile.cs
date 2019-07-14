using AutoMapper;
using MyLfc.Application.Persons;
using MyLfc.Domain;

namespace MyLfc.Application.Infrastructure.Profiles
{
    public class PersonProfile : Profile
    {
        public PersonProfile()
        {
            CreateMap<Person, GetPersonListQuery.PersonListDto>()
                .ForMember(dest => dest.TypeName, src => src.MapFrom(x => x.Type.ToString()));

        }
    }
}
