using AutoMapper;
using MyLfc.Application.Transfers;
using MyLfc.Domain;

namespace MyLfc.Application.Infrastructure.Profiles;

public class TransferProfile : Profile
{
    public TransferProfile()
    {
        CreateMap<CreateTransferCommand.Request, Transfer>();

        CreateMap<UpdateTransferCommand.Request, Transfer>();

        CreateMap<Transfer, GetTransferDetailQuery.Response>()
            .ForMember(dst => dst.ClubName, src => src.MapFrom(x => x.Club.Name))
            .ForMember(dst => dst.ClubLogo, src => src.MapFrom(x => x.Club.Logo))
            .ForMember(dst => dst.SeasonName, src => src.MapFrom(x => x.Season.StartSeasonYear.ToString()))
            .ForMember(dst => dst.PersonName, src => src.MapFrom(x => x.Person.RussianName));

        CreateMap<Transfer, GetCurrentTransferListQuery.TransferListDto>()
            .ForMember(dst => dst.ClubName, src => src.MapFrom(x => x.Club.Name))
            .ForMember(dst => dst.ClubLogo, src => src.MapFrom(x => x.Club.Logo))
            .ForMember(dst => dst.PersonName, src => src.MapFrom(x => x.Person.RussianName));

        CreateMap<Transfer, GetTransferListQuery.TransferListDto>()
            .ForMember(dst => dst.ClubName, src => src.MapFrom(x => x.Club.Name))
            .ForMember(dst => dst.ClubLogo, src => src.MapFrom(x => x.Club.Logo))
            .ForMember(dst => dst.PersonName, src => src.MapFrom(x => x.Person.RussianName));
    }
}
