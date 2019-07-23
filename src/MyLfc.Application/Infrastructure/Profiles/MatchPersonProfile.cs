using AutoMapper;
using MyLfc.Application.MatchPersons;
using MyLfc.Domain;

namespace MyLfc.Application.Infrastructure.Profiles
{
    public class MatchPersonProfile : Profile
    {
        public MatchPersonProfile()
        {
            CreateMap<UpdateMatchPersonCommand.Request, MatchPerson>();
        }
    }
}
