using AutoMapper;
using MyLfc.Application.ChatMessages;
using MyLfc.Domain;

namespace MyLfc.Application.Infrastructure.Profiles
{
    public class ChatMessageProfile : Profile
    {
        public ChatMessageProfile()
        {
            CreateMap<ChatMessage, GetChatMessageListQuery.ChatMessageListDto>()
                .ForMember(dest => dest.UserName, src => src.MapFrom(x => x.Author.UserName));

            CreateMap<CreateChatMessageCommand.Request, ChatMessage>()
                .ForMember(dest => dest.Message, src => src.MapFrom(x => x.Message.Trim()))
                ;

            CreateMap<ChatMessage, GetChatMessageDetailQuery.Response>()
                .ForMember(dest => dest.UserName, src => src.MapFrom(x => x.Author.UserName));
        }
    }
}
