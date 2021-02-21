using AutoMapper;
using MyLfc.Application.Clubs;
using MyLfc.Domain;

namespace MyLfc.Application.Infrastructure.Profiles
{
    public class ClubProfile : Profile
    {
        public ClubProfile()
        {
            CreateMap<CreateClubCommand.Request, Club>()
                .ForMember(dest => dest.Name, src => src.MapFrom(x => x.Name.Trim()))
                .ForMember(dest => dest.EnglishName, src => src.MapFrom(x => x.EnglishName.Trim()))
                ;
            ;

            CreateMap<UpdateClubCommand.Request, Club>()
                .ForMember(dest => dest.Name, src => src.MapFrom(x => x.Name.Trim()))
                .ForMember(dest => dest.EnglishName, src => src.MapFrom(x => x.EnglishName.Trim()))
                ;

            CreateMap<Club, GetClubDetailQuery.Response>()
                .ForMember(dest => dest.StadiumName, src => src.MapFrom(c => c.Stadium.Name));
            
            CreateMap<Club, GetClubListQuery.ClubListDto>();
        }
    }
}
