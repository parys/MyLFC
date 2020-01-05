using AutoMapper;
using MyLfc.Application.Injuries;
using MyLfc.Domain;

namespace MyLfc.Application.Infrastructure.Profiles
{
    public class InjuryProfile : Profile
    {
        public InjuryProfile()
        {
            CreateMap<CreateInjuryCommand.Request, Injury>();

            CreateMap<UpdateInjuryCommand.Request, Injury>();

            CreateMap<Injury, GetInjuryDetailQuery.Response>()
                .ForMember(dst => dst.PersonName, src => src.MapFrom(x => $"{x.Person.FirstRussianName} {x.Person.LastRussianName}"));

            CreateMap<Injury, GetCurrentInjuryListQuery.InjuryListDto>()
                .ForMember(dest => dest.PersonPhoto, src => src.MapFrom(x => x.Person.Photo))
                .ForMember(dst => dst.PersonName, src => src.MapFrom(x => $"{x.Person.FirstRussianName} {x.Person.LastRussianName}" ));

            CreateMap<Injury, GetInjuryListQuery.InjuryListDto>().ForMember(dest => dest.PersonPhoto, src => src.MapFrom(x => x.Person.Photo))
                .ForMember(dst => dst.PersonName, src => src.MapFrom(x => $"{x.Person.FirstRussianName} {x.Person.LastRussianName}"));
        }
    }
}
