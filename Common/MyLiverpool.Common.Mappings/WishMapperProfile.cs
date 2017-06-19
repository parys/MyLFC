using AutoMapper;
using MyLiverpool.Business.Dto;
using MyLiverpool.Common.Utilities;
using MyLiverpool.Common.Utilities.Extensions;
using MyLiverpool.Data.Entities;

namespace MyLiverpool.Common.Mappings
{
    public class WishMapperProfile : Profile
    {
        public WishMapperProfile()
        {
            RegisterWishMapping();
        }
        
        private void RegisterWishMapping()
        {
            CreateMap<Wish, WishDto>()
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
                .ForMember(dest => dest.Message, src => src.MapFrom(x => x.Message))
                .ForMember(dest => dest.Title, src => src.MapFrom(x => x.Title))
                .ForMember(dest => dest.Type, src => src.MapFrom(x => x.Type))
                .ForMember(dest => dest.TypeName, src => src.MapFrom(x => x.Type.GetNameAttribute()))
                .ForMember(dest => dest.State, src => src.MapFrom(x => x.State))
                .ForMember(dest => dest.StateName, src => src.MapFrom(x => x.State.GetNameAttribute()));

            CreateMap<WishDto, Wish>()
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
                .ForMember(dest => dest.Message, src => src.MapFrom(x => x.Message))
                .ForMember(dest => dest.Title, src => src.MapFrom(x => x.Title))
                .ForMember(dest => dest.Type, src => src.MapFrom(x => x.Type))
                .ForMember(dest => dest.State, src => src.MapFrom(x => x.State));
        }
    }
}
