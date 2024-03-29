﻿using AutoMapper;
using MyLfc.Application.Injuries.Commands;
using MyLfc.Application.Injuries.Queries;
using MyLfc.Domain;

namespace MyLfc.Application.Injuries;

public class InjuryProfile : Profile
{
    public InjuryProfile()
    {
        CreateMap<CreateInjuryCommand.Request, Injury>()
            .ForMember(dest => dest.Description, src => src.MapFrom(x => x.Description.Trim()))
            ;

        CreateMap<UpdateInjuryCommand.Request, Injury>()
            .ForMember(dest => dest.Description, src => src.MapFrom(x => x.Description.Trim()))
            ;


        CreateMap<Injury, GetInjuryDetailQuery.Response>()
            .ForMember(dst => dst.PersonName, src => src.MapFrom(x => $"{x.Person.FirstRussianName} {x.Person.LastRussianName}"));

        CreateMap<Injury, GetCurrentInjuryListQuery.InjuryListDto>()
            .ForMember(dest => dest.PersonPhoto, src => src.MapFrom(x => x.Person.Photo))
            .ForMember(dst => dst.PersonName, src => src.MapFrom(x => string.IsNullOrWhiteSpace(x.Person.Nickname) ? $"{x.Person.FirstRussianName} {x.Person.LastRussianName}" : x.Person.Nickname));

        CreateMap<Injury, GetInjuryListQuery.InjuryListDto>().ForMember(dest => dest.PersonPhoto, src => src.MapFrom(x => x.Person.Photo))
            .ForMember(dst => dst.PersonName, src => src.MapFrom(x => string.IsNullOrWhiteSpace(x.Person.Nickname) ? $"{x.Person.FirstRussianName} {x.Person.LastRussianName}" : x.Person.Nickname));
    }
}
