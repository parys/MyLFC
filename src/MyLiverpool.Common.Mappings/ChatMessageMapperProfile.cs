using AutoMapper;
using MyLfc.Domain;
using MyLiverpool.Business.Dto;

namespace MyLiverpool.Common.Mappings
{
    public class ChatMessageMapperProfile : Profile
    {
        public ChatMessageMapperProfile()
        {
            RegisterChatMessageMap();
        }

        private void RegisterChatMessageMap()
        {
            CreateMap<ChatMessage, ChatMessageDto>()
                .ForMember(dest => dest.UserName, src => src.MapFrom(x => x.Author.UserName));
            
            CreateMap<ChatMessageDto, ChatMessage>();
        }
    }
}
