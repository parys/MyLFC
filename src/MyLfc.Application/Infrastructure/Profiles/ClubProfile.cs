using AutoMapper;
using MyLfc.Application.Clubs;
using MyLfc.Domain;

namespace MyLfc.Application.Infrastructure.Profiles
{
    public class ClubProfile : Profile
    {
        public ClubProfile()
        {
            CreateMap<CreateClubCommand.Request, Club>();

            CreateMap<UpdateClubCommand.Request, Club>();

            CreateMap<Club, GetClubDetailQuery.Response>()
                .ForMember(dest => dest.StadiumName, src => src.MapFrom(c => c.Stadium.Name));
            
            CreateMap<Club, GetClubListQuery.ClubListDto>();
        }
    }
}
