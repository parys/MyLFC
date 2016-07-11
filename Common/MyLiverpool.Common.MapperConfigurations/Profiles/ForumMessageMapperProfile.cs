using AutoMapper;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpool.Common.MapperConfigurations.Profiles
{
    public class ForumMessageMapperProfile : Profile
    {
        public ForumMessageMapperProfile()
        {
            RegisterForumMessageMapping();
        }
        
        private void RegisterForumMessageMapping()
        {
            CreateMap<ForumMessage, ForumMessageDto>()
                .ForMember(dest => dest.AdditionTime, src => src.MapFrom(x => x.AdditionTime))
                .ForMember(dest => dest.AuthorId, src => src.MapFrom(x => x.AuthorId))
                .ForMember(dest => dest.AuthorUserName, src => src.MapFrom(x => x.Author.UserName))
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
                .ForMember(dest => dest.LastModifiedTime, src => src.MapFrom(x => x.LastModifiedTime))
                .ForMember(dest => dest.Message, src => src.MapFrom(x => x.Message))
                .ForMember(dest => dest.ThemeId, src => src.MapFrom(x => x.ThemeId));
            //.ForMember(dest => dest.SenderUserName, src => src.MapFrom(x => x.Sender.UserName))
            //.ForMember(dest => dest.Title, src => src.MapFrom(x => x.Title));


            CreateMap<ForumMessageDto, ForumMessage>()
                .ForMember(dest => dest.AuthorId, src => src.MapFrom(x => x.AuthorId))
                .ForMember(dest => dest.Id, src => src.MapFrom(x => x.Id))
                .ForMember(dest => dest.Message, src => src.MapFrom(x => x.Message))
                .ForMember(dest => dest.ThemeId, src => src.MapFrom(x => x.ThemeId));
        }
    }
}
