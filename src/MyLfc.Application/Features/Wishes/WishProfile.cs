using AutoMapper;
using MyLfc.Domain;
using MyLfc.Common.Utilities.Extensions;
using MyLfc.Application.Features.Wishes.Commands;
using MyLfc.Application.Features.Wishes.Queries;

namespace MyLfc.Application.Features.Wishes;

public class WishProfile : Profile
{
    public WishProfile()
    {
        CreateMap<CreateWishCommand.Request, Wish>()
            .ForMember(dest => dest.Title, src => src.MapFrom(x => x.Title.Trim()))
            .ForMember(dest => dest.Message, src => src.MapFrom(x => x.Message.Trim()))
            ;

        CreateMap<UpdateWishCommand.Request, Wish>()
            .ForMember(dest => dest.Title, src => src.MapFrom(x => x.Title.Trim()))
            .ForMember(dest => dest.Message, src => src.MapFrom(x => x.Message.Trim()))
            ;


        CreateMap<Wish, GetWishDetailQuery.Response>()
            .ForMember(dest => dest.TypeName, src => src.MapFrom(x => x.Type.GetNameAttribute()))
            .ForMember(dest => dest.StateName, src => src.MapFrom(x => x.State.GetNameAttribute()));
        ;

        CreateMap<Wish, GetWishListQuery.WishListDto>()
            .ForMember(dest => dest.TypeName, src => src.MapFrom(x => x.Type.GetNameAttribute()))
            .ForMember(dest => dest.StateName, src => src.MapFrom(x => x.State.GetNameAttribute()));
    }
}
