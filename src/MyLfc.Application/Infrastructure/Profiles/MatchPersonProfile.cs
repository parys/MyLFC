using AutoMapper;
using MyLfc.Application.Matches.Queries;
using MyLfc.Application.MatchPersons;
using MyLfc.Domain;

namespace MyLfc.Application.Infrastructure.Profiles
{
    public class MatchPersonProfile : Profile
    {
        public MatchPersonProfile()
        {
            CreateMap<UpdateMatchPersonCommand.Request, MatchPerson>();

            CreateMap<MatchPerson, GetMatchPersonListQuery.MatchPersonListDto>()
                .ForMember(dest => dest.PersonName, src => src.MapFrom(x => string.IsNullOrWhiteSpace(x.Person.Nickname) ? $"{x.Person.FirstRussianName} {x.Person.LastRussianName}" : x.Person.Nickname))
                .ForMember(dest => dest.PersonId, src => src.MapFrom(x => x.Person.Id))
                .ForMember(dest => dest.Number, src => src.MapFrom(x => x.Number ?? x.Person.Number));
        }
    }
}
