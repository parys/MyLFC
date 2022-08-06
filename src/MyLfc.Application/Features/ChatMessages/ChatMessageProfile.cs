using AutoMapper;
using MyLfc.Application.Features.ChatMessages.Commands;
using MyLfc.Application.Features.ChatMessages.Queries;
using MyLfc.Domain;

namespace MyLfc.Application.Features.ChatMessages;

public class ChatMessageProfile : Profile
{
    public ChatMessageProfile()
    {
        CreateMap<ChatMessage, GetChatMessageListQuery.ChatMessageListDto>()
            .ForMember(dest => dest.UserName, src => src.MapFrom(x => x.Author.UserName));

        CreateMap<CreateChatMessageCommand.Request, ChatMessage>()
            .ForMember(dest => dest.Message, src => src.MapFrom(x => x.Message.Trim()))
            ;
    }
}
