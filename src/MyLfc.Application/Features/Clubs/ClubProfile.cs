using AutoMapper;
using MyLfc.Application.Features.Clubs.Commands;
using MyLfc.Application.Features.Clubs.Queries;
using MyLfc.Domain;

namespace MyLfc.Application.Features.Clubs;

public class ClubProfile : Profile
{
    public ClubProfile()
    {
        CreateMap<CreateClubCommandRequest, Club>()
            .ForMember(dest => dest.Name, src => src.MapFrom(x => x.Name.Trim()))
            .ForMember(dest => dest.EnglishName, src => src.MapFrom(x => x.EnglishName.Trim()))
            ;
        

        CreateMap<UpdateClubCommandRequest, Club>()
            .ForMember(dest => dest.Name, src => src.MapFrom(x => x.Name.Trim()))
            .ForMember(dest => dest.EnglishName, src => src.MapFrom(x => x.EnglishName.Trim()))
            ;

        CreateMap<Club, GetClubDetailQuery.Response>()
            .ForMember(dest => dest.StadiumName, src => src.MapFrom(c => c.Stadium.Name));

        CreateMap<Club, GetClubListQuery.ClubListDto>();
    }
}
