using AutoMapper;
using MyLfc.Application.Stadiums;
using MyLfc.Domain;

namespace MyLfc.Application.Infrastructure.Profiles
{
    public class StadiumProfile : Profile
    {
        public StadiumProfile()
        {
            CreateMap<CreateStadiumCommand.Request, Stadium>();

            CreateMap<UpdateStadiumCommand.Request, Stadium>();

            CreateMap<Stadium, GetStadiumListQuery.StadiumListDto>();

            CreateMap<Stadium, GetStadiumDetailQuery.Response>();
        }
    }
}
