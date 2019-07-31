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

            CreateMap<Person, GetPersonBirthdaysQuery.PersonBirthdayDto>();

            CreateMap<Person, GetBestPlayerQuery.Response>();

            CreateMap<Person, GetPersonDetailQuery.Response>();

            CreateMap<Person, GetStuffListQuery.StuffPersonDto>();

            CreateMap<Person, GetSquadListQuery.SquadPersonDto>();

            CreateMap<CreatePersonCommand.Request, Person>();

            //todo temporary
            CreateMap<Person, CreatePersonCommand.Response>();

            CreateMap<UpdatePersonCommand.Request, Person>();
        }
    }
}
