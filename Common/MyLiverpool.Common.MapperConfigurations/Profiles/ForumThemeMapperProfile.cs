using AutoMapper;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpool.Common.MapperConfigurations.Profiles
{
    public class ForumThemeMapperProfile : Profile
    {
        public ForumThemeMapperProfile()
        {
            RegisterForumThemeMapping();
        }
        
        private void RegisterForumThemeMapping()
        {
            CreateMap<ForumTheme, ForumThemeMiniDto>()
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
                .ForMember(dest => dest.Name, src => src.MapFrom(x => x.Name))
                .ForMember(dest => dest.Description, src => src.MapFrom(x => x.Description));

            CreateMap<ForumTheme, ForumThemeDto>()
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
                .ForMember(dest => dest.Name, src => src.MapFrom(x => x.Name))
                .ForMember(dest => dest.Description, src => src.MapFrom(x => x.Description))
                .ForMember(dest => dest.SubsectionId, src => src.MapFrom(x => x.SubsectionId))
                .ForMember(dest => dest.Messages, src => src.Ignore());

            CreateMap<ForumThemeDto, ForumTheme>()
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
                .ForMember(dest => dest.Name, src => src.MapFrom(x => x.Name))
                .ForMember(dest => dest.Description, src => src.MapFrom(x => x.Description))
                .ForMember(dest => dest.SubsectionId, src => src.MapFrom(x => x.SubsectionId))
                .ForMember(dest => dest.AuthorId, src => src.MapFrom(x => x.AuthorId))
                .ForMember(dest => dest.Messages, src => src.Ignore());
        }
    }
}
