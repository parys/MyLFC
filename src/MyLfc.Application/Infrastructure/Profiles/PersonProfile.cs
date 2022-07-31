using AutoMapper;
using MyLfc.Application.Persons;
using MyLfc.Domain;

namespace MyLfc.Application.Infrastructure.Profiles;

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

        CreateMap<CreatePersonCommand.Request, Person>()
            .ForMember(dest => dest.Country, src => src.MapFrom(x => x.Country.Trim()))
            .ForMember(dest => dest.FirstName, src => src.MapFrom(x => x.FirstName.Trim()))
            .ForMember(dest => dest.LastName, src => src.MapFrom(x => x.LastName.Trim()))
            .ForMember(dest => dest.FirstRussianName, src => src.MapFrom(x => x.FirstRussianName.Trim()))
            .ForMember(dest => dest.LastRussianName, src => src.MapFrom(x => x.LastRussianName.Trim()))
            .ForMember(dest => dest.Position, src => src.MapFrom(x => x.Position.Trim()))
            ;
        

        //todo temporary
        CreateMap<Person, CreatePersonCommand.Response>();

        CreateMap<UpdatePersonCommand.Request, Person>()
            .ForMember(dest => dest.Country, src => src.MapFrom(x => x.Country.Trim()))
            .ForMember(dest => dest.FirstName, src => src.MapFrom(x => x.FirstName.Trim()))
            .ForMember(dest => dest.LastName, src => src.MapFrom(x => x.LastName.Trim()))
            .ForMember(dest => dest.FirstRussianName, src => src.MapFrom(x => x.FirstRussianName.Trim()))
            .ForMember(dest => dest.LastRussianName, src => src.MapFrom(x => x.LastRussianName.Trim()))
            .ForMember(dest => dest.Position, src => src.MapFrom(x => x.Position.Trim()))
            ;
    }
}
