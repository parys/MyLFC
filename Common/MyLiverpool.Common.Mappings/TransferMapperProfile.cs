using AutoMapper;
using MyLiverpool.Business.Dto;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Common.Mappings
{
    public class TransferMapperProfile : Profile
    {
        public TransferMapperProfile()
        {
            Map();
        }

        private void Map()
        {
            CreateMap<Transfer, TransferDto>()
                .ForMember(dst => dst.ClubName, src => src.MapFrom(x => x.Club.Name))
                .ForMember(dst => dst.ClubLogo, src => src.MapFrom(x => x.Club.Logo))
                .ForMember(dst => dst.SeasonName, src => src.MapFrom(x => x.Season.StartSeasonYear.ToString()))
                .ForMember(dst => dst.PersonName, src => src.MapFrom(x => x.Person.RussianName))
                ;

            CreateMap<TransferDto, Transfer>();
        }
    }
}
