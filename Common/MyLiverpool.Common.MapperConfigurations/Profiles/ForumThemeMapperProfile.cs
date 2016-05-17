using AutoMapper;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpool.Common.MapperConfigurations.Profiles
{
    public class ForumThemeMapperProfile : Profile
    {
        private readonly IMapperConfiguration _cfg;

        public ForumThemeMapperProfile(IMapperConfiguration cfg)
        {
            _cfg = cfg;
        }

        protected override void Configure()
        {
            RegisterForumThemeMapping();
        }

        private void RegisterForumThemeMapping()
        {
            _cfg.CreateMap<ForumTheme, ForumThemeMiniDto>()
               .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
               .ForMember(dest => dest.Name, src => src.MapFrom(x => x.Name))
               .ForMember(dest => dest.Description, src => src.MapFrom(x => x.Description));

            _cfg.CreateMap<ForumTheme, ForumThemeDto>()
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
                .ForMember(dest => dest.Name, src => src.MapFrom(x => x.Name))
                .ForMember(dest => dest.Description, src => src.MapFrom(x => x.Description))
                .ForMember(dest => dest.SubsectionId, src => src.MapFrom(x => x.SubsectionId))
                .ForMember(dest => dest.Messages, src => src.Ignore());
        }
    }
}
