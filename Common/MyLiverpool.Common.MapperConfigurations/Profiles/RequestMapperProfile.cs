using AutoMapper;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpool.Common.MapperConfigurations.Profiles
{
    public class RequestMapperProfile : Profile
    {
        private readonly IMapperConfiguration _cfg;

        public RequestMapperProfile(IMapperConfiguration cfg)
        {
            _cfg = cfg;
        }

        protected override void Configure()
        {
            RegisterRequestMapping();
        }

        private void RegisterRequestMapping()
        {
            _cfg.CreateMap<Wish, WishDto>()
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
                .ForMember(dest => dest.Message, src => src.MapFrom(x => x.Message))
                .ForMember(dest => dest.Title, src => src.MapFrom(x => x.Title))
                .ForMember(dest => dest.Type, src => src.MapFrom(x => x.Type.ToString()));
        }
    }
}
