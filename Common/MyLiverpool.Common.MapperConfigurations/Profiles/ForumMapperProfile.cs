using AutoMapper;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpool.Common.MapperConfigurations.Profiles
{
    public class ForumMapperProfile : Profile
    {
        private readonly IMapperConfiguration _cfg;

        public ForumMapperProfile(IMapperConfiguration cfg)
        {
            _cfg = cfg;
        }

        protected override void Configure()
        {
            RegisterForumMessageMapping();
            RegisterForumThemeMapping();
            RegisterForumSubsectionMapping();
            RegisterForumSectionMapping();
        }



        private void RegisterForumMessageMapping()
        {
            _cfg.CreateMap<ForumMessage, ForumMessageDto>()
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
                .ForMember(dest => dest.AuthorId, src => src.MapFrom(x => x.AuthorId))
                .ForMember(dest => dest.AuthorUserName, src => src.MapFrom(x => x.Author.UserName))
                .ForMember(dest => dest.Message, src => src.MapFrom(x => x.Message));
            //.ForMember(dest => dest.SenderId, src => src.MapFrom(x => x.SenderId))
            //.ForMember(dest => dest.SenderUserName, src => src.MapFrom(x => x.Sender.UserName))
            //.ForMember(dest => dest.Title, src => src.MapFrom(x => x.Title));
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
                .ForMember(dest => dest.Messages, src => src.Ignore());
        }

        private void RegisterForumSubsectionMapping()
        {
            _cfg.CreateMap<ForumSubsection, ForumSubsectionMiniDto>()
               .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
               .ForMember(dest => dest.Name, src => src.MapFrom(x => x.Name))
               .ForMember(dest => dest.Description, src => src.MapFrom(x => x.Description));

            _cfg.CreateMap<ForumSubsection, ForumSubsectionDto>()
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
                .ForMember(dest => dest.Name, src => src.MapFrom(x => x.Name))
                .ForMember(dest => dest.Description, src => src.MapFrom(x => x.Description))
                .ForMember(dest => dest.Themes, src => src.Ignore());

            _cfg.CreateMap<ForumSubsectionDto, ForumSubsection>()
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
                .ForMember(dest => dest.Name, src => src.MapFrom(x => x.Name))
                .ForMember(dest => dest.Description, src => src.MapFrom(x => x.Description))
                .ForMember(dest => dest.Themes, src => src.Ignore());
        }

        private void RegisterForumSectionMapping()
        {
            _cfg.CreateMap<ForumSection, ForumSectionDto>()
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
                .ForMember(dest => dest.Name, src => src.MapFrom(x => x.Name))
                .ForMember(dest => dest.Subsections, src => src.MapFrom(x => x.Subsections));  

            _cfg.CreateMap<ForumSectionDto, ForumSection>()
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
                .ForMember(dest => dest.Name, src => src.MapFrom(x => x.Name));
        }
    }
}
