using AutoMapper;
using MyLfc.Application.Matches;
using MyLfc.Application.MatchEvents;
using MyLfc.Domain;
using MyLfc.Common.Utilities.Extensions;

namespace MyLfc.Application.Infrastructure.Profiles
{
    public class MatchEventProfile : Profile
    {
        public MatchEventProfile()
        {
            CreateMap<CreateMatchEventCommand.Request, MatchEvent>();

            CreateMap<UpdateMatchEventCommand.Request, MatchEvent>();

            CreateMap<MatchEvent, GetMatchEventListQuery.MatchEventListDto>()
                .ForMember(dest => dest.PersonName,
                    src => src.MapFrom(x =>
                        x.Person.Nickname ?? $"{x.Person.FirstRussianName} {x.Person.LastRussianName}"))
                .ForMember(dest => dest.TypeName, 
                    src => src.MapFrom(x => x.Type.GetNameAttribute()))
                .ForMember(dest => dest.SeasonName, 
                    src => src.MapFrom(x => x.Season.StartSeasonYear))
                ;


            CreateMap<MatchEvent, UpsertMatchEventCommand.Response>()
                .ForMember(dest => dest.PersonName, src => src.MapFrom(x => x.Person.Nickname ?? $"{x.Person.FirstRussianName} {x.Person.LastRussianName}"))

                .ForMember(dest => dest.TypeName, src => src.MapFrom(x => x.Type.GetNameAttribute()))
                    ;
            //CreateMap<MatchEvent, UpsertMatchEventCommand.Response>()
            //    .ForMember(dest => dest.PersonName, src => src.MapFrom(x => x.Person.Nickname ?? $"{x.Person.FirstRussianName} {x.Person.LastRussianName}"))

            //    .ForMember(dest => dest.TypeName, src => src.MapFrom(x => x.Type.GetNameAttribute()))
            //    ;
        }
    }
}
