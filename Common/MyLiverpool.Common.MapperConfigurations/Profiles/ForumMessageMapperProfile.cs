using AutoMapper;
using MyLiverpool.Business.DTO;
using MyLiverpoolSite.Data.Entities;

namespace MyLiverpool.Common.MapperConfigurations.Profiles
{
    public class ForumMessageMapperProfile : Profile
    {
        private readonly IMapperConfiguration _cfg;

        public ForumMessageMapperProfile(IMapperConfiguration cfg)
        {
            _cfg = cfg;
        }

        protected override void Configure()
        {
            RegisterForumMessageMapping();
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
    }
}
