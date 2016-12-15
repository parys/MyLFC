using AutoMapper;
using MyLiverpool.Business.DtoNext;
using MyLiverpool.Data.Entities;

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
            CreateMap<ChatMessage, ChatMessageDto>();

            CreateMap<ChatMessageDto, ChatMessage>();
        }
    }
}
