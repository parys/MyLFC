using AutoMapper;
using MyLfc.Application.Seasons;
using MyLfc.Domain;

namespace MyLfc.Application.Infrastructure.Profiles
{
    public class SeasonProfile : Profile
    {
        public SeasonProfile()
        {
            CreateMap<CreateSeasonCommand.Request, Season>();

            CreateMap<UpdateSeasonCommand.Request, Season>();

            CreateMap<Season, GetSeasonListQuery.SeasonListDto>();

            CreateMap<Season, GetSeasonDetailQuery.Response>();

            CreateMap<Season, GetSeasonCalendarQuery.Response>();

            CreateMap<Match, GetSeasonCalendarQuery.MatchCalendarDto>();
        }
    }
}
