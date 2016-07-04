using AutoMapper;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpool.Common.MapperConfigurations.Profiles
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
                .ForMember(dest => dest.TypeName, src => src.MapFrom(x => x.Type.ToString()));

            CreateMap<WishDto, Wish>()
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
                .ForMember(dest => dest.Message, src => src.MapFrom(x => x.Message))
                .ForMember(dest => dest.Title, src => src.MapFrom(x => x.Title))
                .ForMember(dest => dest.Type, src => src.MapFrom(x => x.Type));
        }
    }
}
