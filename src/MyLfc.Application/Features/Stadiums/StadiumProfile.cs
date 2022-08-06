using AutoMapper;
using MyLfc.Application.Features.Stadiums.Commands;
using MyLfc.Application.Features.Stadiums.Queries;
using MyLfc.Domain;

namespace MyLfc.Application.Features.Stadiums;

public class StadiumProfile : Profile
{
    public StadiumProfile()
    {
        CreateMap<CreateStadiumCommand.Request, Stadium>()
            .ForMember(dest => dest.Name, src => src.MapFrom(x => x.Name.Trim()))
            .ForMember(dest => dest.City, src => src.MapFrom(x => x.City.Trim()))
            ;

        CreateMap<UpdateStadiumCommand.Request, Stadium>()
            .ForMember(dest => dest.Name, src => src.MapFrom(x => x.Name.Trim()))
            .ForMember(dest => dest.City, src => src.MapFrom(x => x.City.Trim()))
            ;

        CreateMap<Stadium, GetStadiumListQuery.StadiumListDto>();

        CreateMap<Stadium, GetStadiumDetailQuery.Response>();
    }
}
