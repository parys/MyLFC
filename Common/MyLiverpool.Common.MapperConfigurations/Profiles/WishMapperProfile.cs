using AutoMapper;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpool.Common.MapperConfigurations.Profiles
{
    public class WishMapperProfile : Profile
    {
        private readonly IMapperConfiguration _cfg;

        public WishMapperProfile(IMapperConfiguration cfg)
        {
            _cfg = cfg;
        }

        protected override void Configure()
        {
            RegisterWishMapping();
        }

        private void RegisterWishMapping()
        {
            _cfg.CreateMap<Wish, WishDto>()
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
                .ForMember(dest => dest.Message, src => src.MapFrom(x => x.Message))
                .ForMember(dest => dest.Title, src => src.MapFrom(x => x.Title))
                .ForMember(dest => dest.Type, src => src.MapFrom(x => x.Type))
                .ForMember(dest => dest.TypeName, src => src.MapFrom(x => x.Type.ToString()));

            _cfg.CreateMap<WishDto, Wish>()
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
                .ForMember(dest => dest.Message, src => src.MapFrom(x => x.Message))
                .ForMember(dest => dest.Title, src => src.MapFrom(x => x.Title))
                .ForMember(dest => dest.Type, src => src.MapFrom(x => x.Type));
        }
    }
}
